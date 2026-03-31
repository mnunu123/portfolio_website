---
name: pastel-brand-system
description: 포트폴리오 메이커의 파스텔 디자인 시스템 — 색상, 타이포그래피, 컴포넌트 스타일 규칙을 일관되게 적용하기 위한 참고 가이드
---

# Pastel Brand System Skill

이 프로젝트의 디자인 토큰과 컴포넌트 스타일링 기준을 담고 있다.

## 언제 읽어야 하나
- 새 컴포넌트를 만들 때
- 색상·radius·shadow를 결정할 때
- 타이포그래피 scale을 적용할 때
- 파스텔 팔레트에서 accent color를 골라야 할 때

## 보조 파일
- `palette.md` — 전체 컬러 팔레트와 사용 기준
- `component-rules.md` — 카드, 버튼, 배지, 폼, 섹션 스타일 규칙

## 핵심 원칙 요약
1. 배경은 항상 흰색 또는 오프화이트 (`#F8F9FB`)
2. 강조 색상은 파스텔 계열 5종 중 문맥에 맞게 선택
3. 유리 효과는 최소화 (`backdrop-blur-sm` 이하)
4. 그림자는 `shadow-card` / `shadow-card-hover` 2단계
5. 반응형은 `sm:` 브레이크포인트 기준

## 사용법
1. `palette.md`를 먼저 읽어 색상 컨텍스트를 파악한다.
2. `component-rules.md`에서 해당 컴포넌트 타입의 규칙을 확인한다.
3. Tailwind 클래스로 구현하되, 커스텀 색상은 `tailwind.config.ts` 참조.
