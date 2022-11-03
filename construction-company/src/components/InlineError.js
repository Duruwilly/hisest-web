import React from 'react'

const InlineError = ({ error }) => {
  return (
    <p style={{color: '#c62828', margin: '4px', fontSize: '14px', fontWeight: '500'}}>{error}</p>
  )
}

export default InlineError