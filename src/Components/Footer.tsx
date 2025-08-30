import { Link, useLocation } from 'react-router-dom';
import Social from './Social';
import ScrollToTopButton from './shared/ScrollToTop';
import Image from './shared/Image';
import logo from '../assets/logo.jpg';

const Footer = () => {
    const { pathname } = useLocation();
    if (pathname.includes('/categories')) return null;

    return (
        <div className='custom-container lg:py-10 bg-white  dark:text-black' >
            <div className="max-lg:hidden">

                <div className="grid grid-cols-12     lg:py-10 ">
                    <div className="col-span-12 lg:col-span-3  lg:self-end ">
                        <Social reverse={true} />
                    </div>
                    <div className="col-span-12 lg:col-span-6 flex flex-col gap-4 items-center justify-center pb-10">
                        <Link to="/" className='w-40'>
                            <Image src={logo} alt="logo" className="!w-40" />
                        </Link>
                    </div>

                    <div className="col-span-12 lg:col-span-3  flex items-center justify-end  lg:self-end  ">
                        <div className="space-x-3 ">
                            <Link to="/" className='text-xs font-bold'>سيــاسة الخصــوصية</Link>
                            <Link to="/" className='text-xs font-bold'>الشـــروط و الأحكــــام</Link>
                        </div>
                    </div>
                </div>

                {/* Separator */}
                <div className="relative">
                    <div className="w-full h-[1px] bg-[#D9D9D9]"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <ScrollToTopButton />
                    </div>
                </div>

                {/* bottom */}
                <div className="w-full flex items-center justify-between gap-2 pt-5 border-[#D9D9D9] " >
                    <h4 className='text-sm font-bold'>جميع الحقوق محفوظة  - {new Date().getFullYear()}</h4>

                    <div className="col-span-12 xl:col-span-3  xl:self-end">
                        <p className='text-xs font-bold uppercase tracking-[.2rem]'>Created by   <a href="https://qadi-tech.com/home" className='text-main mx-2'>Qadi-Tech</a></p>
                    </div>
                </div>
            </div>
            <div className="lg:hidden">
                <div className="w-full flex items-center justify-between gap-2 py-5 border-[#D9D9D9] text-nowrap " >
                    <h4 className='text-sm font-bold'>جميع الحقوق محفوظة  - {new Date().getFullYear()}</h4>
                    <div className="col-span-12 xl:col-span-3  xl:self-end">
                        <p className='text-xs  uppercase sm:tracking-[.2rem]'>Created by   <a href="https://qadi-tech.com/home" className='font-bold mx-2'>Qadi-Tech</a></p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Footer