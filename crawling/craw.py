# 양진재 금주
from urllib.request import urlopen
from bs4 import BeautifulSoup
import datetime

html = urlopen("https://dorm.chungbuk.ac.kr/home/sub.php?menukey=20041&type=3")

bsObject = BeautifulSoup(html, "html.parser")

def make_date_list(bsObject): # 날짜 리스트 만들기
    foodday = bsObject.findAll('td', {'class':{'foodday'}}) # 날짜 및 요일
    date=[]
    for day in foodday:
        temp = list(map(str,day.text.split()))
        date.append(temp[1])
    return date

def make_day_list_matches_date(date_list): # 요일 리스트 만들기
    
    split_date_list=[]  # '-' 기준으로 split
    for element in date_list:
        temp = list(map(int,element.split('-')))
        split_date_list.append(temp)
    
    days=['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'] 
    result=[]
    for element in split_date_list: # 요일 알아낸다.
        result.append(days[datetime.date(element[0],element[1],element[2]).weekday()])
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



date_list = make_date_list(bsObject)
day_list = make_day_list_matches_date(date_list)
morning_list=make_morning_list(bsObject)
lunch_list = make_lunch_list(bsObject)
evening_list=make_evening_list(bsObject)
day_meal = merge_day_meal(date_list,morning_list,lunch_list,evening_list)
weak_meal=get_weak_meal(day_list,day_meal)

print(weak_meal)