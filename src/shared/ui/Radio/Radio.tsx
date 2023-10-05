import { InputHTMLAttributes, memo } from 'react'
import classNames from 'classnames'
import cls from './Radio.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'readOnly'>

interface RadioProps extends HTMLInputProps {
  className?: string
  label?: string
}

export const Radio = memo((props: RadioProps) => {
  const { id, label, className, ...otherProps } = props

  return (
    <div className={classNames(cls.radio, {}, [className])}>
      <input id={id} type='radio' {...otherProps} />
      <label htmlFor={id}>{label}</label>
    </div>
  )
})
