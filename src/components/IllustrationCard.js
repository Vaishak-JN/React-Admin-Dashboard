import { Typography } from "@mui/material"
import CommonCard from "./CommonCard"
import img from "../assets/undraw_posting_photo.svg"


const IllustrationCard = () => {
    return (
        <CommonCard>
            <Typography variant="h5" component="h5" sx={{ color: "#395fcf", mb: 1 }} >
                Illustrations
            </Typography>
            <div className="img-div">
                <img src={img} className="img" alt="img" />
            </div>

            <Typography variant="p" component="p" sx={{ color: "grey", mb: 1 }} >
                Add some quality, svg illustrations to your project courtesy of unDraw, a constantly updated collection of beautiful svg images that you can use completely free and without attribution!
            </Typography>

            <Typography variant="a" component="a" sx={{ color: "#395fcf", mb: 1 }} >
                <a style={{ color: "#395fcf", textDecoration: "none" }} href="/">Browse Illustrations on unDraw →</a>
            </Typography>

        </CommonCard >
    )
}


export default IllustrationCard