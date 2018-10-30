import React from 'react';
import { Line } from 'react-chartjs-2';
import { Container } from 'mdbreact';
import socketIOClient from "socket.io-client";


class ChartsPage2 extends React.Component {

  constructor() {
    super();
    this.state = {
      endpoint: "http://localhost:3001",
      chartData:{
        //labels for the x axis
      labels:[/*'1','2','3','4','5','6','7','8','9','10'*/],
        datasets:[
            { 
                //label for the graph itself
                type: "line",
                label: "Moisture",
                fill: false,
                lineTension: 0.1,
                backgroundColor: '#ffbb33',
                borderColor: '#848484',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: '#848484',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: '#848484',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                //the data array defines y-axis value for each data point (need to get dynamic data into this)
                data: []
            }
        ],

      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: true,
        /*scales: {
          xAxes: [{
            type: 'time',
            ticks: {
              //autoSkip: true,
              maxTicksLimit: 10
            }
          }]
        }*/
      }
    };
  }
  componentDidMount() {
    const { endpoint } = this.state;
    //as soon as the react component gets mounted, the componentDidMount creates a new connection to out Sokcet.io server by instantiating a new socket
    const socket = socketIOClient(endpoint);
    socket.on('moistures', data => 
      {
        let incoming = data; //might not have to parse this, it is already an array
        let value = incoming
        //update the dataset of the chart
        const oldBtcDataSet = this.state.chartData.datasets[0];
        const newBtcDataSet = { ...oldBtcDataSet };
        newBtcDataSet.data.push(value);
       /* //adjust xAxes bounds
        const xMax = new Date().toLocaleTimeString();
        const xMin = xMax - 300000;

        const newTime = {min:xMin, max:xMax}*/
  
        const newChartData = {
          ...this.state.lineChartData,
          datasets: [newBtcDataSet],
          labels: this.state.chartData.labels.concat(
            new Date().toLocaleTimeString()
          )
        };

        //set the xAxes bounds to latest 5 mins of data
        /*const newChartOptions = {
          ...this.state.chartOptions,
          time: newTime
        }
        */
        //this.setState({chartOptions:newChartOptions})
        this.setState({chartData: newChartData})
        this.setState({tempGraph: value})
      });
  }


  render() {
    return (
    <Container style={{backgroundColor:"white"}}>
        <Line 
          data={this.state.chartData}
          options={this.state.chartOptions}
         />
    </Container>
    );
  }

};

export default ChartsPage2;