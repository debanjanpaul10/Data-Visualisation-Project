google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Genre', 'Viewer Percentage liked'],
        ['Action',   49],
        ['Comedy',   24],
        ['Romantic', 12],
        ['Drama',    10],
        ['Others',    2]
    ]);

    var options = {
        title: 'Most Watched by Genres In India'
    };

    var chart = new google.visualization.PieChart(document.querySelector('.chart'));
    chart.draw(data, options);
      }
