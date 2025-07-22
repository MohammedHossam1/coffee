import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const socialLinks = [
  { icon: <FaFacebookF />, url: "https://facebook.com" },
  { icon: <FaTwitter />, url: "https://twitter.com" },
  { icon: <FaInstagram />, url: "https://instagram.com" },
];

const SocialLinks = () => {
  return (
    <div className="flex gap-4 text-white">
      {socialLinks.map(({ icon, url }, index) => (
        <a
          key={index}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300"
          aria-label="Social link"
        >
          {icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
