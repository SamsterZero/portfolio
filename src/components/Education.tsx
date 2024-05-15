import InstituteComponent from "./institueInfo";

const EducationSection = () => {
    const list = [
        {
            name: "Sir CJ High School",
            from: 2003,
            to: 2016,
            src: "/SCJHS.webp"
        },
        {
            name: "Navneet Jr. College",
            from: 2016,
            to: 2018,
            src: "/jc.jfif"
        },
        {
            name: "RamRao Adik Institue of Technology",
            from: 2018,
            to: 2022,
            src: "/RAIT.jfif"
        }
    ];
    return (
        <div className="rounded p-2 bg-gray-500">
            <div className="text-lg">Education</div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
                {list.map((item, index) => (
                    <InstituteComponent
                        key={index}
                        name={item.name}
                        from={item.from}
                        to={item.to}
                        src={item.src} />
                ))}
            </div>
        </div>
    );
};
export default EducationSection;