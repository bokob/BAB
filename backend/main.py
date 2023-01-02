from fastapi import FastAPI
import uvicorn

app = FastAPI()

@app.get('/')
def index():
    return({'message': 'hello world'})

@app.get('/about')
def about():
    return {'about':'Version 1'}

@app.get('/user')
def user():
    return {'user':'User1'}