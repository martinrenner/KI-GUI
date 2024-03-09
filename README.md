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
from database import engine
from sqlmodel import SQLModel

def initialize_database():
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
