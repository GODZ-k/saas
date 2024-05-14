import React from 'react'

function Button({children , className , type, ...props}) {
  return (
    <button type={type} {...props} className={`${className}  bg-gray-900 px-3 py-2.5 text-sm text-white w-full rounded-xl `} >{children}</button>
  )
}

export default Button