import { InputHTMLAttributes, useId } from 'react'
import Arrow from 'shared/assets/icons/checkboxArrow.svg'
import classNames from 'classnames'
import cls from './Checkbox.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'readOnly'>

interface CheckboxProps extends HTMLInputProps {
  className?: string
}

export const Checkbox = (props: CheckboxProps) => {
  const { className, ...otherProps } = props
  return (
    <label className={classNames(cls.checkbox, {}, [className])}>
      <input type='checkbox' {...otherProps} />
      <Arrow className={cls.checkbox__arrow} />
    </label>
  )
}
