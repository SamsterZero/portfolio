import EducationSection from "@/components/Education";
import SocialLinks from "@/components/socialLinks";

const Home = () => {
    return (
        <div className="bg-[url(/bg2.gif)] p-3">
            <div className="container mx-auto p-2 ">
                <div className="rounded-full mx-auto p-7 w-20 h-20 bg-orange-500 text-center">V</div>
                <div className="mx-auto my-2 w-fit">
                    <h1>Vinay Mhatre</h1>
                </div>
                <SocialLinks />
                <div className="grid grid-cols-1 gap-2">
                    <EducationSection/>
                    <div className="rounded p-2 dark:bg-white bg-black dark:bg-opacity-10 bg-opacity-10">
                        <h2>Languages:</h2>
                        <ul className="list-inside list-disc">
                            <li>Java</li>
                            <li>HTML, CSS, JS</li>
                            <li>TypeScript</li>
                            <li>Kotlin</li>
                        </ul>
                    </div>
                    <div className="rounded h-fit p-2 dark:bg-white bg-black dark:bg-opacity-10 bg-opacity-10">
                        <h2>Frameworks:</h2>
                        <ul className="list-inside list-disc">
                            <li>Spring Boot</li>
                            <li>Nextjs</li>
                            <li>Android</li>
                            <li>htmx</li>
                        </ul>
                    </div>
                    <div className="rounded h-fit p-2 dark:bg-white bg-black dark:bg-opacity-10 bg-opacity-10">
                        <h2>Libraries:</h2>
                        <ul className="list-inside list-disc">
                            <li>Spring Security</li>
                            <li>Spring Batch</li>
                            <li>React</li>
                            <li>jQuery</li>
                        </ul>
                    </div>
                    <div className="rounded h-fit p-2 dark:bg-white bg-black dark:bg-opacity-10 bg-opacity-10">
                        <h2>Tools:</h2>
                        <ul className="list-inside list-disc">
                            <li>Bootstrap</li>
                            <li>Tailwind CSS</li>
                            <li>Maven</li>
                            <li>Git</li>
                        </ul>
                    </div>
                    <div className="rounded p-2 dark:bg-white bg-black dark:bg-opacity-10 bg-opacity-10">x</div>
                    <div className="rounded p-2 dark:bg-white bg-black dark:bg-opacity-10 bg-opacity-10">x</div>
                    <div className="rounded p-2 dark:bg-white bg-black dark:bg-opacity-10 bg-opacity-10">x</div>
                    <div className="rounded p-2 dark:bg-white bg-black dark:bg-opacity-10 bg-opacity-10">x</div>
                    <div className="rounded p-2 dark:bg-white bg-black dark:bg-opacity-10 bg-opacity-10">x</div>
                    <div className="rounded p-2 dark:bg-white bg-black dark:bg-opacity-10 bg-opacity-10">x</div>
                    <div className="rounded p-2 dark:bg-white bg-black dark:bg-opacity-10 bg-opacity-10">x</div>
                    <div className="rounded p-2 dark:bg-white bg-black dark:bg-opacity-10 bg-opacity-10">x</div>
                </div>
            </div>
        </div>
    )
}

export default Home;