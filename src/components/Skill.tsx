import Avatar from "./Avatar";

interface Skill {
    src: string;
    skill: string;
}

const Skill = (props: Skill) => {
    return (
        <div className="rounded shadow-gray-500 dark:shadow-fuchsia-500 drop-shadow-xl drop-shadow-fuschia-500 dark:bg-black p-2">
            <div className="flex flex-col mx-auto w-fit text-center">
                <div className="mx-auto">
                    <Avatar src={props.src}></Avatar>
                </div>
                <div className="text-xs sm:text-sm">{props.skill}</div>
            </div>
        </div>
    );
};

export default Skill;