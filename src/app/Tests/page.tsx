import EducationSection from "@/components/Education";
import MatrixRain from "@/components/MatrixRain";
import Profile from "@/components/profile";
import SkillSection from "@/components/SkillSection";
import WorkExperience from "@/components/WorkExperience";

const Test = () => {
    const now = new Date();
    const currentYear = now.getFullYear();
    return (
        <div className="p-3">
            <MatrixRain></MatrixRain>
            <div className="container rounded mx-auto p-2 flex-col gap-2 bg-white bg-opacity-50 dark:bg-opacity-0 ">
                <div className="grid grid-cols-1 gap-3">
                    <Profile />
                    <div>
                        <h2 className="text-lg">About Me</h2>
                        <div className="rounded px-1 py-3 dark:bg-black bg-white">
                            Software developer with {currentYear - 2022} years of experience
                        </div>
                    </div>
                    <EducationSection />
                    <WorkExperience />
                    <SkillSection />
                    <div className="rounded bg-white dark:bg-black">Projects</div>
                </div>
            </div>
        </div>
    )
}

export default Test;