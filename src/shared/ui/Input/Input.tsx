import React, { InputHTMLAttributes, memo, ReactNode, useEffect, useRef, useState } from 'react'
import cls from './Input.module.scss'
import classNames from 'classnames'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'readOnly' | 'size'>

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string | number
  autofocus?: boolean
  readonly?: boolean
  error?: boolean
  helperText?: string
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autofocus,
    readonly,
    error,
    helperText = '',
    ...otherProps
  } = props
  const ref = useRef<HTMLInputElement>(null)
  const [isFocused, setIsFocused] = useState(false)

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true)
      ref.current?.focus()
    }
  }, [autofocus])

  const onBlur = () => {
    setIsFocused(false)
  }

  const onFocus = () => {
    setIsFocused(true)
  }

  const mods = {
    [cls.readonly]: readonly,
    [cls.focused]: isFocused,
    [cls.error]: error,
  }

  return (
    <div className={classNames(cls.inputWrapper, mods, [className])}>
      <input
        ref={ref}
        type={type}
        value={value}
        onChange={onChange}
        className={cls.input}
        onFocus={onFocus}
        onBlur={onBlur}
        readOnly={readonly}
        placeholder={placeholder}
        {...otherProps}
      />
      {error && <p className={cls.input__helperText}>{helperText}</p>}
    </div>
  )
})
