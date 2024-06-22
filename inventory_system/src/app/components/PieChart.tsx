"use client";

import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
  data: any;
}

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'right' as const,
      labels: {
        font: {
          size: 16,
        },
        color: '#FFFF', // Cor das labels na legenda
      },
    },
    title: {
      display: true,
      text: 'Distribution of Items',
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
  },
};

const PieChart: React.FC<PieChartProps> = ({ data}) => {
  return <Pie data={data} options={options} />;
};

export default PieChart;