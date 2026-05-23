export const theme = {
  colors: {
    bg: '#FFFFFF',
    surface: '#F7F8FB',
    surfaceAlt: '#F2F3F8',
    border: '#E5E7EE',
    borderStrong: '#D5D8E3',
    text: '#0E1230',
    textMuted: '#5B6079',
    textSubtle: '#8A8FA8',
    primary: '#4F46E5',
    primaryDark: '#2D2F8F',
    primaryHover: '#4338CA',
    primarySoft: '#EEF0FF',
    accentAmber: '#F59E0B',
    accentAmberSoft: '#FEF3C7',
    accentEmerald: '#10B981',
    accentEmeraldSoft: '#D1FAE5',
    accentRose: '#F43F5E',
    accentRoseSoft: '#FFE4E6',
    white: '#FFFFFF',
    success: '#16A34A',
  },
  radii: {
    sm: '6px',
    md: '10px',
    lg: '14px',
    xl: '20px',
    pill: '9999px',
  },
  shadows: {
    sm: '0 1px 2px rgba(20,22,60,0.06)',
    md: '0 4px 16px rgba(20,22,60,0.06)',
    lg: '0 12px 32px rgba(20,22,60,0.08)',
  },
  fonts: {
    body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    display:
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  },
  fontSizes: {
    xs: '12px',
    sm: '13px',
    base: '15px',
    md: '16px',
    lg: '18px',
    xl: '22px',
    '2xl': '28px',
    '3xl': '36px',
    '4xl': '48px',
    '5xl': '60px',
  },
  space: (n: number) => `${n * 4}px`,
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
  },
  layout: {
    maxWidth: '1200px',
    headerHeight: '72px',
  },
} as const

export type AppTheme = typeof theme

export const LovableTheme = theme
