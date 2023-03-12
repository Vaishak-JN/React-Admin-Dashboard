
const Card = ({ icon, title, amount, color }) => {
    return (
        <div style={{ backgroundColor: color }} className="outer-card">
            <div className="inner-card">
                <div>
                    <h4 style={{ color: color }}>{title}</h4>
                    <h3 style={{ color: "#5a5c69", marginTop: "10px" }}>{amount}</h3>
                </div>
                {icon}
            </div>
        </div>
    )
}

export default Card