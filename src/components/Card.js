
const Card = ({ icon, title, amount, color }) => {
    return (
        <div style={{ backgroundColor: color }} className="outer-card">
            <div className="inner-card">
                <div>
                    <h4 style={{ color: color }}>{title}</h4>
                    <h2>{amount}</h2>
                </div>
                {icon}
            </div>
        </div>
    )
}

export default Card