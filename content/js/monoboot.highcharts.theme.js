const Highcharts = require('highcharts');

/**
 * Monoboot theme for Highcharts JS
 * General theme applied to all charts
 * @author Johan Ronsse
 */

Highcharts.theme = {
    colors: ['#5D8FC9', // $blue
             '#EA1630', // $red
             '#6DB320', // $pink
             '#65CEDE', // $aqua-light
             '#6DB320', // $green
             '#FF7C07', // $orange
             '#F9F3AC', // $light-yellow
             '#F8E71C', // $yellow
             '#50C2C2'], // $aqua
    credits: {
        // This hides the mention of Highcharts
        enabled: false
    },
    chart: {
        style: {
            fontFamily: 'Helvetica, Arial, sans-serif'
        }
    },
    title: {
        style: {
            color: '#202123',
            font: '16px Helvetica, Arial, sans-serif'
        }
    },
    subtitle: {
        style: {
            color: '#96A2B4',
            font: 'normal 11px Helvetica, Arial, sans-serif'
        }
    },
    legend: {
        itemStyle: {
            font: '11px Helvetica, Arial, sans-serif',
            color: '#202123'
        },
        itemHoverStyle:{
            color: '#96A2B4'
        }   
    },
    plotOptions: {
        pie: {
            dataLabels: {
                style: {
                    "color": '#3C434D',
                    "fontSize": "9px",
                    "fontWeight": "normal"
                }
            }
        }
    }
};

// Apply the theme
var highchartsOptions = Highcharts.setOptions(Highcharts.theme);