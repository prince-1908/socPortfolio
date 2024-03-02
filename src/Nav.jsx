import React, { useEffect, useState } from 'react'

function Nav() {
    return (
        <div className={`w-full top-0`}>
            <ul className='flex justify-end h-24 items-center text-xl'>
                <li className="mx-8 after:content-[''] after:block after:h-0.5 after:rounded after:w-full after:bg-red after:scale-x-0 after:transition hover:after:scale-x-100">
                    <button className='hover:text-red transition'>Home</button>
                </li>

                <li className="mx-8 after:content-[''] after:block after:h-0.5 after:rounded after:w-full after:bg-red after:scale-x-0 after:transition hover:after:scale-x-100">
                    <button className='hover:text-red transition'>Achievements</button>
                </li>

                <li className="mx-8 after:content-[''] after:block after:h-0.5 after:rounded after:w-full after:bg-red after:scale-x-0 after:transition hover:after:scale-x-100">
                    <button className='hover:text-red transition'>Placements</button>
                </li>

                <li className="mx-8 after:content-[''] after:block after:h-0.5 after:rounded after:w-full after:bg-red after:scale-x-0 after:transition hover:after:scale-x-100">
                    <button className='hover:text-red transition'>Facilities</button>
                </li>

                <li className="mx-8 after:content-[''] after:block after:h-0.5 after:rounded after:w-full after:bg-red after:scale-x-0 after:transition hover:after:scale-x-100">
                    <button className='hover:text-red transition'>Faculty Members</button>
                </li>

                <li className="mx-8">
                    <button className='border border-red p-4 hover:bg-red text-red hover:text-white transition hover:rounded'>Contact Us</button>
                </li>
            </ul >
        </div >
    )
}

export default Nav