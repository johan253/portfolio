from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from .models import Project, Image, Experience
from .db import get_db

app = FastAPI()

@app.get("/api")
def root():
  return {
    "message": "Hello World"
  }

@app.get("/api/projects")
def get_projects(db: Session = Depends(get_db)):
  projects = db\
    .query(Project)\
    .all()
  return projects

@app.get("/api/experience")
def get_experience(db: Session = Depends(get_db)):
  experience = db\
    .query(Experience)\
    .all()
  return experience

@app.get("/api/images/{image_name}")
def get_image(image_name: str, db: Session = Depends(get_db)):
  image = db\
    .query(Image)\
    .filter(Image.name == image_name)\
    .first()
  return image.url