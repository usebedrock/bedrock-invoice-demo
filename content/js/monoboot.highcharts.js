$(function () {

  /* ==========================================================================
    Pie chart
     ========================================================================== */

    $('.pie-chart-example').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            height: 250
        },
        title: {
            text: null
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        series: [{
            type: 'pie',
            data: [
                ['Item 1', 35.0],
                ['Item 2', 65.0]
            ]
        }]
    });
    
    /* ==========================================================================
      Column chart
       ========================================================================== */

    $('.column-chart-example').highcharts({
        chart: {
            type: 'column',
            height: 250
        },
        title: {
            text: null
        },
        series: [{
            data: [
                ['Item 1', 35.0],
                ['Item 2', 215.0],
                ['Item 4', 325.0],
                ['Item 5', 175.0],
                ['Item 6', 425.0],
                ['Item 7', 125.0],
              
            ]
        }]
    });

});