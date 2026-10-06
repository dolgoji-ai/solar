# Solar

Next.js App Router, React, TypeScript, Tailwind CSS v4, shadcn/ui 기반 프론트엔드 프로젝트입니다.

## 실행

Node.js 24 LTS와 pnpm 11을 사용합니다.

```bash
pnpm install
pnpm dev
```

http://localhost:3000 에서 확인할 수 있습니다.

## 검증

```bash
pnpm lint
pnpm build
```

Turbopack의 로컬 포트 사용이 제한된 실행 환경에서는 `pnpm build --webpack`으로 빌드할 수 있습니다. 현재 환경에서는 린트와 Webpack 프로덕션 빌드를 검증했습니다.

## UI 컴포넌트 추가

```bash
pnpm exec shadcn add input
```

- 시작 화면: `app/page.tsx`
- 전역 스타일과 테마: `app/globals.css`
- UI 컴포넌트: `components/ui/`
- shadcn 설정: `components.json`

[shadcn/ui 공식 Next.js 설치 가이드](https://ui.shadcn.com/docs/installation/next)를 따라 초기화했습니다. Base UI 기반 Nova 스타일과 Neutral 색상, CSS 변수를 사용합니다.
