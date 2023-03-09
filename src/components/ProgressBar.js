

const ProgressBar = ({ title, progress, color }) => {
    return (
        <div>
            <div className="description">
                <p>{title}</p>
                <p>{progress}%</p>
            </div>
            <div className="progress-container">
                <div style={{ width: `${progress}%`, backgroundColor: color }} className="progress"></div>
            </div>
        </div>
    )
}

export default ProgressBar