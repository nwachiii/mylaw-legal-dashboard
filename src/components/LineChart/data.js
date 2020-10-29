export const data = () => {
  return {
    labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    datasets: [
      {
        label: "New cases",
        data: [19, 5, 19, 16, 6, 18, 15, 19, 15, 11, 5, 14, 7, 9, 9],
        borderColor: ["#DEBC997a"],
        backgroundColor: ["transparent"],
        pointBackgroundColor: "#DEBC99",
        pointBorderColor: "#DEBC997d",
      },
      {
        label: "Closed cases",
        data: [13, 8, 7, 5, 8, 12, 15, 5, 15, 5, 12, 20, 15, 20, 14],
        borderColor: ["#FF52527a"],
        backgroundColor: ["transparent"],
        pointBackgroundColor: "#FF52527e",
        pointBorderColor: "#FF52527d",
      },
      {
        label: "Active cases",
        data: [17, 13.5, 14, 19, 17.5, 6, 14, 5, 18, 17, 17, 19, 13, 18, 6],
        borderColor: ["#779DCC7a"],
        backgroundColor: ["transparent"],
        pointBackgroundColor: "#779DCC",
        pointBorderColor: "#779DCC7d",
      },
    ],
  };
};
