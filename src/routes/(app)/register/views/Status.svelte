<script>
    import {createEventDispatcher} from "svelte";
    import { writable } from "svelte/store";
    import {onMount} from "svelte";
    import { fade } from "svelte/transition";
    import { quartOut } from "svelte/easing";

    //todo import fetch

    const dispatch = createEventDispatcher();

    const gradesStore = writable({
        grade_9: false,
        grade_10: true,
        grade_11: true,
        grade_12: true,
    });


    function next(){
        dispatch("message", {page: 0});
    }

    onMount(async () => {
        // gradesStore.set(await fetchEnabledGrades());
    });
</script>

<div class="main" in:fade={{ delay: 0, duration: 700, easing: quartOut }}>
    <div class="box">
        <div class="box-cont">
            <div class="box-header">Enabled Grade Levels</div>

            <div class="stat-div">
                <div class="stat-1-subcont-1">
                    <div class="stat-1-grade-cont">
                        <div class="stat-1-grade-element-subcont">
                            <div
                                class="material-symbols-outlined filled-icons"
                                style={$gradesStore.grade_12
                                    ? "color:darkgreen"
                                    : "color:darkred"}
                            >
                                {$gradesStore.grade_12
                                    ? "check_circle"
                                    : "cancel"}
                            </div>
                            <div class="stat-1-grade-text">Grade 12</div>
                        </div>
                        <div class="stat-1-grade-element-subcont">
                            <div
                                class="material-symbols-outlined filled-icons"
                                style={$gradesStore.grade_11
                                    ? "color:darkgreen"
                                    : "color:darkred"}
                            >
                                {$gradesStore.grade_11
                                    ? "check_circle"
                                    : "cancel"}
                            </div>
                            <div class="stat-1-grade-text">Grade 11</div>
                        </div>
                        <div class="stat-1-grade-element-subcont">
                            <div
                                class="material-symbols-outlined filled-icons"
                                style={$gradesStore.grade_10
                                    ? "color:darkgreen"
                                    : "color:darkred"}
                            >
                                {$gradesStore.grade_10
                                    ? "check_circle"
                                    : "cancel"}
                            </div>
                            <div class="stat-1-grade-text">Grade 10</div>
                        </div>
                        <div class="stat-1-grade-element-subcont">
                            <div
                                class="material-symbols-outlined filled-icons"
                                style={$gradesStore.grade_9
                                    ? "color:darkgreen"
                                    : "color:darkred"}
                            >
                                {$gradesStore.grade_9
                                    ? "check_circle"
                                    : "cancel"}
                            </div>
                            <div class="stat-1-grade-text">Grade 9</div>
                        </div>
                    </div>
                </div>
            </div>

            <button class="submit" on:click={next}>Next</button>
        </div>
    </div>
</div>

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

    .stat-div {
        width: 352px;
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
        font-variation-settings:
            "FILL" 1,
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

        .stat-1-grade-element-subcont{
            background-color: #090606;
        }
    }
</style>
