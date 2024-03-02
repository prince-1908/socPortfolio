import React from 'react'
import AboutUs from './component/AboutUs'

export default function About() {
    const aboutUs = {
        heading: "About Us",
        content: "School of Computer Science was established in the year 1995 with a three-year full-time course in Bachelor of Computer Applications course affiliated to DAVV Indore (MP). The college is among the top ten BCA colleges in the state, situated in the educational hub (i.e. Indore ) of MP state. In recent years, there has been an increasing demand for BCA graduates from all corners of India. On account of rapid growth in the industry & services sector, the employment opportunities for young graduates who have undertaken computer education are bright. The persons already employed are also aspiring for BCA education to make growth in their career in terms of higher responsibilities and monetary benefits. Current Business schools give apt training & education to students to take challenges of multitasking in a competitive environment. This has created a huge demand for computer studies and technical knowledge is essential to ensure that quality and professional benefits are accrued from the degree courses. The School of Computers is acclaimed as the best MCA college in Indore."
    }

    const mission = {
        heading: "Misson",
        content: "To create professional and technologically enabled manpower for meeting the current and future demands of the industry and society. To foster research and development culture in close interaction with the computing and technology industry, promoting synergistic partnerships with the industry."
    }

    const vision = {
        heading: "Vision",
        content: "SOC IPS Academy aims to be one of the premier institutions of the country, dedicated to the creation, application, dissemination of knowledge, skills, spirit of competitive excellence, building up computing knowledge and skills as an essential component for futuristic work management."
    }
    return (
        <div className='bg-black mt-[60vh]'>

            <AboutUs heading={aboutUs.heading} content={aboutUs.content}/>
            <AboutUs heading={mission.heading} content={mission.content}/>
            <AboutUs heading={vision.heading} content={vision.content}/>
        </div>
    )
}
