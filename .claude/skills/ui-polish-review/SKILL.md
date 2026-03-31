---
name: ui-polish-review
description: UI 품질 점검 스킬 — spacing, 접근성, hover/focus, 색 대비, 모바일 깨짐, CTA 가시성을 체계적으로 검토
---

# UI Polish Review Skill

## 언제 사용하나
- 새 페이지/컴포넌트 구현을 마쳤을 때
- 디자인 변경 후 품질 검토가 필요할 때
- PR 전 self-review 체크

## 보조 파일
- `checklist.md` — 항목별 체크리스트 (점검 시 항상 참조)

## 리뷰 순서
1. `checklist.md`를 열어 항목별로 순서대로 점검
2. 문제 발견 시 즉시 코드 수정 후 다음 항목으로
3. 점검 완료 후 이슈 요약 보고

## 핵심 관점
- **Spacing**: 일관된 padding/gap, 모바일 여백
- **Hierarchy**: 제목 > 부제 > 바디 > 캡션 순서 명확한가
- **Contrast**: 텍스트 vs 배경 WCAG AA (4.5:1) 이상
- **CTA**: 가장 중요한 버튼이 시각적으로 가장 두드러지는가
- **Focus**: 키보드 탐색 시 focus ring 보이는가
- **Hover**: 모든 클릭 가능 요소에 hover 스타일이 있는가
- **Mobile**: sm 브레이크포인트에서 레이아웃 깨짐 없는가
