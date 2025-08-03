import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Social = () => {
    return (
        <div className="flex gap-1 items-center dark:bg-white rounded-full p-1">
            <div className="bg-black dark:bg-black dark:text-white  text-white rounded-full flex items-center justify-center size-12 md:size-7">
                <FaFacebookF className="size-6 md:size-4" />
            </div>
            <div className="bg-black dark:bg-black dark:text-white  text-white rounded-full flex items-center justify-center size-12 md:size-7">
                <FaInstagram className="size-6 md:size-4" />
            </div>
            <div className="bg-black dark:bg-black dark:text-white  text-white rounded-full flex items-center justify-center size-12 md:size-7">
                <FaXTwitter className="size-6 md:size-4" />
            </div>
            <div className="bg-black dark:bg-black dark:text-white  text-white rounded-full flex items-center justify-center size-12 md:size-7">
                <FaYoutube className="size-6 md:size-4" />
            </div>
        </div>
    )
}

export default Social