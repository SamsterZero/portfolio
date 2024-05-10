import EducationSection from "@/components/Education";
import Profile from "@/components/profile";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/workExperience";

const Home = () => {
    return (
        // <div className=" bg-[url(/bg.gif)] bg-cover bg-no-repeat bg-fixed p-3">
            <div className="bg-[url(/bg2.gif)]  bg-cover bg-no-repeat bg-fixed p-3">
            <div className="container rounded mx-auto p-2 flex-col gap-2">
                <div className="grid grid-cols-1 gap-3">
                    <Profile />
                    <WorkExperience/>
                    <EducationSection />
                    <Skills />
                    <div className="rounded p-2 backdrop-blur">x</div>
                    <div className="rounded p-2 backdrop-blur">x</div>
                    <div className="rounded p-2 backdrop-blur">x</div>
                    <div className="rounded p-2 backdrop-blur">x</div>
                    <div className="rounded p-2 backdrop-blur">x</div>
                    <div className="rounded p-2 backdrop-blur">x</div>
                    <div className="rounded p-2 backdrop-blur">x</div>
                </div>
            </div>
        </div >
    )
}

export default Home;