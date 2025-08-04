import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { clsx } from "clsx";

const icons = [FaFacebookF, FaInstagram, FaXTwitter, FaYoutube];

const Social = ({ reverse }: { reverse?: boolean }) => {
  return (
    <div
      className={clsx(
        "flex gap-1 items-center rounded-full p-1 w-fit",
        "bg-black dark:bg-white",
        reverse && "lg:!bg-black text-white"
      )}
    >
      {icons.map((Icon, index) => (
        <div
          key={index}
          className={clsx(
            "cursor-pointer duration-300 rounded-full flex items-center justify-center size-12 md:size-7",
            "bg-white text-black dark:bg-black dark:text-white hover:bg-main",
            reverse && "!bg-white !text-black"
          )}
        >
          <Icon className="size-6 md:size-4" />
        </div>
      ))}
    </div>
  );
};

export default Social;
