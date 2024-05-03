<script>
    import Switch from "$lib/components/global/Switch.svelte";
    import {onMount} from "svelte";
    import {Stretch} from "svelte-loading-spinners";
    import {fetchGradeRestrictions, postEnabledGrades} from "$lib/services/admin/mainApi.js";


    let showData = false;
    let grades;
    let initialGrades;

    async function fetchData() {
        grades = await fetchGradeRestrictions();
        initialGrades = JSON.stringify(grades); // Store initial state as a string
        console.log("test")
        showData = true;
    }

    onMount(fetchData);

    $: {
        if (showData && JSON.stringify(grades) !== initialGrades) {

            postEnabledGrades(grades);
            initialGrades = JSON.stringify(grades);
        }
    }
</script>

<div class="area-restrictions-cont">
{#if showData}

        <div class="stat-1-grade-cont">

            <div class="stat-1-grade-element-subcont">
                <div class="material-symbols-outlined filled-icons"
                     style="{grades.preReg ? 'color:darkgreen' : 'color:darkred'}">{grades.preReg ? 'check_circle' : 'cancel'}
                </div>
                <Switch
                        bind:checked={grades.preReg}
                        fontSize={12}
                        design="slider"
                />
                <div class="stat-1-grade-text">Preregister</div>
            </div>
            <div class="stat-1-grade-element-subcont">
                <div class="material-symbols-outlined filled-icons"
                     style="{grades.grade_12 ? 'color:darkgreen' : 'color:darkred'}">{grades.grade_12 ? 'check_circle' : 'cancel'}
                </div>
                <Switch
                        bind:checked={grades.grade_12}
                        fontSize={12}
                        design="slider"
                />
                <div class="stat-1-grade-text">Grade 12</div>
            </div>
            <div class="stat-1-grade-element-subcont">
                <div class="material-symbols-outlined filled-icons"
                     style="{grades.grade_11 ? 'color:darkgreen' : 'color:darkred'}">{grades.grade_11 ? 'check_circle' : 'cancel'}
                </div>
                <Switch
                        bind:checked={grades.grade_11}
                        fontSize={12}
                        design="slider"
                />
                <div class="stat-1-grade-text">Grade 11</div>
            </div>
            <div class="stat-1-grade-element-subcont">
                <div class="material-symbols-outlined filled-icons"
                     style="{grades.grade_10 ? 'color:darkgreen' : 'color:darkred'}">{grades.grade_10 ? 'check_circle' : 'cancel'}
                </div>
                <Switch
                        bind:checked={grades.grade_10}
                        fontSize={12}
                        design="slider"
                />
                <div class="stat-1-grade-text">Grade 10</div>
            </div>
            <div class="stat-1-grade-element-subcont">
                <div class="material-symbols-outlined filled-icons"
                     style="{grades.grade_9 ? 'color:darkgreen' : 'color:darkred'}">{grades.grade_9 ? 'check_circle' : 'cancel'}
                </div>
                <Switch
                        bind:checked={grades.grade_9}
                        fontSize={12}
                        design="slider"
                />
                <div class="stat-1-grade-text">Grade 9</div>
            </div>

        </div>

{:else}
    <Stretch size="60" color="#577db2" unit="px" duration="1s"/>
{/if}
</div>

<style>
    .area-restrictions-cont {
        align-items: center;
        display: flex;
        flex-direction: column;
        width: 50%;
        height: 100%;

        gap: 10px;
        /*background-color: green;*/
    }

    .area-restrictions-cont::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    .area-restrictions-cont {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
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

    .stat-1-grade-cont {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        gap: 5px;
    }
    .stat-1-grade-text {
        font-size: 16px;
        font-family: 'Montserrat', sans-serif;
        color: #d6d6d6;
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
</style>
