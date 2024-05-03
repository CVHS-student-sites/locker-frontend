<script>
    import Switch from "$lib/components/global/Switch.svelte";
    import {onMount} from "svelte";
    import {Stretch} from "svelte-loading-spinners";
    import {fetchAreaRestrictions, postAreaRestrictions} from "$lib/services/admin/mainApi.js";

    let showData = false;
    let areas;
    let initialAreas;

    async function fetchData() {
        areas = await fetchAreaRestrictions();
        initialAreas = JSON.stringify(areas); // Store initial state as a string
        showData = true;
    }

    onMount(fetchData);

    $: {
        if (showData && JSON.stringify(areas) !== initialAreas) {

            postAreaRestrictions(areas);
            initialAreas = JSON.stringify(areas);
        }
    }
</script>

<div class="area-restrictions-cont">
{#if showData}

        {#each Object.keys(areas) as building}
            <div class="building">
                <div class="area-restrictions-title">
                    Building {building.split("_")[1]}
                </div>
                {#each Object.keys(areas[building]) as floor}
                    <div class="floor">
                        <div class="area-restrictions-title">
                            Floor {floor.split("_")[1]}
                        </div>
                        <Switch
                                bind:checked={areas[building][floor]}
                                fontSize={12}
                                design="slider"
                        />
                    </div>
                {/each}
            </div>
        {/each}

{:else}
    <Stretch size="60" color="#577db2" unit="px" duration="1s"/>
{/if}
</div>

<style>
    .area-restrictions-cont {
        align-items: center;
        display: flex;
        flex-direction: column;
        width: 50%;
        height: 100%;
        overflow-y: scroll;
        gap: 10px;
        /*background-color: green;*/
    }

    .area-restrictions-cont::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    .area-restrictions-cont {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }

    .building {
        display: flex;
        flex-direction: column;
        width: 100%;
        box-sizing: border-box;
        border-radius: 5px;
        gap: 5px;
        /*background-color: #00284d;*/
        border: 2px dotted #00284d;
        padding: 5px;
    }

    .floor {
        display: flex;
        background-color: #101014;
        border-radius: 5px;
        padding: 10px;
    }

    .area-restrictions-title {
        font-size: 16px;
        font-family: "Montserrat", sans-serif;
        color: #d6d6d6;
    }
</style>
