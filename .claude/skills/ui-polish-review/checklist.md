# UI Polish Checklist

점검 시 각 항목을 순서대로 확인. 문제 발견 즉시 수정.

## 1. Spacing & Layout
- [ ] 섹션 세로 패딩 `py-16 sm:py-24` 일관 적용
- [ ] 컨테이너 `max-w-6xl mx-auto px-4 sm:px-6` 일관 적용
- [ ] 카드 내부 패딩 `p-5` 또는 `p-6` (혼재 없이)
- [ ] Grid gap `gap-5` 일관 (카드 그리드)
- [ ] 모바일 에서 텍스트가 화면 밖으로 넘치지 않음

## 2. Typography Hierarchy
- [ ] 페이지당 H1 하나만
- [ ] H1 → H2 → H3 순서 건너뜀 없음
- [ ] Hero 텍스트 `text-balance` 적용 (줄바꿈 자연스러움)
- [ ] Body text `leading-relaxed` 적용

## 3. Color Contrast
- [ ] 흰 배경 위 `text-gray-400` 이상 (gray-300 이하 금지)
- [ ] 컬러 배경 위 텍스트: `accentText` 사용 (WCAG AA)
- [ ] 다크 배경 위 흰 텍스트 사용 여부 확인
- [ ] Placeholder: `placeholder:text-gray-300` (너무 진하지 않게)

## 4. Interactive States
- [ ] 모든 Link/Button에 hover 스타일 존재
- [ ] 모든 Link/Button에 `focus-visible:ring-2` 존재
- [ ] active 상태: `active:scale-95` 또는 색상 변화
- [ ] disabled 상태가 필요한 경우 `opacity-50 cursor-not-allowed`

## 5. CTA Prominence
- [ ] 페이지 당 Primary CTA는 1개 (dark button)
- [ ] Secondary CTA는 outline/ghost 스타일로 구분
- [ ] CTA 텍스트가 행동 지향적 (동사 + 목적어)
- [ ] Hero CTA가 스크롤 없이 보이는 위치에 존재

## 6. Mobile Responsiveness
- [ ] 모든 grid가 모바일에서 1열로 축소
- [ ] 가로 스크롤 발생하지 않음 (overflow-x-hidden 불필요하게 쓰지 않음)
- [ ] 버튼/링크 터치 영역 최소 44px
- [ ] 폰트 크기 모바일 최소 14px (text-sm = 14px ✓)
- [ ] Header nav 모바일에서 깨지지 않음

## 7. Accessibility
- [ ] 이미지/아이콘에 `alt` 또는 `aria-hidden="true"`
- [ ] 장식용 요소에 `aria-hidden="true"`
- [ ] 폼 label-input 연결 (`htmlFor` + `id`)
- [ ] 필수 필드에 `required` 속성
- [ ] Semantic HTML: `header`, `main`, `footer`, `nav`, `section`, `article`

## 8. Performance
- [ ] `'use client'` 필요한 곳에만 사용 (pointer 이벤트, useState 등)
- [ ] 불필요한 re-render 없음
- [ ] 이미지 next/image 사용 (외부 이미지인 경우)
