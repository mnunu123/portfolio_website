---
name: template-gallery-builder
description: 포트폴리오 메이커의 템플릿 갤러리 구조 — 새 템플릿 추가, 카드 레이아웃 변경, 상세 페이지 샘플 섹션 수정 시 참조
---

# Template Gallery Builder Skill

## 언제 읽어야 하나
- 새 템플릿 슬러그를 추가할 때
- 카드 레이아웃이나 필터를 수정할 때
- 상세 페이지 샘플 섹션 구조를 바꿀 때

## 보조 파일
- `content-model.md` — Template 데이터 스키마와 각 필드 설명

## 핵심 흐름
```
lib/template-data.ts
  └─ templates[] 배열
       ├─ app/templates/page.tsx  (목록: TemplateCard 렌더)
       └─ app/templates/[slug]/page.tsx  (상세: generateStaticParams + TemplateHero)
```

## 새 템플릿 추가 방법
1. `lib/template-data.ts`의 `templates` 배열에 새 객체 추가.
2. `content-model.md`에서 필드 규칙 확인.
3. 코드 변경 없이 카드·상세 페이지 자동 생성됨.

## 카드 수정
- `components/templates/TemplateCard.tsx` — 목록용 카드
- `PreviewMockup` 함수 — 카드 내 미리보기 UI (실제 프리뷰 없이 mock으로 표현)

## 상세 페이지 샘플 섹션 추가
`app/templates/[slug]/page.tsx`의 `SampleSection` 컴포넌트를 재사용:
```tsx
<SampleSection title="샘플 — Skills" accentColor={template.accentColor}>
  {/* placeholder content */}
</SampleSection>
```
