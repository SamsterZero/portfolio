import Image from "next/image";

interface AvatarProps {
    imgURL: string;
}
const Avatar = (props: AvatarProps) => {
    return (
        <div className="rounded-full p-2 w-11 h-11 bg-white text-center border border-gray-500">
            <Image
                src={props.imgURL}
                alt="G"
                width={100}
                height={100}
                priority
            />
        </div>
    );
};
export default Avatar;