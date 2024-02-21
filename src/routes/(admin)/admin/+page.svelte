<script>
    import {writable} from 'svelte/store';
    import {fetchEnabledGrades, fetchOverviewData} from "$lib/services/admin/mainApi.js";
    import {onMount} from "svelte";

    // Create a writable store
    //todo fix stinky hack to prevent flash
    const gradesStore = writable({});
    const statStore = writable({})

    onMount(async () => {

        statStore.set(await fetchOverviewData())
        gradesStore.set(await fetchEnabledGrades());
        console.log($gradesStore)
    });
</script>

<svelte:head>
    <title>Locker - Overview</title>
    <link href="https://fonts.googleapis.com" rel="preconnect">
    <link crossorigin href="https://fonts.gstatic.com" rel="preconnect">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet">
    <link
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
            rel="stylesheet"
    />
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
    }

    .grid-element-1 {
        width: 100%;
        height: 100%;
        background-color: #00284d;
        /*background-color: #131821;*/
        border-radius: 10px;
        padding: 8px 12px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        text-align: center;
    }

    .large {
        grid-column: span 3;
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
    }

    .stat-1-grade-text {
        font-size: 16px;
        font-family: 'Montserrat', sans-serif;
        color: #d6d6d6;
    }

    .material-symbols-outlined {
        color: #d6d6d6;
        width: 24px;
        user-select: none;
    }
</style>


<div class="main">
    <div class="grid-cont">
        <div class="grid-element-1">
            <div class="num-stat-cont-1">
                <div class="num-stat-subcont-title">Registered Students</div>
                <div class="num-stat-big-text">{$statStore.regUsers ? $statStore.regUsers : ''}</div>
                <div class="num-stat-subcont-title">Population: {$statStore.totalUsers ? $statStore.totalUsers : ''}</div>
            </div>
        </div>

        <div class="grid-element-1">
            <div class="num-stat-cont-1">
                <div class="num-stat-subcont-title">Registered Lockers</div>
                <div class="num-stat-big-text">{$statStore.regLockers ? $statStore.regLockers : ''}</div>
                <div class="num-stat-subcont-title">Capacity: {$statStore.totalLockers ? $statStore.totalLockers : ''}</div>
            </div>
        </div>
        <div class="grid-element-1">
            <div class="num-stat-cont-1">
                <div class="num-stat-subcont-title">Last Hour</div>
                <div class="num-stat-big-text">+{$statStore.lastHour ? $statStore.lastHour : ''}</div>
                <div class="num-stat-subcont-title">Lockers</div>
            </div>
        </div>
        <div class="grid-element-1">
            <div class="num-stat-cont-1">
                <div class="num-stat-subcont-title">Last Day</div>
                <div class="num-stat-big-text">+{$statStore.lastHour ? $statStore.lastHour : ''}</div>
                <div class="num-stat-subcont-title">Lockers</div>
            </div>
        </div>

        <div class="grid-element-1 large">
            <div class="button-text">graph of some sort</div>
        </div>
        <div class="grid-element-1">
            <div class="button-text">list names of new users</div>
        </div>

        <div class="grid-element-1 medium">
            <div class="stat-cont-1">

                <div class="stat-1-subcont-1">
                    <div class="stat-1-subcont-title">Enabled Registration</div>
                    <div class="stat-1-grade-cont">

                        <div class="stat-1-grade-element-subcont">
                            <div class="material-symbols-outlined"
                                 style="{$gradesStore.grade_12 ? 'color:darkgreen' : 'color:darkred'}">{$gradesStore.grade_12 ? 'check_circle' : 'cancel'}
                            </div>
                            <div class="stat-1-grade-text">Grade 12</div>
                        </div>
                        <div class="stat-1-grade-element-subcont">
                            <div class="material-symbols-outlined"
                                 style="{$gradesStore.grade_11 ? 'color:darkgreen' : 'color:darkred'}">{$gradesStore.grade_11 ? 'check_circle' : 'cancel'}
                            </div>
                            <div class="stat-1-grade-text">Grade 11</div>
                        </div>
                        <div class="stat-1-grade-element-subcont">
                            <div class="material-symbols-outlined"
                                 style="{$gradesStore.grade_10 ? 'color:darkgreen' : 'color:darkred'}">{$gradesStore.grade_10 ? 'check_circle' : 'cancel'}
                            </div>
                            <div class="stat-1-grade-text">Grade 10</div>
                        </div>
                        <div class="stat-1-grade-element-subcont">
                            <div class="material-symbols-outlined"
                                 style="{$gradesStore.grade_9 ? 'color:darkgreen' : 'color:darkred'}">{$gradesStore.grade_9 ? 'check_circle' : 'cancel'}
                            </div>
                            <div class="stat-1-grade-text">Grade 9</div>
                        </div>

                    </div>
                </div>

                <div class="stat-1-subcont-1">
                    <div class="stat-1-subcont-title">Restricted Areas</div>
                </div>

            </div>
        </div>
        <div class="grid-element-1 medium">
            <div class="button-text">system stats like uptime, ram usage, db size</div>
        </div>
    </div>
</div>
