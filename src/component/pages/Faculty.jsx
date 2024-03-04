import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function Faculty() {
    const [expanded, setExpanded] = useState(Array(data.length).fill(false));

    const handleExpandClick = (index) => {
        const newExpanded = [...expanded];
        newExpanded[index] = !newExpanded[index];
        setExpanded(newExpanded);
    };

    return (
        <div className='mx-48'>

            <div className="text-9xl  fixed z-[-100] font-bold top-[20%] left-1/2 translate-x-[-50%]">
                <div className='inline-block'>
                    Faculty<span className='text-red'>Members</span>
                </div>
            </div>

            <div className='mt-[40vh] bg-black columns-4 pb-[40vh]'>
                {data.map((data, index) => (
                    <Card
                        sx={{ maxWidth: 345, backgroundColor: '#18181b', color: 'white' }} className='mb-4'
                        key={index}
                    >
                        <CardHeader
                            title={data.name}
                            subheader={
                                <Typography variant="subtitle2" color="white">
                                    {data.subHeading ? data.subHeading : " "}
                                </Typography>
                            }
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={data.img}
                            alt={data.name}
                        />
                        <CardContent>
                            <Typography variant="body2" color="white">
                                {data.education}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <Typography variant='body2' color="white" className='p-2'>
                                Show More
                            </Typography>
                            <ExpandMore
                                expand={expanded[index]}
                                onClick={() => handleExpandClick(index)}
                                aria-expanded={expanded[index]}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon style={{ color: 'white' }} />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded[index]} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph>
                                    {data.description}
                                </Typography>
                            </CardContent>
                        </Collapse>
                    </Card>))}
            </div>
        </div>
    );
}

const data = [
    {
        img: "https://www.ipsacademy.org/assets/uploads/colleges/director_photo_1587020626.jpeg",
        name: "Dr. Manish Pundlik",
        subHeading: "College HOD",
        education: "Ph. D , MBA , M.sc in Elect & Comm M.Tech in Future Studies & Planning , M.Tech CS & Engg.",
        description: "Dr. Manish Pundlik , Director,School of Computer Science, IPS Academy with a rich experience of more than 20 years of Academia, did his Ph. D in MBA . He has written research papers that includes national and international publications."
    },
    {
        img: "https://www.ipsacademy.org/assets/uploads/faculty/faculty_1587017274.JPG",
        name: "Ms. Kavita Choudhary",
        education: "MCA , ME in Computer Science and Engineering ,Ph. D. pursuing",
        description: "She joined School of Computer in july 2005.she completed her Master of Computer(MCA) from Banasthali Vidhyapith Rajasthan and later her ME in computer science and engineering from RGPV Bhopal. Her research interest are deep learning and Machine learning .she has published various research paper in various international conference and international journals. She is life member of Computer society of India."
    },
    {
        img: "https://www.ipsacademy.org/assets/uploads/faculty/faculty_1587017445.JPG",
        name: "Dr. Bharat Singh",
        education: "M.Sc ( Mathematics) Ph.D (Mathematics)",
        description: "He is Working as a Reader in School of Computers IPS Academy, Indore. He has written research papers that includes national and international publications."
    },
    {
        img: "https://www.ipsacademy.org/assets/uploads/faculty/faculty_1587017562.JPG",
        name: "Mr.Anand Gandhe",
        education: "ME (CSE) and Ph.D. pursuing",
        description: "He is Working as a Reader in School of Computers IPS Academy, Indore. having 14 years of experience in academics and administration. Published papers in national and international journals."
    },
    {
        img: "https://www.ipsacademy.org/assets/uploads/faculty/faculty_1587020239.JPG",
        name: "Mr. Rakesh Verma",
        education: "MCA, ME. pursuing Ph. D",
        description: "He is working as a Reader in School of Computers IPS Academy, Indore. I have 15 years of academic experience . I have attended national conferences and published various national and international papers. I attended various FDPs.conducted in our department and outside."
    },
    {
        img: "https://www.ipsacademy.org/assets/uploads/faculty/faculty_1587020448.JPG",
        name: "Mr. Fakhruddin Amjherawala",
        education: "MCA",
        description: "Working as an Assistant professor (Senior grade). Teaching Experience 12.5 year. Area of Intrest in S/W Development and Training . Developed a software based on manging Store Department Requisition. Published three paper on the International Journal and one present in International Conference."
    },
    {
        img: "https://www.ipsacademy.org/assets/uploads/faculty/faculty_1587021947.JPG",
        name: "Ms. Naziya Hussain",
        education: "Ph D (CSE), ME (CSE), BE(CSE)",
        description: "Ms. Naziya Hussain is an Assistant Professor in the School of Computer IPS Academy and has a considerable amount of progressive experience in Computer Science and engineering. She has participated and presented research papers in National and international conferences also published many research papers in renowned journals. She has even conducted many Workshops through IIT Mumbai and IIT Kharagpur as Remote center coordinator. Her research areas are Computer Network, Wireless Network, Ad-hoc Network and VANET. She is Life Member of CSI, ISTE, IAENG."
    },
    {
        img: "https://www.ipsacademy.org/assets/uploads/faculty/faculty_1590597230.JPG",
        name: "Ms. Urvashi Sharma",
        education: "M tech Computer Science and Engineering",
        description: "She is Senior lecturer. She has been working in SCHOOL of COMPUTER, IPS academy with a rich experience of 12 years of Academia. She has 4 national and international research publications, attended conferences, workshops and seminars."
    },
    {
        img: "https://www.ipsacademy.org/assets/uploads/faculty/faculty_1587022021.JPG",
        name: "Mr. Rohit kumar vyas",
        education: "MCA",
        description: "He is assistant professor, Institutes innovation cell coordinator and innovation ambassador AICTE with institute. His areas of interest include Theory of Computation, Artificial Intelligence and Internet of Things(IoT) , he has rich experience of 12 years industry and teaching.he has represented institute in national and international robotics competition,attended conferences, workshops, seminars and FDP's conducted by AICTE, UGC and IIT's."
    },
    {
        img: "https://www.ipsacademy.org/assets/uploads/faculty/faculty_1587026072.JPG",
        name: "Ms. Nikita Jain Nahar",
        education: "MCA",
        description: "She is Associate professor at SOC IPS Academy, Indore.She has 9 yrs of experience in teaching at graduate and post graduate level. She Self motivated and disciplined and working with department since 2011."
    },
    {
        img: "https://www.ipsacademy.org/assets/uploads/faculty/faculty_1587025652.JPG",
        name: "Mr. Aaftab Qureshi",
        education: "MCA , M.TECH",
        description: "He has been associated with the School of Computers (SOC) IPS Academy, Indore since August; 2011. He has 13 years of teaching experience. His areas of interest include Theory of Computation, Artificial Intelligence, and ADA. He has published his research work at the National and International level. He has represented the institute in national and international robotics competitions, attended conferences, workshops, seminars and FDP's conducted by AICTE, UGC and IIT's Mumbai."
    },
    {
        img: "https://www.ipsacademy.org/assets/uploads/faculty/faculty_1590597079.JPG",
        name: "Mr Vivek Rai",
        education: "MCA , M.TECH",
        description: "He has 10 years of academic experience at graduation and post graduation level and written 5 national and international research papers,attended workshops and conferences"
    },
    {
        img: "https://www.ipsacademy.org/assets/uploads/faculty/faculty_1587024636.JPG",
        name: "Ms. Purnima chourasiya",
        description: "Ms. Purnima Chourasiya assistant professor School of Computers IPS ACADEMY,INDORE With experience of eight years of academy. She has completed MBA with specialization in HR and Marketing in DAVV University and Ph.D pursuing in sage university in Indore. She has 7 national and international research paper, attended conference,workshop and seminar.She has attended FDP conducted by NIIT."
    },
    {
        img: "https://www.ipsacademy.org/assets/uploads/faculty/faculty_1587024802.JPG",
        name: "Dr. Manoj Kumar Khanduja",
        education: "M.Phil(Mathematics) , PhD ( Fixed Point Theorem in Fizzy Metric Space)",
        description: "Working as Asst. Professor of Mathd in SO C IPS Academy for the last 7 years Total l 22 yrs teaching experiences. Publishrd papets in various Jornsls."
    },
    {
        img: "https://www.ipsacademy.org/assets/uploads/faculty/faculty_1587024580.JPG",
        name: "Ms. Ummubanin Amjherawala",
        education: "MCA",
        description: "Working as an Assistant professor Industrial +Teaching Experience of 9year. Area of Intrest in S/W Development and Training . Developed a software based on managing Store Department Requisition. Published three paper in the International Journal and one present in International Conference."
    },
    {
        img: "https://www.ipsacademy.org/assets/uploads/faculty/faculty_1587024704.JPG",
        name: "Ms. Nidhi Agrawal",
        education: "MCA",
        description: "Ms. Nidhi Agrawal working as Assistant professor in School Of Computers IPS ACADEMY, INDOREShe has 8 years of teaching experience in the field of education. She has attended various FDP and workshops on IoT, Machine Learning with Python, etc. I have also qualified NPTEL certification on DBMS, GOOGLE ANALYTICS certification. She has published research papers in international journals on various latest technologies. She has awarded the best research paper award at the national conference organized by Vaishnav Institute Indore."
    },
    {
        img: "/faculty_1587097369.png",
        name: "Ms. Anshu Biyani",
        education: "MCA",
        description: "Ms. Anshu Biyani is an Asst. Prof. in School of Computers, IPS Academy. She has 6 years of teaching experience at graduate and post graduate level. She has attended various workshops, seminars and faculty development programs."
    },
]