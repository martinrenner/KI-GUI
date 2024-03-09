from sqlalchemy.engine import reflection
from database import engine, commit_and_handle_exception
from sqlmodel import SQLModel, Session
from models import Test


def initialize_database():
    SQLModel.metadata.create_all(engine)
