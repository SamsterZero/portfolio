import Skill from "./Skill";

const SkillSection = () => {
    const skills = [
        {
            src: "/html.svg",
            skill: "HTML"
        },
        {
            src: "/css.svg",
            skill: "CSS"
        },
        {
            src: "/bootstrap.svg",
            skill: "Bootstrap"
        },
        {
            src: "/tailwind.svg",
            skill: "Tailwind"
        },
        {
            src: "/js.svg",
            skill: "Javascript"
        },
        {
            src: "/ts.svg",
            skill: "TypeScript"
        },
        {
            src: "/jQuery.svg",
            skill: "JQuery"
        },
        {
            src: "/htmx.svg",
            skill: "HTMX"
        },
        {
            src: "/react.svg",
            skill: "React.js"
        },
        {
            src: "/nextjs.svg",
            skill: "Next.js"
        },
        {
            src: "/java.svg",
            skill: "Java"
        },
        {
            src: "/Kotlin.svg",
            skill: "Kotlin"
        },
        {
            src: "/spring.svg",
            skill: "Spring Boot"
        },
        {
            src: "/android.svg",
            skill: "Android"
        },
        {
            src: "/docker.svg",
            skill: "Docker"
        }
    ];
    return (
        <>
            <h2>Skills:</h2>
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