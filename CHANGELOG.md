# Changelog

## [1.1.0] — 2026-06-22

이메일 유틸 모듈을 추가하고 ESM 기반 테스트 환경을 구성한 버전입니다.

### ✨ 기능

- `src/email.js` 모듈 추가
  - `extractEmails` — 사용자 배열에서 email 필드 추출
  - `isValidEmail` — WHATWG HTML 표준 기반 이메일 형식 검증
  - `getValidEmails` — 유효한 이메일만 필터링
  - `getEmailDomain` — 유효한 이메일에서 도메인 추출
- `src/email.test.js` 테스트 8개 추가 (Node.js 내장 `node:test`)
- `npm start`, `npm test` 스크립트 추가
- ES Modules(`"type": "module"`)로 전환

### 🐛 버그 수정

- `src/index.js`에서 `console.log`가 문자열 리터럴로만 존재해 실행되지 않던 문제 수정
- `package.json`의 `main` 경로를 실제 진입점(`src/index.js`)에 맞게 수정

### 🧹 기타

- `.cursor/rules/coding-style.mdc` 프로젝트 코딩 규칙 추가
- `.cursor/commands/prep-pr.md` PR 점검 커맨드 추가
- `.cursor/skills/release-notes` 릴리스 노트 작성 스킬 추가

### 테스트

```
pass 8 / fail 0
```

### 마이그레이션 안내

- CommonJS(`require` / `module.exports`)는 더 이상 사용하지 않습니다. `import` / `export`를 사용하세요.
- 프로젝트 루트에서 `npm start` 또는 `npm test`로 실행합니다.

---

## [1.0.0] — 초기 커밋

- 프로젝트 초기화 (`init`)
