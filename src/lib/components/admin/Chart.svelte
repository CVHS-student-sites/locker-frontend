<script>
    export let chartData;

    const data = {
        labels: ["9", "10", "11", "12"],
        datasets: [
            {
                data: chartData,
                backgroundColor: ["#E06C75", "#E5C07B", "#98C379", "#61AFEF"],
                borderColor: "#22263a",
                borderWidth: 2,

            },
        ],
    };

    import {Doughnut} from "svelte-chartjs";

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

<Doughnut {data} width={100} options={{ maintainAspectRatio: false }}/>
