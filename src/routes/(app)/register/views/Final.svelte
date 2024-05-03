<script>
    import {onMount} from "svelte";
    import {writable} from "svelte/store";
    import {slide} from "svelte/transition";
    import {quartOut} from "svelte/easing";
    import {submitLockers} from "$lib/services/app/mainApi.js";

    import {singleLocker, registrationData, studentId1, studentId2, selectedLocation, pageView} from "../store.js";
    import {goto} from "$app/navigation";


    let studentsArr = [];

    let buttonMessage = 'Submit';

    async function next() {
        studentsArr[0] = $studentId1;
        if (!$singleLocker) studentsArr[1] = $studentId2;

        let finalArr = {
            "students": studentsArr,
            "location": $selectedLocation,
        }
        let response = await submitLockers(finalArr);
        if (response.ok) {
            //clear the regestration stores / kinda jank but ok
            selectedLocation.set({});
            registrationData.set({});
            singleLocker.set(false);

            await goto(`/lookup?id=${$studentId1}`);

            studentId1.set(null);
            studentId2.set(null);
            pageView.set(0);
        } else {
            //todo show error reason
        }
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
        margin-bottom: 8px;
    }

    .selection-div {
        width: 352px;
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

        .stat-div {
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
            <div class="box-header">Confirm Locker Selection</div>
            <div class="small-text">Your locker is assigned randomly</div>
            <div class="selection-div">

            </div>

            <button class="submit" on:click={next}>{buttonMessage}</button>
        </div>
    </div>
</div>
