import React from 'react'
import { Bar, Line, Pie } from 'react-chartjs-2'
import { Divider, Grid, LinearProgress, Paper, Typography } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { Box } from '@mui/system'





function LineChart(props) {
    return (
        <div className="chart">
            <Grid container>
                <Grid item sm={12}>

                    <Line
                        width='1200px'
                        height='360px'
                        data={props.chartData}
                        options={{
                            title: {
                                display: props.displayTitle,
                                text: 'Largest Cities in Massachusetts',
                                fontSize: 25
                            },
                            legend: {
                                display: props.displayLegend,
                                position: props.legendPosition,
                                labels: {
                                    fontColor: '#000'
                                }
                            }
                        }}
                    />
                </Grid>

            </Grid>

            {/*     <Pie
                data={props.chartData}
                options={{
                    title: {
                        display: props.displayTitle,
                        text: 'Largest Cities in Massachusetts',
                        fontSize: 25
                    },
                    legend: {
                        display: props.displayLegend,
                        position: props.legendPosition,
                        labels: {
                            fontColor: '#000'
                        }
                    }
                }}
            /> */}
        </div>
    )
}

LineChart.defaultProps = {
    displayTitle: true,
    displayLegend: false,
    legendPosition: 'bottom'
}

export default LineChart
