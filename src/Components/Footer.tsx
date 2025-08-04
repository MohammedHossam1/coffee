import { Link } from 'react-router-dom'
import { navLinks } from '../constant'
import Social from './Social'
import { BiMailSend } from "react-icons/bi";
import { PiPhoneCall } from "react-icons/pi";

const Footer = () => {
    return (
        <div className='custom-container py-10 bg-white  dark:text-black' onClick={(e) => console.log(e)}>
            <div className="grid grid-cols-12 justify-items-center gap-5 py-10">

                <div className="col-span-12 xl:col-span-3 xl:self-end">
                    <Social reverse={true} />
                </div>
                <div className="col-span-12 xl:col-span-6 flex flex-col gap-4 items-center xl:pb-20">
                    <div className="">
                        <div className="ms-auto">
                            <Link to="/">
                                <h1 className="text-base lg:text-sm  font-medium tracking-[.4rem] uppercase before-dot">Daily doze</h1>
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                to={link.path}
                                className="hover:underline lg:text-sm  transition-all duration-200"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="col-span-12 xl:col-span-3 flex gap-2 items-center xl:self-end xl:justify-end">
                    <div className="flex items-center  text-sm font-semibold gap-2">
                        <h2> Daily.Doze@Contact.com</h2>
                        <BiMailSend />
                    </div>
                    <div className="flex items-center  text-sm font-semibold gap-2">
                        <h2> Contact</h2>
                        <PiPhoneCall />
                    </div>
                </div>
            </div>
            <div className="w-full flex items-center justify-between gap-2 border-t pt-5 border-[#D9D9D9]">
                <h4 className='text-sm font-bold'>جميع الحقوق محفوظة  - 2025</h4>
                <div className="space-x-3">
                    <Link to="/" className='text-xs font-bold'>سيــاسة الخصــوصية</Link>
                    <Link to="/" className='text-xs font-bold'>الشـــروط و الأحكــــام</Link>
                </div>
            </div>

        </div >
    )
}

export default Footer