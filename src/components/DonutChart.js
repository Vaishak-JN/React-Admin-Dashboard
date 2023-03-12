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

                '#36b9cc',
                '#4e73df',
                '#1cc88a',
            ],
            borderColor: [

                'white',
                'white',
                'white',
            ],
            borderWidth: 1,
            cutout: "70%",
        },
    ],
};
const DonutChart = () => {
    return (
        <div className='donutchart'>
            <Doughnut data={data} className="center" />
        </div>


    )
}

export default DonutChart