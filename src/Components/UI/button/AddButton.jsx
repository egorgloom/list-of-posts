import React from 'react'
import classes from './AddButton.module.css'

export default function AddButton({children, ...props}) {
  return (
    <>
      <button className={classes.addBtn} {...props}>{children}</button>
    </>
  )
}
