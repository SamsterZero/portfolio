import EducationSection from "@/components/Education";
import Profile from "@/components/profile";
import Skills from "@/components/skills";
import Image from "next/image";

const Home = () => {
    return (
        <div className="bg-[url(/bg2.gif)] p-3">
            <div className="container mx-auto p-2">

                <div className="grid grid-cols-1 gap-2">
                    <Profile />
                    <EducationSection />
                    <div className="rounded p-2 backdrop-blur">
                        <h2>Work Exp:</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
                            <div className="flex flex-row justify-between gap-2 bg-black p-2 rounded">
                                <div className="flex rounded-full w-11 h-11 bg-white text-center">
                                    <Image
                                        src="/sbig.jpg"
                                        alt="S"
                                        width={100}
                                        height={100}
                                        priority
                                        className="inline-block rounded-full align-middle"
                                    />
                                </div>
                                <div className="flex-auto">
                                    <div className="">SBI General Insurance</div>
                                    <div className="text-sm text-gray-500">2016</div>
                                </div>
                                <div className="text-sm text-gray-500 ">8y ago</div>
                            </div>
                        </div>
                    </div>
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
        </div>
    )
}

export default Home;