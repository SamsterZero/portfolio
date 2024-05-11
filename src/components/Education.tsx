import Image from "next/image";

const EducationSection = () => {
    return (
        <div className="rounded p-2 backdrop-blur">
            <div className="text-lg">Education</div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
                <div className="flex flex-row justify-between gap-2 bg-black p-2 rounded">
                    <div className="rounded-full p-1 w-11 h-11 bg-white text-center">
                        <Image
                            src="/SCJHS.webp"
                            alt="S"
                            width={100}
                            height={100}
                            priority
                        />
                    </div>
                    <div className="flex-auto">
                        <div className="">Sir Cowasjee Jehangir high School</div>
                        <div className="text-sm text-gray-500">2016</div>
                    </div>
                    <div className="text-sm text-gray-500 ">8y ago</div>
                </div>
                <div className="flex flex-row justify-between gap-2 bg-black p-2 rounded">
                    <div className="rounded-full p-2 w-11 h-11 bg-white text-center">
                        <Image
                            src="/jc.jfif"
                            alt="G"
                            width={100}
                            height={100}
                            priority
                        />
                    </div>
                    <div className="flex-auto">
                        <div className="">Navneet Jr. College</div>
                        <div className="text-sm  text-gray-500">2016-2018</div>
                    </div>
                    <div className="text-sm text-gray-500 ">6y ago</div>
                </div>
                <div className="flex flex-row justify-between gap-2 bg-black p-2 rounded">
                    <div className="rounded-full p-3 w-11 h-11 bg-white text-center">
                        <Image
                            src="/RAIT.jfif"
                            alt="G"
                            width={100}
                            height={100}
                            priority
                        />
                    </div>
                    <div className="flex-auto">
                        <div className="">RamRao Adik Institue of Technology</div>
                        <div className="text-sm text-gray-500">2018-2022</div>
                    </div>
                    <div className="text-sm text-gray-500 ">2y ago</div>
                </div>
            </div>
        </div>
    );
};
export default EducationSection;