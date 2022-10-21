<template>
    <b-container fluid class="mt-4">
        <b-row>
            <b-col cols="4">
                <apexchart type="radar" height="350" :options="chartOptions" :series="series"></apexchart>
            </b-col>
            <b-col cols="4">
                <apexchart type="area" height="350" :options="chartOptions1" :series="series1"></apexchart>
            </b-col>
            <b-col cols="4" id="pie">
                <apexchart type="pie"  width="350" :options="chartOptions2" :series="series2"></apexchart>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        name: "Admin",
        data() {
            return {
                series: [{
                    name: 'Series 1',
                    data: [80, 50, 30, 40, 100, 20],
                }],
                chartOptions: {
                    chart: {
                        height: 350,
                        type: 'radar',
                    },
                    title: {
                        text: 'Basic Radar Chart'
                    },
                    xaxis: {
                        categories: ['January', 'February', 'March', 'April', 'May', 'June']
                    }
                },
                series1: [
                    {
                        name: "High - 2013",
                        data: [28, 29, 33, 36, 32, 32, 33]
                    },
                    {
                        name: "Low - 2013",
                        data: [12, 11, 14, 18, 17, 13, 13]
                    }
                ],
                chartOptions1: {
                    chart: {
                        height: 350,
                        type: 'line',
                        dropShadow: {
                            enabled: true,
                            color: '#000',
                            top: 18,
                            left: 7,
                            blur: 10,
                            opacity: 0.2
                        },
                        toolbar: {
                            show: false
                        }
                    },
                    colors: ['#77B6EA', '#545454'],
                    dataLabels: {
                        enabled: true,
                    },
                    stroke: {
                        curve: 'smooth'
                    },
                    title: {
                        text: 'Average High & Low Temperature',
                        align: 'left'
                    },
                    grid: {
                        borderColor: '#e7e7e7',
                        row: {
                            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                            opacity: 0.5
                        },
                    },
                    markers: {
                        size: 1
                    },
                    xaxis: {
                        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                        title: {
                            text: 'Month'
                        }
                    },
                    yaxis: {
                        title: {
                            text: 'Temperature'
                        },
                        min: 5,
                        max: 40
                    },
                    legend: {
                        position: 'top',
                        horizontalAlign: 'right',
                        floating: true,
                        offsetY: -25,
                        offsetX: -5
                    }
                },
                series2: [44, 55, 13, 43, 22],
                chartOptions2: {
                    chart: {
                        width: 380,
                        type: 'pie',
                    },
                    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
                    responsive: [{
                        breakpoint: 480,
                        options: {
                            chart: {
                                width: 200
                            },
                            legend: {
                                position: 'bottom'
                            }
                        }
                    }]
                },
            }
        },
    }
</script>

<style lang="scss">
    #pie{
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
    }

</style>
