import InstituteComponent from "./institueInfo";

const EducationSection = () => {
    const list = [
        {
            name: "Sir CJ High School",
            from: 2003,
            to: 2016,
            imgURL: "/SCJHS.webp"
        },
        {
            name: "Navneet Jr. College",
            from: 2016,
            to: 2018,
            imgURL: "/jc.jfif"
        },
        {
            name: "RamRao Adik Institue of Technology",
            from: 2018,
            to: 2022,
            imgURL: "/RAIT.jfif"
        }
    ];
    return (
        <div className="rounded p-2 backdrop-blur">
            <div className="text-lg">Education</div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
                {list.map((item, index) => (
                    <InstituteComponent
                        key={index}
                        name={item.name}
                        from={item.from}
                        to={item.to}
                        imgURL={item.imgURL} />
                ))}
            </div>
        </div>
    );
};
export default EducationSection;