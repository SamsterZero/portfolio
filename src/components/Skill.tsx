import Avatar from "./Avatar";

interface Skill {
    src: string;
    skill: string;
}

const Skill = (props: Skill) => {
    return (
        <div className="rounded bg-gray-500 p-2">
            <div className="flex flex-col mx-auto w-fit text-center">
                <div className="mx-auto">
                    <Avatar src={props.src}></Avatar>
                </div>
                <div>{props.skill}</div>
            </div>
        </div>
    );
};

export default Skill;