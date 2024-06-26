import EducationSection from "@/components/Education";
import Profile from "@/components/profile";
import SkillSection from "@/components/SkillSection";
import WorkExperience from "@/components/WorkExperience";

const Home = () => {
    return (
        // <div className="bg-[url(/bg.gif)] bg-cover bg-no-repeat bg-fixed p-3">
        <div className="bg-[url(/bg2.gif)] bg-cover bg-no-repeat bg-fixed p-3">
            <div className="container rounded mx-auto p-2 flex-col gap-2 backdrop-blur bg-white bg-opacity-50 dark:bg-opacity-0 ">
                <div className="grid grid-cols-1 gap-3">
                    <Profile />
                    <EducationSection />
                    <WorkExperience />
                    <SkillSection />
                    <div className="rounded bg-white dark:bg-black">Projects</div>
                    <div className="rounded bg-white dark:bg-black">About Me</div>
                </div>
            </div>
        </div >
    )
}

export default Home;