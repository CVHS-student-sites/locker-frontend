<div class="top">
    <div class="icon-cont">
        <a href="/">
            <div class="icon-stack">
                <div class="material-symbols-outlined" style="background-color: {pageId === 0 ? '#003566' : 'initial'}">home</div>
                <div class="stack-text">Home</div>
            </div>
        </a>

        <a href="/register">
            <div class="icon-stack">
                <div class="material-symbols-outlined" style="background-color: {pageId === 1 ? '#003566' : 'initial'}">person_add</div>
                <div class="stack-text">Register</div>
            </div>
        </a>

        <a href="/lookup">
            <div class="icon-stack">
                <div class="material-symbols-outlined" style="background-color: {pageId === 2 ? '#003566' : 'initial'}">search</div>
                <div class="stack-text">Lookup</div>
            </div>
        </a>

        <a href="/help">
            <div class="icon-stack">
                <div class="material-symbols-outlined" style="background-color: {pageId === 3 ? '#003566' : 'initial'}">help</div>
                <div class="stack-text">Help</div>
            </div>
        </a>
    </div>
</div>

<svelte:head>
    <link
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
            rel="stylesheet"
    />
</svelte:head>

<script>
    export let pageId;

    let comp1

</script>

<style>
    .logo-cont a {
        display: inherit;
    }

    a:link {
        text-decoration: none;
    }

    a:visited {
        text-decoration: none;
    }

    a:hover {
        text-decoration: none;
    }

    a:active {
        text-decoration: none;
    }

    :root {
        --text: #d6d6d6;
        --background: #101014;
        --primary: #0084ff;
        --secondary: #1b2c42;
        --accent: #577db2;
    }

    .icon-stack {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 4px;
        cursor: pointer;
    }

    /* .icon-stack:hover{
        background-color: #101014;
        border-radius: 6px;
    } */

    .stack-text {
        /* font-family: Mo; */
        font-size: 14px;
        color: var(--text);
    }

    .material-symbols-outlined {
        font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
        color: var(--text);
        user-select: none;
        cursor: pointer;
        width: 64px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 16px;

    }

    .icon-cont {
        width: 100vw;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        /*gap: 35px;*/
    }


    .top {
        font-family: "Montserrat", sans-serif;
        width: 100vw;
        display: flex;
        background-color: #101014;
        /* background-color: #1b2c42; */
        justify-content: space-between;
        flex-direction: row;
        height: 65px;
        /* align-items: center; */
        border-bottom: 2px solid #393947;
        /* padding-top: 15px; */
    }



    @media only screen and (min-width: 600px) {
        .top {
            display: none; /* Hide the entire top container */
        }
    }
</style>
