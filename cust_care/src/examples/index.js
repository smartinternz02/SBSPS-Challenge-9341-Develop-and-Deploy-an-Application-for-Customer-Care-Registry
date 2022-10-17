import React from "react";
import ReactDOM from "react-dom";
import Chart from "./Components/Chart";
import Axios from "axios";

class AppMain extends React.Component {
  state = {
    chartData: {},
  };

  componentWillMount() {
    const agentname = localStorage.getItem("agentname");
    this.getChartData();

    Axios.post("http://localhost:8080/agent/chart", {
      agentname,
    }).then((response) => {
      console.log(response);
    });
  }

  getChartData() {
    this.setState({
      chartData: {
        labels: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        datasets: [
          {
            data: [10, 8, 12, 7, 9, 10, 7],

            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(255, 99, 132, 0.6)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
    });
  }

  render() {
    return (
      <div className="App">
        <Chart chartData={this.state.chartData} displayLegend={false} />
      </div>
    );
  }
}

export default AppMain;
