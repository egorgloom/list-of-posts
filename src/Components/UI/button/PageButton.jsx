import React from 'react'


export default function PageButton({children, ...props}) {
  return (
    <div>
      <button {...props}>{children}</button>
    </div>
  )
}
