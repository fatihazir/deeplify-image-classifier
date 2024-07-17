from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.v1.endpoints import cnn_classifier
from fastapi.exceptions import RequestValidationError
from app.exceptions import custom_request_validation_exception_handler, custom_http_exception_handler
from starlette.exceptions import HTTPException as StarletteHTTPException

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.add_exception_handler(RequestValidationError, custom_request_validation_exception_handler)
app.add_exception_handler(StarletteHTTPException, custom_http_exception_handler)

app.include_router(cnn_classifier.router, prefix="/api/v1")