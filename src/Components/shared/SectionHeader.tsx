
const SectionHeader = ({ icon, reverse, title, description }: { icon?: string, reverse?: boolean, title: string, description: string }) => {
    return (
        <div className={`flex items-center justify-center gap-2 flex-col py-10 ${reverse && "text-black"} `}>
            {icon && <img src={icon} alt="icon" className="size-7" />}
            <h1 className='text-xl xl:text-4xl font-bold'>{title}</h1>
            <p className='text-base xl:text-lg w-3/4 text-center font-medium'>{description}</p>
        </div>
    )
}

export default SectionHeader