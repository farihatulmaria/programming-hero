import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const LineChat = () => {
    const data = [
        {
          name: ' A',
          price: 4000,
          sales: 2400,
          amt: 2400,
        },
        {
          name: ' B',
          price: 3500,
          sales: 1398,
          amt: 2210,
        },
        {
          name: ' C',
          price: 2000,
          sales: 3200,
          amt: 2290,
        },
        {
          name: ' D',
          price: 1000,
          sales: 3908,
          amt: 2000,
        },
        {
          name: ' E',
          price: 1500,
          sales: 1000,
          amt: 2181,
        },
        {
          name: ' F',
          price: 2390,
          sales: 2000,
          amt: 2500,
        },
        {
          name: ' G',
          price: 3000,
          sales: 3000,
          amt: 2100,
        },
      ];
    return (
        <LineChart width={800} height={500} data={data}>
            <Line dataKey='price'/>
            <Line dataKey='sales'/>
            <XAxis dataKey='name'/>
            <YAxis dataKey='price'/>
            <Tooltip/>
        </LineChart>
    );
};

export default LineChat;