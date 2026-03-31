# CLAUDE.md — 포트폴리오 메이커 프로젝트

## 프로젝트 개요
취준생을 위한 포트폴리오 제작 SaaS. 토스·당근·빗썸·네이버·카카오 무드별 템플릿을 보여주고 웹사이트형 포트폴리오를 제작해주는 서비스.

**스택:** Next.js 15 (App Router) · TypeScript · Tailwind CSS · lucide-react

## 핵심 구조 규칙

| 경로 | 역할 |
|------|------|
| `app/` | 라우트 (page.tsx, layout.tsx만) |
| `components/layout/` | Header, Footer |
| `components/home/` | 홈 전용 섹션 컴포넌트 |
| `components/templates/` | 템플릿 카드·히어로 |
| `components/common/` | 재사용 범용 UI |
| `components/ui/` | shadcn 호환 저수준 컴포넌트 |
| `lib/` | 데이터·설정 (template-data.ts, site-config.ts) |

## 템플릿 데이터
`lib/template-data.ts`가 단일 소스. slug 기준으로 카드·상세 페이지 자동 반영.
새 템플릿 추가 시 이 파일만 수정하면 됨.

## 디자인 원칙
- 파스텔 민트·스카이·라벤더·피치·레몬 포인트
- 배경: `#FFFFFF` / `#F8F9FB`
- 텍스트: `#111827` (primary) / `#6B7280` (secondary)
- 카드: `rounded-2xl`, `shadow-card`, `border border-gray-100`
- 과한 유리효과 금지 — 아주 약한 backdrop-blur만 허용
- 자세한 팔레트 → `.claude/skills/pastel-brand-system/palette.md`
- 컴포넌트 규칙 → `.claude/skills/pastel-brand-system/component-rules.md`

## 자주 쓰는 Skills
- `/pastel-brand-system` — 색상·컴포넌트 디자인 시스템 작업
- `/template-gallery-builder` — 템플릿 카드·상세 구조 변경
- `/ui-polish-review` — UI 품질 점검

## 라우트
- `/` — 랜딩 (Hero + TemplatePreviewGrid + Features + CTA)
- `/templates` — 전체 템플릿 목록
- `/templates/[slug]` — 템플릿 상세 (toss|daangn|bithumb|naver|kakao)
- `/request` — 제작 문의 폼
