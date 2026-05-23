import Link from 'next/link'
import styled, { css } from 'styled-components'

const DESKTOP = '960px'

export const BurgerMenuRootStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  flex: 1;
  justify-content: flex-end;
`

/* Desktop nav — list of items inline */
export const DesktopNavStyled = styled.nav`
  display: none;
  @media (min-width: ${DESKTOP}) {
    display: flex;
    align-items: center;
    gap: 28px;
  }
`

export const DesktopActionsStyled = styled.div`
  display: none;
  @media (min-width: ${DESKTOP}) {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`

/* Mobile toggle button */
export const BurgerToggleStyled = styled.button<{ $open: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  @media (min-width: ${DESKTOP}) {
    display: none;
  }
`

/* Backdrop overlay (mobile only, only when open) */
export const BackdropStyled = styled.div<{ $open: boolean }>`
  position: fixed;
  inset: 0;
  background: rgba(14, 18, 48, 0.4);
  z-index: 90;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  pointer-events: ${({ $open }) => ($open ? 'auto' : 'none')};
  transition: opacity 0.2s ease;
  @media (min-width: ${DESKTOP}) {
    display: none;
  }
`

/* Mobile panel (slide from right) */
export const MobilePanelStyled = styled.div<{ $open: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: min(320px, 86vw);
  background: ${({ theme }) => theme.colors.white};
  z-index: 100;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  transform: translateX(${({ $open }) => ($open ? '0' : '100%')});
  transition: transform 0.25s ease;
  box-shadow: -8px 0 32px rgba(14, 18, 48, 0.12);

  @media (min-width: ${DESKTOP}) {
    display: none;
  }
`

export const MobilePanelHeaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const MobileCloseStyled = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: transparent;
  border: 0;
  border-radius: 8px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  &:hover {
    background: ${({ theme }) => theme.colors.surface};
  }
`

export const MobileNavStyled = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const MobileNavLinkStyled = styled(Link)<{ $active?: boolean }>`
  display: block;
  padding: 12px 8px;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme, $active }) =>
    $active ? theme.colors.primary : theme.colors.text};
  border-radius: ${({ theme }) => theme.radii.md};
  text-decoration: none;
  &:hover {
    background: ${({ theme }) => theme.colors.surface};
  }
  ${({ $active }) =>
    $active &&
    css`
      font-weight: 600;
    `}
`

export const MobileActionsStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: auto;
`
