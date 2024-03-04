import React, { createElement } from 'react'
import { Mail, Phone, ExternalLink } from 'lucide-react';

export default function ContactUs() {
	const handleOfficeMail = () => {
		window.location.href = "mailto:office.soc@ipsacademy.org";
	}

	const handleAdmissionMail = () => {
		window.location.href = "mailto:admission.soc@ipsacademy.org"
	}

	const handleContact = (index) => {
		if(index === 0){
			window.location.href = "mailto:office.soc@ipsacademy.org";
		}
		else if(index === 1){
			window.location.href = "tel:+91-7067480286";
		}
	} 

	return (
		<div className='mx-48'>
			<div className="text-9xl  fixed z-[-100] font-bold top-[20%] left-1/2 translate-x-[-50%]">
				<div className='inline-block'>
					Contact <span className='text-red'>Us</span>
				</div>
			</div>

			<div className='mt-[30vh] text-4xl font-semibold text-center py-16 bg-black'>
				<span className='text-red'>IPS Academy Knowledge Village</span>,<br />Rajendra Nagar A.B. Road, Indore-452012.
			</div>

			<div className='flex justify-evenly bg-black'>

				{data.map((dt, index) => (<div key={index} className='border p-8 flex flex-col items-center gap-4 rounded-3xl hover:shadow-lg hover:shadow-red transition duration-200 hover:scale-[1.02] cursor-pointer hover:text-red'
				onClick={() => handleContact(index)}
				>
					{createElement(dt.icon, { size: 72 })}
					<p className='text-3xl'>{dt.content}</p>
					<div className='flex'>
						<p className='text-xl'>{dt.Label}</p>
						<ExternalLink />
					</div>
				</div>))}
			</div>

			<div className='text-4xl font-semibold text-center py-16 bg-black'>
				For Admissions (<span className='text-red'>Counselling</span>):
			</div>

			<div className='bg-black flex'>
				<div className='w-1/3'>
					<img src="https://www.ipsacademy.org/assets/uploads/faculty/faculty_1587022021.JPG" alt="Mr. Rohit Kumar Vyas" />
				</div>
				<div className='grow text-4xl flex flex-col justify-evenly py-16 px-16 border-t border-r border-b rounded-r-3xl'>
					<p>Mr. Rohit Kumar Vyas</p>
					<div className='flex'><p className='hover:text-red transition cursor-pointer'>8085224628</p>,<p className='hover:text-red transition cursor-pointer'>9926999161</p></div>
					<p className='hover:text-red transition cursor-pointer'>admission.soc@ipsacademy.org</p>
				</div>
			</div>
		</div>
	)
}


const data = [
	{
		icon: Mail,
		content: "office.soc@ipsacademy.org",
		Label: "Mail"
	},
	{
		icon: Phone,
		content: "+0731-4014858 , 859",
		Label: "Call Now"
	},
];