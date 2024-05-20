import Image from "next/image";

interface Social {
    href: string;
    src: string;
    alt: string;
}

const SocialComponent = (props:Social) => {
    return (
        <div className="bg-white rounded-full w-7 h-7 m-2">
            <a
                className="lg:pointer-events-auto lg:p-0"
                href={props.href}
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    src={props.src}
                    alt={props.alt}
                    width={100}
                    height={100}
                    priority
                />
            </a>
        </div>
    );
};
export default SocialComponent;