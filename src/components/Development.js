import { Typography } from "@mui/material"
import CommonCard from "./CommonCard"


const Development = () => {
    return (
        <CommonCard>
            <Typography variant="h5" component="h5" sx={{ color: "#395fcf", mb: 1 }} >
                Development Approach
            </Typography>


            <Typography variant="p" component="p" sx={{ color: "grey", mb: 1 }} >
                SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance. Custom CSS classes are used to create custom components and custom utility classes.
            </Typography>

            <Typography variant="p" component="p" sx={{ color: "grey", mb: 1 }} >
                Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes.
            </Typography>



        </CommonCard >
    )
}


export default Development