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
