import Image from "next/image";
import SocialLinks from "./socialLinks";

const Profile = () => {
    return (
        <div className="flex flex-row justify-between gap-2">
            <div className="flex items-center rounded-full w-20 h-20 bg-white text-center border border-green-500 overflow-hidden">
                <Image
                    src="/Iconic VInay.jpg"
                    alt="V"
                    width={100}
                    height={100}
                    priority
                    className="object-cover w-full"
                />
            </div>
            <div className="flex-auto gap-2">
                <h1 className="text-lg my-1 mx-2 backdrop-blur w-fit rounded">Vinay Mhatre</h1>
                <SocialLinks />
            </div>
        </div>
    );
};

export default Profile;