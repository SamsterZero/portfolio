const Skills = () => {
    return (
        <>
            <div className="rounded p-2 backdrop-blur">
                <h2>Languages:</h2>
                <ul className="list-inside list-disc">
                    <li>Java</li>
                    <li>HTML, CSS, JS</li>
                    <li>TypeScript</li>
                    <li>Kotlin</li>
                </ul>
            </div>
            <div className="rounded h-fit p-2 backdrop-blur">
                <h2>Frameworks:</h2>
                <ul className="list-inside list-disc">
                    <li>Spring Boot</li>
                    <li>Nextjs</li>
                    <li>Android</li>
                    <li>htmx</li>
                </ul>
            </div>
            <div className="rounded h-fit p-2 backdrop-blur">
                <h2>Libraries:</h2>
                <ul className="list-inside list-disc">
                    <li>Spring Security</li>
                    <li>Spring Batch</li>
                    <li>React</li>
                    <li>jQuery</li>
                </ul>
            </div>
            <div className="rounded h-fit p-2 backdrop-blur">
                <h2>Tools:</h2>
                <ul className="list-inside list-disc">
                    <li>Bootstrap</li>
                    <li>Tailwind CSS</li>
                    <li>Maven</li>
                    <li>Git</li>
                </ul>
            </div>
        </>
    );
};
export default Skills;