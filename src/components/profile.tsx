import SocialLinks from "./socialLinks";

const Profile = () => {
    return (
        <div className="mx-auto rounded-lg w-fit p-2 backdrop-blur shadow-black drop-shadow-lg">
            <div className="rounded-full mx-auto p-7 w-20 h-20 bg-orange-500 text-center">V</div>
            <div className="mx-auto w-fit">
                <h1>Vinay Mhatre</h1>
            </div>
            <SocialLinks />
        </div>
    );
};

export default Profile;