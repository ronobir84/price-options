import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {
    
        const mathMarksData = [
            {id: 1, name: "Alice", math: 85},
            {id: 2, name: "Bob", math: 78},
            { id: 3, name: "Charlie", math: 92},
            {id: 4, name: "David", math: 68},
            { id: 5, name: "Eva", math: 90},
            { id: 7, name: "Grace",math: 88},
            {id: 8, name: "Helen",  math: 72 },
            { id: 9, name: "Ian",math: 95},
            {id: 10,name: "Jack",math: 82}
        ]
    return (
        <div>
            <LChart width={800} height={400} data={mathMarksData}>
                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>
            <Line type="monotone" dataKey={'math'}></Line>

            </LChart>
        </div>
    );
};

export default LineChart;