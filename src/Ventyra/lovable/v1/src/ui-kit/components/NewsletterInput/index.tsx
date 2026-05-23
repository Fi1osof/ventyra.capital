import React, { useCallback, useState } from 'react'
import { FiArrowRight } from 'react-icons/fi'
import {
  NewsletterFormStyled,
  NewsletterInputStyled,
  NewsletterSubmitStyled,
} from './styles'
import type { NewsletterInputProps } from './types'

export const NewsletterInput: React.FC<NewsletterInputProps> = ({
  placeholder = 'Enter your email',
  buttonAriaLabel = 'Subscribe',
  onSubmit,
  ...other
}) => {
  const [value, setValue] = useState('')
  return (
    <NewsletterFormStyled
      onSubmit={useCallback(
        (e: React.FormEvent) => {
          e.preventDefault()
          if (onSubmit) {
            onSubmit(value)
          }
        },
        [onSubmit, value],
      )}
      {...other}
    >
      <NewsletterInputStyled
        type="email"
        placeholder={placeholder}
        value={value}
        onChange={useCallback(
          (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
          [],
        )}
      />
      <NewsletterSubmitStyled type="submit" aria-label={buttonAriaLabel}>
        <FiArrowRight size={16} />
      </NewsletterSubmitStyled>
    </NewsletterFormStyled>
  )
}
