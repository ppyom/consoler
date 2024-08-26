<div align="center">

# Consoler

<img src="src/assets/images/logo-fill.svg" alt="로고">


[![Demo](https://img.shields.io/badge/Demo-ffffff?style=flat-square&color=21201f)](https://consoler.vercel.app/) / [![Notion](https://img.shields.io/badge/프로젝트-ffffff?style=flat-square&logo=Notion&logoColor=000000&labelColor=ffffff&color=ffffff)](https://radical-devourer-8fb.notion.site/Consoler-097e3d8b447741cdabe37a7d0578f344?pvs=4)


![React](https://img.shields.io/badge/React-ffffff?style=flat-square&logo=react&logoColor=ffffff&labelColor=61dafb&color=61dafb)
![TypeScript](https://img.shields.io/badge/TypeScript-ffffff?style=flat-square&logo=typescript&logoColor=ffffff&labelColor=3178c6&color=3178c6)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-ffffff?style=flat-square&logo=tailwindcss&logoColor=ffffff&labelColor=06B6D4&color=06B6D4)

Consoler는 브라우저의 console을 커스터마이징하는 웹 어플리케이션 입니다.

</div>

## 💡 주요 기능

### Console 생성/수정

새로운 Console을 만들거나 수정할 수 있습니다.

![Editor](https://radical-devourer-8fb.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fa0ddd3b3-8a75-4ec9-912c-fde728031108%2F367dd873-c2c2-489e-981d-10389f86ba73%2Fedit.png?table=block&id=89c1c782-ebcc-4d6c-b5e2-a18a4b9bec88&spaceId=a0ddd3b3-8a75-4ec9-912c-fde728031108&width=350&userId=&cache=v2)

새롭게 생성하는 경우 Make 탭으로 이동하면 기본적으로 **제목 없음** Console이 생성되고, localStorage에 저장됩니다. Console의 정보를 수정하는 경우에는 위쪽의 InformationForm을 수정하고 `저장` 버튼을 클릭합니다.

블록을 추가하려면 해당 라인에 있는 `+` 버튼을, 라인을 추가하려면 가장 아래에 있는 `+`버튼을 클릭하면 됩니다. 블록을 수정 후 `저장` 버튼을 클릭하면 변경된 정보가 localStorage에 저장됩니다.

만들어진 Console은 Preview 탭에서 통해 브라우저의 console에서 어떤 식으로 보일지 확인할 수 있고, Code 탭에서 만들어진 코드를 복사할 수 있습니다.

![Code](https://radical-devourer-8fb.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fa0ddd3b3-8a75-4ec9-912c-fde728031108%2F0cb0951a-74fc-4f86-8fcd-3d595f02c9d5%2Fedit-codeconsole.png?table=block&id=cd700e2c-6231-4ef9-8c1a-9141fff1f2af&spaceId=a0ddd3b3-8a75-4ec9-912c-fde728031108&width=350&userId=&cache=v2)

<aside>

⚠️ Preview에서 보이는 모습은 실제 console에 출력했을 때 모습과 다릅니다.

</aside>

### Console 리스트 확인

![List](https://radical-devourer-8fb.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fa0ddd3b3-8a75-4ec9-912c-fde728031108%2Fa047b6c7-0a76-4536-9dd6-e267207db8b2%2Flist.png?table=block&id=e450f282-766f-4335-9599-ad26c24627a2&spaceId=a0ddd3b3-8a75-4ec9-912c-fde728031108&width=350&userId=&cache=v2)

localStorage에 저장된 Console을 확인할 수 있습니다.

## ▶️ 실행 방법

1. `npm i`를 입력해 필요한 패키지를 설치합니다.
2. `npm run dev`를 입력해 실행합니다.

## 🗂️ 프로젝트 구조

```
📁 public/			# 정적 파일 저장
📁 src/
    📁 assets/			# 이미지 등 정적 리소스
    📁 components/		# 재사용 가능한 UI 컴포넌트
    📁 context/			# React ContextAPI
    📁 pages/			# Page Component
    📁 storages/		# localStorage
    📁 types/			# 공통으로 쓰이는 타입
    📁 utils/			# 유틸리티 함수
    📜 App.tsx
    📜 index.css		# 메인 Style 파일
    📜 main.tsx
📜 index.html
```

### 컴포넌트 저장 방법

- `[Component 이름].tsx` 파일과 `[Component 이름].module.css` 파일을 `[Component 이름]` 디렉토리에 저장

#### 예시

```
📁 Button/
    📜 Button.tsx
    📜 Button.module.css
```

### 페이지 저장 방법

- `[Page 이름].tsx` 파일과 `[Page 이름].module.css` 파일을 `[Page 이름]` 디렉토리에 저장
- Page 내부에서 사용되는 컴포넌트의 경우 **컴포넌트 작성 규칙에 따라 저장**
- 만약 공용으로 사용하는 컴포넌트의 경우 `commons` 디렉토리 내부에 저장

#### 예시

```
📁 EditPage/
    📁 commons			# 페이지의 컴포넌트에서 공용으로 사용하는 컴포넌트
    📁 Editor			# 페이지에서 사용하는 컴포넌트
    📜 EditPage.tsx
    📜 EditPage.module.css
```
