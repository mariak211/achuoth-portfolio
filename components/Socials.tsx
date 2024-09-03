import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const socialsContent = [
  { icon: <FaGithub />, urlPath: "https://github.com/mariak211" },
  {
    icon: <FaLinkedinIn />,
    urlPath: "https://www.linkedin.com/in/mariakachuoth/",
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={containerStyles}>
      {socialsContent.map((item, index) => {
        return (
          <Link key={index} href={item.urlPath} className={iconsStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
