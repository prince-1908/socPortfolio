import React from 'react'
import Nav from './Nav'
import Home from './component/pages/Home'
import Achievements from './component/pages/Achievements'
import Placements from './component/pages/Placements'
import Facilities from './component/pages/Facilities'
import Faculty from './component/pages/Faculty'
import ContactUs from './component/pages/ContactUs'
import {Routes, Route} from 'react-router-dom'
import { Footer } from './Footer'


export default function App() {
	return (
		<>
			<Nav />

			<Routes>
				<Route path='/' element={<Home/>}/>
				<Route path='/achievements' element={<Achievements/>}/>
				<Route path='/placements' element={<Placements/>}/>
				<Route path='/facilities' element={<Facilities/>}/>
				<Route path='/faculty' element={<Faculty/>}/>
				<Route path='/contact' element={<ContactUs/>}/>
			</Routes>

			<Footer/>
		</>
	)
}
