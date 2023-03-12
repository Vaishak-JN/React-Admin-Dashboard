import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
// import faker from 'faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    cubicInterpolationMode: "monotone",

};

const labels = ['Jan', '', 'Mar', '', 'May', '', 'July', '', 'Sep', '', 'Nov', ''];

export const data = {
    labels,
    datasets: [
        {
            label: 'Earnings Overview',
            data: [0, 10000, 5000, 15000, 10000, 20000, 15000, 25000, 20000, 30000, 25000, 40000],
            borderColor: '#4e73df',
            backgroundColor: '#4e73df',

        },

    ],

};

const LineChart = () => {
    return (
        <div className='linechart'>

            <Line options={options} data={data} />
        </div>


    )
}

export default LineChart