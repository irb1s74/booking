import React, { InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react'
import InputMask from 'react-input-mask'
import classNames from 'classnames'
import cls from './PhoneInput.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'readOnly' | 'size'>

interface PhoneInputInputProps extends HTMLInputProps {
  className?: string
  value?: string | number
  autofocus?: boolean
  readonly?: boolean
  error?: boolean
  helperText?: string
}

export const PhoneInput = memo((props: PhoneInputInputProps) => {
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

  const mods = {
    [cls.readonly]: readonly,
    [cls.focused]: isFocused,
    [cls.error]: error,
  }

  return (
    <div className={classNames(cls.phoneInputWrapper, mods, [className])}>
      <InputMask
        className={cls.phoneInput}
        mask='+7 999 999 99-99'
        value={value}
        onChange={onChange}
        readOnly={readonly}
        placeholder={placeholder}
        {...otherProps}
      />
      {error && <p className={cls.phoneInput__helperText}>{helperText}</p>}
    </div>
  )
})
