# Consoler

## 기획

### 주제

웹 브라우저의 console을 커스터마이징하는 웹 어플리케이션

## 설계

<aside>
💡 이전에 사용했던 계정([Cattamoo](https://github.com/Cattamoo))에서 만들었던 `**Colorful Log Maker**` 프로젝트의 부족한 점을 보완하여 만들어보는 프로젝트!

</aside>

### Colorful Log Maker 프로젝트

[GitHub](https://github.com/Cattamoo/colorful-log-maker) | [Demo](https://cattamoo.github.io/colorful-log-maker/)

#### 부족한 점

1. 색상이나 폰트 크기, 두께를 지정하는 부분이 아쉬움
	- 각 Block에 대한 Interface를 제대로 작성 필요
2. 브라우저의 width가 좁아졌을 때 console을 보여주는 부분에 스크롤이 생김
	- 기존 구조에서 Editor 위치를 width가 좁아지면 Viewer의 아래로 이동하게 수정
3. 저장 기능이 없음
	- 저장 기능 추가(Local Storage)

### 사용할 언어 / 프레임워크

#### Front-end

- Typescript
- React.js
	- React Router Dom v6
	- React Icons
	- TailwindCSS

#### Deploy

- Vercel

### 페이지 목록

#### Home

- 다른 페이지로 이동할 수 있고, 최근 수정한 콘솔의 목록을 출력하는 페이지

#### New Console

- 새로운 콘솔을 만드는 페이지

#### Edit Console

- 만들었던 콘솔을 수정하는 페이지

#### Console List

- 내가 저장한 콘솔의 목록을 보여주는 페이지