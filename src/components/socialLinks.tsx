import Image from "next/image";
import SocialComponent from "./socialComponent";
const SocialLinks = () => {
    const links = [
        {
            href: "https://g.dev/VinayVijayMhatre",
            src: "/google-dev.svg",
            alt: "Google Developer"
        },
        {
            href: "https://github.com/SamsterZero",
            src: "/github.svg",
            alt: "Github"
        },
        {
            href: "https://www.linkedin.com/vinay-mhatre",
            src: "/linkedin.svg",
            alt: "LinkedIn"
        },
        {
            href: "https://stackoverflow.com/users/22046020/vinay-mhatre",
            src: "/stackoverflow.svg",
            alt: "Stack Overflow"
        }
    ];
    return (
        <div className="my-2 w-fit flex">
            {links.map((item, index) => (
                <SocialComponent
                    key={index}
                    href={item.href}
                    src={item.src}
                    alt={item.alt}
                />
            ))}
        </div>
    );
}
export default SocialLinks;