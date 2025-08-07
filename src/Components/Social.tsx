import { clsx } from "clsx";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
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
    Icon: FaTiktok,
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
              reverse && "!bg-white !text-black hover:!bg-main hover:!text-white"
            )}
          >
            <Icon className="size-5 sm:size-6 md:size-4" />
          </a>
        ))}
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

    </div>

  );
};

export default Social;
