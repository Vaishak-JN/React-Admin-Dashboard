import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    cutout: 90,
    hoverOffset: 4,
    labels: ['Direct', 'Social', 'Referral'],
    datasets: [
        {

            data: [12, 19, 3,],
            backgroundColor: [

                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [

                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};
const DonutChart = () => {
    return (
        <div className='donutchart'>
            <Doughnut data={data} />
        </div>


    )
}

export default DonutChart