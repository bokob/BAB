# 자동실행 라이브러리 및 모듈
import schedule
import time

# 식단 크롤링 필요한 라이브러리 및 모듈
from urllib.request import urlopen
from bs4 import BeautifulSoup
from datetime import datetime, timedelta, date

# 파이어베이스
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db

# 파이어베이스 객체 생성
if not firebase_admin._apps:    # shedule 모듈 사용하면 이미 생성되어있을 때 오류가 나기 때문에 조건문으로 확인한다.
    cred = credentials.Certificate("../mykey.json")
    firebase_admin.initialize_app(cred,{'databaseURL':'https://bab-db-3ebb8-default-rtdb.firebaseio.com/'})


### 기숙사 관련 함수

def make_date_list(bsObject): # 날짜 리스트 만들기
    foodday = bsObject.findAll('td', {'class':{'foodday'}}) # 날짜 및 요일
    date=[]
    for day in foodday:
        temp = list(map(str,day.text.split()))
        date.append(temp[1])
    return date

def make_day_list_matches_date(date_list): # 요일 리스트 만들기
        
    split_date_list=[] # '-' 기준으로 split
    for element in date_list:
        temp = list(map(int,element.split('-')))
        split_date_list.append(temp)
    
    days=['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'] 
    result=[]
    for element in split_date_list: # 요일 알아낸다.
        result.append(days[date(element[0],element[1],element[2]).weekday()])
    return result

def make_morning_list(bsObject): # 각 요일별 아침 리스트 만들기
    morning = bsObject.findAll('td', {'class':{'morning'}}) 
    morning_list =[]
    for meal in morning:
        morning_list.append(meal.text)
    return morning_list

def make_lunch_list(bsObject): # 각 요일별 점심 리스트 만들기
    lunch = bsObject.findAll('td', {'class':{'lunch'}}) 
    lunch_list =[]
    for meal in lunch:
        lunch_list.append(meal.text)
    return lunch_list

def make_evening_list(bsObject): # 각 요일별 저녁 리스트 만들기
    evening = bsObject.findAll('td', {'class':{'evening'}})
    evening_list =[]
    for meal in evening:
        evening_list.append(meal.text)
    return evening_list

def merge_day_meal(date_list, morning_list, lunch_list, evening_list): # 각 요일별 식단 리스트 병합
    day_meal = [[],[],[],[],[],[],[]]
    for i in range(len(date_list)):
        day_meal[i].append(date_list[i])
        day_meal[i].append(morning_list[i])
        day_meal[i].append(lunch_list[i])
        day_meal[i].append(evening_list[i])
    return day_meal
    
def get_weak_meal(day_list, day_meal):  # 주간 식단표 딕셔너리 만들기
    weak_meal=dict(zip(day_list,day_meal))
    return weak_meal
###

### 학식 관련 함수
def make_week_time_meal_list(bsObject, id_front):   # 한 주의 특정 시간대 식단 리스트 만들기
    time_meal_list =[]
    for i in range(5):
        id = id_front + str(i)
        target = bsObject.findAll('div', {'data-table':{id}}) 
        for txt in target:
            time_meal_list.append({i:txt.text})
    return time_meal_list
###





def save_dormitory_meal_info_to_db():
    
    # 기숙사 크롤링

    # 금주
    html1 = urlopen("https://dorm.chungbuk.ac.kr/home/sub.php?menukey=20041&type=1") # 본관 금주
    html2 = urlopen("https://dorm.chungbuk.ac.kr/home/sub.php?menukey=20041&type=2") # 양성재 금주
    html3 = urlopen("https://dorm.chungbuk.ac.kr/home/sub.php?menukey=20041&type=3") # 양진재 금주

    bsObject1 = BeautifulSoup(html1, "html.parser")
    bsObject2 = BeautifulSoup(html2, "html.parser")
    bsObject3 = BeautifulSoup(html3, "html.parser")
    bsObject=[bsObject1,bsObject2,bsObject3]
    
    this_week=[]
    next_week=[]
    
    # 차주 
    now = datetime.now() #현재
    after_one_week = now + timedelta(weeks=1) # 1주 후

    next_url1 = "https://dorm.chungbuk.ac.kr/home/sub.php?menukey=20041&cur_day=" + str(after_one_week.date()) + "&type=1"
    next_url2 = "https://dorm.chungbuk.ac.kr/home/sub.php?menukey=20041&cur_day=" + str(after_one_week.date()) + "&type=2"
    next_url3 = "https://dorm.chungbuk.ac.kr/home/sub.php?menukey=20041&cur_day=" + str(after_one_week.date()) + "&type=3"

    next_html1 = urlopen(next_url1) # 본관 차주
    next_html2 = urlopen(next_url2) # 양성재 차주
    next_html3 = urlopen(next_url3) # 양진재 차주

    next_bsObject1 = BeautifulSoup(next_html1, "html.parser")
    next_bsObject2 = BeautifulSoup(next_html2, "html.parser")
    next_bsObject3 = BeautifulSoup(next_html3, "html.parser")
    next_bsObject =[next_bsObject1, next_bsObject2, next_bsObject3]
    
    # 기숙사 금주, 차주 식단표 리스트 생성
    for i in range(3):  
        date_list = make_date_list(bsObject[i])
        day_list = make_day_list_matches_date(date_list)
        morning_list=make_morning_list(bsObject[i])
        lunch_list = make_lunch_list(bsObject[i])
        evening_list=make_evening_list(bsObject[i])
        day_meal = merge_day_meal(date_list,morning_list,lunch_list,evening_list)
        weak_meal=get_weak_meal(day_list,day_meal)
        this_week.append(weak_meal)
        
        date_list = make_date_list(next_bsObject[i])
        day_list = make_day_list_matches_date(date_list)
        morning_list=make_morning_list(next_bsObject[i])
        lunch_list = make_lunch_list(next_bsObject[i])
        evening_list=make_evening_list(next_bsObject[i])
        day_meal = merge_day_meal(date_list,morning_list,lunch_list,evening_list)
        weak_meal=get_weak_meal(day_list,day_meal)
        next_week.append(weak_meal)
        
    # 기숙사 식단 정보 파이어베이스에 넣기
    main_building_this_week = db.reference('기숙사/본관/금주')
    main_building_this_week.update(this_week[0])
    main_building_next_week = db.reference('기숙사/본관/차주')
    main_building_next_week.update(next_week[0])

    yangsungjae_this_week = db.reference('기숙사/양성재/금주')
    yangsungjae_this_week.update(this_week[1])
    yangsungjae_next_week = db.reference('기숙사/양성재/차주')
    yangsungjae_next_week.update(next_week[1])

    yangjinjae_this_week = db.reference('기숙사/양진재/금주')
    yangjinjae_this_week.update(this_week[2])
    yangjinjae_next_week = db.reference('기숙사/양진재/차주')
    yangjinjae_next_week.update(next_week[2])
    
    print("성공1")
    

def save_cafeteria_meal_info_to_db():
    
    # 학식 크롤링 

    html = urlopen("https://www.cbnucoop.com/service/restaurant/")

    bsObject = BeautifulSoup(html, "html.parser")

    hanbit_brunch=make_week_time_meal_list(bsObject,'18-9-17-')
    hanbit_lunch=make_week_time_meal_list(bsObject,'18-8-16-')
    hanbit_dinner=make_week_time_meal_list(bsObject,'18-10-18-')

    star_light_lunch=make_week_time_meal_list(bsObject,'19-7-14-')

    milkyway_lunch=make_week_time_meal_list(bsObject,'20-6-12-')
    milkyway_dinner=make_week_time_meal_list(bsObject,'20-13-25-')

    hanbit={'아점' : hanbit_brunch, '점심':hanbit_lunch, '석식': hanbit_dinner}
    star_light = {'점심' : star_light_lunch}
    milkyway={'점심':milkyway_lunch, '석식': milkyway_dinner}


    # 학식 식단 정보 파이어베이스에 넣기

    hanbit_this_week = db.reference('학생식당/한빛')
    hanbit_this_week.update(hanbit)

    star_light_this_week = db.reference('학생식당/별빛')
    star_light_this_week.update(star_light)

    milkyway_this_week = db.reference('학생식당/은하수')
    milkyway_this_week.update(milkyway)
    
    print("성공2")


# 매주 월요일 00시 00분에 크롤링 실행
# schedule.every().monday.at("00:00").do(save_dormitory_meal_info_to_db)
# schedule.every().monday.at("00:00").do(save_cafeteria_meal_info_to_db)


schedule.every(1).seconds.do(save_dormitory_meal_info_to_db)
schedule.every(1).seconds.do(save_cafeteria_meal_info_to_db)

while True:
    schedule.run_pending()
    time.sleep(1)