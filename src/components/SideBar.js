import { Typography } from "@mui/material"
import { Link } from "react-router-dom"
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import BuildIcon from '@mui/icons-material/Build';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import TableChartIcon from '@mui/icons-material/TableChart';

const SideBar = () => {
    return (
        <div className="sidebar">
            <Typography variant="h5" component="h5" sx={{ mb: 1 }} className="heading">
                Admin Dashboard
            </Typography>
            <hr />
            <Typography variant="a" component="a" sx={{ mb: 1 }}>
                <Link to="/"><DashboardCustomizeIcon />Dashboard</Link>
            </Typography>
            <hr />
            <Typography variant="h6" component="h6" sx={{ mb: 1, color: "#859ee8" }}>
                Interface
            </Typography>

            <Typography variant="a" component="a" sx={{ mb: 2 }}>
                <Link to="/"><SettingsSuggestIcon />Components</Link>
            </Typography>

            <Typography variant="a" component="a" sx={{ mb: 2 }}>
                <Link to="/"><BuildIcon />Utilities</Link>
            </Typography>

            <hr />

            <Typography variant="h6" component="h6" sx={{ mb: 1, color: "#859ee8" }}>
                Addons
            </Typography>

            <Typography variant="a" component="a" sx={{ mb: 2 }}>
                <Link to="/"><FindInPageIcon />Pages</Link>
            </Typography>

            <Typography variant="a" component="a" sx={{ mb: 2 }}>
                <Link to="/"><SsidChartIcon />Charts</Link>
            </Typography>
            <Typography variant="a" component="a" sx={{ mb: 2 }}>
                <Link to="/"><TableChartIcon />Tables</Link>
            </Typography>

        </div >
    )
}


export default SideBar