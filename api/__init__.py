from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.mount("/css", StaticFiles(directory="./html/dist/css"), name="css")
app.mount("/js", StaticFiles(directory="./html/dist/js"), name="js")
app.mount("/img", StaticFiles(directory="./html/dist/img"), name="img")

templates = Jinja2Templates(directory="./html/dist/html")

from api.views import main, errors, tasks
