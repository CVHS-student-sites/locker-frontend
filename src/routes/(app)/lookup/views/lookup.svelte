<script>
    import {createEventDispatcher} from "svelte";
    import {fetchLocker} from "$lib/services/app/mainApi.js";

    const dispatch = createEventDispatcher();
    let input;

    let studentID = "";
    async function submit() {

        let response = await fetchLocker(studentID);
        if (response.status === 404) {
            // Handle 404 status
            // alert('user not found.');
            input.style.borderColor = "red";
            input.value = '';
            input.placeholder = 'user not found';
        } else if (response.ok) {
            console.log()
            dispatch("message", {
                data: await response.json(),
            });
        } else {
            // Handle other error statuses
            input.style.borderColor = "red";
            input.value = '';
            input.placeholder = 'system error';
        }
    }




    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            submit();
        }
    }


</script>

<svelte:head>
    <link href="https://fonts.googleapis.com" rel="preconnect">
    <link crossorigin href="https://fonts.gstatic.com" rel="preconnect">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet">
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
        font-family: 'Montserrat', sans-serif;
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


    input[type=text]{
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

        input[type=text] {
            width: 100%;

        }
    }

</style>
<div class="main">

    <div class="lookup">

        <div class="lookup-cont">
            <div class="lookup-header">Lookup Locker</div>

            <div class="lookup-form" on:keydown={handleKeyPress}>
                <!--                <label for="username">Student ID Number</label>-->
                <input bind:this={input} bind:value={studentID} id="studentID" name="studentID"
                       placeholder="Student ID" required type="text">

                <button class="submit" on:click={submit}>Search</button>
            </div>

        </div>

    </div>
</div>
