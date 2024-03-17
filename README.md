# Project Management Application (Full-stack)

This full-stack web application is designed to streamline the management of your projects, offering functionalities to create, edit, delete, view, and mark projects as finished. Built with a focus on simplicity and efficiency, it features a secure authentication system using JWT tokens for user, ensuring that only authorized users can access and manage their projects.

- [presentation](https://tinyurl.com/ki-mr-gui-prezentace) (only in Czech)

## 🛠️ Technologies

- **Backend**: FastAPI (Python) - A modern, fast (high-performance) web framework for building APIs with Python.
- **Frontend**: React (TypeScript) - A JavaScript library for building user interfaces, providing a seamless and dynamic experience.
- **Database**: PostgreSQL - An open-source relational database with a strong reputation for reliability, feature robustness, and performance.
- **Database Management**: PgAdmin - An open-source administration and development platform for PostgreSQL, allowing easy management and configuration of the database.

## 👨🏿‍💻 Contributors

- [Martin Renner](https://github.com/martinrenner)
- [Adam Budiš](https://github.com/adambudis)
- [David Bartoš](https://github.com/nec3k)

## ✅ Checkpoints

We've prepared checkpoints throughout the course to ensure that no student feels lost. If you find yourself needing to use one of these checkpoints, please download the specified file, unzip it, and copy the .env file into your new checkpoint project. Additionally, it's necessary to delete any old containers, images, and volumes to prevent conflicts due to duplicate names.

0. [Creating a Web Application with Python FastAPI, React(vite), Docker, PostgreSQL, and pgAdmin](https://github.com/martinrenner/KI-GUI?tab=readme-ov-file#0-creating-a-web-application-with-python-fastapi-react-vite-docker-postgresql-and-pgadmin)
1. [Running the Application](https://github.com/martinrenner/KI-GUI?tab=readme-ov-file#1-running-the-application-fastapi-and-react) - Download: [Setup](https://github.com/martinrenner/KI-GUI/blob/main/CHECKPOINTS/1-setup.zip)
2. [Setting Up Database Connection in FastAPI with PostgreSQL and SQLModel](https://github.com/martinrenner/KI-GUI?tab=readme-ov-file#2-setting-up-database-connection-in-fastapi-with-postgresql-and-sqlmodel) - Download: [Database](https://github.com/martinrenner/KI-GUI/blob/main/CHECKPOINTS/2-database.zip)
3. [Models]
4. [Create and Read]
5. [Crud]
6. [Pydantic]
7. [List Projects]
8. [Edit Project]
9. [View Project]
10. [Create Project]
11. [Register User]
12. [Login User]
13. [Project Auth]
14. [Register and Login Form]
15. [Token Context]
16. [Forms with Token and Auth Router]
17. [Docs]

# 0. Creating a Web Application with Python FastAPI, React (Vite), Docker, PostgreSQL, and pgAdmin
> [!IMPORTANT]
> Project structure is already created in 1st checkpoint. Please download it from that source.

This comprehensive guide walks you through setting up a sophisticated web application leveraging the efficiency and scalability of FastAPI, React with Vite for a dynamic frontend, and Docker for seamless deployment. Utilizing PostgreSQL for robust database solutions and pgAdmin for intuitive database management, this setup is designed for developers looking to build scalable web applications with modern technologies.

## Backend Setup with FastAPI

FastAPI powers our application's backend, offering high performance and easy-to-build APIs.

### Setting Up FastAPI

1. Create and move to `/backend`.
2. Create a `main.py` file for your FastAPI application.
3. Initialize FastAPI instance in `main.py` with following code:

```python
from fastapi import FastAPI

app = FastAPI()
```

## Frontend Setup with React and Vite

React paired with Vite offers a modern, fast development experience for the frontend.

### Setting Up React with Vite

1. Create folder and move to `/frontend`
2. Create a new React project with Vite using `npm create vite@latest PROJECT_NAME .`. (the . is for current directory)

## Dockerization

Docker simplifies deployment and ensures consistency across different environments. Docker will containerize our applications, PostgreSQL, and pgAdmin for consistency across environments.

### Dockerizing FastAPI

In the FastAPI project root `/backend`, create a `Dockerfile` with:

```Dockerfile
FROM python:3.12-slim

WORKDIR /backend

COPY ./requirements.txt /backend
RUN pip install --no-cache-dir --upgrade -r requirements.txt

COPY ./src /backend/src

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
```

### Dockerizing React with Vite

Create a `Dockerfile` in the React project root `/frontend`:

```Dockerfile
FROM node:20-alpine

WORKDIR /frontend

COPY package*.json .
RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]
```

Modify `vite.config.ts` for a fixed port:

```javascript
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

```Dockerfile
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

# 1. Running the Application: FastAPI and React

> [!TIP]
> Available checkpoint: [Setup](https://github.com/martinrenner/KI-GUI/blob/main/CHECKPOINTS/1-setup.zip)

This guide outlines steps to run application with FastAPI and React. Before we compose our full-stack application, there are several step we need to do.

## Setup Python Virtual Environment.
> [!NOTE]
> While Docker encapsulates our environment, setting up a local virtual environment is beneficial for IDE-based IntelliSense and code completion.

>[!NOTE]
> Note: We have already prepared list of requirements so you don't need to install it manualy. Just create the virtual enviroment and run. `pip install -r requirements.txt`

1. Set up a virtual environment `python -m venv venv`.
2. Activate virtual environment `venv\Scripts\activate` or `source venv/bin/activate`.
3. Install FastAPI and Uvicorn with `pip install fastapi uvicorn`.
4. Freeze requirements for Docker `pip freeze > requirements.txt`

## Setup React
> [!NOTE]
> Note: Similar to the Python virtual environment, local installation of Node modules aids in providing IntelliSense for development.

1. Install dependencies with `npm install`.

## Configuring Environment Variables

Leveraging a `.env` file for environment variables is crucial for securing and customizing your application's configuration. Here's why:

- Security: Keeps sensitive data like API keys and passwords safe and out of source control.
- Configuration Management: Allows environment-specific settings, enabling seamless transitions between development, testing, and production without code changes.
- Convenience: Centralizes configuration in one place for easy management and clarity, streamlining setup for new developers with a .env.example template.
- Separation of Concerns: Decouples configuration from code, enhancing maintainability and scalability.
- Portability & Scalability: Facilitates easy deployment across different environments and platforms, supporting dynamic updates to configuration as the application grows.

1. Create a `.env` file by copying the provided .env.example template: `cp .env.example .env` or copy following code

```bash
# FastAPI Middleware

CORS_ALLOWED_ORIGIN=
CORS_ALLOWED_METHODS=
CORS_ALLOWED_HEADERS=
CORS_ALLOW_CREDENTIALS=
CORS_MAX_AGE=


# Auth for JWT

JWT_SECRET_KEY=
JWT_ALGORITHM=
JWT_ACCESS_TOKEN_EXPIRE_MINUTES=
JWT_REFRESH_TOKEN_EXPIRE_DAYS=


# Postgres

POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_DB=


# pgAdmin

PGADMIN_DEFAULT_EMAIL=
PGADMIN_DEFAULT_PASSWORD=
```

## Docker Compose

Docker Compose orchestrates the containers, ensuring they are built and started together.

```bash
docker compose -p "YOUR_CONTAINER_NAME" up
```

This command will initiate the building and running of the services defined in your docker-compose.yml. Once running, your application will be accessible via:

- **FastAPI backend** at `http://localhost:8000`
- **React frontend** at `http://localhost:5173`
- **pgAdmin** at `http://localhost:5050`

> [!CAUTION]
> It's possible for services to start out of order, leading to connection issues (e.g., FastAPI starting before PostgreSQL is ready). If this occurs, simply restarting the affected container usually resolves the issue. Otherwise we would need to add health checks to `docker-compose.yaml`.

# 2. Setting Up Database Connection in FastAPI with PostgreSQL and SQLModel

> [!TIP]
> Available checkpoint: [Database](https://github.com/martinrenner/KI-GUI/blob/main/CHECKPOINTS/2-database.zip)

This tutorial demonstrates how to integrate a PostgreSQL database into a FastAPI application using SQLModel for ORM, ensuring a structured, clear, and maintainable codebase.

## Database Configuration

First, create a `database.py` file in `/backend` to set up the database connection and session management. This file utilizes environment variables to configure the database connection string securely.

```python
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

```python
from sqlmodel import Field, SQLModel, BIGINT
from sqlalchemy import Column


class Test(SQLModel, table=True):
    __tablename__ = "test"

    id: int = Field(sa_column=Column(BIGINT, primary_key=True, autoincrement=True))

```

## Database Initialization

Handle database initialization in a `database_init.py` file, ensuring tables are created if they don't exist.

```python
from database import engine
from sqlmodel import SQLModel

def initialize_database():
    SQLModel.metadata.create_all(engine)
```

## Application Entry Point

In your FastAPI application's entry point, typically `main.py`, ensure you initialize the database by calling the `initialize_database` function at the start.

```python
from fastapi import FastAPI
from database_init import initialize_database

app = FastAPI()

# Database Initialization
initialize_database()

@app.get("/")
def root():
    return {"message": "Hello World"}
```

By following these steps, your FastAPI application will be configured to connect to a PostgreSQL database using SQLModel for ORM, with a clear and maintainable project structure.

## Inspecting the Database with pgAdmin

If we want to inspect how it looks in our database, we can use pgAdmin, which should be running at http://localhost:5050/.

You defined login credentials in the `.env` file using variables:

```shell
PGADMIN_DEFAULT_EMAIL=
PGADMIN_DEFAULT_PASSWORD=
```

After logging in, click on "Add New Server". In the new window, choose any name and navigate to the "Connection" tab.  
The hostname is `gui-postgres_db-application`.  
The "Maintenance database" is the value of the variable `POSTGRES_DB` from `.env`.  
The "Username" is the value of the variable `POSTGRES_USER` from `.env`.  
The "Password" is the value of the variable `POSTGRES_PASSWORD` from `.env`.

# 3. SQL Alchemy Project Model

We will need a SQLAlchemy model to represent our projects in the application.

## Task: Create a Model for Projects

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

# FastAPI and CRUD Operations for Projects

Before we dive into adding functionality to our application, we should adjust its structure. When building a larger application, it's beneficial to organize it into multiple files, and that's exactly what we'll do. We'll divide the architecture of our API into 3 parts:

1. **Routers**: Routers in FastAPI define URL paths and manage the flow of data between clients and the server. Each router contains sets of paths and functions that are called when requests are made to these paths. These functions encapsulate the logic for processing requests and responses. Routers in FastAPI are built on a modular approach, allowing us to organize code into separate modules based on logical functions or entities.
1. **Services**: Services in FastAPI contain application logic and functionalities. These services include methods and functions that perform data processing, communicate with the database, and execute other operations. Services separate the application logic from the router layer, making it easier to manage and test the code.
1. **Schemas** : Schemas in FastAPI define the structure of data transmitted via the API. These schemas are created using the Pydantic library, which provides robust data validation and serialization based on defined types. Schemas describe the inputs and outputs of the API, ensuring consistency and data validity during communication between clients and the server.

To achieve this, we'll create 3 directories: `routers`, `schemas`, `services`.

## Create projects

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

## Read

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

### Task: Read all projects

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

## Update

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

## Delete

The last missing function in our API is delete.

### Task: Deleting a Project

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

# Pydantic Validation in Python

Pydantic is a data validation and settings management library using Python type annotations. It allows for complex data schemas with automatic validation and conversion. This part demonstrates using Pydantic to define custom validation of project models in a Python application.

## Basic Model Validation

At the core, Pydantic models are defined by inheriting from `BaseModel`. Each attribute of the model is typed, allowing Pydantic to perform automatic validation and data conversion.

### Example: Defining a Project Model

The `ProjectBase` class is a fundamental model capturing the common attributes of a project. It utilizes `ConfigDict` to enforce extra field validation.

```python
from pydantic import BaseModel, ConfigDict

class ProjectBase(BaseModel):
    model_config = ConfigDict(extra="forbid")
```

## Validation of Creating a Project

`ProjectCreate` extends `ProjectBase` with the name and description fields and applies constraints such as minimum and maximum length. In addition, custom validators are defined using the `@field_validator` decorator. These validators can define custom validation logic that is not supported by the base Pydantic.

```python
from pydantic import Field, field_validator
from typing import Optional

class ProjectCreate(ProjectBase):
    name: str = Field(..., examples=["My First Project"], min_length=3, max_length=100)
    description: str = Field(..., examples=["This is my My First Project"], min_length=3, max_length=1000)

    @field_validator("name", mode="before")
    def validate_name(cls, value):
        if len(value) < 3 or len(value) > 100:
            raise ValueError("Name must be between 3 and 100 characters long")
        return value

    @field_validator("description", mode="before")
    def validate_description(cls, value):
        if len(value) < 3 or len(value) > 1000:
            raise ValueError("Description must be between 3 and 1000 characters long")
        return value

```

## Validation of Partial Update of a Project

The `ProjectUpdatePartial` class demonstrates how to define optional fields for the purpose of partial updates in Pydantic models. This approach is particularly useful when you want to update only a subset of a model's fields without needing to provide all the data again. Here, `name`, `description`, and `is_finished` are all optional, allowing for flexible updates to the project model.

```python
class ProjectUpdatePartial(ProjectBase):
    name: Optional[str] = Field(None, examples=["My first project"], min_length=3, max_length=100)
    description: Optional[str] = Field(None, examples=["This is my first project"], min_length=3, max_length=1000)
    is_finished: Optional[bool] = Field(None, examples=[True])

    @field_validator("name", mode="before")
    def validate_name(cls, value):
        if value is not None and (len(value) < 3 or len(value) > 100):
            raise ValueError("Name must be between 3 and 100 characters long")
        return value

    @field_validator("description", mode="before")
    def validate_description(cls, value):
        if value is not None and (len(value) < 3 or len(value) > 1000):
            raise ValueError("Description must be between 3 and 1000 characters long")
        return value

    @field_validator("is_finished", mode="before")
    def validate_is_finished(cls, value):
        if value is not None and not isinstance(value, bool):
            raise ValueError("Is_finished must be a boolean")
        return value
```

# 11. 

> [!TIP]
> Available checkpoint: [Register_user](https://github.com/martinrenner/KI-GUI/blob/main/CHECKPOINTS/11-register_user.zip)

# 12.

> [!TIP]
> Available checkpoint: [Login_user](https://github.com/martinrenner/KI-GUI/blob/main/CHECKPOINTS/12-login_user.zip)

# 13.

> [!TIP]
> Available checkpoint: [Project_auth](https://github.com/martinrenner/KI-GUI/blob/main/CHECKPOINTS/13-project_auth.zip)

# 14.

> [!TIP]
> Available checkpoint: [Register_and_login_form](https://github.com/martinrenner/KI-GUI/blob/main/CHECKPOINTS/14-register_and_login_form.zip)

# 15. Creating Token Context with React Context API

> [!TIP]
> Available checkpoint: [Token_context](https://github.com/martinrenner/KI-GUI/blob/main/CHECKPOINTS/15-token_context.zip)

Utilizing the Context API in React is a strategic approach for managing global state, such as user authentication tokens. This method provides a more efficient and straightforward way to pass data through the component tree without having to manually prop-drill from parent to child components. In this section, we'll dive into how to leverage the Context API for storing and managing user access tokens across your React application.

## What is ContextAPI?

The Context API is a React feature that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application. It's designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language. Hence, for managing authentication tokens, which are needed across many components in an application, Context API proves to be particularly useful.

## TokenContext

First, create a folder named `/context` inside `/frontend/src/components`. In this new folder, you'll create two files: `TokenContext.ts` and `TokenContextProvider.tsx`.

`TokenContext.ts` will define the context for your token, including its type and associated functions for login, logout, and checking the token's validity.

```typescript
import React from "react";

interface TokenContextType {
    token: string;
    login: (newToken: string) => void,
    logout: () => void,
    isTokenValid: () => boolean,
}

const TokenContext = React.createContext({} as TokenContextType);

export default TokenContext;

```

## TokenContextProvider

The `TokenContextProvider.tsx` component will utilize state management to store the token and provide functions to modify this state, including login, logout, and a method to check if the token is still valid.

```typescript
import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import TokenContext from "./TokenContext";

interface TokenContextProviderProps {
  children: React.ReactNode;
}

const TokenContextProvider = ({ children }: TokenContextProviderProps) => {
  const [token, setToken] = useState<string | null>();

  const login = (newToken: string) => {
    setToken(newToken);
  };

  const logout = () => {
    setToken(null);
  };

  const isTokenValid = () => {
    try {
      const decodedToken = token ? jwtDecode(token) : null;
      if (decodedToken && decodedToken.exp) {
        const currentTime = Date.now() / 1000;
        return decodedToken.exp > currentTime;
      }
    } catch (error) {
      logout();
    }
    return false;
  };

  return (
    <TokenContext.Provider value={{ token, login, logout, isTokenValid }}>
      {children}
    </TokenContext.Provider>
  );
};

export default TokenContextProvider;

```

## Access TokenContextProvider

To ensure that the `TokenContextProvider` is accessible throughout your application, wrap your application with the TokenContextProvider in your main App component. In this case we will wrap each Routes in React Router.

```typescript
function App() {
  return (
    <BrowserRouter>
      <TokenContextProvider>
        <Routes>
            // Define your routes here
        </Routes>
      </TokenContextProvider>
    </BrowserRouter>
  );
}

export default App;

```

## Login with ContextAPI

To utilize the ContextAPI in a login component, modify the login form handling to include the useContext hook to access the `login` function from `TokenContext`. This way, once the user successfully logs in, you can update the context with the new token.

```typescript
import { useContext } from "react"; 
import TokenContext from "../../context/TokenContext";
// Other necessary imports

//Form Interface

function LoginForm() {
  const { login } = useContext(TokenContext);  //Accessing login function from TokenContext


  //Other code...

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      fetch("http://localhost:8000/auth/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          username: formData.email,
          password: formData.password,
        }),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            setErrorMessage("Login failed");
          }
        })
        .then((data) => {
          login(data.access_token); //Update the context with the new token
          navigate("/projects");
        })
        .catch((error) => {
          console.error("Error:", error);
          setErrorMessage("An error occurred");
        });
    }
  };

  // Return statement and other component logic...
}

export default LoginForm;
```

By adopting this approach, you simplify token management across your React application, enhancing security and user experience by ensuring that sensitive information like authentication tokens are handled efficiently and securely.

# 16. Adding Token To CRUD Forms and Creating Auth Router Pages

> [!TIP]
> Available checkpoint: [Forms_forms_with_token_and_auth_router](https://github.com/martinrenner/KI-GUI/blob/main/CHECKPOINTS/16-forms_with_token_and_auth_router.zip)

This documentation segment elaborates on integrating JWT (JSON Web Token) authentication into CRUD (Create, Read, Update, Delete) operations in a React application and establishing authenticated routes using React Router. To ensure security and authorization, it's crucial that each API call requiring user authentication carries a JWT token. Additionally, setting up authentication-specific pages in React enhances the application's security by managing access to certain pages based on the user's authentication status.

## CRUD Forms

In scenarios where the API demands JWT tokens for authentication, it's vital to append this token to every API call. This is particularly important for requests made through the project router in a React application. Below is a step-by-step guide to achieve this:

```typescript
//other imports
import React, { ..., useContext } from "react";
import TokenContext from "../../../context/TokenContext";

//other code
//definition of component
const { token, isTokenValid } = useContext(TokenContext);

//function (in this case handleSubmit)
    fetch(`http://localhost:8000/project`, {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
         Authorization: `Bearer ${token}`,
       },
       body: JSON.stringify(formData),
     })
       .then((response) => {
         if (!response.ok) {
           throw new Error("Failed to create project");
         }
         return response.json();
       })
       .then((data) => {
         navigate(`/projects/${data.id}`);
       })
       .catch((error) => {
         console.error("Error:", error);
       });
   };
```

In this example, we added import for our ContextAPI that provides JWT token. Then we added import for UseContext hook. Finnaly we added authorization to header of request.

## Auth Page Component

Given that React Router does not inherently provide an authenticated route feature, it's necessary to implement an authentication mechanism manually. This can be achieved by creating an "Authenticated" component that wraps around components requiring authentication, as shown below:

```typescript
import { useContext, useEffect } from "react";
 import { useNavigate } from "react-router-dom";
 import TokenContext from "../../context/TokenContext";

 function Authenticated({ children }: { children: React.ReactNode }) {
   const { isTokenValid, logout } = useContext(TokenContext)!;
   const navigate = useNavigate();

   useEffect(() => {
     if (!isTokenValid()) {
       logout();
       navigate("/login", { replace: true });
     }
   }, [isTokenValid, logout, navigate]);

   return <>{children}</>;
 }

 export default Authenticated;
```

This component checks the validity of the token and, if found invalid, redirects the user to the login page, ensuring that only authenticated users can access certain parts of the application.

## Modify React Router

To utilize the Authenticated component effectively, modifications to the React Router setup are required. This ensures that specific routes are protected and accessible only to authenticated users:

```typescript
function App() {
  return (
    <BrowserRouter>
      <TokenContextProvider>
          <Routes>
            <Route path=":project_id" element={
                  <Authenticated>
                    <ProjectView />
                  </Authenticated>
            } />
        </Route>
        </Routes>
      </TokenContextProvider>
    </BrowserRouter>
  );
}

export default App;

```

By wrapping the ProjectView component (or any other component) with the Authenticated component within the route definition, you ensure that access is granted only to users with a valid token. This mechanism enhances the security and integrity of the application by preventing unauthorized access to sensitive information or functionalities.

This approach to integrating token authentication into CRUD operations and creating authenticated routes in React applications serves as a foundation for developing secure, efficient, and user-friendly web applications.

# 17. FastAPI Documentation 

> [!TIP]
> Available checkpoint: [Docs](https://github.com/martinrenner/KI-GUI/blob/main/CHECKPOINTS/17-docs.zip)

This section of the documentation focuses on enhancing the project documentation capabilities using FastAPI's built-in support for SwaggerUI. FastAPI provides a robust and interactive interface for documenting your API, allowing both developers and users to understand and interact with your API easily. The included guide and example show how to leverage these documentation features to improve your API's usability and accessibility.

## FastAPI Init Docs

FastAPI allows you to extensively customize your API documentation through a variety of options. These options include setting a title, summary, description, version, and categorizing your API endpoints with tags. Below, we delve into how each of these can be utilized to enhance your API documentation.

### Usage

To improve the clarity and effectiveness of your API documentation, you can specify details such as the title, summary, description, version, and organize your endpoints with tags. Here’s how to use these options in your FastAPI application:

```python
description = """
 ## Usage and explanation
 1. Register user `[POST] /user`
 2. Login user `[POST] /auth/token` (create token)
 3. Create project `[POST] /project`
 4. Get projects `[GET] /project`
 """

 tags_metadata = [
     {
         "name": "Auth",
         "description": "Operations with authentication. **No authorization required.**",
     },
     {
         "name": "User",
         "description": "Operations with users. **No authorization required.**",
     },
     {
         "name": "Project",
         "description": "Operations with projects. Basic CRUD operations. **Authorization required.**",
     },
 ]

 app = FastAPI(
     title="GUI APP",
     summary="GUI APP - Project Manager Documentation",
     description=description,
     version="1.0.0",
     openapi_tags=tags_metadata,
 )
```

In this setup:

- **Title:** "GUI APP" sets the overall title of your API documentation, which is visible at the top of your SwaggerUI page.
- **Summary:** Provides a concise overview of what your API does, in this case, serving as a project manager documentation tool.
- **Description:** Here, you can go into more detail about how to use the API, including step-by-step instructions or any additional information that users might find useful.
- **Version:** Denotes the current version of your API, which is essential for users to be aware of the API's maturity and stability.
- **Tags:** By organizing endpoints into categories (tags), you make your API more navigable and easier to understand. Each tag can have a name and a description, providing context for the grouped endpoints.

These features collectively contribute to a more informative and user-friendly API documentation interface, enhancing the experience for developers and end-users alike.

## FastAPI Endpoint Docs

FastAPI not only facilitates the creation of API documentation on a broad scale but also offers detailed documentation at the endpoint level. Through the use of Python docstrings, developers can provide extensive information about each API endpoint, enhancing the understanding and usability of the API for consumers. Below is a guide on how to document an endpoint within your FastAPI application.

### Usage

To document individual API endpoints, FastAPI utilizes Python docstrings. These docstrings allow you to include a description of the endpoint's purpose, its parameters, and what it returns. Here’s an example that illustrates how to document the process of creating a new user in your system:

```python
@user_router.post("/", response_model=UserRead)
def create_user(user_create: UserCreate, session: db_dependency):
    """
    ## Create a new user (**register**)

    This endpoint will create a new user in the database.

    - **user_create**: User object

    Returns:
    - `user`: User object
    """
    user = user_service.insert_user_db(user_create, session)
    return UserRead.from_user(user)
```

In this documentation:

- **Brief Description:** At the beginning, a brief overview of the endpoint's purpose is provided, in this case, creating (or registering) a new user.
- **Parameters:** Detailed descriptions of the parameters that the endpoint accepts. This includes their types, purposes, and any other relevant information. For the create_user endpoint, it accepts a UserCreate object.
- **Returns:** Describes what the endpoint returns upon a successful call. In the example, it returns a UserRead object, which includes information about the newly created user.

By incorporating detailed docstrings for your endpoints, you not only enrich the auto-generated API documentation but also provide a more informative and guided experience for API consumers. This practice enhances the discoverability and clarity of API functionalities, leading to better integration and utilization of your API.