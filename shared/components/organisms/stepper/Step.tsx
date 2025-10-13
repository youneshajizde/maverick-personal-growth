import React, { ReactNode } from 'react'
import { useStepper } from './root'

const Step = () => {
    const {currentStep , steps} = useStepper()
  return (
    <div className='mt-6'>
        {steps[currentStep]}
    </div>
  )
}

export default Step