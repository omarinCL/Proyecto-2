export const cleanString = (str, type) => {
  switch (type) {
    case 'alpha':
      return str.replace(/([^a-z0-9ñ]+)/gi, '')
    case 'rut':
      return str.replace(/([^0-9k.-]+)/gi, '')
    case 'text':
      return str.replace(/([^a-z0-9 .,ñáéíóú'-]+)/gi, '')
    case 'date':
      return str.replace(/([^0-9-]+)/gi, '')
    case 'number':
      return str.replace(/([^0-9]+)/gi, '')
    case 'mail':
      return str.replace(/([^a-z0-9ñ.@-]+)/gi, '')
    default:
      return str
  }
}

export const validateMail = mail => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(mail).toLowerCase())
}

export const validatePassword = password => {
  const regexp = new RegExp(/^(?=.{8,}$)(?=.*?[a-z])(?=.*?[0-9]).*$/, 'i')
  return regexp.test(password)
}

export const validateAll = fields => {
  return fields.every(field => Object.keys(field.errors).length === 0)
}

export const validate = field => {
  const errors = _validate(field)
  const isValid = Object.keys(errors).length === 0
  return [errors, isValid]
}

const _validate = field => {
  const errors = {}
  if (!field.value && field.rules.required) {
    errors.required = 'Este campo es obligatorio'
  }

  if (field.rules.email && !/\S+@\S+\.\S+/.test(field.value) && field.value) {
    errors.email = 'Formato de correo electrónico inválido'
  }

  if (field.rules.minLength && field.value.length < field.rules.minLength) {
    errors.password = `Este campo debe tener al menos ${field.rules.minLength} caracteres`
  }
  return errors
}
