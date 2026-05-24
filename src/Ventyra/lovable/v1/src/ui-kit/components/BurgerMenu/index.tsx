import React, { useCallback, useEffect, useRef, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { NavLink } from '../NavLink'
import {
  BurgerMenuRootStyled,
  DesktopNavStyled,
  DesktopActionsStyled,
  BurgerToggleStyled,
  BackdropStyled,
  MobilePanelStyled,
  MobilePanelHeaderStyled,
  MobileCloseStyled,
  MobileNavStyled,
  MobileNavLinkStyled,
  MobileActionsStyled,
} from './styles'
import type { BurgerMenuProps } from './types'

export const BurgerMenu: React.FC<BurgerMenuProps> = ({
  items,
  actions,
  ...other
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  // Close on outside click
  useEffect(() => {
    if (!isOpen) {
      return
    }
    const handle = (e: MouseEvent) => {
      const target = e.target as Node
      if (panelRef.current?.contains(target)) {
        return
      }
      if (toggleRef.current?.contains(target)) {
        return
      }
      setIsOpen(false)
    }
    document.addEventListener('mousedown', handle)
    return () => document.removeEventListener('mousedown', handle)
  }, [isOpen])

  // Close on Escape
  useEffect(() => {
    if (!isOpen) {
      return
    }
    const handle = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }
    document.addEventListener('keydown', handle)
    return () => document.removeEventListener('keydown', handle)
  }, [isOpen])

  // Lock body scroll
  useEffect(() => {
    if (typeof document === 'undefined') {
      return
    }
    const original = document.body.style.overflow
    document.body.style.overflow = isOpen ? 'hidden' : original || ''
    return () => {
      document.body.style.overflow = original
    }
  }, [isOpen])

  return (
    <BurgerMenuRootStyled {...other}>
      <DesktopNavStyled>
        {items.map((item) => (
          <NavLink key={item.label} href={item.href} active={item.active}>
            {item.label}
          </NavLink>
        ))}
      </DesktopNavStyled>

      {actions && <DesktopActionsStyled>{actions}</DesktopActionsStyled>}

      <BurgerToggleStyled
        ref={toggleRef}
        $open={isOpen}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        onClick={useCallback(() => setIsOpen((v) => !v), [])}
      >
        <FiMenu size={20} />
      </BurgerToggleStyled>

      <BackdropStyled $open={isOpen} aria-hidden />

      {isOpen && (
        <MobilePanelStyled
          ref={panelRef}
          $open={isOpen}
          role="dialog"
          aria-modal="true"
          aria-hidden={!isOpen}
        >
          <MobilePanelHeaderStyled>
            <span style={{ fontWeight: 600 }}>Menu</span>
            <MobileCloseStyled
              // eslint-disable-next-line react/jsx-no-bind
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <FiX size={20} />
            </MobileCloseStyled>
          </MobilePanelHeaderStyled>
          <MobileNavStyled>
            {items.map((item) => (
              <MobileNavLinkStyled
                key={item.label}
                href={item.href}
                $active={item.active}
                // eslint-disable-next-line react/jsx-no-bind
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </MobileNavLinkStyled>
            ))}
          </MobileNavStyled>
          {actions && <MobileActionsStyled>{actions}</MobileActionsStyled>}
        </MobilePanelStyled>
      )}
    </BurgerMenuRootStyled>
  )
}
