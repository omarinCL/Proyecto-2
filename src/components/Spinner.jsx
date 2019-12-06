import React from 'react'
import './Spinner.scss'

const Spinner = props => {
  if (props.show) {
    return (
      <div className='row justify-content-center'>
        <div className='col-auto'>
          <div className='lds-ring'>
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
      </div>
    )
  } else return null
}

export default Spinner
