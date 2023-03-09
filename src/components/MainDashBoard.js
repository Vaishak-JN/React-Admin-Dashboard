import { Typography } from "@mui/material"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AssignmentIcon from '@mui/icons-material/Assignment';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import Card from "./Card";

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
            </div>
        </>
    )
}

export default MainDashBoard