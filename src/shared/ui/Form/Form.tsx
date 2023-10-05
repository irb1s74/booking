import { FormHTMLAttributes, memo, ReactNode } from 'react'
import classNames from 'classnames'
import cls from './Form.module.scss'

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  className?: string
  children?: ReactNode
}

export const Form = memo((props: FormProps) => {
  const { className, children, ...rest } = props
  return (
    <form {...rest} className={classNames(cls.form, {}, [className])}>
      {children}
    </form>
  )
})
