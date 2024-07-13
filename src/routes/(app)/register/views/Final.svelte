<script>
    import {slide} from "svelte/transition";
    import {quartOut} from "svelte/easing";
    import {submitLockers} from "$lib/services/app/mainApi.js";

    import {
        editMode,
        pageView,
        registrationData,
        selectedLocation,
        singleLocker,
        studentId1,
        studentId2
    } from "../store.js";
    import {goto} from "$app/navigation";
    import {SyncLoader} from "svelte-loading-spinners";


    let studentsArr = [];

    let buttonMessage = 'Submit';

    let loading = false;

    async function next() {
        loading = true;
        studentsArr[0] = $studentId1;
        if (!$singleLocker) studentsArr[1] = $studentId2;

        let finalArr = {
            "students": studentsArr,
            "location": $selectedLocation,
        }
        let response = await submitLockers(finalArr);
        if (response.ok) {
            //clear the registration stores / kinda jank but ok

            await goto(`/lookup?id=${$studentId1}`);

            selectedLocation.set({});
            registrationData.set({});
            singleLocker.set(false)
            studentId1.set(null);
            studentId2.set(null);
            pageView.set(0);
        } else {
            loading = false;
            //todo show error reason
        }
    }


    function back() {
        pageView.set(1);
        editMode.set(true);
    }

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
        color: green;
        background-color: #1b2c42;
        position: absolute;
    }

    .box-header {
        font-size: 24px;
        color: var(--text);
        margin-bottom: 24px;
    }

    .small-text {
        text-align: left;
        font-size: 14px;
        color: var(--text);
        margin-top: 16px;
    }

    .selection-div {
        width: 352px;
        display: flex;
        align-items: center;
        justify-content: center;
    }


    .item {
        /*background-color: green;*/
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: left;
        gap: 15px;
    }

    .data-cont {
        height: 40px;
        width: 90px;
        background-color: #17171c;
        border-radius: 10px;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        border: 2px solid #005cb3;
    }

    .text {
        color: #d6d6d6;
        font-size: 24px;
    }

    .expand {
        display: flex;
        gap: 10px;
        flex-direction: column;
    }

    .nav-btn {
        flex: 1;
        height: 35px;
        background-color: #0082ff;
        border: none;
        border-radius: 4px;
        font-weight: bold;
        cursor: pointer;
        transition-duration: 150ms;
        color: var(--text);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;

    }

    .nav-btn:hover {
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

    .button-cont {
        margin-top: 10px;
        height: 35px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        gap: 10px;
    }

    .loading-bar {
        position: absolute;
        top: -50px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
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


        .button-cont {
            width: 90vw;
        }
    }
</style>

<div class="main" in:slide={{ delay: 250, duration: 600, easing: quartOut, axis: 'x' }}>
    <div class="box">
        <div class="box-cont">

            {#if loading}
                <div class="loading-bar">
                    <SyncLoader size="40" color="#577db2" unit="px" duration="0.8s"/>
                </div>
            {/if}


            <div class="box-header">Confirm Locker Selection</div>

            <div class="selection-div">
                <div class="expand">
                    <div class="item">
                        <div class="data-cont">{$selectedLocation.level}</div>
                        <div class="text">Level</div>
                    </div>
                    <div class="item">
                        <div class="data-cont">{$selectedLocation.building}</div>
                        <div class="text">Building</div>
                    </div>
                    <div class="item">
                        <div class="data-cont">{$selectedLocation.floor}</div>
                        <div class="text">Floor</div>
                    </div>
                </div>
            </div>
            <div class="small-text">Your locker is assigned randomly</div>

            <div class="button-cont">
                <button class="nav-btn" type="button" on:click={back}>
                    <span class="material-symbols-outlined filled-icons">arrow_back</span>
                    Back
                </button>
                <button class="submit nav-btn" type="submit" on:click={next}>
                    {buttonMessage}
                    <span class="material-symbols-outlined filled-icons">check</span>
                </button>
            </div>
        </div>
    </div>
</div>
