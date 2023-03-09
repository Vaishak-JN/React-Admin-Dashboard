import { Typography } from "@mui/material"
import CommonCard from "./CommonCard"
import ProgressBar from "./ProgressBar"

const PROJECTS = [
    {
        title: "Server Migration",
        progress: 20,
        color: "red"
    }, {
        title: "Sales Tracking",
        progress: 40,
        color: "#f6c23e"
    }, {
        title: "Customer Database",
        progress: 60,
        color: "#4e73df"
    }, {
        title: "Payout Details",
        progress: 80,
        color: "#36b9cc"
    }, {
        title: "Account Setup",
        progress: 100,
        color: "#36b9cc"
    },
]

const ProjectCard = () => {
    return (
        <CommonCard>
            <Typography variant="h4" component="h4" sx={{ color: "#395fcf", mb: 1 }}>
                Projects
            </Typography>

            {PROJECTS.map(({ title, progress, color }) => <ProgressBar title={title} progress={progress} color={color} />)}
        </CommonCard >
    )
}

export default ProjectCard