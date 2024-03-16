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


class UserLogin(UserBase):
    email: str
    password: str
