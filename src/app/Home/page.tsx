import EducationSection from "@/components/Education";
import Profile from "@/components/profile";
import SkillSection from "@/components/SkillSection";
import WorkExperience from "@/components/WorkExperience";

const Home = () => {
    return (
        // <div className="bg-[url(/bg.gif)] bg-cover bg-no-repeat bg-fixed p-3">
        <div className="h-screen bg-[url(/bg2.gif)] bg-auto bg-no-repeat bg-fixed p-3">
            <div className="container rounded mx-auto p-2 flex-col gap-2 backdrop-blur">
                <div className="grid grid-cols-1 gap-3">
                    <Profile />
                    <EducationSection />
                    <WorkExperience />
                    <SkillSection />
                </div>
            </div>
        </div >
    )
}

export default Home;