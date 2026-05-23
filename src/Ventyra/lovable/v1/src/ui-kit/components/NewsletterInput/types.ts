import type { FormHTMLAttributes } from 'react'

export type NewsletterInputProps = Omit<
  FormHTMLAttributes<HTMLFormElement>,
  'onSubmit'
> & {
  placeholder?: string
  buttonAriaLabel?: string
  onSubmit?: (email: string) => void
}
