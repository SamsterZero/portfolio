import SocialLinks from "./socialLinks";

const Profile = () => {
    return (
        <div className="flex flex-row justify-between gap-2">
            <div className="rounded-full mx-auto p-7 w-20 h-20 bg-orange-500 text-center">V</div>
            <div className="flex-auto">
                <h1>Vinay Mhatre</h1>
                <SocialLinks />
            </div>
        </div>
    );
};

export default Profile;