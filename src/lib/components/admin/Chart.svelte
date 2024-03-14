<script>
    export let chartData;

    const data = {
        labels: ["9", "10", "11", "12"],
        datasets: [
            {
                data: chartData,
                backgroundColor: ["#1e39da", "#0b2aec", "#1c1d9b", "#0052ff"],
                borderColor: "#22263a",
                borderWidth: 2,

                hoverBackgroundColor: [
                    "#FF5A5E",
                    "#5AD3D1",
                    "#FFC870",
                    "#A8B3C5",
                ],
            },
        ],
    };

    import { Doughnut } from "svelte-chartjs";

    import {
        Chart as ChartJS,
        Title,
        Tooltip,
        Legend,
        ArcElement,
        CategoryScale,
    } from "chart.js";

    ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);
</script>

<Doughnut {data} width={100} options={{ maintainAspectRatio: false }} />
