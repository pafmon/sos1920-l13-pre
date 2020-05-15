<script>

    async function loadGraph(){
        google.charts.load('current', {
            'packages':['geochart'],
            // Note: you will need to get a mapsApiKey for your project.
            // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
            'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
        });
        google.charts.setOnLoadCallback(drawRegionsMap);

    
        async function drawRegionsMap() {

            const rawData = await fetch("/geodata");
            
            const apiData = await rawData.json();

            var data = google.visualization.arrayToDataTable(apiData);

            var options = {};

            var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

            chart.draw(data, options);
        }
    }

</script>
<svelte:head>       
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js" on:load="{loadGraph}"></script>
</svelte:head>
<main>
       <div id="regions_div" style="width: 900px; height: 500px;"></div> 
</main>