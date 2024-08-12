import React from 'react'
import Button from '../components/shared/button'

const Thanks = () => {
    return (
        <section className='md:py-[120px] py-[70px] '>
            <div className='container'>
                <div className="text-center">
                    <h1 className='md:text-[120px] sm:text-[80px] text-[50px] animate-bounce duration-1000 hover:animate-none'>Thank You</h1>
                    <Button url='/' link='Go to Home' />
                </div>
            </div>
        </section>
    )
}

export default Thanks