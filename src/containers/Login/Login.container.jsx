import React from 'react'
import useInput, { validateAll } from './../../hooks/useInput'
import { Form, Button, Alert } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { onLogin } from './Login.actions'
import { Redirect } from 'react-router-dom'
import './Login.style.scss'

const LoginContainer = () => {
  const { emailField } = useInput('email', { required: true, email: true }, 'mail', '')
  const { passwordField } = useInput('password', { required: true }, '', '')
  const dispatch = useDispatch()
  const { isLoggedIn, loginError } = useSelector(state => ({
    isLoggedIn: Boolean(state.privateRouteReducer.loggedIn),
    loginError: state.privateRouteReducer.loginError
  }))

  const handleSubmitLogin = () => {
    if (validateAll([emailField, passwordField])) {
      dispatch(onLogin({ email: emailField.value, password: passwordField.value }))
    }
  }

  if (isLoggedIn) {
    return <Redirect to='/' />
  }

  return (
    <>
      <div className='login-clean'>
        <div className='illustration'>
          <i className='fas fa-key' />
        </div>
        {loginError && (
          <div className='error-message'>
            <Alert variant='danger'>El usuario o contraseña no coinciden.</Alert>
          </div>
        )}
        <Form>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='text'
              name='email'
              onChange={emailField.handleOnChange}
              value={emailField.value}
              isInvalid={emailField.isValid !== null ? !emailField.isValid : null}
            />
            <Form.Control.Feedback type='invalid'>{Object.values(emailField.errors)}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type='password'
              name='password'
              onChange={passwordField.handleOnChange}
              value={passwordField.value}
              isInvalid={passwordField.isValid !== null ? !passwordField.isValid : null}
            />
            <Form.Control.Feedback type='invalid'>{Object.values(passwordField.errors)}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Button variant='primary' block onClick={handleSubmitLogin}>
              Iniciar sesión
            </Button>
          </Form.Group>
        </Form>
      </div>
    </>
  )
}

export default LoginContainer
