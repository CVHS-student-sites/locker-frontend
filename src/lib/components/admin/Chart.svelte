<script>
    import { Pie } from "svelte-chartjs";

    const data = {
        labels: ["9", "10", "11", "12"],
        borderColor: 'rgb(255, 99, 132)',
        datasets: [
            {
                data: [300, 50, 100, 40],
                backgroundColor: [
                    "#F7464A",
                    "#46BFBD",
                    "#FDB45C",
                    "#949FB1",
                    "#4D5360",
                    "#AC64AD",
                ],
                borderColor: "white",
                hoverBackgroundColor: [
                    "#FF5A5E",
                    "#5AD3D1",
                    "#FFC870",
                    "#A8B3C5",
                    "#616774",
                    "#DA92DB",
                ],
            },
        ],
    };

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

<Pie {data} width={100}  options={{ maintainAspectRatio: false,}} />
