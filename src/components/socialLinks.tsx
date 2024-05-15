import Image from "next/image";
const SocialLinks = () => {
    return (
        <div className="my-2 w-fit flex">
            <div className="bg-white rounded-full w-7 h-7 m-2">
                <a
                    className="pointer-events-none lg:pointer-events-auto lg:p-0"
                    href="https://g.dev/VinayVijayMhatre"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src="/google-dev.svg"
                        alt="Google Developer"
                        width={100}
                        height={100}
                        priority
                    />
                </a>
            </div>
            <div className="dark:bg-black bg-white rounded-full w-7 h-7 m-2">
                <a
                    className="pointer-events-none lg:pointer-events-auto lg:p-0"
                    href="https://github.com/SamsterZero"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src="/github.svg"
                        alt="Github"
                        className="dark:invert"
                        width={100}
                        height={100}
                        priority
                    />
                </a>
            </div>
            <div className="bg-white rounded-full w-7 h-7 m-2">
                <a
                    className="pointer-events-none lg:pointer-events-auto lg:p-0"
                    href="https://www.linkedin.com/vinay-mhatre"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src="/linkedin.svg"
                        alt="LinkedIn"
                        width={100}
                        height={100}
                        priority
                    />
                </a>
            </div>
            <div className="bg-white rounded-full w-7 h-7 m-2 p-1">
                <a
                    className="pointer-events-none lg:pointer-events-auto lg:p-0"
                    href="https://stackoverflow.com/users/22046020/vinay-mhatre"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src="/stackoverflow.svg"
                        alt="Stack Overflow"
                        width={100}
                        height={100}
                        priority
                    />
                </a>
            </div>
        </div>
    );
}
export default SocialLinks;