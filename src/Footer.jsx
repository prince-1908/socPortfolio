import React from 'react'
import { Facebook, Twitter, Youtube, Instagram } from 'lucide-react';
import { ColorLens } from '@mui/icons-material';

export const Footer = () => {
    return (
        <footer className='px-48 py-16 bg-black border-t flex justify-between'>
            <div className=' grid gap-10'>
                <div className=''>
                    <img src="/IPSLogoWhite.svg" alt="" />
                </div>
                <div className='text-xl grid gap-4'>
                    <p className=''><span className='text-red'>Address</span>: IPS Academy, A.B Road, Rajendra Nagar, Indore (M.P)</p>
                    <p className=''><span className='text-red'>Email</span>: <span className='hover:text-red cursor-pointer transition' onClick={() => { window.location.href = "mailto:office.soc@ipsacademy.org" }}>office.soc@ipsacademy.org</span></p>
                    <p className=''><span className='text-red'>Mobile</span>: <span className='hover:text-red transition cursor-pointer' onClick={() => { window.location.href = "tel:9229498055" }}>9229498055</span></p>
                    <p className=''><span className='text-red'>Phone</span>: <span className='hover:text-red transition cursor-pointer' onClick={() => { window.location.href = "tel:9977835161" }}>9977835161</span></p>
                    <p className=''><span className='text-red'>Landline</span>: <span className='hover:text-red transition cursor-pointer' onClick={() => { window.location.href = "tel:07314014578" }}>07314014578</span></p>
                </div>
            </div>

            <div className='w-1/3'>
                <h1 className='text-center text-4xl font-semibold'>Social <span className='text-red'>Media</span></h1>

                <div className='flex py-4 justify-evenly'>
                    <div className='border-2 p-2 rounded-full hover:border-red transition cursor-pointer' onClick={() => {window.location.href = "https://www.facebook.com/IPSAIndore"}}>
                        <Facebook/>
                    </div>
                    <div className='border-2 p-2 rounded-full hover:border-red transition cursor-pointer' onClick={() => {window.location.href = "https://twitter.com/ipsacademy_IN"}}>
                        <Twitter/>
                    </div>
                    <div className='border-2 p-2 rounded-full hover:border-red transition cursor-pointer' onClick={() => {window.location.href = "https://www.youtube.com/channel/UCOk657bI3nty62nKgzHSj5A"}}>
                        <Youtube/>
                    </div>
                    <div className='border-2 p-2 rounded-full hover:border-red transition cursor-pointer' onClick={() => {window.location.href = "https://www.instagram.com/ipsacademyindore/"}}>
                        <Instagram/>
                    </div>
                </div>
            </div>
        </footer>
    )
}
