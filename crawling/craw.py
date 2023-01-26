# 금주 모든 기숙사 식단 크롤링
from urllib.request import urlopen
from bs4 import BeautifulSoup
from datetime import datetime, timedelta, date

html1 = urlopen("https://dorm.chungbuk.ac.kr/home/sub.php?menukey=20041&type=1") # 본관 금주
html2 = urlopen("https://dorm.chungbuk.ac.kr/home/sub.php?menukey=20041&type=2") # 양성재 금주
html3 = urlopen("https://dorm.chungbuk.ac.kr/home/sub.php?menukey=20041&type=3") # 양진재 금주

bsObject1 = BeautifulSoup(html1, "html.parser")
bsObject2 = BeautifulSoup(html2, "html.parser")
bsObject3 = BeautifulSoup(html3, "html.parser")
bsObject=[bsObject1,bsObject2,bsObject3]


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

this_week=[]
next_week=[]

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