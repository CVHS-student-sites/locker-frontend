<div class="top">
    <div class="logo-cont">
        <a href="/"><img alt="cv logo" class="logo" loading="eager" rel="preload" src="/CVHS-logo.png"/></a>
        <div class="top-text">CVHS Locker System</div>
    </div>

    <div class="icon-cont">
        <a href="/">
            <div class="icon-stack">
                <div class="material-symbols-outlined">home</div>
                <div class="stack-text">Home</div>
            </div>
        </a>

        <a href="/register">
            <div class="icon-stack">
                <div class="material-symbols-outlined">person_add</div>
                <div class="stack-text">Register</div>
            </div>
        </a>

        <a href="/lookup">
            <div class="icon-stack">
                <div class="material-symbols-outlined">search</div>
                <div class="stack-text">Lookup</div>
            </div>
        </a>

        <a href="/help">
            <div class="icon-stack">
                <div class="material-symbols-outlined">help</div>
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
    }

    .icon-cont {
        margin-right: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 35px;
    }

    .logo-cont {
        margin-left: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 15px;
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

    .logo {
        height: 60px;
        /*width: 60px;*/
        cursor: pointer;
    }

    .top-text {
        font-size: 18px;
        color: var(--text);
    }

    @media only screen and (max-width: 600px) {
        .logo {
            height: 40px;
        }

        .top-text {
            font-size: 14px;
        }

        .top {
            height: 40px;
        }
    }
</style>
