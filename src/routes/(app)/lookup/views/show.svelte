<script>


    export let data;

    $: test = data;

    // import Topnav from "$lib/components/Topnav.svelte";
    import {goto} from '$app/navigation';

    let username = "";
    let password = "";

    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            // Enter key was pressed, do something
            submit();
        }
    }


    import {createEventDispatcher} from "svelte";
    import {fade} from 'svelte/transition';

    const dispatch = createEventDispatcher();
    console.log(data)

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


    .login {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        width: 100%;
        align-items: center;
        /*justify-content: center;*/
        row-gap: 30px;
        margin-top: 20vh;
    }

    .login-cont {
        display: flex;
        align-items: center;
        flex-direction: column;
        border-radius: 8px;

        width: 416px;
        padding: 32px;

        background-color: #1b2c42;
    }

    .item {
        width: 100%;
        /*background-color: green;*/
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: left;
        gap: 15px;
    }

    .data-cont {
        height: 40px;
        width: 80px;
        background-color: black;
        border-radius: 10px;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 22px;
    }

    .text {
        color: #d6d6d6;
        font-size: 24px;
    }

    .expand{
        display: flex;
        gap: 10px;
        flex-direction: column;
    }

    @media only screen and (max-width: 600px) {

        .login {
            row-gap: 30px;
        }


        .login-cont {
            width: 90vw;
            padding: 0;
            background: unset;
        }

    }

</style>
<div class="main">
    <div class="login">
        <div class="login-cont">
            <div class="expand">
                <div class="item">
                    <div class="data-cont">5000</div>
                    <div class="text">Building</div>
                </div>
                <div class="item">
                    <div class="data-cont">3</div>
                    <div class="text">Floor</div>
                </div>
                <div class="item">
                    <div class="data-cont">3</div>
                    <div class="text">Level</div>
                </div>
            </div>


        </div>
    </div>
</div>