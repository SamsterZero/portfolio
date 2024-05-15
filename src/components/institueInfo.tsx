import Avatar from "./Avatar";

interface Institute {
    name: string;
    from: number;
    to: number;
    src: string;
}

const InstituteComponent = (props: Institute) => {
    const n = props.to;
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const years = currentYear - n;

    return (
        <div className="flex flex-row justify-between gap-2 p-2 rounded dark:bg-black bg-white">
            <Avatar src={props.src} />
            <div className="flex-auto">
                <div className="">{props.name}</div>
                <div className="text-sm text-gray-500">{props.from}-{n}</div>
            </div>
            <div className="text-sm text-gray-500 ">{years}y ago</div>
        </div>
    );
};
export default InstituteComponent;