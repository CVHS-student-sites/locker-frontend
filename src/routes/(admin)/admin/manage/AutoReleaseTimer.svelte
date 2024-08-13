<script>
    import {onMount} from "svelte";
    import {DateInput} from 'date-picker-svelte'
    import Switch from "$lib/components/global/Switch.svelte";

    import {fetchAutoReleaseDates, fetchAutoReleaseEnablement, postAutoReleaseEnablement, postAutoReleaseDates} from "$lib/services/admin/mainApi.js";

    let enable = false;
    let initialEnable;

    let loaded = false;

    let preRegister;
    let grade12;
    let grade11;
    let grade10;
    let grade9;


    async function fetchData() {
        let dates = await fetchAutoReleaseDates();

        let enabled = await fetchAutoReleaseEnablement();
        enable = enabled.enabled;
        initialEnable = enable;

        preRegister = new Date(dates.preRegister);
        grade12 = new Date(dates.grade12);
        grade11 = new Date(dates.grade11);
        grade10 = new Date(dates.grade10);
        grade9 = new Date(dates.grade9);

        loaded = true;
    }

    function submitEnablement(){
        postAutoReleaseEnablement({enabled: enable});
    }

    function submitDates() {
        let dateData = {
            grade9: grade9.toISOString(),
            grade10: grade10.toISOString(),
            grade11: grade11.toISOString(),
            grade12: grade12.toISOString(),
            preRegister: preRegister.toISOString(),
        }
        postAutoReleaseDates(dateData);
    }

    onMount(fetchData);

    $: if((enable !== initialEnable) && loaded){
        submitEnablement();
        initialEnable = enable;
    }

</script>
<style>
    .autorelease-cont {
        align-items: center;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;

        gap: 10px;

        font-size: 14px;

    }

    :root {
        --date-picker-background: #1b1e27;
        --date-picker-foreground: #f7f7f7;
        --date-picker-highlight-shadow: none;
    }

    .date-group {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: flex-end;
        flex-direction: row;
        gap: 6px;
    }

    .date-select-text {
        font-size: 14px;
        font-family: "Montserrat", sans-serif;
        color: #d6d6d6;
    }

    .selection-group-cont {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        flex-direction: column;
    }

    .enable-cont {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        gap: 6px;
    }

    .enable-text {
        font-size: 14px;
        font-family: "Montserrat", sans-serif;
        color: #d6d6d6;
    }

    .submit {
        outline: none;
        border-radius: 5px;
        color: var(--text);
        padding: 5px;
        background: none;
        border: 2px solid var(--accent-color);
    }

    .submit:hover {
        cursor: pointer;
        background-color: #528cac;
    }
</style>


<div class="autorelease-cont">

    <div class="enable-cont">
        <Switch
                bind:checked={enable}
                fontSize={12}
                design="slider"
        />
        <div class="enable-text">Enable Auto Release</div>
    </div>
    <div class="selection-group-cont">


        <div class="date-group">
            <div class="date-select-text">Preregister</div>
            <DateInput bind:value={preRegister} timePrecision="second"/>
        </div>

        <div class="date-group">
            <div class="date-select-text">Grade 12</div>
            <DateInput bind:value={grade12} timePrecision="second"/>
        </div>

        <div class="date-group">
            <div class="date-select-text">Grade 11</div>
            <DateInput bind:value={grade11} timePrecision="second"/>
        </div>

        <div class="date-group">
            <div class="date-select-text">Grade 10</div>
            <DateInput bind:value={grade10} timePrecision="second"/>
        </div>

        <div class="date-group">
            <div class="date-select-text">Grade 9</div>
            <DateInput bind:value={grade9} timePrecision="second"/>
        </div>
    </div>
    <button class="submit" on:click={submitDates}>Submit Dates</button>
</div>