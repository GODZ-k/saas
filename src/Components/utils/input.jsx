import React,{forwardRef, useId} from 'react'

function Input({type , className , placeholder ,label, required = false , ...props},ref) {
    const id = useId()
  return (
    <div className='mb-3'>
        {label && (<label htmlFor={type} ref={ref} className=' block py-[2px] text-sm'>{label}</label>)}
        <input type={type} className={`${className} border px-3 py-1.5 placeholder:text-sm rounded-md bg-gray-100 border-gray-300`}  size="35" placeholder={placeholder} required {...props} id={id} />
    </div>
  )
}

export default forwardRef(Input)