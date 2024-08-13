<script>
    import {Stretch} from "svelte-loading-spinners";
    import {fetchLockerCounts} from "$lib/services/admin/mainApi.js";
    import {onMount} from "svelte";

    let locker;
    let showData = false;

    onMount(async () => {
        locker = await fetchLockerCounts();
        showData = true;
    });
</script>

<style>
    .count-subcont {
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;

        flex-direction: column;
        gap: 10px;
        box-sizing: border-box;
    }

    .building-cont {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        width: 100%;
        flex-direction: column;
        gap: 5px;
        border-radius: 5px;
        box-sizing: border-box;
        padding: 5px;
        border: 2px dotted #00284d;
    }

    .floor-cont {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        width: 100%;
        flex-direction: column;
        gap: 5px;
    }

    .position-cont {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        width: 100%;
        flex-direction: row;
        gap: 10px;
    }

    .position-group {
        background-color: #101014;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        flex-direction: column;
        gap: 4px;
        padding: 4px;
    }

    .building-title-text {
        font-size: 16px;
        font-family: "Montserrat", sans-serif;
        color: #d6d6d6;
    }

    .floor-title-text {
        font-size: 14px;
        font-family: "Montserrat", sans-serif;
        color: #afafaf;
    }

    .position-title {
        font-size: 12px;
        font-family: "Montserrat", sans-serif;
        color: #d6d6d6;
    }

    .position-count {
        font-size: 16px;
        font-family: "Montserrat", sans-serif;
        color: #d6d6d6;
    }
</style>


<div class="count-subcont">

    {#if showData}
        {#each Object.keys(locker) as building}

            <div class="building-cont">
                <div class="building-title-text">Building {building}</div>
                {#each Object.keys(locker[building]) as floor}

                    <div class="floor-cont">
                        <div class="floor-title-text">Floor {floor}</div>

                        <div class="position-cont">
                            {#each locker[building][floor].Positions as position}


                                <div class="position-group">
                                    {#each Object.entries(position) as [positionName, positionValue]}

                                        <div class="position-title">{positionName}</div>
                                        <div class="position-count">{positionValue}</div>
                                    {/each}
                                </div>

                            {/each}
                        </div>
                    </div>
                {/each}
            </div>
        {/each}

    {:else}
        <Stretch size="60" color="#577db2" unit="px" duration="1s"/>
    {/if}
</div>