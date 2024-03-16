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
