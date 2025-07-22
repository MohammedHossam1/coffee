import { Link } from 'react-router-dom'

const SectionHead = ({ title, link }:{title:string, link:string}) => {
    return (
        <div className='flex items-center justify-between gap-2'>
            <h2 className="text-2xl font-bold text-main">{title}</h2>
            <Link to={link} className="text-[#B1B1B1] text-lg  hover:text-main">عرض الكل
            </Link>
        </div>
    )
}

export default SectionHead