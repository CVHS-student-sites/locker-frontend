<script>
    import Switch from "$lib/components/global/Switch.svelte";

    const areas = {
        building_1000: {
            floor_1: false,
            floor_3: false,
        },
        building_2000: {
            floor_1: false,
            floor_2: false,
            floor_3: false,
        },
        building_5000: {
            floor_2: false,
            floor_3: false,
        },
        building_7000: {
            floor_1: false,
            floor_2: false,
            floor_3: false,
        },
    };
</script>

<div class="area-restrictions-cont">
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
                        fontSize={24}
                        design="slider"
                    />
                </div>
            {/each}
        </div>
    {/each}
</div>

<style>
    .area-restrictions-cont {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        gap: 10px;
    }

    .building {
        display: flex;
        flex-direction: column;
        width: 100%;
        box-sizing: border-box;
        border-radius: 5px;
        gap: 5px;
        background-color: #00284d;
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
