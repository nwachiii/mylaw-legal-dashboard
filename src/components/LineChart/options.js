export const options = () => {
  return {
    title: {
      display: false,
      text: "Line Chart",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 10,
            stepSize: 5,
          },
        },
      ],
    },
  };
};
