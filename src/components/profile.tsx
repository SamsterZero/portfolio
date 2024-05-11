import SocialLinks from "./socialLinks";

const Profile = () => {
    return (
        <div className="w-fit rounded mx-auto backdrop-blur">
            <div className="rounded-full mx-auto p-7 w-20 h-20 bg-orange-500 text-center">V</div>
            <div className="mx-auto my-2 w-fit">
                <h1>Vinay Mhatre</h1>
            </div>
            <SocialLinks />
        </div>
    );
};
export default Profile;