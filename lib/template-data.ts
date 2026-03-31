// Template metadata — single source of truth for all template cards and detail pages

export interface Template {
  slug: string;
  name: string;
  oneLine: string;
  description: string;
  moodKeywords: string[];
  targetUser: string;
  accentColor: string;
  accentBg: string;
  accentText: string;
  previewStyle: 'clean' | 'warm' | 'dark' | 'natural' | 'social';
  emoji: string;
}

export const templates: Template[] = [
  {
    slug: 'toss',
    name: '토스 스타일',
    oneLine: '군더더기 없이 명확한, 핀테크 미니멀',
    description:
      '토스의 깔끔한 디자인 언어에서 영감을 받은 템플릿입니다. 불필요한 장식을 제거하고, 핵심 정보를 가장 또렷하게 전달합니다. 데이터 중심의 커리어를 가진 분께 잘 어울립니다.',
    moodKeywords: ['미니멀', '명확함', '모던', '핀테크', '프로페셔널'],
    targetUser: '개발자, 기획자, 데이터 직군 취준생',
    accentColor: '#4B7BF5',
    accentBg: '#EEF2FF',
    accentText: '#1D4ED8',
    previewStyle: 'clean',
    emoji: '💙',
  },
  {
    slug: 'daangn',
    name: '당근 스타일',
    oneLine: '따뜻하고 친근한, 커뮤니티 감성',
    description:
      '당근마켓의 따뜻한 오렌지 팔레트와 친근한 언어에서 영감을 받은 템플릿입니다. 사람 중심의 스토리와 경험을 효과적으로 전달합니다. 사람 만나는 직군에 잘 맞습니다.',
    moodKeywords: ['따뜻함', '친근함', '커뮤니티', '로컬', '인간적'],
    targetUser: 'PM, 마케터, 커뮤니티 매니저, 서비스 기획자',
    accentColor: '#FF6F0F',
    accentBg: '#FFF7ED',
    accentText: '#C2410C',
    previewStyle: 'warm',
    emoji: '🥕',
  },
  {
    slug: 'bithumb',
    name: '빗썸 스타일',
    oneLine: '신뢰감 있는 다크 톤, 금융 전문가',
    description:
      '빗썸의 전문적이고 신뢰감 있는 디자인에서 영감을 받은 템플릿입니다. 데이터와 수치를 중심으로 역량을 명확하게 표현합니다. 금융·블록체인·데이터 직군에 적합합니다.',
    moodKeywords: ['전문성', '신뢰감', '금융', '데이터', '정확성'],
    targetUser: '금융, 블록체인, 데이터 분석, 퀀트 직군',
    accentColor: '#1A3C5E',
    accentBg: '#EFF6FF',
    accentText: '#1E3A5F',
    previewStyle: 'dark',
    emoji: '📊',
  },
  {
    slug: 'naver',
    name: '네이버 스타일',
    oneLine: '안정감 있는 그린, 대중적 신뢰',
    description:
      '네이버의 안정적이고 대중적인 그린 팔레트에서 영감을 받은 템플릿입니다. 넓은 사용자를 아우르는 직관적인 구조로 경험을 보여줍니다. 포용적이고 체계적인 인상을 줍니다.',
    moodKeywords: ['안정감', '신뢰', '종합', '대중적', '체계적'],
    targetUser: '개발자, UX 디자이너, 서비스 기획, 콘텐츠 직군',
    accentColor: '#03C75A',
    accentBg: '#ECFDF5',
    accentText: '#065F46',
    previewStyle: 'natural',
    emoji: '🟢',
  },
  {
    slug: 'kakao',
    name: '카카오 스타일',
    oneLine: '밝고 소셜한, 라이프스타일 브랜드',
    description:
      '카카오의 친근한 옐로우 브랜드와 소셜 감성에서 영감을 받은 템플릿입니다. 개성과 스토리를 생동감 있게 전달합니다. 밝고 활기찬 인상을 남기고 싶은 분께 적합합니다.',
    moodKeywords: ['밝음', '소셜', '생동감', '친근', '라이프스타일'],
    targetUser: '마케터, 콘텐츠 크리에이터, 디자이너, BX 직군',
    accentColor: '#FEE500',
    accentBg: '#FEFCE8',
    accentText: '#92400E',
    previewStyle: 'social',
    emoji: '💛',
  },
];

export function getTemplateBySlug(slug: string): Template | undefined {
  return templates.find((t) => t.slug === slug);
}
