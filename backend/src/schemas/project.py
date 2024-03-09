from typing import Optional
from pydantic import BaseModel, ConfigDict, Field
from models import Project

class ProjectBase(BaseModel):
    model_config = ConfigDict(extra='forbid')

class ProjectCreate(ProjectBase): 
    name: str = Field(..., examples=["My First Project"], min_length=3, max_length=100)
    description: str = Field(..., examples=["This is my first project"], min_length=3, max_length=1000)
    is_finished: Optional[bool] = Field(default=False)

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
