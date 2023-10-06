import { memo, SelectHTMLAttributes, useState } from 'react'
import ClickAwayListener from 'react-click-away-listener'
import Arrow from 'shared/assets/icons/arrow.svg'
import classNames from 'classnames'
import cls from './Select.module.scss'
import { FormikErrors } from 'formik'
import { IReservationsData } from 'features/ReservationsRooms/model/types/type'

type HTMLSelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange'>

interface IOptions {
  value: string
  label: string
}

interface SelectProps extends HTMLSelectProps {
  onChange?: (
    field: string,
    value: any,
    shouldValidate?: boolean,
  ) => Promise<FormikErrors<IReservationsData>> | Promise<void>
  options: IOptions[] | undefined
  label?: string
  className?: string
}

export const Select = memo((props: SelectProps) => {
  const { id, className, options, defaultValue, onChange } = props
  const [value, setValue] = useState(defaultValue || '')
  const [isOpen, setIsOpen] = useState(false)

  const mod = {
    [cls.select_open]: isOpen,
  }

  const toggling = () => setIsOpen((prevState) => !prevState)

  const handleOnChange = (value: string) => () => {
    setValue(value)
    setIsOpen(false)
    onChange && id && onChange(id, value)
  }
  const handleClickAway = () => setIsOpen(false)

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={classNames(cls.select, mod, [className])}>
        <div onClick={toggling} className={cls.select__header}>
          {value && (
            <p className={cls.select__text}>{`${
              options?.find((option) => option.value === value)?.label || value
            }`}</p>
          )}
          <span className={cls.select__arrow}>
            <Arrow />
          </span>
        </div>
        {isOpen && (
          <div className={cls.select__content}>
            <ul className={cls.select__list}>
              {options?.map(({ label: optionLabel, value: optionValue }, index) => (
                <li
                  onClick={handleOnChange(optionValue)}
                  key={`${index}_${optionValue}`}
                  className={classNames(cls.select__item, {
                    [cls.select__itemActive]: value === optionValue,
                  })}
                >
                  {optionLabel}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </ClickAwayListener>
  )
})
