import { cn } from '@/shared/utils/functions'
import React, { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label? : string
    error? : string
}

const Input = ({label , id , className, error , ...props} : InputProps) => {

  return (
    <div className='flex flex-col gap-1.5'>
        <label htmlFor="" className='text-sm'>
            {label}
        </label>

        <input id={id} {...props} className={cn('rounded-xl border text-sm outline-none focus:ring-1 focus:ring-secondary border-black/15 placeholder:text-sm placeholder:text-black/30 p-3', className )}/>

        {error && <span className='text-danger text-sm'>{error}</span>}
    </div>
  )
}

export default Input