# Creating a Web Application with Python FastAPI, React (Vite), Docker, PostgreSQL, and pgAdmin

This guide outlines the steps to set up a web application with a Python FastAPI backend, a React frontend using Vite for rapid development, and Docker for easy deployment and environment management. We will also use PostgreSQL as our database and pgAdmin for database management.

## Overview

The application architecture includes:

- A **FastAPI backend** with a single endpoint returning a "Hello World" message.
- A **React frontend** created with Vite for an optimized development experience.
- **Docker** for containerizing and running the FastAPI and React applications, alongside PostgreSQL and pgAdmin.

## Backend Setup with FastAPI

Our FastAPI backend will feature a single endpoint that delivers a JSON response.

### Setting Up FastAPI

1. Create a `main.py` file for your FastAPI application.
2. Set up a virtual environment `python -m venv venv`.
3. Activate virtual environment `venv\Scripts\activate`.
4. Install FastAPI and Uvicorn with `pip install fastapi uvicorn`.
5. Start the development server using Uvicorn `uvicorn main:app --reload`.

## Frontend Setup with React and Vite

We'll use React and Vite for a streamlined frontend development process.

### Setting Up React with Vite

1. Create a new React project with Vite using `npm create vite@latest PROJECT_NAME`.
2. Navigate to your project directory with `cd PROJECT_NAME`.
3. Install dependencies with `npm install`.
4. Start the development server with `npm run dev`.

## Dockerization

Docker will containerize our applications, PostgreSQL, and pgAdmin for consistency across environments.

### Dockerizing FastAPI

In the FastAPI project root, create a `Dockerfile` with:

```Dockerfile
FROM python:3.12-slim

WORKDIR /backend

COPY ./requirements.txt /backend
RUN pip install --no-cache-dir --upgrade -r requirements.txt

COPY ./src /backend/src

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
```

### Dockerizing React with Vite

Create a `Dockerfile` in the React project root:

```
FROM node:20-alpine

WORKDIR /frontend

COPY package*.json .
RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]
```

Modify vite.config.ts for a fixed port:

```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
    port: 5173
  }
})
```

## Docker Compose Integration

Use docker-compose.yml at the project root to define services for FastAPI, React, PostgreSQL, and pgAdmin:

```
version: "3.9"

services:
  # FastAPI Application
  fastapi_app:
    build:
      context: ./backend
      dockerfile: Dockerfile
    container_name: gui-fastapi_app
    ports:
      - "8000:8000"
    volumes:
      - type: bind
        source: ./backend/src
        target: /backend/src
    env_file:
      - .env
    depends_on:
      - postgres_db-application

  # PostgreSQL Database
  postgres_db-application:
    container_name: gui-postgres_db-application
    image: postgres:16.1-alpine
    restart: always
    environment:
      POSTGRES_USER: ${POSTGRES_USER}
      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD}
      POSTGRES_DB: ${POSTGRES_DB}
    volumes:
      - type: volume
        source: postgres_db-application-data_volume
        target: /var/lib/postgresql/data

  # pgAdmin Web Interface
  pgadmin_web:
    container_name: gui-pgadmin_web
    image: dpage/pgadmin4:8.2
    restart: always
    environment:
      PGADMIN_DEFAULT_EMAIL: ${PGADMIN_DEFAULT_EMAIL}
      PGADMIN_DEFAULT_PASSWORD: ${PGADMIN_DEFAULT_PASSWORD}
    ports:
      - "5050:80"
    volumes:
      - type: volume
        source: pgadmin_web-data_volume
        target: /var/lib/pgadmin
    depends_on:
      - postgres_db-application

  # React Frontend Application
  react_app:
    build: ./frontend
    container_name: gui-react_app
    ports:
      - "5173:5173"
    depends_on:
      - fastapi_app
    volumes:
      - type: bind
        source: ./frontend
        target: /frontend
      - type: volume
        source: react_app-node_modules-data_volume
        target: /frontend/node_modules

volumes:
  postgres_db-application-data_volume:
  pgadmin_web-data_volume:
  react_app-node_modules-data_volume:

```

This docker-compose.yml file defines four services: fastapi, react, db (PostgreSQL), and pgadmin. It specifies the build context, port mappings, and environment variables for each service.

## Running the Application

Start your application stack with Docker Compose:

```
docker compose -p "YOUR_CONTAINER_NAME" up
```

This command builds and starts the containers defined in your docker-compose.yml file. Once the containers are up and running, you can access the FastAPI application at http://localhost:8000, the React application at http://localhost:5173, pgAdmin at http://localhost:5050, and connect to your PostgreSQL database using pgAdmin.

# Setting Up Database Connection in FastAPI with PostgreSQL and SQLModel

This guide explains how to connect a FastAPI application to a PostgreSQL database using SQLModel for ORM (Object-Relational Mapping). We'll structure our application into several files for clarity and maintainability.

## Database Configuration

First, create a `database.py` file to set up the database connection and session management. This file utilizes environment variables to configure the database connection string securely.

```
import os
from fastapi import HTTPException
from sqlmodel import Session, create_engine
from sqlalchemy.exc import SQLAlchemyError

POSTGRES_USER = os.getenv("POSTGRES_USER")
POSTGRES_PASSWORD = os.getenv("POSTGRES_PASSWORD")
POSTGRES_DB = os.getenv("POSTGRES_DB")

DATABASE_URL = f"postgresql+psycopg2://{POSTGRES_USER}:{POSTGRES_PASSWORD}@gui-postgres_db-application/{POSTGRES_DB}"

engine = create_engine(DATABASE_URL)


def get_session():
    with Session(engine) as session:
        yield session


def commit_and_handle_exception(session: Session):
    try:
        session.commit()
    except SQLAlchemyError as e:
        raise HTTPException(status_code=500, detail="Database error")


def refresh_and_handle_exception(session: Session, *objects):
    try:
        for obj in objects:
            session.refresh(obj)
    except SQLAlchemyError as e:
        raise HTTPException(status_code=500, detail="Database error")
```

## Model Definitions

Next, define your database models using SQLModel in a `models.py` file. Here's an example with a simple `Test` model.

```
from sqlmodel import Field, SQLModel, BIGINT
from sqlalchemy import Column


class Test(SQLModel, table=True):
    __tablename__ = "test"

    id: int = Field(sa_column=Column(BIGINT, primary_key=True, autoincrement=True))

```

## Database Initialization

Create a `database_init.py` file to check if the database is initialized and to initialize it if necessary.

```
from sqlalchemy.engine import reflection
from database import engine, commit_and_handle_exception
from sqlmodel import SQLModel, Session
from models import Test


def _is_db_initialized():
    inspector = reflection.Inspector.from_engine(engine)
    tables = inspector.get_table_names(schema="public")
    return True if len(tables) > 0 else False


def initialize_database():
    if not _is_db_initialized():
        SQLModel.metadata.create_all(engine)
```

## Application Entry Point

In your FastAPI application's entry point, typically `main.py`, ensure you initialize the database by calling the `initialize_database` function at the start.

```
from fastapi import FastAPI
from database_init import initialize_database

app = FastAPI()

# Ensure the database is initialized
initialize_database()

@app.get("/")
def root():
    return {"message": "Hello World"}
```

By following these steps, your FastAPI application will be configured to connect to a PostgreSQL database using SQLModel for ORM, with a clear and maintainable project structure.

## SQL Alchemy Project Model

We will need a SQLAlchemy model to represent our projects in the application.

### Task: Create a Model for Projects

In the `models.py` file, create a model named `Project` with the following attributes:

- `id` (`bigint`, primary key, auto-increment)
- `name` (`string`)
- `description` (`string`)
- `is_finished` (`boolean` with a default value of `false`)

You can check the created table in **pgAdmin** at http://localhost:5050/. The table column properties should look like this: 

**![project table column properties](imgs/pgadmin.png)**

**Possible Solution**

```python
class Project(SQLModel, table=True):
    __tablename__ = "project"

    id: int = Field(sa_column=Column(BIGINT, primary_key=True, autoincrement=True))
    name: str
    description: str
    is_finished: bool = False
```

## FastAPI and CRUD Operations for Projects
Before we dive into adding functionality to our application, we should adjust its structure. When building a larger application, it's beneficial to organize it into multiple files, and that's exactly what we'll do. We'll divide the architecture of our API into 3 parts:

1. **Routers**: Routers in FastAPI define URL paths and manage the flow of data between clients and the server. Each router contains sets of paths and functions that are called when requests are made to these paths. These functions encapsulate the logic for processing requests and responses. Routers in FastAPI are built on a modular approach, allowing us to organize code into separate modules based on logical functions or entities.
1. **Services**: Services in FastAPI contain application logic and functionalities. These services include methods and functions that perform data processing, communicate with the database, and execute other operations. Services separate the application logic from the router layer, making it easier to manage and test the code.
1. **Schemas** : Schemas in FastAPI define the structure of data transmitted via the API. These schemas are created using the Pydantic library, which provides robust data validation and serialization based on defined types. Schemas describe the inputs and outputs of the API, ensuring consistency and data validity during communication between clients and the server.

To achieve this, we'll create 3 directories: `routers`, `schemas`, `services`.

### Create projects

We'll start by creating a file named `project.py` in the `schemas` directory and insert the following content into it:

```python
# schemas/project.py

from typing import Optional
from pydantic import BaseModel, ConfigDict, Field
from models import Project

class ProjectBase(BaseModel):
    model_config = ConfigDict(extra='forbid')

class ProjectCreate(ProjectBase): 
    name: str = Field(..., examples=["My First Project"], min_length=3, max_length=100)
    description: str = Field(..., examples=["This is my first project"], min_length=3, max_length=1000)

class ProjectRead(ProjectBase):
    id: int
    name: str
    description: str
    is_finished: bool

    @classmethod
    def from_project(cls, project: Project):
        return cls(id=project.id, name=project.name, description=project.description, is_finished=project.is_finished)
```

The class `ProjectBase` contains the model configuration.  
`ProjectCreate` defines attributes for creating a new project, some of which are mandatory.  
`ProjectRead` includes attributes for reading project information and contains a class method `from_project`, which creates an instance of `ProjectRead` from the `Project` model.  

Next, we'll create a file named `project_service.py` in the `services` directory and write the following into it:
```python
# services/project_service.py

from fastapi import HTTPException
from models import Project
from sqlmodel import Session, select
from schemas.project import ProjectCreate
from database import commit_and_handle_exception, refresh_and_handle_exception


class ProjectService:

    def insert_project_db(self, project_create: ProjectCreate, session: Session):
        new_project = Project(name=project_create.name.strip(), description=project_create.description.strip())
        session.add(new_project)
        commit_and_handle_exception(session)
        refresh_and_handle_exception(session, new_project)
        return new_project

```

The class `ProjectService` will handle all the logic related to creating, reading, updating, and deleting models.

Finally, we'll create the actual router with an API endpoint in the `routers` directory and the file `project.py`.

```python
# routers/project.py

from typing import Annotated
from fastapi import APIRouter, Depends
from services.project_service import ProjectService
from schemas.project import ProjectRead, ProjectCreate
from database import get_session
from sqlmodel import Session


project_router = APIRouter(prefix="/project", tags=["Project"])

db_dependency = Annotated[Session, Depends(get_session)]

project_service = ProjectService()

@project_router.post("/", response_model=ProjectRead)
def create_project(project_create: ProjectCreate, session: db_dependency):
    """
    ## Create a new project

    This endpoint will create a new project in the database.

    - **project_create**: Project object

    Returns:
    - `project`: Project object
    """
    new_project = project_service.insert_project_db(project_create, session)
    return ProjectRead.from_project(new_project)
```

The final necessary step is to register the newly created router, `routers/project.py`, inside the main file of our application, `main.py`. We accomplished the registration by adding two lines of code, which are commented. The rest of the file remains unchanged.

```python
# main.py

from fastapi import FastAPI
import os
from database_init import initialize_database
from routers.project import project_router # Import our new projet_router

ALLOWED_ORIGIN: list = os.getenv("CORS_ALLOWED_ORIGIN", "http://localhost:8000").replace(" ", "").split(",")
ALLOWED_METHODS: list = os.getenv("CORS_ALLOWED_METHODS", "GET, POST, PUT, DELETE, PATCH").replace(" ", "").split(",")
ALLOWED_HEADERS: list = os.getenv("CORS_ALLOWED_HEADERS", "*").replace(" ", "").split(",")
ALLOW_CREDENTIALS: bool = os.getenv("CORS_ALLOW_CREDENTIALS", "TRUE") == "TRUE"
MAX_AGE: int = int(os.getenv("CORS_MAX_AGE", 600))


app = FastAPI()
app.include_router(project_router) # register out new project_router

@app.get("/")
def root():
    return {"message": "Hello World"}


initialize_database()
```

We can verify the functionality at http://127.0.0.1:8000/docs.

### Read

Now, we will add the ability to retrieve information about projects to our application.  
Since we already have the schema defined for returning project information, all we need to do is create a service function and an endpoint.

Let's start with the service. In the file `services/project_service.py`, add the following two methods to the `ProjectService` class:

```python
# services/project_service.py
class ProjectService: 
    ...

    def select_project_by_id_db(self, project_id: int, session: Session):
        project = self._get_project_by_id(project_id, session)
        return project
    
    def _get_project_by_id(self, project_id: int, session: Session):
        project = session.get(Project, project_id)
        if project is None:
            raise HTTPException(status_code=404, detail="Project not found")
        return project

    ...
```

The method `select_project_by_id_db` will be called by the API endpoint. In case we decide to expand our application, additional logic can be seamlessly added there.

The method `_get_project_by_id` retrieves project information from the database based on the provided `id`. This method is likely to be useful for update and delete operations, hence it is separated and written independently.

Once we have the service ready, we can implement the endpoint itself. We'll do this by adding the method `read_project` to the file `routers/project.py`:
```python
# routers/project.py
...
@project_router.get("/{project_id}", response_model=ProjectRead)
def read_project(project_id: int, session: db_dependency):
    """
    ## Retrieve a project from the database

    This endpoint will return a project based on the ID passed on provided project_id.

    - **project_id**: ID of the project to retrieve

    Returns:
    - `project`: Project object
    """
    project = project_service.select_project_by_id_db(project_id, session)
    return ProjectRead.from_project(project)
```


#### Task: Read all projects
Implement a new endpoint and service into our application that will return a list of all projects in the database.  
Here is the API Endpoint header along with a docstring describing inputs, outputs, and the desired behavior:

```python
@project_router.get("/", response_model=list[ProjectRead])
def read_all_projects(session: db_dependency):
    """
    ## Retrieve all projects from the database

    This endpoint will return all projects in the database.

    Returns:
    - `projects`: List of project objects
    """
    ...
```

You can test your solution at http://127.0.0.1:8000/docs.


**Possible Solution**

In the file `services/project_service.py`, let's add the method `select_all_projects_db` to the class:

```python
# services/project_service.py

class ProjectService: 
    ...
    def select_all_projects_db(self, session: Session):
            statement = select(Project)
            projects = session.exec(statement).all()
            return projects
    ...
```

In the `routers/project.py` file, let's add the method `read_all_projects`:

```python
# routers/project.py
...
@project_router.get("/", response_model=list[ProjectRead])
def read_all_projects(session: db_dependency):
    """
    ## Retrieve all projects from the database

    This endpoint will return all projects in the database.

    Returns:
    - `projects`: List of project objects
    """
    projects = project_service.select_all_projects_db(session)
    return [ProjectRead.from_project(project) for project in projects]
...
```

### Update
Now, let's add the ability to update project information to our application.
First, we'll create a schema that defines how the input information will look.
We'll add the class `ProjectUpdatePartial` to the file `schemas/project.py`:

```python
# schemas/project.py
...

class ProjectUpdatePartial(ProjectBase):
    name: Optional[str] = Field(None, examples=["My first project"], min_length=3, max_length=100)
    description: Optional[str] = Field(None, examples=["This is my first project"], min_length=3, max_length=1000)
    is_finished: Optional[bool] = Field(None, examples=[True])

...
```

We will also need a file containing a helper function that will update the attributes of a given object.
Let's create a new file named `helpers.py` and insert the following code into it:

```python
# helpers.py

def update_object_attributes(object, attributes, object_update):
    for var, value in dict(object_update).items():
        if var in attributes and value is not None:
            if isinstance(value, str):
                value = value.strip()
            setattr(object, var, value)

```

Next, in the file `services/project_service.py`, we will add the method `update_partial_project_by_id_db` to the class `ProjectService`, which contains the logic for updating and writing new values to the database:

```python
#services/project_service.py

from helpers import update_object_attributes

...

class ProjectService: 
    ...
    def update_partial_project_by_id_db(self, project_id: int, project_update: ProjectUpdatePartial, session: Session):
            project = self._get_project_by_id(project_id, session)
            update_object_attributes(project, list(Project.model_json_schema()["properties"].keys()), project_update)
            commit_and_handle_exception(session)
            refresh_and_handle_exception(session, project)
            return project
    ...
```

And finally, we will create the endpoint `update_partial_project_by_id_db` in `routers/project.py`:

```python
# routers/project.py
...
@project_router.patch("/{project_id}", response_model=ProjectRead)
def update_project_partial(project_id: int, project_update: ProjectUpdatePartial, session: db_dependency):
    """
    ## Update a project (partial)

    This endpoint will update a project in the database.

    - **project_id**: ID of the project to update
    - **project_update**: Project object

    Returns:
    - `project`: Project object
    """
    updated_project = project_service.update_partial_project_by_id_db(project_id, project_update,session)
    return ProjectRead.from_project(updated_project)
...
```

You can try out the new functionality at http://127.0.0.1:8000/docs.

### Delete
The last missing function in our API is delete. 
#### Task: Deleting a Project
Implement a new endpoint and service in our application that will delete the project with the specified `id` from the database.
Here is the API Endpoint header along with a docstring describing inputs, outputs, and the desired behavior:

```python
@project_router.delete("/{project_id}")
def delete_project(project_id: int, session: db_dependency):
    """
    ## Delete a project

    This endpoint will delete a project from the database.

    - **project_id**: ID of the project to delete

    Returns:
    - `message`: Message indicating that the project was deleted
    """
    ...
```

You can test your solution at http://127.0.0.1:8000/docs.


**Possible Solution**

In the file `services/project_service.py`, let's add the method `delete_project_by_id_db` to the class:
```python
# services/project_service.py 

class ProjectService: 
    ...
    def delete_project_by_id_db(self, project_id: int, session: Session):
        project = self._get_project_by_id(project_id, session)
        session.delete(project)
        commit_and_handle_exception(session)
    ...
```

In the `routers/project.py` file, let's add the method `delete_project`:

```python
# routers/project.py

...
@project_router.delete("/{project_id}")
def delete_project(project_id: int, session: db_dependency):
    """
    ## Delete a project

    This endpoint will delete a project from the database.

    - **project_id**: ID of the project to delete

    Returns:
    - `message`: Message indicating that the project was deleted
    """
    project_service.delete_project_by_id_db(project_id, session)
    return {"message": "Project deleted"}
...
```
    
