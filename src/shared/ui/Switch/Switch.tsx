import { InputHTMLAttributes, memo } from 'react'
import classNames from 'classnames'
import cls from './Switch.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'readOnly'>

interface SwitchProps extends HTMLInputProps {
  className?: string
}

export const Switch = memo((props: SwitchProps) => {
  const { className, ...otherProps } = props
  return (
    <label className={classNames(cls.switch, {}, [className])}>
      <input type='checkbox' {...otherProps} />
      <span />
    </label>
  )
})
