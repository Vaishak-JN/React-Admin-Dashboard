import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Colorcard = ({ title, color }) => {
    return (
        <Card sx={{ m: "0px", backgroundColor: color }}>
            <CardContent>
                <Typography variant="h4" component="h4" sx={{ fontSize: 14, color: "white" }} color="white" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="p" component="p" sx={{ fontSize: 14, color: "#5a5c69" }} color="secondary" gutterBottom>
                    {title}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Colorcard