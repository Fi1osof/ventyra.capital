import styled, { css, keyframes } from 'styled-components'

export const PageStyled = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  padding: 32px 0 64px;
  min-height: 100%;
`

export const BreadcrumbStyled = styled.nav`
  display: flex;
  gap: 8px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.textMuted};
  padding-bottom: 16px;
  a {
    color: inherit;
    text-decoration: none;
  }
  a:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  span[aria-hidden] {
    opacity: 0.5;
  }
  strong {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 600;
  }
`

/* -------- Intro -------- */

export const IntroWrapStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1.2fr 1fr;
  }
`

export const IntroCardStyled = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.xl};
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const IntroBulletListStyled = styled.ul`
  list-style: none;
  padding: 0;
  margin: 8px 0 0;
  display: grid;
  gap: 12px;
`

export const IntroBulletStyled = styled.li`
  display: grid;
  grid-template-columns: 28px 1fr;
  gap: 12px;
  align-items: flex-start;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textMuted};
  strong {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 600;
  }
`

export const IntroBulletNumStyled = styled.span`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primarySoft};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 12px;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`

export const IntroAsideStyled = styled.aside`
  background: linear-gradient(180deg, #eef0ff 0%, #ffffff 100%);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.xl};
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const IntroAsideRowStyled = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 12px 14px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: 13px;
  color: ${({ theme }) => theme.colors.textMuted};
`

export const IntroAsideDotStyled = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  flex-shrink: 0;
`

/* -------- Interview -------- */

export const InterviewLayoutStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 320px 1fr;
  }
`

export const SidebarStyled = styled.aside`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 18px 16px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-self: start;
  position: sticky;
  top: 88px;
  max-height: calc(100vh - 110px);
  overflow-y: auto;
`

export const PreviewToggleStyled = styled.div`
  display: inline-flex;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 999px;
  padding: 3px;
  gap: 2px;
`

export const PreviewToggleBtnStyled = styled.button<{ $active?: boolean }>`
  border: 0;
  background: ${({ $active, theme }) =>
    $active ? theme.colors.white : 'transparent'};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.text : theme.colors.textMuted};
  box-shadow: ${({ $active }) =>
    $active ? '0 1px 3px rgba(0,0,0,0.08)' : 'none'};
  font: inherit;
  font-size: 11px;
  font-weight: 600;
  padding: 5px 10px;
  border-radius: 999px;
  cursor: pointer;
  transition: all 0.15s ease;
`

export const SectionGroupStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const SectionHeadStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 8px 4px;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textSubtle};
  svg {
    opacity: 0.7;
  }
`

export const PropertyRowStyled = styled.div<{
  $score: number
  $hasValue: boolean
  $active?: boolean
}>`
  display: grid;
  grid-template-columns: 22px 1fr auto;
  align-items: center;
  gap: 10px;
  padding: 8px 10px;
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: 12.5px;
  position: relative;
  transition: background 0.2s ease;
  ${({ $hasValue, $score, theme }) => {
    if (!$hasValue) {
      return `color: ${theme.colors.textMuted};`
    }
    if ($score > 0.05) {
      return `color: ${theme.colors.text}; background: ${theme.colors.accentEmeraldSoft};`
    }
    if ($score < -0.05) {
      return `color: ${theme.colors.text}; background: rgba(239, 68, 68, 0.08);`
    }
    return `color: ${theme.colors.text}; background: ${theme.colors.surface};`
  }}
  ${({ $active, theme }) =>
    $active ? `box-shadow: inset 0 0 0 1.5px ${theme.colors.primary};` : ''}
`

export const PropertyIconStyled = styled.span<{
  $score: number
  $hasValue: boolean
}>`
  width: 22px;
  height: 22px;
  border-radius: 6px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  ${({ $hasValue, $score, theme }) => {
    if (!$hasValue) {
      return `background: ${theme.colors.surfaceAlt}; color: ${theme.colors.textSubtle};`
    }
    if ($score > 0.05) {
      return `background: ${theme.colors.accentEmerald}; color: #fff;`
    }
    if ($score < -0.05) {
      return `background: #ef4444; color: #fff;`
    }
    return `background: ${theme.colors.textSubtle}; color: #fff;`
  }}
`

export const PropertyLabelStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`

export const PropertyLabelTopStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 500;
  line-height: 1.2;
`

export const PropertyValuePreviewStyled = styled.div`
  font-size: 11px;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.3;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`

export const RequiredDotStyled = styled.span`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  flex-shrink: 0;
`

export const ScoreBarStyled = styled.div`
  position: relative;
  width: 34px;
  height: 4px;
  background: ${({ theme }) => theme.colors.surfaceAlt};
  border-radius: 999px;
  flex-shrink: 0;
`

export const ScoreBarFillStyled = styled.span<{
  $score: number
  $hasValue: boolean
}>`
  position: absolute;
  top: 0;
  height: 100%;
  border-radius: 999px;
  left: ${({ $score }) => ($score >= 0 ? '50%' : `${50 + $score * 50}%`)};
  width: ${({ $score, $hasValue }) =>
    $hasValue ? `${Math.max(2, Math.abs($score) * 50)}%` : '0%'};
  background: ${({ $score, theme }) =>
    $score > 0.05
      ? theme.colors.accentEmerald
      : $score < -0.05
        ? '#ef4444'
        : theme.colors.textSubtle};
  transition: all 0.3s ease;
`

export const SidebarFooterStyled = styled.div`
  position: sticky;
  bottom: -18px;
  background: linear-gradient(
    180deg,
    transparent 0%,
    ${({ theme }) => theme.colors.white} 30%
  );
  padding-top: 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const SidebarHeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`

export const ProgressBarStyled = styled.div`
  height: 6px;
  background: ${({ theme }) => theme.colors.surfaceAlt};
  border-radius: 999px;
  overflow: hidden;
`

export const ProgressFillStyled = styled.div<{ $value: number }>`
  height: 100%;
  width: ${({ $value }) => `${$value}%`};
  background: ${({ theme }) => theme.colors.primary};
  transition: width 0.3s ease;
`

export const FieldListStyled = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
`

export const FieldRowStyled = styled.li<{ $state: 'done' | 'active' | 'todo' }>`
  display: grid;
  grid-template-columns: 22px 1fr auto;
  gap: 10px;
  align-items: center;
  padding: 8px 10px;
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: 13px;
  cursor: default;
  ${({ $state, theme }) => {
    if ($state === 'done') {
      return css`
        background: ${theme.colors.surface};
        color: ${theme.colors.text};
      `
    }
    if ($state === 'active') {
      return css`
        background: ${theme.colors.primarySoft};
        color: ${theme.colors.primary};
        font-weight: 600;
      `
    }
    return css`
      color: ${theme.colors.textMuted};
    `
  }}
`

export const FieldIconStyled = styled.span<{
  $state: 'done' | 'active' | 'todo'
}>`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 700;
  ${({ $state, theme }) =>
    $state === 'done'
      ? css`
          background: ${theme.colors.accentEmerald};
          color: #fff;
        `
      : $state === 'active'
        ? css`
            background: ${theme.colors.primary};
            color: #fff;
          `
        : css`
            background: ${theme.colors.surfaceAlt};
            color: ${theme.colors.textSubtle};
          `}
`

export const ChatPanelStyled = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  display: flex;
  flex-direction: column;
  min-height: 640px;
`

export const ChatHeaderStyled = styled.div`
  padding: 18px 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`

export const ChatAgentStyled = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`

export const AvatarStyled = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary},
    #8b5cf6
  );
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
`

export const LiveDotStyled = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.accentEmerald};
  display: inline-block;
  margin-right: 6px;
  box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.accentEmeraldSoft};
`

export const MessagesStyled = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  max-height: 520px;
`

export const BubbleStyled = styled.div<{ $role: 'ai' | 'user' }>`
  max-width: 78%;
  padding: 12px 16px;
  font-size: 14px;
  line-height: 1.55;
  border-radius: ${({ theme }) => theme.radii.lg};
  ${({ $role, theme }) =>
    $role === 'ai'
      ? css`
          align-self: flex-start;
          background: ${theme.colors.surface};
          color: ${theme.colors.text};
          border-bottom-left-radius: 4px;
        `
      : css`
          align-self: flex-end;
          background: ${theme.colors.primary};
          color: #fff;
          border-bottom-right-radius: 4px;
        `}
`

export const BubbleMetaStyled = styled.div<{ $role: 'ai' | 'user' }>`
  font-size: 11px;
  color: ${({ theme }) => theme.colors.textSubtle};
  padding: 0 4px;
  ${({ $role }) =>
    $role === 'user'
      ? css`
          align-self: flex-end;
        `
      : css`
          align-self: flex-start;
        `}
`

const blink = keyframes`
  0%, 80%, 100% { opacity: 0.2; }
  40% { opacity: 1; }
`

export const TypingStyled = styled.div`
  display: inline-flex;
  gap: 4px;
  align-items: center;
  span {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.textSubtle};
    animation: ${blink} 1.2s infinite;
  }
  span:nth-child(2) {
    animation-delay: 0.2s;
  }
  span:nth-child(3) {
    animation-delay: 0.4s;
  }
`

export const ComposerStyled = styled.form`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const ComposerRowStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 10px;
  align-items: end;
`

export const TextareaStyled = styled.textarea`
  width: 100%;
  min-height: 64px;
  resize: vertical;
  padding: 12px 14px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  font: inherit;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.white};
  outline: none;
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primarySoft};
  }
`

export const ComposerHintStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textSubtle};
`

/* -------- Review -------- */

export const ReviewGridStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1.4fr 1fr;
  }
`

export const ReviewCardStyled = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 18px;
`

export const ReviewFieldStyled = styled.div`
  display: grid;
  gap: 6px;
  padding-bottom: 16px;
  border-bottom: 1px dashed ${({ theme }) => theme.colors.border};
  &:last-child {
    border-bottom: 0;
    padding-bottom: 0;
  }
`

export const ReviewFieldLabelStyled = styled.div`
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${({ theme }) => theme.colors.textSubtle};
  font-weight: 700;
`

export const ReviewFieldValueStyled = styled.div<{ $empty?: boolean }>`
  font-size: 14px;
  line-height: 1.55;
  color: ${({ $empty, theme }) =>
    $empty ? theme.colors.textSubtle : theme.colors.text};
  font-style: ${({ $empty }) => ($empty ? 'italic' : 'normal')};
  white-space: pre-wrap;
`

export const ReviewSideStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const StatBoxStyled = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 20px;
`

export const ActionRowStyled = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`

/* -------- Shared header -------- */

export const StageHeaderStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;
`

export const StageStepsStyled = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  align-items: center;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textSubtle};
`

export const StageChipStyled = styled.span<{
  $state: 'done' | 'active' | 'todo'
}>`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  border-radius: 999px;
  font-weight: 600;
  font-size: 12px;
  ${({ $state, theme }) =>
    $state === 'active'
      ? css`
          background: ${theme.colors.primary};
          color: #fff;
        `
      : $state === 'done'
        ? css`
            background: ${theme.colors.accentEmeraldSoft};
            color: ${theme.colors.accentEmerald};
          `
        : css`
            background: ${theme.colors.surfaceAlt};
            color: ${theme.colors.textMuted};
          `}
`
