import React from 'react'
import Nav from './Nav'
import About from './About'
import ImageGallery from './component/ImageGallery'

export default function App() {
	return (
		<>
			<Nav />

			<div className='text-9xl fixed z-[-100] font-bold left-1/2 translate-x-[-50%] mt-32'>
				<div className='inline-block'>
					SCHOOL OF <p className='text-red'>COMPUTERS</p>
				</div>
			</div>

			<About/>

			<ImageGallery/>
		</>
	)
}
