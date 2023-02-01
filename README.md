# BAB : 충북대학교 기숙사 및 학생식당 식단 정보 확인

## 필요성
- 학교 공지사항이나 식단등의 학생들에게 유용한 정보를 제공하는 ‘충림이’ 앱 존재
- '충림이' 방학 기간에 서비스 하지 않음
- 학기 중에는 일요일 12시까지 다음주 식단을 확인할 수 없는 불편함 존재
- 기숙사, 학생식당 식단을 한 눈에 보기 힘듦

## 특징
- 메인  페이지에서는 기숙사(본관, 양성재, 양진재), 학생식당(한빛, 별빛, 은하수)의 금일 식단 표시
- 주차별 식단 페이지에서는 각 장소별 금주 식단표 표시 (기숙사만 금주, 차주 표시)
- 

## 아키텍처
![image](https://user-images.githubusercontent.com/85085804/215932227-7852e923-b061-4d21-9b39-51285380afa6.png)

## 설치
```
node.js
redux-toolkit
router-router-dom
react-bootstrap
beautifulsoup4
firebase
...
```

my_keys는 개인의 firebase 접근 키를 넣으면 된다.

## 실행

backend 폴더에서
```
uvicorn main:app --reload
```

frontend/src 폴더에서
```
npm start
```

## 실행화면
![image](https://user-images.githubusercontent.com/85085804/215932084-f4fc1acb-a41a-42db-838f-7a7d66801a0a.png)
