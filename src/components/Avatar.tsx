import Image from "next/image";

interface AvatarProps {
    size: number;
    src: string;
}
const Avatar = (props: AvatarProps) => {
    return (
        <div className="flex items-center rounded-full p-2 w-11 h-11 bg-white text-center border border-gray-500">
            <Image
                src={props.src}
                alt="G"
                width={props.size}
                height={props.size}
                priority
                className="flex items-center"
            />
        </div>
    );
};
export default Avatar;