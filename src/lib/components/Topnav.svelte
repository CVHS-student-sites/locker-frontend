<div class="top">
    <a href="/"><img alt="cv logo" class="logo" src="/CVHS-logo.png" /></a>
    <div class="top-text">CVHS Locker System</div>

    <div class="icon-stack">
        <div class="material-symbols-outlined">search</div>
        <div class="stack-text">Loookup</div>
    </div>

    <div class="icon-stack">
        <div class="material-symbols-outlined">home</div>
        <div class="stack-text">Home</div>
    </div>
    
</div>

<svelte:head>
    <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
    />
</svelte:head>

<style>
    .icon-stack{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    .stack-text{
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

    .top {
        width: 100vw;
        display: flex;
        background-color: #1b2c42;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        gap: 15px;
        height: 60px;
        
    }

    .logo {
        height: 60px;
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
