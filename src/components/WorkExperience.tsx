import Image from "next/image";

const WorkExperience = () => {
    return (
        <>
            <h2>Work xp:</h2>
            <div className="rounded px-1 py-3 dark:bg-black bg-white">
                <ul className="relative flex flex-col gap-12 px-6 before:absolute before:top-0 before:left-8 before:h-full before:-translate-x-1/2 before:border before:border-dashed dark:before:border-gray-200 before:border-gray-800 after:absolute after:top-6 after:left-8 after:bottom-6 after:-translate-x-1/2 after:border dark:after:border-gray-200 after:border-gray-800">
                    <li className="relative pl-8 ">
                        <div className="flex flex-col flex-1 gap-4">
                            <a href="#" className="absolute z-10 inline-flex items-center justify-center w-11 h-11 text-white rounded-full -left-4 ring-2 ring-blue-500 bg-white">
                                <Image
                                    src={"/icons/sbig.jpg"}
                                    alt="G"
                                    width={100}
                                    height={100}
                                    priority
                                    className="max-w-full rounded-full"
                                />
                            </a>
                            <h4 className="flex flex-col items-start text-lg font-medium leading-8 md:flex-row lg:items-center">
                                <span className="flex-1">
                                    SBI General Insurance
                                    <span className="text-base font-normal text-slate-500">
                                    </span>
                                </span>
                                <span className="text-sm font-normal text-gray-500">
                                    2y ago
                                </span>
                            </h4>
                            <p className="text-gray-500">
                                Reponsiblity of maintaining existing applicaitons which were working on Java 8,Spring framework & JSP by adding new functionalities & resolving defects.
                                Also migrated applications from versions older than Java 8 & running on Struts to standard Java 8 & Spring Boot framework.
                                Identified & reduced number of applications by merging APIs from different applications with similar use cases into a single web application using Spring Boot & Thymeleaf.
                                This later on lead to development of other single page dashboard applications using REACT as well as Spring Boot.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
};
export default WorkExperience;