# Play Farm 트러블슈팅 정리

## 1) react-scripts 인식 안 됨

**문제**  
`npm start` 실행 불가

```
'react-scripts'은 내부 또는 외부 명령이 아닙니다.
```

**원인**  
GitHub에서 내려받은 프로젝트에는 `node_modules`가 포함되지 않음

**해결**

```bash
npm install
npm start
```

---

## 2) ESLint Parsing Error (App.js 첫 줄 에러)

**문제**

```
Parsing error: Unexpected token (1:1)
```

**원인**  
`App.js` 최상단에 `<!DOCTYPE html>` 또는 `<html>` 같은 HTML 전체 문서 구조가 들어감

**해결**  
React JSX 형태로 다시 작성

---

## 3) 미디어쿼리 & :root 값 중복 문제

**문제**  
각 CSS 파일마다 색상, 폰트, 간격 값이 중복되고 root 값도 여러 파일에 흩어짐

**원인**  
전역 스타일(token) 관리 구조가 없음

**해결**

- tokens.css 생성
- 모든 전역 변수(색상, 간격, 폰트 등)를 한곳에 모음
- 이후 각 컴포넌트는 var(--token)만 사용

---

## 4) CSS import 구조 혼란

**문제**  
전역 스타일과 컴포넌트 스타일 import 위치 혼동

**해결**

- 전역(tokens.css, global.css)은 index.js에서 import
- 컴포넌트별 스타일은 해당 컴포넌트에서 import

---

## 5) npm audit 메시지를 오류로 착각

**문제**

```
Run `npm audit` for details.
```

**원인**  
audit은 단순 보안 점검 안내이며 실행을 막지 않음

**해결**  
무시해도 됨

---

## 6) React 실행 후 브라우저 자동 오픈 안 됨

**문제**  
npm start 실행 후 브라우저가 자동으로 안 열림

**원인**  
자동 실행 설정 부재

**해결**  
브라우저에서 직접 접속

```
http://localhost:3000
```

---

# ✔ 요약 테이블

| 문제                    | 원인                | 해결                     |
| ----------------------- | ------------------- | ------------------------ |
| react-scripts 인식 불가 | node_modules 없음   | npm install              |
| App.js Parsing Error    | HTML 전체 구조 입력 | JSX로 재작성             |
| CSS token·root 중복     | 전역관리 없음       | tokens.css로 통합        |
| CSS import 혼동         | 전역·컴포넌트 구분X | index.js / 컴포넌트 분리 |
| npm audit 메시지        | 오류 아님           | 무시 가능                |
| 브라우저 자동 실행X     | 설정 없음           | localhost:3000 접속      |
