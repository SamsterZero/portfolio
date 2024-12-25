import Skill from "./Skill";
const SkillSection = () => {
    const skills = [
        {
            src: "/icons/html.svg",
            skill: "HTML"
        },
        {
            src: "/icons/css.svg",
            skill: "CSS"
        },
        {
            src: "/icons/bootstrap.svg",
            skill: "Bootstrap"
        },
        {
            src: "/icons/tailwind.svg",
            skill: "Tailwind"
        },
        {
            src: "/icons/js.svg",
            skill: "Javascript"
        },
        {
            src: "/icons/ts.svg",
            skill: "TypeScript"
        },
        {
            src: "/icons/jQuery.svg",
            skill: "JQuery"
        },
        {
            src: "/icons/htmx.svg",
            skill: "HTMX"
        },
        {
            src: "/icons/react.svg",
            skill: "React.js"
        },
        {
            src: "/icons/nextjs.svg",
            skill: "Next.js"
        },
        {
            src: "/icons/java.svg",
            skill: "Java"
        },
        {
            src: "/icons/Kotlin.svg",
            skill: "Kotlin"
        },
        {
            src: "/icons/spring.svg",
            skill: "Spring Boot"
        },
        {
            src: "/icons/android.svg",
            skill: "Android"
        },
        {
            src: "/icons/docker.svg",
            skill: "Docker"
        }
    ];
    return (
        <>
            <h2 className="test-lg backdrop-blur w-fit rounded">Skills</h2>
            <div className="rounded p-3 dark:bg-black bg-white">
                <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 xl:grid-cols-9 gap-2">
                    {skills.map((item, index) => (
                        <Skill
                            key={index}
                            src={item.src}
                            skill={item.skill}
                        />
                    ))}
                </div>
            </div>
        </>
    )
};

export default SkillSection;