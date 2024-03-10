from typing import Optional
from pydantic import BaseModel, ConfigDict, Field, field_validator
from models import Project


class ProjectBase(BaseModel):
    model_config = ConfigDict(extra="forbid")


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


class ProjectRead(ProjectBase):
    id: int
    name: str
    description: str
    is_finished: bool

    @classmethod
    def from_project(cls, project: Project):
        return cls(id=project.id, name=project.name, description=project.description, is_finished=project.is_finished)


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
