import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav className={`w-full top-0`}>
            <ul className='flex justify-end h-24 items-center text-xl'>
                <li className="mx-8 after:content-[''] after:block after:h-0.5 after:rounded after:w-full after:bg-red after:scale-x-0 after:transition hover:after:scale-x-100">
                    <Link to="/" className='hover:text-red transition'>Home</Link>
                </li>

                <li className="mx-8 after:content-[''] after:block after:h-0.5 after:rounded after:w-full after:bg-red after:scale-x-0 after:transition hover:after:scale-x-100">
                    <Link to="/achievements" className='hover:text-red transition'>Achievements</Link>
                </li>

                <li className="mx-8 after:content-[''] after:block after:h-0.5 after:rounded after:w-full after:bg-red after:scale-x-0 after:transition hover:after:scale-x-100">
                    <Link to="placements" className='hover:text-red transition'>Placements</Link>
                </li>

                <li className="mx-8 after:content-[''] after:block after:h-0.5 after:rounded after:w-full after:bg-red after:scale-x-0 after:transition hover:after:scale-x-100">
                    <Link to="facilities" className='hover:text-red transition'>Facilities</Link>
                </li>

                <li className="mx-8 after:content-[''] after:block after:h-0.5 after:rounded after:w-full after:bg-red after:scale-x-0 after:transition hover:after:scale-x-100">
                    <Link to="faculty" className='hover:text-red transition'>Faculty Members</Link>
                </li>

                <li className="mx-8">
                    <Link to="contact" className='border border-red p-4 hover:bg-red text-red hover:text-white transition hover:rounded'>Contact Us</Link>
                </li>
            </ul >
        </nav >
    )
}

export default Nav