import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = props => {
  const { isLoggedIn } = useSelector(state => ({ isLoggedIn: Boolean(state.privateRouteReducer.loggedIn) }))
  const { component: Component, ...restProps } = props

  return (
    <Route
      {...restProps}
      render={componentProps => {
        if (!isLoggedIn) {
          return <Redirect to='/login' />
        }

        return <Component {...componentProps} />
      }}
    />
  )
}

export default PrivateRoute
