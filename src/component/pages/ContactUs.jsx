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
		if (index === 0) {
			window.location.href = "mailto:office.soc@ipsacademy.org";
		}
		else if (index === 1) {
			window.location.href = "tel:+0731-4014858";
		}
	}

	return (
		<div className='mx-48 pb-[10vh] bg-black'>
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

			{contactBlocks.map((data, index) => (
				<div key={index} className='py-16'>
					<div className='text-4xl font-semibold text-center py-8 bg-black'>
						{data.heading}
					</div>
					<div className='bg-black flex'>
						<div className='w-1/3'>
							<img src={data.img} alt="Mr. Rohit Kumar Vyas" />
						</div>
						<div className='grow text-4xl flex flex-col justify-evenly py-16 px-16 border-t border-r border-b rounded-r-3xl'>
							<p>{data.name}</p>
							<div className='flex'>
								{data.num.map((number, index) => (
									<p key={index} onClick={() => { window.location.href = "tel:8085224628" }} className='hover:text-red transition cursor-pointer mr-7'>{number}</p>
								))}
							</div>
							<p onClick={() => { window.location.href = "mailto:admission.soc@ipsacademy.org" }} className='hover:text-red transition cursor-pointer'>{data.email}</p>
						</div>
					</div>
				</div>))}
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

const contactBlocks = [
	{
		img: "https://www.ipsacademy.org/assets/uploads/faculty/faculty_1587022021.JPG",
		heading: "For Admissions(Counselling)",
		name: "Mr. Rohit Kumar Vyas",
		num: ["8085224628", "9926999161"],
		email: "admission.soc@ipsacademy.org"
	},
	{
		img: "https://www.ipsacademy.org/assets/uploads/faculty/faculty_1587017445.JPG",
		heading: "Discipline and Anti Ragging Committee",
		name: "Dr.Bharat Singh",
		num: ["9826067207"],
		email: "bharatsingh@ipsacademy.org"
	},
	{
		img: "https://www.ipsacademy.org/assets/uploads/faculty/faculty_1587021947.JPG",
		heading: "Women's Grievance Cell",
		name: "Dr. Naziya Hussain",
		num: ["0731-4014858"],
		email: "naziyahussain@ipsacademy.org"
	},
];