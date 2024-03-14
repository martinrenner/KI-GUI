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
