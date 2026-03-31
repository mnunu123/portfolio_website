# Component Rules

## Cards
```tsx
// 기본 카드
className="rounded-2xl bg-white border border-gray-100 shadow-card p-5"

// 호버 인터랙션 카드
className="rounded-2xl bg-white border border-gray-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200"

// 파스텔 배경 카드 (features 등)
className="rounded-2xl border p-6" style={{ backgroundColor: accentBg, borderColor: accentBorder }}
```

## Buttons
```tsx
// Primary (dark)
className="px-7 py-3.5 rounded-2xl bg-gray-900 text-white font-semibold hover:bg-gray-700 active:scale-95 transition-all"

// Secondary (outline)
className="px-7 py-3.5 rounded-2xl bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 active:scale-95 transition-all"

// Accent (template color)
style={{ backgroundColor: template.accentColor }}
className="px-7 py-4 rounded-2xl text-white font-bold hover:opacity-90 active:scale-95 transition-all"
```

## Focus Ring (접근성 필수)
모든 interactive 요소에 적용:
```tsx
className="focus:outline-none focus-visible:ring-2 focus-visible:ring-toss focus-visible:ring-offset-2"
```

## Badges / Tags
```tsx
// Section badge
className="inline-flex px-3 py-1 rounded-full bg-gray-100 text-gray-500 text-xs font-semibold uppercase tracking-wider"

// Mood keyword tag
style={{ backgroundColor: accentBg, color: accentText }}
className="px-2.5 py-0.5 rounded-full text-xs font-medium"
```

## Typography Scale
| 용도 | 클래스 |
|------|--------|
| H1 (hero) | `text-4xl sm:text-6xl font-extrabold tracking-tight` |
| H2 (section) | `text-3xl sm:text-4xl font-bold` |
| H3 (card title) | `text-base sm:text-lg font-bold` |
| Body | `text-sm sm:text-base text-gray-600 leading-relaxed` |
| Caption | `text-xs text-gray-400` |

## Spacing Scale
- Section padding: `py-16 sm:py-24`
- Container: `max-w-6xl mx-auto px-4 sm:px-6`
- Card gap: `gap-5` (grid), `gap-4` (flex column)
- Section gap between components: `mb-12`

## Border Radius
- Card / container: `rounded-2xl`
- Button: `rounded-2xl`
- Tag / badge: `rounded-full`
- Input: `rounded-xl`
- Small element: `rounded-lg`

## Responsive
- Mobile first
- 단 두 브레이크포인트로 단순하게: `sm:` (640px), `lg:` (1024px)
- 모바일: 1열, sm: 2열, lg: 3열
