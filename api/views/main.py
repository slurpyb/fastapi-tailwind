from api import app, templates
from fastapi import Request
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

@app.get("/")
async def index(request: Request):
    return templates.TemplateResponse("index.html", { "request": request })
