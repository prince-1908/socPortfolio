import React, { useEffect, useState } from 'react'

function AboutUs(props) {
    return (
        <div className="transition ease-linear">
            <div className='mx-[30vw] flex flex-col items-center py-24'>
                <h2 className='text-7xl text-red border-b-2 border-red'>{props.heading}</h2>
                <p className='mt-8 text-justify'>{props.content}</p>
            </div>
        </div>
    )
}

export default AboutUs