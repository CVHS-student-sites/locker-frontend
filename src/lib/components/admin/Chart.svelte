<script>
    export let chartData;

    const data = {
        labels: ["9", "10", "11", "12"],
        datasets: [
            {
                data: chartData,
                backgroundColor: ["#0084ff", "#1b2c42", "#003479", "#294d85"],
                borderColor: "#d6d6d6",
                borderWidth: 1,

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
