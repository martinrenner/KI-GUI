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
