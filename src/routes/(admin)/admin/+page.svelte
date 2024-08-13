<script>
    import {writable} from 'svelte/store';
    import {fetchAreaRestrictions, fetchEnabledGrades, fetchOverviewData, fetchLockerCounts} from "$lib/services/admin/mainApi.js";
    import {onMount} from "svelte";

    import Chart from "$lib/components/admin/Chart.svelte";

    import LockerCount from "$lib/components/admin/LockerCount.svelte";
    import {Stretch} from "svelte-loading-spinners";


    let showData = false;
    let areas;
    let gradeCounts;
    let showChart = false;


    const gradesStore = writable({});
    const statStore = writable({})

    //todo dont really need a store here
    onMount(async () => {
        areas = await fetchAreaRestrictions();

        statStore.set(await fetchOverviewData());
        gradesStore.set(await fetchEnabledGrades());
        gradeCounts = Object.values($statStore.regUsersByGrade);


        showData = true;
        showChart = true;
    });
</script>

<svelte:head>
    <title>Locker - Overview</title>
</svelte:head>

<style>
    :root {
        --text: #d6d6d6;
        --background: #101014;
        --primary: #0084ff;
        --secondary: #1b2c42;
        --accent: #577db2;
    }

    .main {
        display: flex;
        flex-direction: column;
        background-color: var(--background);
        flex: 1;
    }

    .button-text {
        font-size: 16px;
        font-family: 'Montserrat', sans-serif;
        color: #d6d6d6;
    }

    .grid-cont {
        flex: 1; /* Expand to fill remaining horizontal space */
        display: grid;
        grid-gap: 10px;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: 2fr 3fr 2fr; /* Adjust the fr values as needed */
        box-sizing: border-box;
        min-height: 0;
        min-width: 0;
    }

    .grid-element-1 {
        width: 100%;
        height: 100%;
        background-color: #00284d;
        /*background-color: #131821;*/
        border-radius: 10px;
        padding: 8px 8px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        text-align: center;
        min-height: 0;
        min-width: 0;
    }

    .large {
        grid-column: span 3;
        background-color: #18181b;
    }

    .side {
        background-color: #18181b;
    }

    .medium {
        grid-column: span 2;
        background-color: #18181b;
    }

    .num-stat-cont-1 {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 5px;
        padding: 5px;
    }

    .num-stat-subcont-title {
        font-size: 17px;
        font-family: 'Montserrat', sans-serif;
        color: #d6d6d6;
    }

    .count-stat-subcont-title {
        font-size: 17px;
        font-family: 'Montserrat', sans-serif;
        color: #d6d6d6;
    }
    .count-stat-cont-1 {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 5px;
        padding: 5px;
        box-sizing: border-box;
    }

    .count-cont{
        display: flex;
        flex: 1;
        height: 100%;
        width: 100%;
        overflow-y: scroll;
        scrollbar-width: none;
    }

    .count-cont::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    .count-cont {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }

    .num-stat-big-text {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 58px;
        font-weight: bold;
        font-family: 'Montserrat', sans-serif;
        color: #d6d6d6;
    }

    .stat-cont-1 {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        gap: 5px;
    }

    .stat-1-subcont-1 {
        box-sizing: border-box;
        padding: 5px;
        gap: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        width: 50%;
        height: 100%;
    }

    .stat-1-subcont-title {
        font-size: 16px;
        font-family: 'Montserrat', sans-serif;
        color: #d6d6d6;
    }

    .stat-1-grade-cont {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        gap: 5px;
    }

    .stat-1-area-cont {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        gap: 5px;
        overflow-y: scroll;
        scrollbar-width: none;
    }

    .stat-1-grade-element-subcont {
        display: flex;
        align-items: center;
        justify-content: left;
        width: 100%;
        height: 100%;
        background-color: #101014;
        border-radius: 5px;
        gap: 8px;
        padding-left: 8px;
        box-sizing: border-box;
    }

    .stat-1-grade-text {
        font-size: 16px;
        font-family: 'Montserrat', sans-serif;
        color: #d6d6d6;
    }


    .area-restrictions-cont {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        gap: 10px;
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
        border: 2px dotted #00284d;
        padding: 5px;
    }

    .floor {
        display: flex;
        background-color: #101014;
        border-radius: 5px;
        padding: 4px;
        align-items: center;
        gap: 8px;
    }

    .area-restrictions-title {
        font-size: 16px;
        font-family: "Montserrat", sans-serif;
        color: #d6d6d6;
        text-align: left;
    }

    .material-symbols-outlined {

        color: #d6d6d6;
        width: 24px;
        user-select: none;
    }

    .filled-icons {
        font-variation-settings: 'FILL' 1,
        'wght' 600,
        'GRAD' 0,
        'opsz' 24
    }

</style>


<div class="main">
    <div class="grid-cont">
        <div class="grid-element-1">
            <div class="num-stat-cont-1">
                <div class="num-stat-subcont-title">Registered Students</div>
                <div class="num-stat-big-text">{$statStore.regUsers ? $statStore.regUsers : ''}</div>
                <div class="num-stat-subcont-title">
                    Population: {$statStore.totalUsers ? $statStore.totalUsers : ''}</div>
            </div>
        </div>

        <div class="grid-element-1">
            <div class="num-stat-cont-1">
                <div class="num-stat-subcont-title">Registered Lockers</div>
                <div class="num-stat-big-text">{$statStore.regLockers ? $statStore.regLockers : ''}</div>
                <div class="num-stat-subcont-title">
                    Available: {$statStore.availableLockers ? $statStore.availableLockers : ''}</div>
            </div>
        </div>
        <div class="grid-element-1">
            <div class="num-stat-cont-1">
                <div class="num-stat-subcont-title">Verification Queue</div>
                <div class="num-stat-big-text">{$statStore.verificationQueues ? $statStore.verificationQueues : '0'}</div>
                <div class="num-stat-subcont-title">Users</div>
            </div>
        </div>
        <div class="grid-element-1">
            <div class="num-stat-cont-1">
                <div class="num-stat-subcont-title">Last Hour</div>
                <div class="num-stat-big-text">+{$statStore.lastHour ? $statStore.lastHour : '0'}</div>
                <div class="num-stat-subcont-title">Registered Students</div>
            </div>
        </div>

        <div class="grid-element-1 large">
            {#if showChart}
                <Chart bind:chartData={gradeCounts}/>
            {/if}
        </div>

        <div class="grid-element-1 side">
            <div class="count-stat-cont-1">
                <div class="count-stat-subcont-title">Available Lockers</div>
                <div class="count-cont">
                    <LockerCount/>
                </div>
            </div>
        </div>

        <!--        todo should really be separate components-->
        <div class="grid-element-1 medium">
            <div class="stat-cont-1">

                <div class="stat-1-subcont-1">
                    <div class="stat-1-subcont-title">Enabled Registration</div>
                    <div class="stat-1-grade-cont">

                        <div class="stat-1-grade-element-subcont">
                            <div class="material-symbols-outlined filled-icons"
                                 style="{$gradesStore.preReg ? 'color:darkgreen' : 'color:darkred'}">{$gradesStore.preReg ? 'check_circle' : 'cancel'}
                            </div>
                            <div class="stat-1-grade-text">Preregister</div>
                        </div>
                        <div class="stat-1-grade-element-subcont">
                            <div class="material-symbols-outlined filled-icons"
                                 style="{$gradesStore.grade_12 ? 'color:darkgreen' : 'color:darkred'}">{$gradesStore.grade_12 ? 'check_circle' : 'cancel'}
                            </div>
                            <div class="stat-1-grade-text">Grade 12</div>
                        </div>
                        <div class="stat-1-grade-element-subcont">
                            <div class="material-symbols-outlined filled-icons"
                                 style="{$gradesStore.grade_11 ? 'color:darkgreen' : 'color:darkred'}">{$gradesStore.grade_11 ? 'check_circle' : 'cancel'}
                            </div>
                            <div class="stat-1-grade-text">Grade 11</div>
                        </div>
                        <div class="stat-1-grade-element-subcont">
                            <div class="material-symbols-outlined filled-icons"
                                 style="{$gradesStore.grade_10 ? 'color:darkgreen' : 'color:darkred'}">{$gradesStore.grade_10 ? 'check_circle' : 'cancel'}
                            </div>
                            <div class="stat-1-grade-text">Grade 10</div>
                        </div>
                        <div class="stat-1-grade-element-subcont">
                            <div class="material-symbols-outlined filled-icons"
                                 style="{$gradesStore.grade_9 ? 'color:darkgreen' : 'color:darkred'}">{$gradesStore.grade_9 ? 'check_circle' : 'cancel'}
                            </div>
                            <div class="stat-1-grade-text">Grade 9</div>
                        </div>

                    </div>
                </div>

                <div class="stat-1-subcont-1">
                    <div class="stat-1-subcont-title">Restricted Areas</div>
                    <div class="stat-1-area-cont">
                        {#if showData}
                            <div class="area-restrictions-cont">
                                {#each Object.keys(areas) as building}
                                    <div class="building">
                                        <div class="area-restrictions-title">
                                            Building {building.split("_")[1]}
                                        </div>
                                        {#each Object.keys(areas[building]) as floor}
                                            <div class="floor">
                                                <div class="material-symbols-outlined filled-icons"
                                                     style="{areas[building][floor] ? 'color:darkred' : 'color:darkgreen'}">{areas[building][floor] ? 'block' : 'check_circle'}
                                                </div>
                                                <div class="area-restrictions-title">
                                                    Floor {floor.split("_")[1]}
                                                </div>
                                            </div>
                                        {/each}
                                    </div>
                                {/each}
                            </div>
                        {:else}
                            <Stretch size="60" color="#577db2" unit="px" duration="1s"/>
                        {/if}
                    </div>
                </div>
            </div>
        </div>
        <div class="grid-element-1 medium">
            <div class="button-text">system stats like uptime, ram usage, db size</div>
        </div>
    </div>
</div>
