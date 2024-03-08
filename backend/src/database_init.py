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
