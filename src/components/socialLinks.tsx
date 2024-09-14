import Image from "next/image";
import SocialComponent from "./socialComponent";
const SocialLinks = () => {
    const links = [
        {
            href:"tel:+917400382542",
            src:"/icons/phone.svg",
            alt:"Phone"
        },{
            href:"mailto:vne.vvm@gmail.com",
            src:"/icons/gmail.svg",
            alt:"Gmail"
        },
        {
            href: "https://g.dev/VinayVijayMhatre",
            src: "/icons/google-dev.png",
            alt: "Google Developer"
        },
        {
            href: "https://github.com/SamsterZero",
            src: "/icons/github.svg",
            alt: "Github"
        },
        {
            href: "https://www.linkedin.com/vinay-mhatre",
            src: "/icons/linkedin.svg",
            alt: "LinkedIn"
        },
        {
            href: "https://stackoverflow.com/users/22046020/vinay-mhatre",
            src: "/icons/stack-overflow.svg",
            alt: "Stack Overflow"
        },{
            href: "https://www.youtube.com/@SamsterZer0",
            src: "/icons/yt.jpg",
            alt: "Youtube"
        }
    ];
    return (
        <div className="w-fit flex">
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