import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
    return (
        <div className='chart'>
            {props.dataPoints.map((dataPoint) => ( 
            <ChartBar
              key={dataPoint.label}
              values={dataPoint.value}
              maxValue={null} any
              label={dataPoint.label}
            />
            ))}

        </div>
    );
};
