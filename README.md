# Project Management Application (Full-stack)

This full-stack web application is designed to streamline the management of your projects, offering functionalities to create, edit, delete, view, and mark projects as finished. Built with a focus on simplicity and efficiency, it features a secure authentication system using JWT tokens for user, ensuring that only authorized users can access and manage their projects.

- [presentation](https://tinyurl.com/ki-gui-fullstack) (only in Czech)

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
3. [SQL Alchemy Project Model](https://github.com/martinrenner/KI-GUI?tab=readme-ov-file#3-sql-alchemy-project-model) - Download: [Models](https://github.com/martinrenner/KI-GUI/blob/main/CHECKPOINTS/3-models.zip)
4. [FastAPI Create and Read for Projects](https://github.com/martinrenner/KI-GUI?tab=readme-ov-file#4-FastAPI-Create-and-Read-Operations-for-Projects) - Download: [Create and Read](https://github.com/martinrenner/KI-GUI/blob/main/CHECKPOINTS/4-create_and_read.zip)
5. [FastAPI and CRUD Operations for Projects](https://github.com/martinrenner/KI-GUI?tab=readme-ov-file#5-FastAPI-Update-and-Delete-Operations-for-Projects) - Download: [Update and Delete](https://github.com/martinrenner/KI-GUI/blob/main/CHECKPOINTS/5-crud.zip)
6. [Pydantic](https://github.com/martinrenner/KI-GUI?tab=readme-ov-file#6-Pydantic-Validation-in-Python) - Download: [Pydantic](https://github.com/martinrenner/KI-GUI/blob/main/CHECKPOINTS/6-pydantic.zip)
7. [List Projects]
8. [Edit Project]
9. [View Project]
10. [Create Project]
11. [Register User Endpoint](https://github.com/martinrenner/KI-GUI?tab=readme-ov-file#11-register-user-endpoint) - Download: [Register_user](https://github.com/martinrenner/KI-GUI/blob/main/CHECKPOINTS/11-register_user.zip)
12. [Login User Endpoint](https://github.com/martinrenner/KI-GUI?tab=readme-ov-file#12-login-user-endpoint) - Download: [Login_user](https://github.com/martinrenner/KI-GUI/blob/main/CHECKPOINTS/12-login_user.zip)
13. [Project Authentication](https://github.com/martinrenner/KI-GUI?tab=readme-ov-file#13-project-authentication) - Download: [Project_auth](https://github.com/martinrenner/KI-GUI/blob/main/CHECKPOINTS/13-project_auth.zip)
14. [Register and Login Form](https://github.com/martinrenner/KI-GUI?tab=readme-ov-file#14-register-and-login-forms) - Download: [Register_and_login_form](https://github.com/martinrenner/KI-GUI/blob/main/CHECKPOINTS/14-register_and_login_form.zip)
15. [Creating Token Context with React Context API](https://github.com/martinrenner/KI-GUI?tab=readme-ov-file#15-creating-token-context-with-react-context-api) - Download: [Token_context](https://github.com/martinrenner/KI-GUI/blob/main/CHECKPOINTS/15-token_context.zip)
16. [Adding Token To CRUD Forms and Creating Auth Router Pages](https://github.com/martinrenner/KI-GUI?tab=readme-ov-file#16-adding-token-to-crud-forms-and-creating-auth-router-pages) - Download: [Forms_with_token_and_auth_router](https://github.com/martinrenner/KI-GUI/blob/main/CHECKPOINTS/16-forms_with_token_and_auth_router.zip)
17. [Docs](https://github.com/martinrenner/KI-GUI?tab=readme-ov-file#17-fastapi-documentation) - Download: [Docs](https://github.com/martinrenner/KI-GUI/blob/main/CHECKPOINTS/17-docs.zip)

# 0. Creating a Web Application with Python FastAPI, React (Vite), Docker, PostgreSQL, and pgAdmin
> [!IMPORTANT]
> Project structure is already created in 1st checkpoint. Please download it from that source.

This comprehensive guide walks you through setting up a sophisticated web application leveraging the efficiency and scalability of FastAPI, React with Vite for a dynamic frontend, and Docker for seamless deployment. Utilizing PostgreSQL for robust database solutions and pgAdmin for intuitive database management, this setup is designed for developers looking to build scalable web applications with modern technologies.

## Backend Setup with FastAPI

FastAPI powers our application's backend, offering high performance and easy-to-build APIs.

### Setting Up FastAPI

1. Create and move to `/backend`.
2. Create and move to `/src`.
3. Create a `main.py` file for your FastAPI application.
4. Initialize FastAPI instance in `main.py` with following code:

<details>
  <summary>FastAPI Init Code</summary>
  
  ```python
  from fastapi import FastAPI
  
  app = FastAPI()
  ```
</details>

## Frontend Setup with React and Vite

React paired with Vite offers a modern, fast development experience for the frontend.

### Setting Up React with Vite

1. Create folder and move to `/frontend`
2. Create a new React project with Vite using `npm create vite@latest PROJECT_NAME .`. (the . is for current directory)

## Dockerization

Docker simplifies deployment and ensures consistency across different environments. Docker will containerize our applications, PostgreSQL, and pgAdmin for consistency across environments.

### Dockerizing FastAPI

In the FastAPI project root `/backend`, create a `Dockerfile` with:

<details>
  <summary>Python Dockerfile Code</summary>

  ```Dockerfile
  FROM python:3.12-slim
  
  WORKDIR /backend
  
  COPY ./requirements.txt /backend
  RUN pip install --no-cache-dir --upgrade -r requirements.txt
  
  COPY ./src /backend/src
  
  CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
  ```
</details>

### Dockerizing React with Vite

Create a `Dockerfile` in the React project root `/frontend`:

<details>
  <summary>React Dockerfile Code</summary>
  
  ```Dockerfile
  FROM node:20-alpine
  
  WORKDIR /frontend
  
  COPY package*.json .
  RUN npm install
  
  COPY . .
  
  EXPOSE 5173
  
  CMD ["npm", "run", "dev"]
  ```
</details>

Modify `vite.config.ts` for a fixed port:

<details>
  <summary>Vite Docker Config Code</summary>
  
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
</details>

## Docker Compose Integration

Use docker-compose.yml at the project root to define services for FastAPI, React, PostgreSQL, and pgAdmin:

<details>
  <summary>Docker Compose Code</summary>
  
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
</details>

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

<details>
  <summary>Env Code</summary>
  
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
</details>

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

<details>
  <summary>Database Code</summary>
  
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
</details>

## Model Definitions

Next, define your database models using SQLModel in a `models.py` file. Here's an example with a simple `Test` model.

<details>
  <summary>Model Code</summary>
  
  ```python
  from sqlmodel import Field, SQLModel, BIGINT
  from sqlalchemy import Column
  
  
  class Test(SQLModel, table=True):
      __tablename__ = "test"
  
      id: int = Field(sa_column=Column(BIGINT, primary_key=True, autoincrement=True))
  
  ```
</details>

## Database Initialization

Handle database initialization in a `database_init.py` file, ensuring tables are created if they don't exist.

<details>
  <summary>Database Init Code</summary>
  
  ```python
  from database import engine
  from sqlmodel import SQLModel
  from models import Test
  
  def initialize_database():
      SQLModel.metadata.create_all(engine)
  ```
</details>

## Application Entry Point

In your FastAPI application's entry point, typically `main.py`, ensure you initialize the database by calling the `initialize_database` function at the start.

<details>
  <summary>Main Code</summary>
  
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
</details>

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

## ~~Task:~~ Create a Model for Projects

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

# 4. FastAPI Create and Read Operations for Projects

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

# 5. FastAPI Update and Delete Operations for Projects

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

# 6. Pydantic Validation in Python

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

# 7. Project List

## React Files
Important files you need to notice
1. `index.html`: Entry point of application and contains the HTML structure. It includes a `<div>` element with an ID where React app will be mounted, along with the necessary scripts.
2. `App.css`: Contains CSS styles specific to the `App` component or the main layout of  application.
3. `App.tsx`: Main TypeScript file your `App` component. Designed to define the structure of application, including routing, layout, and the composition of other components.
4. `main.tsx`: This file is likely an entry point for your React application or serves as the main script where you initialize your React app.
5. `index.css`: Contains global CSS styles that apply to your entire application.

Delete the contents of following files: `App.css` and `index.css`. Also delete contents of `App.tsx`.  

> [!CAUTION]
> Don't forget to save these files!

## Add CORS Middleware
First we need to add Cross-Origin Resource Sharing (CORS) middleware to `main.py`. CORS is a security feature implemented by web browsers that restricts resources (e.g., fonts, JavaScript, etc.) on a web page from being requested from another domain outside the domain from which the first resource was served. 

Adding this middleware enables CORS support, which allows frontend to make requests to  FastAPI backend, even if they are served from different origins (running on different ports).

main.py
```python
...
from fastapi.middleware.cors import CORSMiddleware
...


...
app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGIN,
    allow_credentials=ALLOW_CREDENTIALS,
    allow_methods=ALLOWED_METHODS,
    allow_headers=ALLOWED_HEADERS,
    max_age=MAX_AGE,
)
...
```

Parameters in function `add_middleware()`:
- `CORSMiddleware`: Middleware class provided by FastAPI to handle CORS.
- `allow_origins`: Specifies which origins are allowed to access the resources of the server. 
- `allow_credentials`: Determines whether credentials (cookies, authorization headers) should be included in the CORS request.
- `allow_methods`: Specifies which HTTP methods are allowed when accessing the resources. 
- `allow_headers`: Specifies which HTTP headers are allowed when accessing the resources.
- `max_age`: The maximum amount of time that the results of a preflight request can be cached.
We have already defined constant variables with desired values so we will just use them.

## Header
Component Header will contain navigation bar of application. When a user clicks on "Projects", the application's router will render the component associated with the `/projects` route without reloading the page, thanks to the `NavLink` and routing setup provided by `react-router-dom`. `Container`, `Nav`, and `Navbar` components from the `react-bootstrap` package are pre-styled components.

To create Header component: 
1. Create a folder named 'components' in /frontend/src.
2. Within the 'components' folder, create a subfolder titled 'Header'.
3. Inside the 'Header' folder, create a file named 'Header.tsx'.

<details>
  <summary>Header.tsx Code</summary>
  
  ```tsx
  import { NavLink } from "react-router-dom";
  import { Container, Nav, Navbar } from "react-bootstrap";

  function Header() {
   return (
      <>
         <Navbar bg="light">
            <Container>
               <Navbar.Brand>GUI APP</Navbar.Brand>
               <Nav className="me-auto">
                  <Nav.Link as={NavLink} to="/projects">
                     Projects
                  </Nav.Link>
               </Nav>
            </Container>
         </Navbar>
      </>
   );
  }

  export default Header;
  ```
</details>

Then modify `App.tsx` component to use the `Header` component along with client-side routing provided by `BrowserRouter`. The `Header` will be displayed, and any navigation actions performed within `Header` will be handled by `BrowserRouter`, enabling seamless page transitions without reloading the browser.

<details>
  <summary>App.tsx Code</summary>

  ```tsx
  import { BrowserRouter } from "react-router-dom";
  import Header from "./components/Header/Header";
  import "bootstrap/dist/css/bootstrap.min.css";

  function App() {
    return (
      <>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </>
    );
  }

  export default App;
  ```
</details>

## Project Interface
To create interface Project:
1. Create a folder named 'interfaces' in /frontend/src.
2. Within the 'interfaces' folder, create a file named 'Project.ts'.

In TypeScript, an interface is a way to define the structure of an object. It describes the shape of the object, including the types of its properties.

<details>
  <summary>Project.ts Code</summary>

  ```ts
  export interface Project {
    id: number;
    name: string;
    description: string;
    is_finished: boolean;
  }
  ```
</details>

## ProjectList
To create ProjectList component: 
1. Within the 'components' folder, create a subfolder titled 'Projects'.
2. Inside the 'Projects' folder, establish another subfolder named 'ProjectsList'.
3. Finally, within the 'ProjectsList' folder, create a file named 'ProjectList.tsx'.

`useEffect()` is a React hook that lets you perform side effects in function components. Side effects can be anything that affects something outside the scope of the function being executed, like fetching data from an API, directly manipulating the DOM, etc. 

Inside the `useEffect()`, the `fetch()` function is called with the URL `http://localhost:8000/project/`. This is an asynchronous operation to make a network request to the server at that URL using the HTTP `GET` method and it includes headers specifying that the expected response content type is JSON.

- `fetch()` call returns a promise that resolves with a `response` object.
- `.then((response) => ...)` method checks if the `response.ok` property is true, indicating that the response from server was successful. If so, it calls `response.json()` to parse JSON response into native JavaScript objects. Otherwise it throws an error.
- `.then((data) => ...)` method receives the parsed data and calls `setProjects(data)`.
- `.catch((error) => ...)` method catches any errors that occur during the fetch operation or while processing the response.

The `map` function iterates over each `project` in the `projects` array, creating a new `Card` component for each project.

<details>
  <summary>ProjectList.tsx</summary>

  ```tsx
  import { useEffect, useState } from "react";
  import { Project } from "../../../interfaces/Project";
  import { Button, Card, Col, Row } from "react-bootstrap";
  import { Link } from "react-router-dom";

  function ProjectList() {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
      fetch("http://localhost:8000/project/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Failed to fetch projects data");
        })
        .then((data) => {
          setProjects(data);
        })
        .catch((error) => {
          console.error("Error fetching projects data:", error.message);
        });
    }, []);

    return (
      <>
        <Row>
          <Col xs={10}>
            <h1>Projects</h1>
          </Col>
          <Col xs={2}>
            <Link to="/projects/create">
              <Button variant="primary" className="float-end">
                Create project
              </Button>
            </Link>
          </Col>
        </Row>

        {projects.map((project) => (
          <Card key={project.id} className="mb-3">
            <Card.Body>
              <Row>
                <Col>
                  <Card.Title>
                    {project.name} - {project.is_finished ? " Finished" : " Not finished"}
                  </Card.Title>
                </Col>
                <Col xs={2} className="d-flex justify-content-end gap-2">
                  {!project.is_finished && (
                    <Button variant="success">Finish</Button>
                  )}
                  <Link to={`/projects/${project.id}`}>
                    <Button variant="primary">View</Button>
                  </Link>
                  <Link to={`/projects/${project.id}/edit`}>
                    <Button variant="warning">Edit</Button>
                  </Link>
                  <Button variant="danger">Delete</Button>
                </Col>
              </Row>
              <Card.Text>{project.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </>
    );
  }

  export default ProjectList;
  ```
</details>


<details>
  <summary>App.tsx Code</summary>

  ```tsx
  import { BrowserRouter, Route, Routes } from "react-router-dom";
  import Header from "./components/Header/Header";
  import "bootstrap/dist/css/bootstrap.min.css";
  import { Container } from "react-bootstrap";
  import ProjectList from "./components/Projects/ProjectsList/ProjectList";

  function App() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <Container className="mt-5">
            <Routes>
              <Route path="/projects/">
                <Route path="" element={<ProjectList />} />
              </Route>
            </Routes>
          </Container>
        </BrowserRouter>
      </>
    );
  }

  export default App;
  ```
</details>

### Delete Project
Now we will define function to delete project. In this case we are making a DELETE request. If deletion on server side was successful `.then()` block is executed to update the local state, without need to refresh page.  

ProjectsList.tsx
```tsx
// Other code 
const delete_project = (project_id: number) => {
  fetch(`http://localhost:8000/project/${project_id}`, {
	  method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Failed to delete project");
      }
    })
    .then(() => {
	    setProjects(
        projects.filter((project) => project.id !== project_id)
      );
	  })
    .catch((error) => {
	    console.error("Error deleting project:", error);
	  });
};
// Other code 
```

### Finish Project
Now we will define function to mark project as finished. In this case we are making a PATCH request. The `body` of the request indicates the specific update to be made to the project marking it as finished. The `.then()` block is used to update projects local state. 

ProjectsList.tsx
```tsx
// Other code 
const finish_project = (project_id: number) => {
  fetch(`http://localhost:8000/project/${project_id}`, {
	  method: "PATCH",
    headers: {
	    "Content-Type": "application/json",
    },
    body: JSON.stringify({ is_finished: true }),
	})
    .then((response) => {
	    if (response.ok) {
		    return response.json();
	    } else {
		    throw new Error("Failed to finish project");
	    }
	})
    .then(() => {
	    setProjects(
        projects.map((project) =>
		      project.id === project_id
            ? { ...project, is_finished: true }
            : project
		      )
        );
	    })
    .catch((error) => {
	    console.error("Error finishing project:", error);
    });
};
// Other code 
```

Finally add `onClick={() => delete_project(project.id)}` to the button with Delete text and `onClick={() => finish_project(project.id)}` to the button with Finish text, so that those functions are triggered on click.

<details>
  <summary>ProjectList.tsx Code</summary>
  
  ```tsx
  import { useEffect, useState } from "react";
  import { Project } from "../../../interfaces/Project";
  import { Button, Card, Col, Row } from "react-bootstrap";
  import { Link } from "react-router-dom";

  function ProjectList() {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        fetch("http://localhost:8000/project/", {
          method: "GET",
          headers: {
              "Content-Type": "application/json",
          },
        })
          .then((response) => {
              if (response.ok) {
                return response.json();
              }
              throw new Error("Failed to fetch projects data");
          })
          .then((data) => {
              setProjects(data);
          })
          .catch((error) => {
              console.error("Error fetching projects data:", error.message);
          });
    }, []);

    const delete_project = (project_id: number) => {
        fetch(`http://localhost:8000/project/${project_id}`, {
          method: "DELETE",
          headers: {
              "Content-Type": "application/json",
          },
        })
          .then((response) => {
              if (response.ok) {
                return response.json();
              } else {
                throw new Error("Failed to delete project");
              }
          })
          .then(() => {
              setProjects(
                projects.filter((project) => project.id !== project_id)
              );
          })
          .catch((error) => {
              console.error("Error deleting project:", error);
          });
    };

    const finish_project = (project_id: number) => {
        fetch(`http://localhost:8000/project/${project_id}`, {
          method: "PATCH",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({ is_finished: true }),
        })
          .then((response) => {
              if (response.ok) {
                return response.json();
              } else {
                throw new Error("Failed to finish project");
              }
          })
          .then(() => {
              setProjects(
                projects.map((project) =>
                    project.id === project_id
                      ? { ...project, is_finished: true }
                      : project
                )
              );
          })
          .catch((error) => {
              console.error("Error finishing project:", error);
          });
    };

    return (
        <>
          <Row>
              <Col xs={10}>
                <h1>Projects</h1>
              </Col>
              <Col xs={2}>
                <Link to="/projects/create">
                    <Button variant="primary" className="float-end">
                      Create project
                    </Button>
                </Link>
              </Col>
          </Row>

          {projects.map((project) => (
              <Card key={project.id} className="mb-3">
                <Card.Body>
                    <Row>
                      <Col>
                          <Card.Title>
                            {project.name} -
                            {project.is_finished ? " Finished" : " Not finished"}
                          </Card.Title>
                      </Col>
                      <Col xs={2} className="d-flex justify-content-end gap-2">
                          {!project.is_finished && (
                            <Button
                                variant="success"
                                onClick={() => finish_project(project.id)}
                            >
                                Finish
                            </Button>
                          )}
                          <Link to={`/projects/${project.id}`}>
                            <Button variant="primary">View</Button>
                          </Link>
                          <Link to={`/projects/${project.id}/edit`}>
                            <Button variant="warning">Edit</Button>
                          </Link>
                          <Button
                            variant="danger"
                            onClick={() => delete_project(project.id)}
                          >
                            Delete
                          </Button>
                      </Col>
                    </Row>

                    <Card.Text>{project.description}</Card.Text>
                </Card.Body>
              </Card>
          ))}
        </>
    );
  }

  export default ProjectList;
  ```
</details>

# 8. Edit Project

To create EditProject component: 
1. In the 'Projects' folder, create a subfolder titled 'EditProject'.
2. Within the 'EditProject' folder, create a file named 'ProjectEdit.tsx'.

The `FormData` interface defines the structure of the data expected for the project being edited - fields for `name`, `description`, and `is_finished`.

When the form is submitted, the `handleSubmit` function is triggered. It prevents the default form submission behavior, sends a PATCH request to update the project data at `http://localhost:8000/project/${project_id}`, and then redirects the user to the project's view page (next chapter) upon successful update. 

The `handleInputChange` function updates the form state as the user types into the form fields. It's called whenever there's a change in the input fields.

<details>
  <summary>EditProject.tsx Code</summary>

  ```tsx
  import { ChangeEvent, useEffect, useState } from "react";
  import { Button, Form, FormControl } from "react-bootstrap";
  import { useNavigate, useParams } from "react-router-dom";

  interface FormData {
    name: string;
    description: string;
    is_finished: boolean;
  }

  function ProjectEdit() {
   const { project_id } = useParams();
   const navigate = useNavigate();
   const [formData, setFormData] = useState<FormData>({
      name: "",
      description: "",
      is_finished: false,
   });

   useEffect(() => {
      fetch(`http://localhost:8000/project/${project_id}`, {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
         },
      })
         .then((response) => {
            if (response.ok) {
               return response.json();
            } else {
               throw new Error("Failed to fetch project data");
            }
         })
         .then((data) => {
            setFormData({
               name: data.name,
               description: data.description,
               is_finished: data.is_finished,
            });
         })
         .catch((error) => {
            console.error("Error fetching project data:", error.message);
         });
   }, []);

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      fetch(`http://localhost:8000/project/${project_id}`, {
         method: "PATCH",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(formData),
      })
         .then((response) => {
            if (!response.ok) {
               throw new Error("Failed to edit project");
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

   const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData({
         ...formData,
         [name]: value,
      });
   };

   return (
      <>
         <h1>Edit Project</h1>
         <Form onSubmit={handleSubmit}>
            <Form.Group>
               <Form.Label>Project Name</Form.Label>
               <FormControl
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
               />
            </Form.Group>
            <Form.Group>
               <Form.Label>Description</Form.Label>
               <FormControl
                  as="textarea"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
               />
            </Form.Group>
            <Form.Group>
               <Form.Check
                  type="checkbox"
                  label="Finished"
                  name="is_finished"
                  checked={formData.is_finished}
                  onChange={(e) =>
                     setFormData({
                        ...formData,
                        is_finished: e.target.checked,
                     })
                  }
               />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
               Update
            </Button>
         </Form>
      </>
   );
  }

  export default ProjectEdit;
  ```
</details>

In `App.tsx` we just need to import component `ProjectEdit` and add new route path. The `:project_id` part indicates a dynamic parameter in the URL, where any value can be substituted in place of `:project_id`.

<details>
  <summary>App.tsx Code</summary>

  ```tsx
  import { Route, BrowserRouter, Routes } from "react-router-dom";
  import { Container } from "react-bootstrap";
  import "bootstrap/dist/css/bootstrap.min.css";
  import ProjectEdit from "./components/Projects/EditProject/EditProject.tsx";;
  import ProjectList from "./components/Projects/ProjectsList/ProjectList.tsx";
  import Header from "./components/Header/Header.tsx";

  function App() {
    return (
        <BrowserRouter>
          <Header />
          <Container className="mt-5">
              <Routes>
                <Route path="/projects/">
                    <Route path="" element={<ProjectList />} />
                    <Route path=":project_id/edit" element={<ProjectEdit />} />
                </Route>
              </Routes>
          </Container>
        </BrowserRouter>
    );
  }

  export default App;
```
</details>

# 9. Project View
To create ProjectView component: 
1. In the 'Projects' folder, create a subfolder titled 'ProjectView'.
2. Within the 'ProjectView' folder, create a file named 'ProjectView.tsx'.

This component uses the `useState` hook to manage the state of the `project` object. Initially, it's set to `undefined`. 

The `useEffect` hook is called when the component mounts. It fetches the project data from the server using `fetch` API. If the request is successful, the project data is set in the state using `setProject`, otherwise it navigates the user back to the projects page ("/projects"). 

Function `delete_project` sends a DELETE request to the server to delete the project with the given `project_id`.

<details>
  <summary>ProjectView.tsx Code</summary>

  ```tsx
  import { useEffect, useState } from "react";
  import { Project } from "../../../interfaces/Project";
  import { Link, useNavigate, useParams } from "react-router-dom";
  import { Button } from "react-bootstrap";

  function ProjectView() {
   const navigate = useNavigate();
   const { project_id } = useParams();
   const [project, setProject] = useState<Project>();

   useEffect(() => {
      fetch(`http://localhost:8000/project/${project_id}`, {
         method: "GET",
         headers: {
            contentType: "application/json",
         },
      })
         .then((response) => {
            if (response.ok) {
               return response.json();
            } else {
               throw new Error("Failed to fetch project data");
            }
         })
         .then((data) => {
            setProject(data);
         })
         .catch((error) => {
            navigate("/projects", { replace: true });
            console.error("Error fetching project data:", error.message);
         });
   }, []);

   const delete_project = (project_id: number) => {
      fetch(`http://localhost:8000/project/${project_id}`, {
         method: "DELETE",
         headers: {
            "Content-Type": "application/json",
         },
      }).then((response) => {
         if (!response.ok) {
            throw new Error("Failed to delete project");
         }
         navigate("/projects", { replace: true });
      });
   };

   return (
      <>
         {project && (
            <>
               <h1>{project.name}</h1>
               <hr />
               <p>Finished: {project.is_finished ? "Yes" : "No"}</p>
               <p>{project.description}</p>
               <Link to={`/projects/${project.id}/edit`}>
                  <Button variant="warning">Edit</Button>
               </Link>
               <Button
                  variant="danger"
                  onClick={() => delete_project(project.id)}
                  className="ms-2"
               >
                  Delete
               </Button>
            </>
         )}
      </>
   );
  }

  export default ProjectView;
  ```
</details>

In `App.tsx` we just need to import component `ProjectView` and add new route path. The `:project_id` part indicates a dynamic parameter in the URL, where any value can be substituted in place of `:project_id`.

<details>
  <summary>App.tsx Code</summary>

  ```tsx
  import { Route, BrowserRouter, Routes } from "react-router-dom";
  import { Container } from "react-bootstrap";
  import "bootstrap/dist/css/bootstrap.min.css";
  import ProjectEdit from "./components/Projects/EditProject/EditProject.tsx";;
  import ProjectList from "./components/Projects/ProjectsList/ProjectList.tsx";
  import Header from "./components/Header/Header.tsx";

  function App() {
    return (
        <BrowserRouter>
          <Header />
          <Container className="mt-5">
              <Routes>
                <Route path="/projects/">
                    <Route path="" element={<ProjectList />} />
                    <Route path=":project_id/edit" element={<ProjectEdit />} />
                </Route>
              </Routes>
          </Container>
        </BrowserRouter>
    );
  }

  export default App;
  ```
</details>

# 10. Create Project

To create CreateProject component: 
1. In the 'Projects' folder, create a subfolder titled 'CreateProject'.
2. Within the 'CreateProject' folder, create a file named 'CreateProject.tsx'.

`FormData` interface defines the structure of the form data. It consists of two fields: `name` and `description`, both of type string. 

Inside the `ProjectCreate` function, it initializes a state variable `formData` using `useState`. This state variable holds the form data (name and description). It utilizes the `useNavigate` hook from `react-router-dom` to get a function for navigation. 

Function `handleSubmit()` is triggered when the form is submitted. It makes a POST request to a local endpoint `http://localhost:8000/project`, sending the form data as JSON in the request body. If the response is successful, it parses the JSON response and navigates to the newly created project's page using the `navigate` function.

Function `handleInputChange()` is called when there's a change in any of the input fields and updates the `formData` state by spreading the existing state and updating the field corresponding to the changed input. 

<details>
  <summary>CreateProject.tsx Code</summary>

  ```tsx
  import React, { ChangeEvent, useState } from "react";
  import { Button, Form, FormControl } from "react-bootstrap";
  import { useNavigate } from "react-router-dom";

  interface FormData {
    name: string;
    description: string;
  }

  function ProjectCreate() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        description: "",
    });

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        fetch(`http://localhost:8000/project`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
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

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
    };

    return (
        <>
          <h1>Create Project</h1>
          <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>Project Name</Form.Label>
                <FormControl
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <FormControl
                    as="textarea"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="mt-3">
                Create
              </Button>
          </Form>
        </>
    );
  }

  export default ProjectCreate;
  ```

</details>

In `App.tsx` we just need to import component `ProjectCreate` and add new route path. 

<details>
  <summary>App.tsx Code</summary>

  ```tsx
  import { Route, BrowserRouter, Routes } from "react-router-dom";
  import { Container } from "react-bootstrap";
  import "bootstrap/dist/css/bootstrap.min.css";
  import ProjectEdit from "./components/Projects/EditProject/EditProject.tsx";
  import ProjectView from "./components/Projects/ProjectView/ProjectView.tsx";
  import ProjectCreate from "./components/Projects/CreateProject/CreateProject.tsx";
  import ProjectList from "./components/Projects/ProjectsList/ProjectList.tsx";
  import Header from "./components/Header/Header.tsx";

  function App() {
    return (
        <BrowserRouter>
          <Header />
          <Container className="mt-5">
              <Routes>
                <Route path="/projects/">
                    <Route path="create" element={<ProjectCreate />} />
                    <Route path="" element={<ProjectList />} />
                    <Route path=":project_id" element={<ProjectView />} />
                    <Route path=":project_id/edit" element={<ProjectEdit />} />
                </Route>
              </Routes>
          </Container>
        </BrowserRouter>
    );
  }

  export default App;
  ```
</details>


# 11. Register User Endpoint

> [!TIP]
> Available checkpoint: [Register_user](https://github.com/martinrenner/KI-GUI/blob/main/CHECKPOINTS/11-register_user.zip)


Implementing a user registration endpoint is a foundational step in creating a secure and functional web application. This tutorial outlines the process of setting up the necessary backend components using FastAPI, SQLAlchemy, and Pydantic to register a new user. The approach includes defining user models, creating Pydantic schemas for data validation, writing a service layer for business logic, and finally, routing to handle user registration requests.

## User Model

The user model defines the structure of user data within the database. It includes fields for user identification, personal information, and authentication details such as the hashed password. This model is essential for creating and querying user records in the database.

<details>
  <summary>User Model Code</summary>

  ```python
  from sqlmodel import Field, SQLModel, BIGINT, VARCHAR
  from sqlalchemy import Column
  
  
  class Test(SQLModel, table=True):
      __tablename__ = "test"
  
      id: int = Field(sa_column=Column(BIGINT, primary_key=True, autoincrement=True))
  
  
  class Project(SQLModel, table=True):
      __tablename__ = "project"
  
      id: int = Field(sa_column=Column(BIGINT, primary_key=True, autoincrement=True))
      name: str
      description: str
      is_finished: bool = False
      user_id: int = Field(foreign_key="user.id")
  
  
  class User(SQLModel, table=True):
      __tablename__ = "user"
  
      id: int = Field(sa_column=Column(BIGINT, primary_key=True, autoincrement=True))
      name: str
      surname: str
      email: str = Field(sa_column=Column(VARCHAR, unique=True))
      hashed_password: str
  ```
</details>

## User Schema

Pydantic schemas are used for request validation, serialization, and documentation purposes. The UserCreate schema ensures that incoming data for user registration is valid and meets the application's requirements. The UserRead schema is designed for data output, omitting sensitive information like passwords.

<details>
  <summary>User Schema Code</summary>
  
  ```python
  from pydantic import BaseModel, ConfigDict, Field, field_validator, EmailStr
  from pydantic_core.core_schema import FieldValidationInfo
  import re
  from models import User
  
  
  class UserBase(BaseModel):
      model_config = ConfigDict(extra="forbid")
  
  
  class UserCreate(UserBase):
      name: str = Field(..., examples=["Your name"], min_length=3, max_length=100)
      surname: str = Field(..., examples=["Your surname"], min_length=3, max_length=100)
      email: EmailStr = Field(..., examples=["email@example.com"], min_length=3, max_length=100)
      password: str = Field(..., examples=["MyPassword123"], min_length=3, max_length=100)
      password_confirmation: str = Field(..., examples=["MyPassword123"], min_length=3, max_length=100)
  
      @field_validator("name", mode="before")
      def validate_name(cls, value):
          if len(value) < 3 or len(value) > 100:
              raise ValueError("Name must be between 3 and 100 characters long")
          return value
  
      @field_validator("surname", mode="before")
      def validate_surname(cls, value):
          if len(value) < 3 or len(value) > 100:
              raise ValueError("Surname must be between 3 and 100 characters long")
          return value
  
      @field_validator("email", mode="before")
      def validate_email(cls, value):
          if len(value) < 3 or len(value) > 100:
              raise ValueError("Invalid email length")
          if re.match(r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$", value) is None:
              raise ValueError("Invalid email address")
          return value
  
      @field_validator("password", mode="before")
      def validate_password(cls, value, info: FieldValidationInfo):
          if len(value) < 3 or len(value) > 100:
              raise ValueError("Password must be between 3 and 100 characters long")
          return value
  
      @field_validator("password_confirmation", mode="before")
      def validate_password_confirmation(cls, value, info: FieldValidationInfo):
          password = info.data.get("password")
          if value != password:
              raise ValueError("Passwords do not match")
          return value
  
  
  class UserRead(UserBase):
      id: int
      name: str
      surname: str
      email: EmailStr
  
      @classmethod
      def from_user(cls, user: User):
          return cls(
              id=user.id,
              name=user.name,
              surname=user.surname,
              email=user.email,
          )
  ```
</details>

## User Service

The user service layer encapsulates the business logic for user management, including the insertion of new user records into the database. This layer abstracts away the complexity of database operations from the routing logic.

<details>
  <summary>User Service Code</summary>
  
  ```python
  from sqlmodel import Session
  from schemas.user import UserCreate
  from models import User
  from database import commit_and_handle_exception, refresh_and_handle_exception
  
  
  class UserService:
      def insert_user_db(self, user_create: UserCreate, session: Session):
          new_user = User(
              name=user_create.name.strip(),
              surname=user_create.surname.strip(),
              email=user_create.email.strip(),
              hashed_password=user_create.password.strip(),
          )
          session.add(new_user)
          commit_and_handle_exception(session)
          refresh_and_handle_exception(session, new_user)
          return new_user
  
  ```
</details>

## User Router

The user router handles HTTP requests related to user operations. The create_user endpoint specifically deals with registering new users. It validates incoming data against the UserCreate schema, leverages the UserService to insert the new user record, and returns a sanitized UserRead object.

<details>
  <summary>User Router Code</summary>

  ```python
  from typing import Annotated
  from fastapi import APIRouter, Depends
  from services.user_service import UserService
  from schemas.user import UserCreate, UserRead
  from database import get_session
  from sqlmodel import Session
  
  user_router = APIRouter(prefix="/user", tags=["User"])
  
  db_dependency = Annotated[Session, Depends(get_session)]
  
  user_service = UserService()
  
  
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
</details>

## Include User Router

Finally you need to include new router in `main.py`

<details>
  <summary>Include User Router Code</summary>
  
  ```python
  from fastapi import FastAPI
  import os
  from database_init import initialize_database
  from routers.project import project_router  # Import our new projet_router
  from routers.user import user_router  # Import our new user_router
  from fastapi.middleware.cors import CORSMiddleware
  
  ALLOWED_ORIGIN: list = os.getenv("CORS_ALLOWED_ORIGIN", "http://localhost:8000").replace(" ", "").split(",")
  ALLOWED_METHODS: list = os.getenv("CORS_ALLOWED_METHODS", "GET, POST, PUT, DELETE, PATCH").replace(" ", "").split(",")
  ALLOWED_HEADERS: list = os.getenv("CORS_ALLOWED_HEADERS", "*").replace(" ", "").split(",")
  ALLOW_CREDENTIALS: bool = os.getenv("CORS_ALLOW_CREDENTIALS", "TRUE") == "TRUE"
  MAX_AGE: int = int(os.getenv("CORS_MAX_AGE", 600))
  
  
  app = FastAPI()
  app.include_router(project_router)
  app.include_router(user_router)
  
  app.add_middleware(
      CORSMiddleware,
      allow_origins=ALLOWED_ORIGIN,
      allow_credentials=ALLOW_CREDENTIALS,
      allow_methods=ALLOWED_METHODS,
      allow_headers=ALLOWED_HEADERS,
      max_age=MAX_AGE,
  )
  
  
  @app.get("/")
  def root():
      return {"message": "Hello World"}
  
  
  initialize_database()
  ```
</details>

This structured approach ensures that the user registration process is secure, efficient, and maintainable, laying a solid foundation for further development of the application's authentication and authorization features.

# 12. Login User Endpoint

> [!TIP]
> Available checkpoint: [Login_user](https://github.com/martinrenner/KI-GUI/blob/main/CHECKPOINTS/12-login_user.zip)

Creating a secure login system is essential for any web application that handles user accounts. This tutorial covers the process of implementing a login endpoint in FastAPI, which authenticates users by verifying their credentials and generating a JWT (JSON Web Token) for access control.

## Access Token

The AccessToken class is responsible for creating and verifying JWTs. It uses the jose library to encode user-specific information into tokens that are signed with a secret key. These tokens include an expiry time to ensure that they are valid for a limited period.

<details>
  <summary>Access Token Code</summary>
  
  ```python
  from datetime import datetime, timedelta
   import os
   from typing import Annotated
   from fastapi import Depends, HTTPException
   from fastapi.security import OAuth2PasswordBearer
   from jose import jwt
   from models import User
  
   SECRET_KEY: str = os.getenv("JWT_SECRET_KEY", "ULTRA_SECRET_KEY")
   ALGORITHM: str = os.getenv("JWT_ALGORITHM", "HS256")
   ACCESS_TOKEN_EXPIRE_MINUTES: int = int(os.getenv("JWT_ACCESS_TOKEN_EXPIRE_MINUTES", 10))
  
   oaouth2_bearer = OAuth2PasswordBearer(tokenUrl="auth/token")
  
  
   class AccessToken:
       @staticmethod
       def create_token(user: User):
           token_payload = {
               "sub": user.email,
               "id": user.id,
               "iat": datetime.utcnow(),
               "exp": datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES),
               "typ": "Access",
           }
           return jwt.encode(token_payload, SECRET_KEY, algorithm=ALGORITHM)
  
       @staticmethod
       def verify_token(token: Annotated[str, Depends(oaouth2_bearer)]):
           try:
               payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
               email: str = payload.get("sub")
               user_id: int = payload.get("id")
               exp: int = payload.get("exp")
               typ: str = payload.get("typ")
  
               if exp is not None and exp < datetime.utcnow().timestamp():
                   raise HTTPException(status_code=401, detail="Access token expired")
  
               if email is None or user_id is None or typ != "Access":
                   raise HTTPException(status_code=401, detail="Invalid access token")
               return User(email=email, id=user_id)
           except jwt.JWTError:
               raise HTTPException(status_code=401, detail="Invalid token")
  ```
</details>

## Token Schema

The `TokenRead` schema defines the structure of the response that the login endpoint will return. This response includes the access token, its expiry time, and the token type (Bearer).

<details>
  <summary>Token Schema Code</summary>
  
  ```python
  from pydantic import BaseModel, ConfigDict, Field, field_validator
   from typing import Optional
   from tokens.access_token import AccessToken
   import os
  
   ACCESS_TOKEN_EXPIRE_MINUTES: int = int(os.getenv("JWT_ACCESS_TOKEN_EXPIRE_MINUTES", 10))
  
  
   class TokenBase(BaseModel):
       model_config = ConfigDict(extra="forbid")
  
  
   class TokenRead(TokenBase):
       access_token: str
       expires_in: int
       token_type: str
  
       @classmethod
       def from_auth(cls, access_token: AccessToken):
           return cls(
               access_token=access_token,
               expires_in=ACCESS_TOKEN_EXPIRE_MINUTES * 60,
               token_type="Bearer",
           )
  ```
</details>

## User Schema

The UserLogin schema is used to validate the login request data. It requires the user's email and password.

<details>
  <summary>User Schema Code</summary>
  
  ```python
  from pydantic import BaseModel, ConfigDict, Field, field_validator, EmailStr
  from pydantic_core.core_schema import FieldValidationInfo
  import re
  
  
  class UserBase(BaseModel):
      model_config = ConfigDict(extra="forbid")
  
  
  class UserCreate(UserBase):
      name: str = Field(..., examples=["Your name"], min_length=3, max_length=100)
      surname: str = Field(..., examples=["Your surname"], min_length=3, max_length=100)
      email: EmailStr = Field(..., examples=["email@example.com"], min_length=3, max_length=100)
      password: str = Field(..., examples=["MyPassword123"], min_length=3, max_length=100)
      password_confirmation: str = Field(..., examples=["MyPassword123"], min_length=3, max_length=100)
  
      @field_validator("name", mode="before")
      def validate_name(cls, value):
          if len(value) < 3 or len(value) > 100:
              raise ValueError("Name must be between 3 and 100 characters long")
          return value
  
      @field_validator("surname", mode="before")
      def validate_surname(cls, value):
          if len(value) < 3 or len(value) > 100:
              raise ValueError("Surname must be between 3 and 100 characters long")
          return value
  
      @field_validator("email", mode="before")
      def validate_email(cls, value):
          if len(value) < 3 or len(value) > 100:
              raise ValueError("Invalid email length")
          if re.match(r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$", value) is None:
              raise ValueError("Invalid email address")
          return value
  
      @field_validator("password", mode="before")
      def validate_password(cls, value, info: FieldValidationInfo):
          if len(value) < 3 or len(value) > 100:
              raise ValueError("Password must be between 3 and 100 characters long")
          return value
  
      @field_validator("password_confirmation", mode="before")
      def validate_password_confirmation(cls, value, info: FieldValidationInfo):
          password = info.data.get("password")
          if value != password:
              raise ValueError("Passwords do not match")
          return value
  
  
  class UserLogin(UserBase):
      email: str
      password: str
  ```
</details>

## AuthService

The AuthService class contains methods to verify a user's email and password against the stored values in the database. It leverages the bcrypt library to safely compare hashed passwords.
<details>
  <summary>Auth Service Code</summary>
  
  ```python
  from fastapi import HTTPException
   from sqlmodel import Session, select
   from schemas.user import UserLogin
   from models import User
   from fastapi.security import OAuth2PasswordBearer
   from passlib.context import CryptContext
  
  
   bcrypt_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
  
  
   class AuthService:
       def verify_user_and_password(self, user_data: OAuth2PasswordBearer, session: Session):
           user_data = UserLogin(email=user_data.username, password=user_data.password)
           user = self._verify_user(user_data, session)
           self._verify_password(user_data.password, user.hashed_password)
           return user
  
       def _verify_user(self, user_login: User, session: Session):
           query = select(User).where(User.email == user_login.email.strip())
           user = session.exec(query).first()
           if not user:
               raise HTTPException(status_code=401, detail="Invalid user")
           return user
  
       def _verify_password(self, plain_password: str, hashed_password: str):
           if not bcrypt_context.verify(plain_password.strip(), hashed_password):
               raise HTTPException(status_code=401, detail="Invalid password")
  ```
</details>

## Hash Register Password

When registering a new user, their password is hashed using bcrypt before being stored in the database. This ensures that plain-text passwords are never stored or transmitted.

<details>
  <summary>Hash User Password Code</summary>
  
  ```python
  from sqlmodel import Session
  from schemas.user import UserCreate
  from models import User
  from database import commit_and_handle_exception, refresh_and_handle_exception
  from services.auth_service import bcrypt_context
  
  
  class UserService:
      def insert_user_db(self, user_create: UserCreate, session: Session):
          new_user = User(
              name=user_create.name.strip(),
              surname=user_create.surname.strip(),
              email=user_create.email.strip(),
              hashed_password=bcrypt_context.hash(user_create.password.strip()),
          )
          session.add(new_user)
          commit_and_handle_exception(session)
          refresh_and_handle_exception(session, new_user)
          return new_user
  ```
</details>

## Include Auth Router

Finally, the `auth_router` is included in the FastAPI application to handle authentication requests. This router defines the `/auth/token` endpoint, which processes login requests, authenticates users, and returns JWTs if the credentials are valid.

<details>
  <summary>
	  Auth Router Code
  </summary>
	
  ```python
	from typing import Annotated
	from fastapi import APIRouter, Depends
	from fastapi.security import OAuth2PasswordRequestForm
	from tokens.access_token import AccessToken
	from services.auth_service import AuthService
	from schemas.token import TokenRead
	from database import get_session
	from sqlmodel import Session
	import os

	ACCESS_TOKEN_EXPIRE_MINUTES: int = int(os.getenv("JWT_ACCESS_TOKEN_EXPIRE_MINUTES", 10))

	auth_router = APIRouter(prefix="/auth", tags=["Auth"])

	db_dependency = Annotated[Session, Depends(get_session)]

	auth_service = AuthService()


	@auth_router.post("/token", response_model=TokenRead)
	def token_user(user_data: Annotated[OAuth2PasswordRequestForm, Depends()], session: db_dependency):
    """
    ## Generate a token

    This endpoint will generate a token based on the username(email) and password provided.

    Args:
    - **user_data** (Annotated[OAuth2PasswordRequestForm, Depends()]): The user data containing the username and password.

    Returns:
    - `token `: The token read model containing the access token.

    """
    user = auth_service.verify_user_and_password(user_data, session)
    return TokenRead.from_auth(AccessToken.create_token(user))

```

</details>

<details>
  <summary>Include Auth Router Code</summary>
  
  ```python
  from fastapi import FastAPI
  import os
  from database_init import initialize_database
  from routers.project import project_router  # Import our new projet_router
  from routers.user import user_router  # Import our new user_router
  from routers.auth import auth_router  # Import our new auth_router
  from fastapi.middleware.cors import CORSMiddleware
  
  ALLOWED_ORIGIN: list = os.getenv("CORS_ALLOWED_ORIGIN", "http://localhost:8000").replace(" ", "").split(",")
  ALLOWED_METHODS: list = os.getenv("CORS_ALLOWED_METHODS", "GET, POST, PUT, DELETE, PATCH").replace(" ", "").split(",")
  ALLOWED_HEADERS: list = os.getenv("CORS_ALLOWED_HEADERS", "*").replace(" ", "").split(",")
  ALLOW_CREDENTIALS: bool = os.getenv("CORS_ALLOW_CREDENTIALS", "TRUE") == "TRUE"
  MAX_AGE: int = int(os.getenv("CORS_MAX_AGE", 600))
  
  
  app = FastAPI()
  app.include_router(project_router)
  app.include_router(user_router)
  app.include_router(auth_router)
  
  app.add_middleware(
      CORSMiddleware,
      allow_origins=ALLOWED_ORIGIN,
      allow_credentials=ALLOW_CREDENTIALS,
      allow_methods=ALLOWED_METHODS,
      allow_headers=ALLOWED_HEADERS,
      max_age=MAX_AGE,
  )
  
  
  @app.get("/")
  def root():
      return {"message": "Hello World"}
  
  
  initialize_database()
  ```
</details>

By integrating these components, you establish a secure authentication system that protects user credentials and regulates access to your application's resources through JWTs. This system ensures that only authenticated users can perform actions requiring authorization, enhancing your application's security.

# 13. Project Authentication

> [!TIP]
> Available checkpoint: [Project_auth](https://github.com/martinrenner/KI-GUI/blob/main/CHECKPOINTS/13-project_auth.zip)

Integrating authentication into your project management system ensures that users can only access projects they are authorized to view, create, modify, or delete. This section outlines how to implement project-specific authentication and authorization using FastAPI, Pydantic, and SQLAlchemy, ensuring secure access control to project resources based on user sessions.

## Project Router

The project router defines the endpoints for creating, retrieving, updating, and deleting project resources. Authentication is enforced by extracting the user's identity from the access token, which is then used to validate access permissions for the requested operations.

<details>
  <summary>Project Router Code</summary>
  
  ```python
  from typing import Annotated
  from fastapi import APIRouter, Depends
  from tokens.access_token import AccessToken
  from services.project_service import ProjectService
  from schemas.project import ProjectRead, ProjectCreate, ProjectUpdatePartial
  from database import get_session
  from sqlmodel import Session
  
  
  project_router = APIRouter(prefix="/project", tags=["Project"])
  
  db_dependency = Annotated[Session, Depends(get_session)]
  user_dependency = Annotated[dict, Depends(AccessToken.verify_token)]
  
  project_service = ProjectService()
  
  
  @project_router.post("/", response_model=ProjectRead)
  def create_project(project_create: ProjectCreate, user: user_dependency, session: db_dependency):
      """
      ## Create a new project
  
      This endpoint will create a new project in the database.
  
      - **project_create**: Project object
  
      Returns:
      - `project`: Project object
      """
      new_project = project_service.insert_project_db(project_create, user.id, session)
      return ProjectRead.from_project(new_project)
  
  
  @project_router.get("/{project_id}", response_model=ProjectRead)
  def read_project(project_id: int, user: user_dependency, session: db_dependency):
      """
      ## Retrieve a project from the database
  
      This endpoint will return a project based on the ID passed on provided project_id.
  
      - **project_id**: ID of the project to retrieve
  
      Returns:
      - `project`: Project object
      """
      project = project_service.select_project_by_id_db(project_id, user.id, session)
      return ProjectRead.from_project(project)
  
  
  @project_router.get("/", response_model=list[ProjectRead])
  def read_all_projects(user: user_dependency, session: db_dependency):
      """
      ## Retrieve all projects from the database
  
      This endpoint will return all projects in the database.
  
      Returns:
      - `projects`: List of project objects
      """
      projects = project_service.select_all_projects_db(user.id, session)
      return [ProjectRead.from_project(project) for project in projects]
  
  
  @project_router.patch("/{project_id}", response_model=ProjectRead)
  def update_project_partial(
      project_id: int, project_update: ProjectUpdatePartial, user: user_dependency, session: db_dependency
  ):
      """
      ## Update a project (partial)
  
      This endpoint will update a project in the database.
  
      - **project_id**: ID of the project to update
      - **project_update**: Project object
  
      Returns:
      - `project`: Project object
      """
      updated_project = project_service.update_partial_project_by_id_db(project_id, project_update, user.id, session)
      return ProjectRead.from_project(updated_project)
  
  
  @project_router.delete("/{project_id}")
  def delete_project(project_id: int, user: user_dependency, session: db_dependency):
      """
      ## Delete a project
  
      This endpoint will delete a project from the database.
  
      - **project_id**: ID of the project to delete
  
      Returns:
      - `message`: Message indicating that the project was deleted
      """
      project_service.delete_project_by_id_db(project_id, user.id, session)
      return {"message": "Project deleted"}
  ```
</details>

Each endpoint uses the user_dependency, which is a FastAPI Depends dependency that invokes AccessToken.verify_token. This dependency ensures that only authenticated users can interact with the project endpoints, and it also passes the user's identity to the service layer for authorization checks.

## Project Service

The project service layer contains the business logic for managing project resources. It interacts with the database to perform CRUD operations and implements authorization logic to ensure that users can only access or modify their projects.

<details>
  <summary>Project Service Code</summary>
  
  ```python
  from fastapi import HTTPException
  from helpers import update_object_attributes
  from models import Project
  from sqlmodel import Session, select
  from schemas.project import ProjectCreate, ProjectUpdatePartial
  from database import commit_and_handle_exception, refresh_and_handle_exception
  
  
  class ProjectService:
  
      def insert_project_db(self, project_create: ProjectCreate, user_id: int, session: Session):
          new_project = Project(
              name=project_create.name.strip(), description=project_create.description.strip(), user_id=user_id
          )
          session.add(new_project)
          commit_and_handle_exception(session)
          refresh_and_handle_exception(session, new_project)
          return new_project
  
      def select_project_by_id_db(self, project_id: int, user_id: int, session: Session):
          project = self._get_project_by_id(project_id, session)
          self._check_project_access(project, user_id)
          return project
  
      def select_all_projects_db(self, user_id: int, session: Session):
          statement = select(Project).where(Project.user_id == user_id)
          projects = session.exec(statement).all()
          return projects
  
      def update_partial_project_by_id_db(
          self, project_id: int, project_update: ProjectUpdatePartial, user_id: int, session: Session
      ):
          project = self._get_project_by_id(project_id, session)
          self._check_project_access(project, user_id)
          update_object_attributes(project, list(Project.model_json_schema()["properties"].keys()), project_update)
          commit_and_handle_exception(session)
          refresh_and_handle_exception(session, project)
          return project
  
      def delete_project_by_id_db(self, project_id: int, user_id: int, session: Session):
          project = self._get_project_by_id(project_id, session)
          self._check_project_access(project, user_id)
          session.delete(project)
          commit_and_handle_exception(session)
  
      def _get_project_by_id(self, project_id: int, session: Session):
          project = session.get(Project, project_id)
          if project is None:
              raise HTTPException(status_code=404, detail="Project not found")
          return project
  
      def _check_project_access(self, project: Project, user_id: int):
          if project.user_id != user_id:
              raise HTTPException(status_code=403, detail="Forbidden")
  ```
</details>

Authorization checks are performed by comparing the user_id associated with a project against the user_id extracted from the access token. This ensures that users can only manipulate projects they own, providing a secure and user-specific experience.

# 14. Register and Login Forms

> [!TIP]
> Available checkpoint: [Register_and_login_form](https://github.com/martinrenner/KI-GUI/blob/main/CHECKPOINTS/14-register_and_login_form.zip)

This guide will demonstrate how to implement registration and login forms in React and integrate them into the React Router for navigation. Implementing these forms is crucial for managing user authentication and ensuring that users can securely access and interact with your application's features.

## Register Form

The registration form is essential for capturing new user details and storing them in your system. It typically includes fields for the user's name, surname, email, password, and password confirmation. Below is an example implementation in TypeScript using React's useState hook for form state management, and React Bootstrap for styling.

<details>
  <summary>Register Component Code</summary>

  ```typescript
  import { useState, ChangeEvent, FormEvent } from "react";
   import { Button, Form } from "react-bootstrap";
   import { useNavigate } from "react-router-dom";
  
   interface FormData {
     name: string;
     surname: string;
     email: string;
     password: string;
     password_confirmation: string;
   }
  
   function RegisterForm() {
     const [formData, setFormData] = useState<FormData>({
       name: "",
       surname: "",
       email: "",
       password: "",
       password_confirmation: "",
     });
  
     const [errors, setErrors] = useState<{ [key: string]: string }>({});
     const [errorMessage, setErrorMessage] = useState<string>("");
     const navigate = useNavigate();
  
     const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
       const { name, value } = e.target;
  
       setFormData({
         ...formData,
         [name]: value,
       });
     };
  
     const validateForm = () => {
       let isValid = true;
       const newErrors: { [key: string]: string } = {};
  
       // Validate name
       if (!formData.name) {
         newErrors.name = "Name is required";
       } else if (formData.name.length < 3 || formData.name.length > 100) {
         newErrors.name = "Name must be between 3 and 100 characters";
       }
  
       // Validate surname
       if (!formData.surname) {
         newErrors.surname = "Surname is required";
       } else if (formData.surname.length < 3 || formData.surname.length > 100) {
         newErrors.surname = "Surname must be between 3 and 100 characters";
       }
  
       // Validate email
       if (!formData.email) {
         newErrors.email = "Email is required";
       } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
         newErrors.email = "Invalid email address";
       } else if (formData.email.length < 3 || formData.email.length > 100) {
         newErrors.email = "Email must be between 3 and 100 characters";
       }
  
       // Validate password
       if (!formData.password) {
         newErrors.password = "Password is required";
       } else if (formData.password.length < 3 || formData.password.length > 100) {
         newErrors.password = "Password must be between 3 and 100 characters";
       }
  
       // Validate password confirmation
       if (!formData.password_confirmation) {
         newErrors.password_confirmation = "Password confirmation is required";
       } else if (formData.password !== formData.password_confirmation) {
         newErrors.password_confirmation =
           "Password and password confirmation must match";
       }
  
       setErrors(newErrors);
       isValid = Object.keys(newErrors).length === 0;
       return isValid;
     };
  
     const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
       e.preventDefault();
  
       if (validateForm()) {
         fetch("http://localhost:8000/user", {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify(formData),
         })
           .then((response) => {
             if (response.ok) {
               navigate("/login", { replace: true });
             } else {
               setErrorMessage("Registration failed");
             }
           })
           .catch((error) => {
             console.error("Error:", error);
             setErrorMessage("Failed to register");
           });
       }
     };
  
     return (
       <>
         <h1>Register</h1>
         {errorMessage && <div className="text-danger">{errorMessage}</div>}
         <Form onSubmit={handleSubmit}>
           <Form.Group>
             <Form.Label>Name</Form.Label>
             <Form.Control
               type="text"
               name="name"
               value={formData.name}
               onChange={handleInputChange}
             />
             {errors.name && <div className="text-danger">{errors.name}</div>}
           </Form.Group>
           <Form.Group>
             <Form.Label>Surname</Form.Label>
             <Form.Control
               type="text"
               name="surname"
               value={formData.surname}
               onChange={handleInputChange}
             />
             {errors.surname && (
               <div className="text-danger">{errors.surname}</div>
             )}
           </Form.Group>
           <Form.Group>
             <Form.Label>Email</Form.Label>
             <Form.Control
               type="email"
               name="email"
               value={formData.email}
               onChange={handleInputChange}
             />
             {errors.email && <div className="text-danger">{errors.email}</div>}
           </Form.Group>
           <Form.Group>
             <Form.Label>Password</Form.Label>
             <Form.Control
               type="password"
               name="password"
               value={formData.password}
               onChange={handleInputChange}
             />
             {errors.password && (
               <div className="text-danger">{errors.password}</div>
             )}
           </Form.Group>
           <Form.Group>
             <Form.Label>Confirm Password</Form.Label>
             <Form.Control
               type="password"
               name="password_confirmation"
               value={formData.password_confirmation}
               onChange={handleInputChange}
             />
             {errors.password_confirmation && (
               <div className="text-danger">{errors.password_confirmation}</div>
             )}
           </Form.Group>
           <Button variant="primary" type="submit" className="mt-3">
             Register
           </Button>
         </Form>
       </>
     );
   }
  
   export default RegisterForm;
  ```
</details>

This form includes input change handling, form validation to ensure data integrity before submission, and navigation to the login page upon successful registration.

## Login Form

The login form allows existing users to authenticate by providing their email and password. Similar to the registration form, it employs useState for form state management and React Bootstrap for the user interface.

<details>
  <summary>Login Component Code</summary>

  ```typescript
  import { useState, ChangeEvent, FormEvent, useContext } from "react";
   import { useNavigate } from "react-router-dom";
   import {
     Button,
     Form,
     FormControl,
     FormGroup,
     FormText,
   } from "react-bootstrap";
  
   interface FormData {
     email: string;
     password: string;
   }
  
   function LoginForm() {
     const [formData, setFormData] = useState<FormData>({
       email: "",
       password: "",
     });
  
     const navigate = useNavigate();
  
     const [errors, setErrors] = useState<{ [key: string]: string }>({});
     const [errorMessage, setErrorMessage] = useState<string>("");
  
     const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
       const { name, value } = e.target;
  
       setFormData({
         ...formData,
         [name]: value,
       });
     };
  
     const validateForm = () => {
       let isValid = true;
       const newErrors: { [key: string]: string } = {};
  
       // Validate email
       if (!formData.email) {
         newErrors.email = "Email is required";
       } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
         newErrors.email = "Invalid email address";
       } else if (formData.email.length < 3 || formData.email.length > 100) {
         newErrors.email = "Email must be between 3 and 100 characters";
       }
  
       // Validate password
       if (!formData.password) {
         newErrors.password = "Password is required";
       } else if (formData.password.length < 3 || formData.password.length > 100) {
         newErrors.password = "Password must be between 3 and 100 characters";
       }
  
       setErrors(newErrors);
       isValid = Object.keys(newErrors).length === 0;
       return isValid;
     };
  
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
             console.log(data.access_token);
             navigate("/projects");
           })
           .catch((error) => {
             console.error("Error:", error);
             setErrorMessage("An error occurred");
           });
       }
     };
  
     return (
       <>
         <h1>Login</h1>
         {errorMessage && <div className="error">{errorMessage}</div>}
         <Form onSubmit={handleSubmit}>
           <FormGroup>
             <Form.Label>Email</Form.Label>
             <FormControl
               type="email"
               name="email"
               value={formData.email}
               onChange={handleInputChange}
             ></FormControl>
             {errors.email && (
               <FormText className="text-danger"> * {errors.email}</FormText>
             )}
           </FormGroup>
           <FormGroup>
             <Form.Label>Password</Form.Label>
             <FormControl
               type="password"
               name="password"
               value={formData.password}
               onChange={handleInputChange}
             ></FormControl>
             {errors.password && (
               <FormText className="text-danger"> * {errors.password}</FormText>
             )}
           </FormGroup>
           <Button variant="primary" type="submit" className="mt-3">
             Login
           </Button>
         </Form>
       </>
     );
   }
  
   export default LoginForm;
  ```
</details>

The login form includes functionality to validate user input and navigate to the projects page upon successful authentication.

## Creating Login and Register Routes

To integrate these forms into your application, you'll need to modify your React Router setup to include routes for the login and registration pages. This ensures that users can navigate to these forms within your application.

<details>
  <summary>React Router Code</summary>
  
  ```typescript
  import ProjectCreate from "./components/Projects/CreateProject/CreateProject.tsx";
   import ProjectList from "./components/Projects/ProjectsList/ProjectList.tsx";
   import Header from "./components/Header/Header.tsx";
   import Login from "./components/Login/Login.tsx";
   import Register from "./components/Register/Register.tsx";
  
   function App() {
     return (
       <BrowserRouter>
         <Header />
         <Container className="mt-5">
           <Routes>
             <Route path="login" element={<Login />} />
             <Route path="register" element={<Register />} />
             <Route path="/projects/">
               <Route path="create" element={<ProjectCreate />} />
               <Route path="" element={<ProjectList />} />
               <Route path=":project_id" element={<ProjectView />} />
               <Route path=":project_id/edit" element={<ProjectEdit />} />
             </Route>
           </Routes>
         </Container>
       </BrowserRouter>
     );
   }
  
   export default App;
  ```
</details>

By integrating these routes, you enable your application to handle user authentication through a structured and user-friendly interface. This setup facilitates secure access to application features and enhances the overall user experience.

# 15. Creating Token Context with React Context API

> [!TIP]
> Available checkpoint: [Token_context](https://github.com/martinrenner/KI-GUI/blob/main/CHECKPOINTS/15-token_context.zip)

Utilizing the Context API in React is a strategic approach for managing global state, such as user authentication tokens. This method provides a more efficient and straightforward way to pass data through the component tree without having to manually prop-drill from parent to child components. In this section, we'll dive into how to leverage the Context API for storing and managing user access tokens across your React application.

## What is ContextAPI?

The Context API is a React feature that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application. It's designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language. Hence, for managing authentication tokens, which are needed across many components in an application, Context API proves to be particularly useful.

## TokenContext

First, create a folder named `/context` inside `/frontend/src/components`. In this new folder, you'll create two files: `TokenContext.ts` and `TokenContextProvider.tsx`.

`TokenContext.ts` will define the context for your token, including its type and associated functions for login, logout, and checking the token's validity.
<details>
  <summary>Token Context Code</summary>
  
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
</details>

## TokenContextProvider

The `TokenContextProvider.tsx` component will utilize state management to store the token and provide functions to modify this state, including login, logout, and a method to check if the token is still valid.

<details>
  <summary>Token Context Provider Code</summary>
  
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
</details>

## Access TokenContextProvider

To ensure that the `TokenContextProvider` is accessible throughout your application, wrap your application with the TokenContextProvider in your main App component. In this case we will wrap each Routes in React Router.

<details>
  <summary>Access Token Context Provider Code</summary>
  
  ```typescript
  import { Route, BrowserRouter, Routes } from "react-router-dom";
  import { Container } from "react-bootstrap";
  import "bootstrap/dist/css/bootstrap.min.css";
  import ProjectEdit from "./components/Projects/EditProject/EditProject.tsx";
  import ProjectView from "./components/Projects/ProjectView/ProjectView.tsx";
  import ProjectCreate from "./components/Projects/CreateProject/CreateProject.tsx";
  import ProjectList from "./components/Projects/ProjectsList/ProjectList.tsx";
  import Header from "./components/Header/Header.tsx";
  import Login from "./components/Login/Login.tsx";
  import Register from "./components/Register/Register.tsx";
  import TokenContextProvider from "./context/TokenContextProvider.tsx";
  
  function App() {
    return (
      <BrowserRouter>
        <TokenContextProvider>
          <Header />
          <Container className="mt-5">
            <Routes>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="/projects/">
                <Route path="create" element={<ProjectCreate />} />
                <Route path="" element={<ProjectList />} />
                <Route path=":project_id" element={<ProjectView />} />
                <Route path=":project_id/edit" element={<ProjectEdit />} />
              </Route>
            </Routes>
          </Container>
        </TokenContextProvider>
      </BrowserRouter>
    );
  }
  
  export default App;
  
  ```
</details>

## Login with ContextAPI

To utilize the ContextAPI in a login component, modify the login form handling to include the useContext hook to access the `login` function from `TokenContext`. This way, once the user successfully logs in, you can update the context with the new token.

<details>
  <summary>Login Component Code</summary>

  ```typescript
  import { useState, ChangeEvent, FormEvent, useContext } from "react";
  import { useNavigate } from "react-router-dom";
  import TokenContext from "../../context/TokenContext";
  import {
    Button,
    Form,
    FormControl,
    FormGroup,
    FormText,
  } from "react-bootstrap";
  
  interface FormData {
    email: string;
    password: string;
  }
  
  function LoginForm() {
    const [formData, setFormData] = useState<FormData>({
      email: "",
      password: "",
    });
  
    const navigate = useNavigate();
    const { login } = useContext(TokenContext)!;
  
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [errorMessage, setErrorMessage] = useState<string>("");
  
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
  
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const validateForm = () => {
      let isValid = true;
      const newErrors: { [key: string]: string } = {};
  
      // Validate email
      if (!formData.email) {
        newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Invalid email address";
      } else if (formData.email.length < 3 || formData.email.length > 100) {
        newErrors.email = "Email must be between 3 and 100 characters";
      }
  
      // Validate password
      if (!formData.password) {
        newErrors.password = "Password is required";
      } else if (formData.password.length < 3 || formData.password.length > 100) {
        newErrors.password = "Password must be between 3 and 100 characters";
      }
  
      setErrors(newErrors);
      isValid = Object.keys(newErrors).length === 0;
      return isValid;
    };
  
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
            login(data.access_token);
            navigate("/projects");
          })
          .catch((error) => {
            console.error("Error:", error);
            setErrorMessage("An error occurred");
          });
      }
    };
  
    return (
      <>
        <h1>Login</h1>
        {errorMessage && <div className="error">{errorMessage}</div>}
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Form.Label>Email</Form.Label>
            <FormControl
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            ></FormControl>
            {errors.email && (
              <FormText className="text-danger"> * {errors.email}</FormText>
            )}
          </FormGroup>
          <FormGroup>
            <Form.Label>Password</Form.Label>
            <FormControl
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            ></FormControl>
            {errors.password && (
              <FormText className="text-danger"> * {errors.password}</FormText>
            )}
          </FormGroup>
          <Button variant="primary" type="submit" className="mt-3">
            Login
          </Button>
        </Form>
      </>
    );
  }
  
  export default LoginForm;
  ```
</details>

## React Header

The React Header component creates a navigation bar for your application using React Bootstrap. It dynamically adjusts its links based on the user's authentication status, which it determines through a context called TokenContext. This context provides a method isTokenValid to check if the user's token is still valid (indicating that they are logged in) and a logout method to clear the user's session.

<details>
  <summary>React Header Code</summary>

  ```typescript
  import { useContext, useEffect, useState } from "react";
  import { NavLink, useNavigate } from "react-router-dom";
  import TokenContext from "../../context/TokenContext";
  import { Container, Nav, Navbar } from "react-bootstrap";
  
  function Header() {
    const { isTokenValid, logout } = useContext(TokenContext);
    const navigate = useNavigate();
  
    useEffect(() => {
      if (!isTokenValid()) {
        navigate("/login", { replace: true });
      }
    }, [isTokenValid]);
  
    const handleLogout = () => {
      logout();
      navigate("/login", { replace: true });
    };
  
    return (
      <>
        <Navbar bg="light">
          <Container>
            <Navbar.Brand>GUI APP</Navbar.Brand>
            <Nav className="me-auto">
              {isTokenValid() && (
                <Nav.Link as={NavLink} to="/projects">
                  Projects
                </Nav.Link>
              )}
            </Nav>
            <Nav className="me-end">
              {!isTokenValid() ? (
                <>
                  <Nav.Link as={NavLink} to="/login" className="Button">
                    Login
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/register">
                    Register
                  </Nav.Link>
                </>
              ) : (
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              )}
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
  
  export default Header;
  ```
</details>

By adopting this approach, you simplify token management across your React application, enhancing security and user experience by ensuring that sensitive information like authentication tokens are handled efficiently and securely.

# 16. Adding Token To CRUD Forms and Creating Auth Router Pages

> [!TIP]
> Available checkpoint: [Forms_forms_with_token_and_auth_router](https://github.com/martinrenner/KI-GUI/blob/main/CHECKPOINTS/16-forms_with_token_and_auth_router.zip)

This documentation segment elaborates on integrating JWT (JSON Web Token) authentication into CRUD (Create, Read, Update, Delete) operations in a React application and establishing authenticated routes using React Router. To ensure security and authorization, it's crucial that each API call requiring user authentication carries a JWT token. Additionally, setting up authentication-specific pages in React enhances the application's security by managing access to certain pages based on the user's authentication status.

## CRUD Forms

In scenarios where the API demands JWT tokens for authentication, it's vital to append this token to every API call. This is particularly important for requests made through the project router in a React application. Below is a step-by-step guide to achieve this:
<details>
  <summary>CRUD Components Code</summary>

  ### Create Project
  ```typescript
  import React, { ChangeEvent, useState, useContext } from "react";
  import { Button, Form, FormControl } from "react-bootstrap";
  import { useNavigate } from "react-router-dom";
  import TokenContext from "../../../context/TokenContext";
  
  interface FormData {
    name: string;
    description: string;
  }
  
  function ProjectCreate() {
    const [formData, setFormData] = useState<FormData>({
      name: "",
      description: "",
    });
  
    const navigate = useNavigate();
    const { token } = useContext(TokenContext);
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
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
  
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    return (
      <>
        <h1>Create Project</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Project Name</Form.Label>
            <FormControl
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <FormControl
              as="textarea"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-3">
            Create
          </Button>
        </Form>
      </>
    );
  }
  
  export default ProjectCreate;

  ```

  ### Edit Project
  ```typescript
  import { ChangeEvent, useEffect, useState, useContext } from "react";
  import { Button, Form, FormControl } from "react-bootstrap";
  import { useNavigate, useParams } from "react-router-dom";
  import TokenContext from "../../../context/TokenContext";
  
  interface FormData {
    name: string;
    description: string;
    is_finished: boolean;
  }
  
  function ProjectEdit() {
    const { project_id } = useParams();
    const { token, isTokenValid } = useContext(TokenContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState<FormData>({
      name: "",
      description: "",
      is_finished: false,
    });
  
    useEffect(() => {
      if (isTokenValid()) {
        fetch(`http://localhost:8000/project/${project_id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
          .then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error("Failed to fetch project data");
            }
          })
          .then((data) => {
            setFormData({
              name: data.name,
              description: data.description,
              is_finished: data.is_finished,
            });
          })
          .catch((error) => {
            console.error("Error fetching project data:", error.message);
          });
      }
    }, [project_id, isTokenValid, token, navigate]);
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      fetch(`http://localhost:8000/project/${project_id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to edit project");
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
  
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    return (
      <>
        <h1>Edit Project</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Project Name</Form.Label>
            <FormControl
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <FormControl
              as="textarea"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Check
              type="checkbox"
              label="Finished"
              name="is_finished"
              checked={formData.is_finished}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  is_finished: e.target.checked,
                })
              }
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-3">
            Update
          </Button>
        </Form>
      </>
    );
  }
  
  export default ProjectEdit;

  ```

  ### List Projects
  ```typescript
  import { useEffect, useState, useContext } from "react";
  import { Project } from "../../../interfaces/Project";
  import { Button, Card, Col, Row } from "react-bootstrap";
  import { Link, useNavigate } from "react-router-dom";
  import TokenContext from "../../../context/TokenContext";
  
  function ProjectList() {
    const [projects, setProjects] = useState<Project[]>([]);
    const { logout, token, isTokenValid } = useContext(TokenContext);
    const navigate = useNavigate();
  
    useEffect(() => {
      if (isTokenValid()) {
        fetch("http://localhost:8000/project/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
            throw new Error("Failed to fetch projects data");
          })
          .then((data) => {
            setProjects(data);
          })
          .catch((error) => {
            console.error("Error fetching projects data:", error.message);
          });
      }
    }, [token, isTokenValid, navigate]);
  
    const delete_project = (project_id: number) => {
      fetch(`http://localhost:8000/project/${project_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Failed to delete project");
          }
        })
        .then(() => {
          setProjects(projects.filter((project) => project.id !== project_id));
        })
        .catch((error) => {
          console.error("Error deleting project:", error);
        });
    };
  
    const finish_project = (project_id: number) => {
      fetch(`http://localhost:8000/project/${project_id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ is_finished: true }),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Failed to finish project");
          }
        })
        .then(() => {
          setProjects(
            projects.map((project) =>
              project.id === project_id
                ? { ...project, is_finished: true }
                : project
            )
          );
        })
        .catch((error) => {
          console.error("Error finishing project:", error);
        });
    };
  
    return (
      <>
        <Row>
          <Col xs={10}>
            <h1>Projects</h1>
          </Col>
          <Col xs={2}>
            <Link to="/projects/create">
              <Button variant="primary" className="float-end">
                Create project
              </Button>
            </Link>
          </Col>
        </Row>
  
        {projects.map((project) => (
          <Card key={project.id} className="mb-3">
            <Card.Body>
              <Row>
                <Col>
                  <Card.Title>
                    {project.name} -
                    {project.is_finished ? " Finished" : " Not finished"}
                  </Card.Title>
                </Col>
                <Col xs={2} className="d-flex justify-content-end gap-2">
                  {!project.is_finished && (
                    <Button
                      variant="success"
                      onClick={() => finish_project(project.id)}
                    >
                      Finish
                    </Button>
                  )}
                  <Link to={`/projects/${project.id}`}>
                    <Button variant="primary">View</Button>
                  </Link>
                  <Link to={`/projects/${project.id}/edit`}>
                    <Button variant="warning">Edit</Button>
                  </Link>
                  <Button
                    variant="danger"
                    onClick={() => delete_project(project.id)}
                  >
                    Delete
                  </Button>
                </Col>
              </Row>
  
              <Card.Text>{project.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </>
    );
  }
  
  export default ProjectList;
  ```

  ### View Project
  ```typescript
  import { useEffect, useState, useContext } from "react";
  import { Project } from "../../../interfaces/Project";
  import { Link, useNavigate, useParams } from "react-router-dom";
  import { Button } from "react-bootstrap";
  import TokenContext from "../../../context/TokenContext";
  
  function ProjectView() {
    const navigate = useNavigate();
    const { project_id } = useParams();
    const { token, isTokenValid } = useContext(TokenContext);
    const [project, setProject] = useState<Project>();
  
    useEffect(() => {
      if (isTokenValid()) {
        fetch(`http://localhost:8000/project/${project_id}`, {
          method: "GET",
          headers: {
            contentType: "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
          .then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error("Failed to fetch project data");
            }
          })
          .then((data) => {
            setProject(data);
          })
          .catch((error) => {
            navigate("/projects", { replace: true });
            console.error("Error fetching project data:", error.message);
          });
      }
    }, [token, isTokenValid, project_id, navigate]);
  
    const delete_project = (project_id: number) => {
      fetch(`http://localhost:8000/project/${project_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }).then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete project");
        }
        navigate("/projects", { replace: true });
      });
    };
  
    return (
      <>
        {project && (
          <>
            <h1>{project.name}</h1>
            <hr />
            <p>Finished: {project.is_finished ? "Yes" : "No"}</p>
            <p>{project.description}</p>
            <Link to={`/projects/${project.id}/edit`}>
              <Button variant="warning">Edit</Button>
            </Link>
            <Button
              variant="danger"
              onClick={() => delete_project(project.id)}
              className="ms-2"
            >
              Delete
            </Button>
          </>
        )}
      </>
    );
  }
  
  export default ProjectView;

  ```
</details>

In this example, we added import for our ContextAPI that provides JWT token. Then we added import for UseContext hook. Finnaly we added authorization to header of request.

## Auth Page Component

Given that React Router does not inherently provide an authenticated route feature, it's necessary to implement an authentication mechanism manually. This can be achieved by creating an "Authenticated" component that wraps around components requiring authentication, as shown below.

<details>
  <summary>Authenticated Component</summary>

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
</details>

This component checks the validity of the token and, if found invalid, redirects the user to the login page, ensuring that only authenticated users can access certain parts of the application.

## Modify React Router

To utilize the Authenticated component effectively, modifications to the React Router setup are required. This ensures that specific routes are protected and accessible only to authenticated users:

<details>
  <summary>React Router Code</summary>

  ```typescript
  import { Route, BrowserRouter, Routes } from "react-router-dom";
  import { Container } from "react-bootstrap";
  import "bootstrap/dist/css/bootstrap.min.css";
  import ProjectEdit from "./components/Projects/EditProject/EditProject.tsx";
  import ProjectView from "./components/Projects/ProjectView/ProjectView.tsx";
  import ProjectCreate from "./components/Projects/CreateProject/CreateProject.tsx";
  import ProjectList from "./components/Projects/ProjectsList/ProjectList.tsx";
  import Header from "./components/Header/Header.tsx";
  import Login from "./components/Login/Login.tsx";
  import Register from "./components/Register/Register.tsx";
  import TokenContextProvider from "./context/TokenContextProvider.tsx";
  import Authenticated from "./components/Authenticated/Authenticated.tsx";
  
  function App() {
    return (
      <BrowserRouter>
        <TokenContextProvider>
          <Header />
          <Container className="mt-5">
            <Routes>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="/projects/">
                <Route
                  path="create"
                  element={
                    <Authenticated>
                      <ProjectCreate />
                    </Authenticated>
                  }
                />
                <Route
                  path=""
                  element={
                    <Authenticated>
                      <ProjectList />
                    </Authenticated>
                  }
                />
                <Route
                  path=":project_id"
                  element={
                    <Authenticated>
                      <ProjectView />
                    </Authenticated>
                  }
                />
                <Route
                  path=":project_id/edit"
                  element={
                    <Authenticated>
                      <ProjectEdit />
                    </Authenticated>
                  }
                />
              </Route>
            </Routes>
          </Container>
        </TokenContextProvider>
      </BrowserRouter>
    );
  }
  
  export default App;
  ```

</details>

By wrapping the each Project component (or any other component) with the Authenticated component within the route definition, you ensure that access is granted only to users with a valid token. This mechanism enhances the security and integrity of the application by preventing unauthorized access to sensitive information or functionalities.

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

### Usage

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
