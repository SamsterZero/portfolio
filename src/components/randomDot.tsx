const RandomDot = () => {
    const radius = Math.ceil(Math.random() * 100);
    const colors = [
        "#ef4444",
        "#22c55e",
        "#3b82f6",
        "#eab308",
        "#f97316",
        "#a855f7",
        "#ec4899",
        "#6366f1",
        "#14b8a6"
    ]
    const index = Math.floor(Math.random() * 10);
    const color = colors[index];
    const positionX = Math.ceil(Math.random() * 10);
    const positionY = Math.ceil(Math.random() * 10);
    const dotStyle = {
        width: `${radius}px`,
        height: `${radius}px`,
        backgroundColor: color,
        position: "absolute",
        left: `${positionX * 10}%`,
        top: `${positionY * 10}%`,
        transform: "translate(-50%, -50%)",
        transition: "all 0.5s ease-in-out"
    };
    return (
        <div className={"rounded-full"} >

        </div >
    );
}
export default RandomDot;