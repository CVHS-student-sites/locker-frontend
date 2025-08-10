<script>
    import {createEventDispatcher, onMount} from "svelte";
    import {fetchLocker} from "$lib/services/app/mainApi.js";
    import {page} from "$app/stores";
    import {goto} from "$app/navigation";

    const dispatch = createEventDispatcher();
    let input;

    let studentID = "";

    let id = $page.url.searchParams.get('id');

    let showLookup = false;

    if (id) {
        studentID = id;
        submit();
    } else {
        showLookup = true;
    }

    async function submit() {

        try {
            let response = await fetchLocker(studentID);
            if (response.status === 404 && !id) {
                input.style.borderColor = "red";
                input.value = "";
                input.placeholder = "Locker not found";
            } else if (response.ok) {
                dispatch("message", {
                    data: await response.json(),
                });
            }
        } catch (err) {
            input.style.borderColor = "red";
            input.value = "";
            input.placeholder = "Internal system error";

            dispatch("message", {
                data: {
                    Locker: {
                        lockerNumber: "1015",
                        location: {
                            Floor: 1,
                            Level: "Top",
                            Building: 2000
                        },
                        status: null,
                        createdAt: "2025-08-09T16:59:55.000Z",
                        updatedAt: "2025-08-09T16:59:55.000Z"
                    }
                }
            });
        }
    }

    function handleKeyPress(event) {
        if (event.key === "Enter") {
            submit();
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
        font-family: "Montserrat", sans-serif;
        background-color: var(--background);
        display: flex;
        flex-direction: column;
        flex: 1;
    }

    .lookup {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        width: 100%;
        align-items: center;
        /*justify-content: center;*/
        row-gap: 30px;
        margin-top: 20vh;
    }

    .lookup-cont {
        display: flex;
        align-items: center;
        flex-direction: column;
        border-radius: 8px;
        /*border: 2px solid black;*/
        /*width: 416px;*/
        padding: 32px;
        color: green;

        /*background: linear-gradient(14deg, rgba(2,0,36,1) 0%, rgba(101,62,165,1) 100%);*/
        /*background: linear-gradient(14deg, #182435 0%, #577db2 100%);*/
        /* background-color:#131d2a; */
        background-color: #1b2c42;
    }

    .lookup-header {
        font-size: 24px;
        color: var(--text);
        margin-bottom: 20px;
    }

    .lookup-form {
        display: flex;
        justify-content: center;

        width: 352px;
        flex-direction: column;
        /*align-items: center;*/
        row-gap: 10px;
    }

    input[type="text"] {
        width: 100%;
        padding: 0px 8px 0px 8px;
        box-sizing: border-box;
        height: 35px;
        line-height: 35px;
        color: var(--text);
        border: 2px solid #005cb3;
        /* border: none; */
        background-color: #17171c;

        border-radius: 4px;
        transition-duration: 500ms;
        font-size: 14px;
    }

    input:focus {
        outline: none;
        border-color: #577db2;
        /*background-color: #eaeaea;*/
    }

    input:hover {
        border-color: #577db2;
        /*background-color: #eaeaea;*/
    }

    .submit {
        width: 100%;
        height: 35px;
        background-color: #0082ff;
        border: none;
        border-radius: 4px;
        font-weight: bold;
        margin-top: 10px;
        cursor: pointer;
        transition-duration: 150ms;
        color: var(--text);
    }

    .submit:hover {
        background-color: #577db2;
    }

    @media only screen and (max-width: 600px) {
        .lookup {
            row-gap: 30px;
        }

        .lookup-cont {
            width: 100vw;
            box-shadow: none;
            padding: 0;
            background: unset;
        }

        .lookup-form {
            width: 90vw;
        }

        input[type="text"] {
            width: 100%;
        }
    }
</style>

<div class="main">
    <div class="lookup">
        {#if showLookup}
            <div class="lookup-cont">
                <div class="lookup-header">Lookup Locker</div>

                <div class="lookup-form" on:keydown={handleKeyPress}>
                    <input
                            bind:this={input}
                            bind:value={studentID}
                            id="studentID"
                            name="studentID"
                            placeholder="Student ID"
                            required
                            type="text"
                    />

                    <button class="submit" on:click={submit}>Search</button>
                </div>
            </div>
        {/if}
    </div>
</div>
