import React, { useState } from 'react'
import { validate, cleanString } from '../utils/validationUtils'

/**
 * @typedef Rules
 * @property {Boolean} required
 * @property {number} minLength
 * @property {boolean} noValidateOnChange
 * @property {boolean} email
 */

/**
 * Hook que permite manejar un campo de formulario con sus validaciones y eventos.
 * @param {string} name Nombre del campo
 * @param {Rules} rules Reglas de validacion que aplicarán en el campo
 * @param {string} format Formato que se aplicará en el campo al momento de escribir
 * @param {string} defaultValue Valor por defecto que tendrá el campo
 */
const useInput = (name, rules, format, defaultValue) => {
  const [value, setValue] = useState(defaultValue)
  const [isValid, setIsValid] = useState(null)
  const [errors, setErrors] = useState({})

  const handleOnChange = e => {
    const value = cleanString(e.target.value, format)
    const [errors, isValid] = validate({ name, value, rules })
    setValue(value)
    if (!rules.noValidateOnChange) {
      setIsValid(isValid)
      setErrors(errors)
    }
  }

  return {
    [name + 'Field']: {
      name,
      value,
      rules,
      errors,
      handleOnChange,
      isValid,
      validate: () => {
        const [errors, isValid] = validate({ name, value, rules })
        setErrors(errors)
        setIsValid(isValid)
        return isValid
      },
      setValue: value => setValue(value)
    }
  }
}

export const validateAll = fields => {
  let isValid = true
  fields.forEach(element => {
    if (!element.validate()) isValid = false
  })
  return isValid
}

export const getErrors = errors => {
  return (
    <ul className='m-0 list-unstyled'>
      {Object.values(errors).map((error, key) => (
        <li key={key}>{error}</li>
      ))}
    </ul>
  )
}

export default useInput
