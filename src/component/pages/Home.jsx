import React from 'react'
import About from '../../About'
import ImageGallery from '../ImageGallery'
import ContactForm from '../ContactForm'

export default function Home() {
    return (
        <div>
            <div className='text-9xl  fixed z-[-100] font-bold top-[30%] left-1/2 translate-x-[-50%]'>
                <div className='inline-block'>
                    SCHOOL OF <p className='text-red'>COMPUTERS</p>
                </div>
            </div>
            <About />

            <ImageGallery />

            <ContactForm />
        </div>
    )
}
