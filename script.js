document.addEventListener('DOMContentLoaded', () => {
    fetch('https://api.covid19india.org/data.json')
        .then(response => response.json())
        .then(data => {
            const latestData = data.statewise[0];
            document.getElementById('confirmed').innerText = latestData.confirmed;
            document.getElementById('recovered').innerText = latestData.recovered;
            document.getElementById('deaths').innerText = latestData.deaths;
        })
        .catch(error => console.error('Error fetching data:', error));
});
