import { Typography } from "@mui/material"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AssignmentIcon from '@mui/icons-material/Assignment';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import Card from "./Card";
import LineChart from "./LineChart";
import DonutChart from "./DonutChart";
import ProjectCard from "./ProjectsCard";
import IllustrationCard from "./IllustrationCard";
import Development from "./Development";
import Colorcard from "./ColorCard";

const Data = [
    {
        icon: <CalendarMonthIcon color="disabled" sx={{ fontSize: 40 }} />,
        title: "Earnings (Monthly)",
        amount: "$40,000",
        color: "red"
    },
    {
        icon: <AttachMoneyIcon color="disabled" sx={{ fontSize: 40 }} />,
        title: "Earnings (Yearly)",
        amount: "$215,000",
        color: "green"
    },
    {
        icon: <AssignmentIcon color="disabled" sx={{ fontSize: 40 }} />,
        title: "Tasks",
        amount: "50%",
        color: "orange"
    },
    {
        icon: <MarkChatUnreadIcon color="disabled" sx={{ fontSize: 40 }} />,
        title: "Pending Requests",
        amount: "18",
        color: "green"
    },
]

const Colors = [
    {
        title: "Primary ",
        color: "#4e73df"
    },
    {
        title: "Success ",
        color: "#1cc88a"
    },
    {
        title: "Info ",
        color: "#36b9cc"
    },
    {
        title: "Warning",
        color: "#f6c23e"
    },
    {
        title: "Danger ",
        color: "#e74a3b"
    },
    {
        title: "Secondary ",
        color: "#858796"
    },
    {
        title: "Light",
        color: "#f8f9fc"
    },
    {
        title: "Dark",
        color: "#5a5c69"
    },
]
const MainDashBoard = () => {
    return (
        <>
            <Typography variant="h4" component="h4" sx={{ p: 2, color: "#5a5c69" }}>
                Dashboard
            </Typography>

            <div className="card-section">
                {Data.map((data) => <Card {...data} />)}
            </div>


            <div className="chart-section">
                {/* {Data.map((data) => <Card {...data} />)} */}
                <LineChart />
                <DonutChart />
            </div>


            <div className="other-section">
                <div>
                    <ProjectCard />
                    <div className="colorcard-container">
                        {Colors.map((clr, index) => <div key={index} style={{ margin: "0px" }}><Colorcard title={clr.title} color={clr.color} /></div>)}
                    </div>
                </div>

                <div>
                    <IllustrationCard />
                    <Development />
                </div>
            </div>
        </>
    )
}

export default MainDashBoard