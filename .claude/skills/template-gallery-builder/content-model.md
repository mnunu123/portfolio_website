# Template Content Model

## Template 인터페이스 (lib/template-data.ts)

```typescript
interface Template {
  slug: string;          // URL slug (toss | daangn | bithumb | naver | kakao)
  name: string;          // 표시 이름 (예: "토스 스타일")
  oneLine: string;       // 한 줄 설명 (카드 서브타이틀)
  description: string;   // 상세 설명 (상세 페이지용, 2~3문장)
  moodKeywords: string[];// 분위기 키워드 5개 (배지로 표시)
  targetUser: string;    // 추천 대상 직군 설명
  accentColor: string;   // 브랜드 메인 색 (#RRGGBB)
  accentBg: string;      // 연한 배경색 (#RRGGBB)
  accentText: string;    // 텍스트/배지용 진한 색 (#RRGGBB)
  previewStyle: 'clean' | 'warm' | 'dark' | 'natural' | 'social'; // mock preview 스타일
  emoji: string;         // 대표 이모지 (1자)
}
```

## 필드 규칙

### slug
- 소문자 영문, 하이픈 허용
- URL에 직접 사용되므로 영문만 사용
- `generateStaticParams`에서 자동 등록됨

### accentColor / accentBg / accentText
- 세 값은 항상 같은 색조의 3단계여야 함
  - `accentBg` — 가장 연함 (배경용)
  - `accentColor` — 중간 (버튼, 아이콘)
  - `accentText` — 가장 진함 (텍스트, 접근성 대비 4.5:1 이상)

### previewStyle
| 값 | 설명 |
|----|------|
| `clean` | 흰 배경, 파란 accent (토스 계열) |
| `warm` | 오렌지 배경, 따뜻한 톤 (당근 계열) |
| `dark` | 다크 네이비 배경 (빗썸 계열) |
| `natural` | 그린 배경 (네이버 계열) |
| `social` | 옐로우 배경 (카카오 계열) |

### moodKeywords
- 5개 권장
- 한국어, 2~4자 단어
- 카드에서는 앞 2개만 표시, 상세 페이지에서는 전체 표시

## 현재 등록된 Templates
| slug | name | accent |
|------|------|--------|
| toss | 토스 스타일 | #4B7BF5 |
| daangn | 당근 스타일 | #FF6F0F |
| bithumb | 빗썸 스타일 | #1A3C5E |
| naver | 네이버 스타일 | #03C75A |
| kakao | 카카오 스타일 | #FEE500 |
