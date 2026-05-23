import styled, { css } from 'styled-components'
import type { ArgumentType, NodeKind, ViewScope } from './types'
import Link from 'next/link'

export const PageStyled = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  padding: 24px 0 64px;
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

export const TopBarStyled = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 20px;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

export const TopBarTitleBlockStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  h1 {
    font-size: 22px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
    margin: 0;
    letter-spacing: -0.01em;
  }
  p {
    margin: 0;
    font-size: 13px;
    color: ${({ theme }) => theme.colors.textMuted};
  }
`

export const TopBarMetaRowStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textMuted};
  span {
    display: inline-flex;
    gap: 6px;
    align-items: center;
  }
  strong {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 600;
  }
`

export const ScopeSwitchStyled = styled.div`
  display: inline-flex;
  padding: 4px;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.pill};
`

export const ScopeButtonStyled = styled.button<{ $active?: boolean }>`
  border: none;
  background: ${({ $active, theme }) =>
    $active ? theme.colors.white : 'transparent'};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.text : theme.colors.textMuted};
  padding: 8px 16px;
  font-size: 13px;
  font-weight: 600;
  border-radius: ${({ theme }) => theme.radii.pill};
  cursor: pointer;
  box-shadow: ${({ $active, theme }) => ($active ? theme.shadows.sm : 'none')};
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: all 0.15s;
  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`

export const WorkspaceGridStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 280px 1fr;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    grid-template-columns: 300px 1fr 300px;
  }
`

export const PanelStyled = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

export const PanelHeaderStyled = styled.div`
  padding: 16px 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  flex-direction: column;
  gap: 4px;
  h3 {
    margin: 0;
    font-size: 14px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
    letter-spacing: -0.005em;
  }
  span {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.textMuted};
  }
`

export const PanelBodyStyled = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 720px;
  overflow-y: auto;
`

/* ---------- Anatomy node ---------- */

const kindColor = (kind: NodeKind) => {
  switch (kind) {
    case 'claim':
      return css`
        color: ${({ theme }) => theme.colors.primary};
        background: ${({ theme }) => theme.colors.primarySoft};
      `
    case 'assumption':
      return css`
        color: ${({ theme }) => theme.colors.accentAmber};
        background: ${({ theme }) => theme.colors.accentAmberSoft};
      `
    case 'metric':
      return css`
        color: ${({ theme }) => theme.colors.accentEmerald};
        background: ${({ theme }) => theme.colors.accentEmeraldSoft};
      `
    case 'decision':
      return css`
        color: #6d28d9;
        background: #ede9fe;
      `
    case 'risk':
      return css`
        color: ${({ theme }) => theme.colors.accentRose};
        background: ${({ theme }) => theme.colors.accentRoseSoft};
      `
  }
}

export const NodeKindBadgeStyled = styled.span<{ $kind: NodeKind }>`
  display: inline-flex;
  align-items: center;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 3px 8px;
  border-radius: ${({ theme }) => theme.radii.sm};
  ${({ $kind }) => kindColor($kind)}
`

export const NodeCardStyled = styled.button<{ $active?: boolean }>`
  width: 100%;
  text-align: left;
  cursor: pointer;
  background: ${({ $active, theme }) =>
    $active ? theme.colors.primarySoft : theme.colors.white};
  border: 1px solid
    ${({ $active, theme }) =>
      $active ? theme.colors.primary : theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  transition: all 0.15s;
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`

export const NodeTitleStyled = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.35;
`

export const NodeMetaStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 11px;
  color: ${({ theme }) => theme.colors.textMuted};
  span {
    display: inline-flex;
    gap: 4px;
    align-items: center;
  }
`

export const ConfidenceBarStyled = styled.div<{ $value: number }>`
  position: relative;
  height: 4px;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 4px;
  overflow: hidden;
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    width: ${({ $value }) => Math.round($value * 100)}%;
    background: ${({ $value, theme }) =>
      $value > 0.7
        ? theme.colors.accentEmerald
        : $value > 0.4
          ? theme.colors.accentAmber
          : theme.colors.accentRose};
  }
`

/* ---------- Center: focused node + argument tree ---------- */

export const FocusedNodeStyled = styled.div`
  padding: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const FocusedHeadStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
`

export const FocusedTitleStyled = styled.h2`
  margin: 0;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.text};
`

export const FocusedSummaryStyled = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textMuted};
`

export const FocusedStatsStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  padding: 12px;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.md};
  > div {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  span:first-child {
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: ${({ theme }) => theme.colors.textSubtle};
    font-weight: 600;
  }
  span:last-child {
    font-size: 14px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
  }
`

export const ThreadsListStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  max-height: 600px;
  overflow-y: auto;
`

export const ThreadCardStyled = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.colors.white};
  overflow: hidden;
`

export const ThreadCardHeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background: ${({ theme }) => theme.colors.surface};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textMuted};
  flex-wrap: wrap;
  gap: 8px;
`

export const ParticipantsRowStyled = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  img {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid ${({ theme }) => theme.colors.white};
    margin-left: -6px;
    &:first-child {
      margin-left: 0;
    }
  }
`

export const ScopePillStyled = styled.span<{ $scope: 'public' | 'private' }>`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 3px 8px;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ $scope, theme }) =>
    $scope === 'private'
      ? theme.colors.accentAmberSoft
      : theme.colors.primarySoft};
  color: ${({ $scope, theme }) =>
    $scope === 'private' ? theme.colors.accentAmber : theme.colors.primary};
`

/* ---------- Argument node ---------- */

const argColor = (type: ArgumentType) => {
  switch (type) {
    case 'claim':
      return css`
        border-left-color: ${({ theme }) => theme.colors.primary};
      `
    case 'objection':
      return css`
        border-left-color: ${({ theme }) => theme.colors.accentRose};
      `
    case 'rebuttal':
      return css`
        border-left-color: ${({ theme }) => theme.colors.accentAmber};
      `
    case 'support':
      return css`
        border-left-color: ${({ theme }) => theme.colors.accentEmerald};
      `
    case 'evidence':
      return css`
        border-left-color: #6d28d9;
      `
    case 'question':
      return css`
        border-left-color: ${({ theme }) => theme.colors.textMuted};
      `
  }
}

const argTypeChip = (type: ArgumentType) => {
  switch (type) {
    case 'claim':
      return css`
        background: ${({ theme }) => theme.colors.primarySoft};
        color: ${({ theme }) => theme.colors.primary};
      `
    case 'objection':
      return css`
        background: ${({ theme }) => theme.colors.accentRoseSoft};
        color: ${({ theme }) => theme.colors.accentRose};
      `
    case 'rebuttal':
      return css`
        background: ${({ theme }) => theme.colors.accentAmberSoft};
        color: ${({ theme }) => theme.colors.accentAmber};
      `
    case 'support':
      return css`
        background: ${({ theme }) => theme.colors.accentEmeraldSoft};
        color: ${({ theme }) => theme.colors.accentEmerald};
      `
    case 'evidence':
      return css`
        background: #ede9fe;
        color: #6d28d9;
      `
    case 'question':
      return css`
        background: ${({ theme }) => theme.colors.surface};
        color: ${({ theme }) => theme.colors.textMuted};
      `
  }
}

export const ArgumentTreeStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
`

export const ArgumentNodeStyled = styled.div<{
  $type: ArgumentType
  $depth: number
}>`
  margin-left: ${({ $depth }) => Math.min($depth, 4) * 20}px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-left: 3px solid;
  ${({ $type }) => argColor($type)}
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 14px 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const ArgumentHeadStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textMuted};
  strong {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 600;
    font-size: 13px;
  }
  small {
    color: ${({ theme }) => theme.colors.textSubtle};
  }
`

export const ArgumentTypeChipStyled = styled.span<{ $type: ArgumentType }>`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 3px 8px;
  border-radius: ${({ theme }) => theme.radii.sm};
  ${({ $type }) => argTypeChip($type)}
`

export const ArgumentStatementStyled = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.55;
  color: ${({ theme }) => theme.colors.text};
`

export const EvidenceRowStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`

export const EvidenceChipStyled = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  font-weight: 600;
  color: #6d28d9;
  background: #ede9fe;
  padding: 4px 10px;
  border-radius: ${({ theme }) => theme.radii.pill};
  text-decoration: none;
  &:hover {
    background: #ddd6fe;
  }
`

export const ArgumentActionsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding-top: 8px;
  border-top: 1px dashed ${({ theme }) => theme.colors.border};
`

export const ArgumentActionBtnStyled = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.white};
  font-size: 11px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textMuted};
  padding: 5px 10px;
  border-radius: ${({ theme }) => theme.radii.pill};
  cursor: pointer;
  display: inline-flex;
  gap: 4px;
  align-items: center;
  transition: all 0.15s;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`

/* ---------- Composer ---------- */

export const ComposerStyled = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding: 16px 24px 20px;
  background: ${({ theme }) => theme.colors.surface};
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const ComposerTypeRowStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`

export const ComposerTypeBtnStyled = styled.button<{
  $active?: boolean
  $type: ArgumentType
}>`
  border: 1px solid
    ${({ $active, theme }) => ($active ? 'transparent' : theme.colors.border)};
  ${({ $active, $type }) => $active && argTypeChip($type)}
  ${({ $active, theme }) =>
    !$active &&
    css`
      background: ${theme.colors.white};
      color: ${theme.colors.textMuted};
    `}
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 5px 10px;
  border-radius: ${({ theme }) => theme.radii.sm};
  cursor: pointer;
`

export const ComposerTextareaStyled = styled.textarea`
  resize: vertical;
  min-height: 76px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 10px 12px;
  font-family: inherit;
  font-size: 14px;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.text};
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`

export const ComposerFooterStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textMuted};
`

/* ---------- Right panel ---------- */

export const ParticipantItemStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-radius: ${({ theme }) => theme.radii.md};
  &:hover {
    background: ${({ theme }) => theme.colors.surface};
  }
  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    object-fit: cover;
  }
`

export const ParticipantInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  strong {
    font-size: 13px;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 600;
  }
  span {
    font-size: 11px;
    color: ${({ theme }) => theme.colors.textMuted};
  }
`

export const ParticipantTagStyled = styled.span<{ $tone?: 'founder' | 'me' }>`
  font-size: 9px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 2px 6px;
  border-radius: ${({ theme }) => theme.radii.sm};
  ${({ $tone, theme }) =>
    $tone === 'founder'
      ? css`
          background: ${theme.colors.primarySoft};
          color: ${theme.colors.primary};
        `
      : css`
          background: ${theme.colors.accentEmeraldSoft};
          color: ${theme.colors.accentEmerald};
        `}
`

export const UnresolvedListStyled = styled.ul`
  list-style: none;
  margin: 0;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const UnresolvedItemStyled = styled.li`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-left: 3px solid ${({ theme }) => theme.colors.accentRose};
  background: ${({ theme }) => theme.colors.white};
  padding: 10px 12px;
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  strong {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 600;
    font-size: 13px;
  }
  span {
    color: ${({ theme }) => theme.colors.textMuted};
  }
`

export const ScopeNoteStyled = styled.div<{ $scope: ViewScope }>`
  margin: 0 0 12px;
  padding: 10px 12px;
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: 12px;
  background: ${({ $scope, theme }) =>
    $scope === 'mine'
      ? theme.colors.accentAmberSoft
      : $scope === 'global'
        ? theme.colors.primarySoft
        : theme.colors.surface};
  color: ${({ $scope, theme }) =>
    $scope === 'mine'
      ? theme.colors.accentAmber
      : $scope === 'global'
        ? theme.colors.primary
        : theme.colors.textMuted};
  display: flex;
  gap: 6px;
  align-items: center;
`
