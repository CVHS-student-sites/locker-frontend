<script>
    // verification status page
    import {onMount} from "svelte";
    import {writable} from "svelte/store";
    import {slide} from "svelte/transition";
    import {quartOut} from "svelte/easing";
    import {Moon, Circle, DoubleBounce, Jellyfish, ScaleOut} from "svelte-loading-spinners";

    import {singleLocker, studentId1, studentId2, pageView} from "../store.js";

    import {checkVerification} from "$lib/services/app/mainApi.js";

    const studentStatusStore = writable({});

    let buttonMessage = 'Check';

    function next() {

        //todo call check verify function
        checkIDs();
        // pageView.set(3);
    }

    async function myFunction() {
        await checkIDs();
    }

    //setInterval(myFunction, 1000); //todo this is breaking edit, removed for now

    function back() {
        pageView.set(2);
    }

    async function checkIDs() {
        if ($singleLocker) {
            let response = await checkVerification($studentId1);
            let json = await response.json();

            studentStatusStore.set({student_1: json.verified});

            if ($studentStatusStore.student_1) pageView.set(4);
        } else {
            let response1 = await checkVerification($studentId1);
            let response2 = await checkVerification($studentId2);
            let json1 = await response1.json();
            let json2 = await response2.json();

            studentStatusStore.set({student_1: json1.verified, student_2: json2.verified});

            if ($studentStatusStore.student_1 && $studentStatusStore.student_2) pageView.set(4);
        }


    }

    onMount(async () => {
        await checkIDs();
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
        color: green;
        background-color: #1b2c42;
        width: 352px;
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

    .stat-div {
        width: 100%;
    }

    .stat-1-subcont-1 {
        box-sizing: border-box;
        padding: 5px;
        gap: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        width: 100%;
        height: 100%;
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
        height: 40px;
        background-color: #101014;
        border-radius: 5px;
        gap: 8px;
        padding-left: 8px;
    }

    .stat-1-grade-text {
        font-size: 16px;
        font-family: "Montserrat", sans-serif;
        color: #d6d6d6;
    }

    .spinner-cont {
        justify-self: center;
        align-items: center;
        justify-content: center;
        margin-left: auto;
        margin-right: 10px;
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

    @media only screen and (max-width: 600px) {
        .box {
            row-gap: 30px;
        }

        .button-cont{
            width: 90vw;
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
            <div class="box-header">Verification Status</div>
            <div class="small-text">Please Check School Email for Verification Link</div>

            <div class="stat-div">
                <div class="stat-1-subcont-1">
                    <div class="stat-1-grade-cont">

                        <div class="stat-1-grade-element-subcont">
                            <div
                                    class="material-symbols-outlined filled-icons"
                                    style={$studentStatusStore.student_1
                                    ? "color:darkgreen"
                                    : "color:darkred"}
                            >
                                {$studentStatusStore.student_1
                                        ? "check_circle"
                                        : "cancel"}
                            </div>
                            <div class="stat-1-grade-text">{$studentId1}</div>

                            {#if !$studentStatusStore.student_1}
                                <div class="spinner-cont">
                                    <ScaleOut size="24" color="#577db2" unit="px" duration="0.7s"/>
                                </div>
                            {/if}
                        </div>

                        {#if !$singleLocker}
                            <div class="stat-1-grade-element-subcont">
                                <div
                                        class="material-symbols-outlined filled-icons"
                                        style={$studentStatusStore.student_2
                                    ? "color:darkgreen"
                                    : "color:darkred"}
                                >
                                    {$studentStatusStore.student_2
                                            ? "check_circle"
                                            : "cancel"}
                                </div>
                                <div class="stat-1-grade-text">{$studentId2}</div>

                                {#if !$studentStatusStore.student_2}
                                    <div class="spinner-cont">
                                        <ScaleOut size="24" color="#577db2" unit="px" duration="0.7s"/>
                                    </div>
                                {/if}
                            </div>
                        {/if}

                    </div>
                </div>
            </div>

            <div class="small-text">You can proceed once all students have verified</div>

            <div class="button-cont">
                <button class="nav-btn" type="button" on:click={back}>
                    <span class="material-symbols-outlined filled-icons">arrow_back</span>
                    Back
                </button>
                <button class="submit nav-btn" on:click={next}>
                    Check
                    <span class="material-symbols-outlined filled-icons">check</span>
                </button>
            </div>
        </div>
    </div>
</div>
