# 16조 미니프로젝트 종원이의 냉장고(FRONTEND)

 <br/>
 이수창, 주재일, 이지훈
 <br/>
 <br/>

---

# 목차

1. 프로젝트 소개

2. 사용기술

3. 배운 점

4. 기능정보

5. 진행과정

---

## 프로젝트 소개

---

시연영상 Youtube

냉장고에서 재료를 입력,검색을 통해 레시피 제공 서비스

기간/인원

2021.10.11 ~ 2021.10.16

FRONT-END 3인, BACK-END 3인

## 🚀Tools

---

-View (React with JavaScript, React-Router, material-UI, Styled-components)

-State Management (Redux, Redux-Thunk, Immer, Redux-actions)

-Build Tool (Create React App)

-Code Quality Tool (Prettier)

-Infrastructure(AWS S3)

-Other Tools (Git, Github, notion, Slack)

## 🙍🏾‍♂️ I learned

---

배운 점

- 문서화의 중요성: 정해진 시간 안에서 프로젝트를 진행하다보니 사람마다 해석하고 받아들이는 내용이 매번 달랐다. 프로젝트를 진행하는데에 있어서 구체적인 문서화가 정말 필요하다고 느꼈고 개개인의 관점과 주관으로 개발을 하고 나서 수정하는 것보다 가야할 방향성을 선명하게 문서화하는 것이 중요하다는 것을 느꼈다.
- 최소단위 컴포넌트: Button,Input,Text 등 최소단위 컴포넌트를 공동으로 회의를 하면서 작업 했는데도 개발을 하면서 불편한 점이 너무 많았다. 내가 필요한 css적인 요소와 다른 팀원들의 요구사항을 잘 융화시켜 공통적인 요소를 만든다는 것이 매우 중요한 것 같았다. 결국에 프로젝트를 실행하면서 GitHub에서 병합하면서 충돌이 일어났고 그러므로 더더욱 처음 뼈대를 구성할 때는 많은 소통과 의견 공유가 필요하다는 것을 느꼈다
- 반응형 고려: 앞서 말했듯이 시간에 쫓겨 반응형을 고려하지 않고 지금 내가 보고 있는 화면에서 디자인이 구현하면 넘어가는 식으로 디자인을 만들어서 결국에 마지막에 반응형으로 바꾸려고 하니깐 너무나도 복잡해져서 모든 페이지들을 반응형으로 고려하지 못했다. %나 vh를 통해서 처음부터 width,height에 입력하는 것이 정말 중요하다는 것을 느꼈다
- 백엔드와 협업: 지금까지 서버리스인 파이어베이스로 데이터를 통신하다가 백엔드와 AXIOS로 통신하는 것에 있어서 처음에는 너무 막막했던 것 같았다. CORS설정이 무엇인지, HTTP 상태 코드를 보고 어디가 문제인지, 이런 것들을 차근차근 해결해보면서 백엔드와의 통신을 성공적으로 마무리 한 것 같았다

## 🍉기능정보

1. JWT를 통한 로그인,회원가입 구현

1. Axios 통신과 리덕스 상태관리를 통한 냉장고 구현

1. 냉장고의 재료로 요리가능한 레시피 검색

1. 각 레시피에 대한 댓글 CRUD

## 와이어프레임

[미니프로젝트 4.pdf](<16%E1%84%8C%E1%85%A9%20%E1%84%86%E1%85%B5%E1%84%82%E1%85%B5%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%8C%E1%85%A6%E1%86%A8%E1%84%90%E1%85%B3%20%E1%84%8C%E1%85%A9%E1%86%BC%E1%84%8B%E1%85%AF%E1%86%AB%E1%84%8B%E1%85%B5%E1%84%8B%E1%85%B4%20%E1%84%82%E1%85%A2%E1%86%BC%E1%84%8C%E1%85%A1%E1%86%BC%E1%84%80%E1%85%A9(FRONTEND)%209bc324cf0b084da39e8c740640d31c45/%EB%AF%B8%EB%8B%88%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8_4.pdf>)

---

- API

[데이터활용서비스 (foodsafetykorea.go.kr)](http://www.foodsafetykorea.go.kr/api/openApiInfo.do?menu_grp=MENU_GRP31&menu_no=661&show_cnt=10&start_idx=1&svc_no=COOKRCP01)

1e28eb3d73944ce09097

---

## ⭐API 설계 (CRUD)⭐

[타임라인 API의 사본](https://www.notion.so/1dd985b4b5f34b1380b26502fe256bab)

---
