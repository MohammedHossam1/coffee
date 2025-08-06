import { clsx } from "clsx";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import map from "../assets/map.jpg";
import Image from "./shared/Image";
interface SocialItem {
  Icon: React.ComponentType<any>;
  href: string;
  label: string;
}

const socialItems: SocialItem[] = [
  {
    Icon: FaFacebookF,
    href: "https://facebook.com/YourPage",
    label: "Facebook",
  },
  {
    Icon: FaInstagram,
    href: "https://instagram.com/YourProfile",
    label: "Instagram",
  },
  {
    Icon: FaXTwitter,
    href: "https://twitter.com/YourHandle",
    label: "Twitter",
  },
  {
    Icon: FaYoutube,
    href: "https://youtube.com/YourChannel",
    label: "YouTube",
  }
];


const Social = ({ reverse }: { reverse?: boolean }) => {
  return (
    <div className="flex gap-2 items-center">

      <div
        className={clsx(
          "flex gap-1 items-center rounded-full p-1 w-fit",
          "bg-black dark:bg-white",
          reverse && "lg:!bg-black text-white"
        )}
      >
        {socialItems.map(({ Icon, href, label }, index) => (
          <a
            key={index}
            href={href}
            target="_blank"
            title={label}

            rel="noopener noreferrer"
            aria-label={label}
            className={clsx(
              "cursor-pointer duration-300 rounded-full flex items-center justify-center size-9 sm:size-12 md:size-7",
              "bg-white text-black dark:bg-black dark:text-white hover:bg-main",
              reverse && "!bg-white !text-black"
            )}
          >
            <Icon className="size-5 sm:size-6 md:size-4" />
          </a>
        ))}
      </div>
      <a
        href={"https://www.google.com/maps/place/Cairo"}
        target="_blank"
        title={"Location"}
        rel="noopener noreferrer"
        className={clsx(
          "cursor-pointer duration-300 rounded-full flex items-center justify-center size-9 sm:size-12 md:size-7",
          "bg-white text-black dark:bg-black dark:text-white hover:bg-main",
          reverse && "!bg-white !text-black"
        )}
      >
        <Image src={map} className="rounded-full hover:scale-105 duration-200 transition-all" />
      </a>
    </div>

  );
};

export default Social;
