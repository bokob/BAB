from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

import firebase_admin
from firebase_admin import credentials
from firebase_admin import db

if not firebase_admin._apps:
    cred = credentials.Certificate("../mykey.json")
    firebase_admin.initialize_app(cred,{'databaseURL':'https://bab-db-3ebb8-default-rtdb.firebaseio.com/'})
    
    
main_building_this_week = db.reference('기숙사/본관/금주')  
main_building_next_week = db.reference('기숙사/본관/차주') 
yangsungjae_this_week = db.reference('기숙사/양성재/금주')
yangsungjae_next_week = db.reference('기숙사/양성재/차주')
yangjinjae_this_week = db.reference('기숙사/양진재/금주')
yangjinjae_next_week = db.reference('기숙사/양진재/차주')

hanbit_this_week = db.reference('학생식당/한빛')
star_light_this_week = db.reference('학생식당/별빛')
milkyway_this_week = db.reference('학생식당/은하수')


app = FastAPI()

origins = [
    "http://localhost:3000",
    "https://localhost:3000",
    "localhost:3000",
    "http://192.168.0.5:3000",
    "https://192.168.0.5:3000",
    "192.168.0.5:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
async def main_page():
    hello = '크큭'
    return hello

@app.get('/본관')
async def main_building_week_meal_page():
    result = [main_building_this_week.get(), main_building_next_week.get()]
    return result

@app.get('/양성재')
async def yangsungjae_week_meal_page():
    result = [yangsungjae_this_week.get(), yangsungjae_next_week.get()]
    return result

@app.get('/양진재')
async def yangjinjae_week_meal_page():
    result = [yangjinjae_this_week.get(), yangjinjae_this_week.get()]
    return result

@app.get('/한빛식당')
async def hanbit_this_week_meal_page():
    result = hanbit_this_week.get()
    return result

@app.get('/별빛식당')
async def star_light_this_week_meal_page():
    result = star_light_this_week.get()
    return result

@app.get('/은하수식당')
async def milkyway_this_week_meal_page():
    result = milkyway_this_week.get()
    return result

# @app.get('/get/{idx}')
# async def read_name(idx:int):
#     return dict(df.iloc[idx])

# @app.get('/post/{name}')
# async def write_name(name:str):
#     data=[name]
#     df.loc[len(df)]=data
#     df.to_csv('./fast_excel.csv')
#     return 'Write Complete'