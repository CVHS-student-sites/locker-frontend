<script>
    import {onMount} from "svelte";
    import {get} from "svelte/store";
    import {slide} from "svelte/transition";
    import {quartOut} from "svelte/easing";
    import {editMode, pageView, selectedLocation, singleLocker} from "../store.js";
    import {fetchAvailableLockers} from "$lib/services/app/mainApi.js";

    import Select from "$lib/components/app/Select.svelte";


    let areas = {};
    let data1 = [];
    let data2 = [];
    let data3 = [];

    let value1;
    let value2;
    let value3;

    async function fetchData() {
        areas = await fetchAvailableLockers();

        let availableLevels = [];

        for (let building in areas) {
            for (let floor in areas[building]) {
                let levels = areas[building][floor].Levels;
                for (let level of levels) {
                    if (!availableLevels.includes(level)) {
                        availableLevels.push(level);
                    }
                }
            }
        }

        // data3 = availableLevels.map(item => {
        //     if (item === "Top") {
        //         return "Double - " + item;
        //     }
        //     if (item === "Bottom") {
        //         return "Double - " + item;
        //     }
        //     return item;
        // });

        data3 = availableLevels;
    }

    async function next() {
        let prevType = get(singleLocker);

        selectedLocation.set({
            building: value1.label,
            floor: value2.label,
            level: value3.label,
        });
        if (value3.label === "Single"){
            singleLocker.set(true);
        }else{
            singleLocker.set(false);
        }

        console.log($selectedLocation);

        if ($editMode) {
            if(prevType != $singleLocker){ //catch if the locker type changed, then dispaly the id selection again
                pageView.set(2);
                editMode.set(false);
            }else{
                pageView.set(4);
                editMode.set(false);
            }
        } else {
            pageView.set(2);
        }

    }



    // Watch for changes in value3 and update data2 accordingly
    $: {
        if (value3) {
            let buildings = [];
            //bulky but fuck it
            for (let building in areas) {
                for (let floor in areas[building]) {
                    let levels = areas[building][floor].Levels;
                    if(levels.includes(value3.value)){
                        if (!buildings.includes(building)) {
                            buildings.push(building);
                        }
                    }
                }
            }
            data1 = buildings;
            clear(1);
            clear(2);
            data2 = [];
        }
    }

    $:{
        if (value1 && areas[value1.value]) { //todo i have no clue why we are checking value in areas, figure out later

            let floors = [];
            for (let floor in areas[value1.value]) {
                let levels = areas[value1.value][floor].Levels;
                if(levels.includes(value3.value)){
                    if (!floors.includes(floor)) {
                        floors.push(floor);
                    }
                }
            }
            data2 = floors;
            clear(2);
        }
    }

    function clear(number) {
        if (number === 1) value1 = null;
        if (number === 2) value2 = null;
    }

    onMount(async () => {
        await fetchData();
    });
</script>

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
        height: 100%;
        width: 100vw;
        flex: 1;
    }

    .box {
        display: flex;
        flex-direction: column;
        flex: 1;
        width: 100%;
        align-items: center;
        /*justify-content: center;*/
        row-gap: 30px;
        margin-top: 20vh;
    }

    .box-cont {
        display: flex;
        align-items: center;
        flex-direction: column;
        border-radius: 8px;
        padding: 32px;
        color: var(--text);
        background-color: #1b2c42;
    }

    .box-header {
        font-size: 24px;
        color: var(--text);
        margin-bottom: 24px;
    }

    .small-text {
        font-size: 14px;
        color: var(--text);
        margin-bottom: 8px;
    }

    .selection-div {
        width: 352px;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .input-group {
        width: 100%;
    }

    .selection-label {
        font-size: 16px;
        color: var(--text);
        margin-bottom: 10px;
        display: flex;
        width: 100%;
        justify-content: left;
    }

    .submit {
        width: 100%;
        height: 35px;
        background-color: #0082ff;
        border: none;
        border-radius: 4px;
        font-weight: bold;
        margin-top: 20px;
        cursor: pointer;
        transition-duration: 150ms;
        color: var(--text);
    }

    .submit:hover {
        background-color: #577db2;
    }

    .material-symbols-outlined {
        color: #d6d6d6;
        width: 24px;
        user-select: none;
    }

    .filled-icons {
        font-variation-settings: "FILL" 1,
        "wght" 600,
        "GRAD" 0,
        "opsz" 24;
    }

    @media only screen and (max-width: 600px) {
        .box {
            row-gap: 30px;
        }

        .box-cont {
            width: 100vw;
            box-shadow: none;
            padding: 0;
            background: unset;
        }

        .selection-div {
            width: 90vw;
        }

        .submit {
            width: 90vw;
        }

        .stat-1-grade-element-subcont {
            background-color: #090606;
        }
    }
</style>

<div class="main" in:slide={{ delay: 250, duration: 600, easing: quartOut, axis: 'x' }}>
    <div class="box">
        <div class="box-cont">
            <div class="box-header">Select Locker Location</div>

            <div class="selection-div">

                <div class="input-group">
                    <div class="selection-label">Position</div>
                    <Select items={data3} placeholder="Select Position" bind:value={value3}/>
                </div>

                <div class="input-group">
                    <div class="selection-label">Building</div>
                    <Select items={data1} placeholder="Select Building" bind:value={value1}/>
                </div>

                <div class="input-group">
                    <div class="selection-label">Floor</div>
                    <Select items={data2} placeholder="Select Floor" bind:value={value2}/>
                </div>

            </div>

            <button class="submit" on:click={next}>Next</button>
        </div>
    </div>
</div>
