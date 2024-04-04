<script>
    import { onMount } from "svelte";
    import { draw } from "svelte/transition";

    let objects = [];
    let selected = [];

    let select;

    onMount(async () => {
        objects = [
            {
                key: "1000",
                data: "M 443 43 H 626 V 187 H 889 V 252 H 928 V 243 H 922 V 211 H 950 V 46 H 990 V 39 H 997 V 21 H 1076 V 39 H 1084 V 46 H 1126 V 249 H 1148 V 381 H 941 V 360 H 930 V 372 H 884 V 365 H 672 V 371 H 622 V 362 H 455 V 291 H 443 V 43",
            },
            {
                key: "2000",
                data: "M 47 177 H 272 V 150 H 365 V 194 H 397 V 569 H 621 V 687 H 330 V 739 H 223 V 698 H 194 V 367 H 47 V 177",
            },
            {
                key: "5000",
                data: "M 1097 702 H 1294 V 1192 H 1183 V 1256 H 1126 V 1199 H 1097 V 702",
            },
            {
                key: "7000",
                data: "M 1441 762 H 1772 V 784 H 1832 V 842 H 1796 V 868 H 1832 V 909 H 1776 V 959 H 1441 V 762",
            },
        ];
    });
</script>

<style>

    .main{
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: black;
    }


    .state:hover {
        fill: hsla(246, 90%, 36%, 0.505);
        cursor: pointer;
    }

    .texts {
        user-select: none;
        cursor: pointer;
        z-index: 1; /* Ensure that text elements are on top */
        /* fill: hsl(0, 0%, 0%); */
        fill: black;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
    }

    .state {
        fill: hsla(0, 0%, 20%, 0);
        transition: all 0.2s ease;
    }

    .flash {
        animation: flashingAnimation 0.5s infinite; /* Adjust the duration as needed */
    }

    @keyframes flashingAnimation {
        0%,
        100% {
            fill: hsla(231, 100%, 50%, 0.4);
        }
        50% {
            fill: hsla(231, 100%, 50%, 0.1);
        }
    }

    .box {
        /* position: relative; */
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        box-sizing: border-box;
    }

</style>


    <div class="box">
        <svg viewBox="0 0 1880 1500" class="img">
            <image
                href="/maps_big.jpg"
                width="173%"
                x="-720"
                y="-142"
            />

            <text class="texts" x="570" y="310" font-size="100" z="1" fill="blue"
                >1000</text
            >
            <text class="texts" x="110" y="310" font-size="100" z="1" fill="blue"
                >2000</text
            >
            <text class="texts" x="1500" y="895" font-size="100" fill="blue"
                >7000</text
            >
            <text class="texts" x="1106" y="895" font-size="80" fill="blue"
                >5000</text
            >

            <g>
                {#each objects as feature, i}
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                    <path
                        stroke="blue"
                        d={feature.data}
                        on:click={() => (selected = feature)}
                        class={`state ${i === select && "flash"}`}
                        in:draw={{ delay: i * 200, duration: 1500 }}
                        stroke-width="14"
                    />
                {/each}
            </g>
        </svg>
    </div>

