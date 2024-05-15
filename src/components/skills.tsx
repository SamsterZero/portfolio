import Skill from "./Skill";

const Skills = () => {
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
            src: "/js.svg",
            skill: "Javascript"
        },
        {
            src: "/java.svg",
            skill: "Java"
        },
        {
            src: "/ts.svg",
            skill: "TypeScript"
        },
        {
            src: "/Kotlin.svg",
            skill: "Kotlin"
        }
    ];
    return (
        <>
            <div className="rounded p-3 bg-black">
                <h2>Skills:</h2>
                <div className="grid lg:grid-cols-9 sm:grid-cols-3 md:grid-cols-6 gap-2">
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

export default Skills;