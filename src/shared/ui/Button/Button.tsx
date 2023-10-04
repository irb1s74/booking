import { ButtonHTMLAttributes, memo } from 'react'
import classNames from 'classnames'
import cls from './Button.module.scss'

export type ButtonColor = 'normal' | 'light'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  variant?: string
  fullWidth?: boolean
  color?: ButtonColor
  square?: boolean
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    children,
    fullWidth = false,
    square = true,
    color = 'normal',
    ...otherProps
  } = props

  const mods = {
    [cls.square]: square,
    [cls.fullWidth]: fullWidth,
  }

  return (
    <button
      type='button'
      className={classNames(cls.button, mods, [className, cls[color]])}
      {...otherProps}
    >
      {children}
    </button>
  )
})
