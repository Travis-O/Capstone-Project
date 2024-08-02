const ctx = document.getElementById('myChart').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Small', 'Small t/s', 'Medium', 'Medium t/s', 'Large', 'Large t/s'],
        datasets: [{
            label: 'Price',
            data: [1, 2, 2, 3, 3, 4],
            fill: true,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Customization'
                }
            },
            y: {
                display: true,
                text: 'Price',
            }
        }
    }
});