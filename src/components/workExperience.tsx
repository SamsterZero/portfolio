import Image from "next/image";
import Avatar from "./Avatar";

const WorkExperience = () => {
    return (
        <div className="rounded p-2 backdrop-blur">
            <h2>Work xp:</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
                <div className="flex flex-row justify-between gap-2 dark:bg-black bg-white p-2 rounded">
                    <Avatar imgURL={"/SCJHS.webp"} />
                    <div className="flex-auto">
                        <div className="">SBI General Insurance</div>
                        <div className="text-sm text-gray-500">2022</div>
                    </div>
                    <div className="text-sm text-gray-500 ">Currently Working</div>
                </div>
            </div>
        </div>
    );
};
export default WorkExperience;