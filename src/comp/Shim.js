const Shimmer = () => {
    return (
        <div className="shimmer-list">
            {Array(9)
            .fill("")
            .map((e , index) => (
                <div key={index} className="shimmercard"></div>
            ))}
        </div>
    )
}
export default Shimmer;