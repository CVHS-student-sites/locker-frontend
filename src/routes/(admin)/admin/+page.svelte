
<svelte:head>
    <title>Login</title>
    <link href="https://fonts.googleapis.com" rel="preconnect">
    <link crossorigin href="https://fonts.gstatic.com" rel="preconnect">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet">
    <link
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
            rel="stylesheet"
    />
</svelte:head>
<style>
    :root {
        --text: #d6d6d6;
        --background: #101014;
        --primary: #0084ff;
        --secondary: #1b2c42;
        --accent: #577db2;
    }

    .material-symbols-outlined {
        font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
        color: #577db2;
        user-select: none;
        cursor: pointer;
        width: 24px;

    }


    .main {
        display: flex;
        flex-direction: column;
        min-height: 100vh; /* Ensure the container takes at least the full height of the viewport */
        background-color: var(--background);
    }

    .top {
        display: flex;
        height: 60px;
        padding: 0 12vw;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        z-index: 9999;
        background-color: var(--background);
        align-items: center;
    }

    .logo-cont {
        display: flex;
        align-items: center;
        gap: 15px;
        /*width: 100%;*/
        height: 100%;
        padding: 5px;
        box-sizing: border-box;
    }

    .top-logo {
        height: 100%;
    }

    .logo-text {
        font-size: 16px;
        font-family: 'Montserrat', sans-serif;
        color: #d6d6d6;
    }

    .center {
        gap: 16px;
        display: flex;
        flex: 1; /* Expand to fill remaining vertical space */
        margin: 20px 12vw; /* Adjust the margin as needed */
    }

    .sidebar {
        display: flex;
        flex-direction: column;
        align-items: center;

        width: 20%;
        background-color: #18181b;
        border-radius: 10px;
        padding: 16px;
        box-sizing: border-box;
        gap: 5px;
    }

    .active-button{
        background-color: #003566;
    }

    .side-element-1{
        width: 100%;
        height: 60px;
        padding: 16px;
        box-sizing: border-box;
        border-radius: 5px;
        transition: background-color 0.1s ease;
        margin-bottom: 32px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 16px;
    }

    .side-element-1:hover{
        background-color: #404040;
        cursor: pointer;
    }

    .user-text{
        font-size: 16px;
        font-family: 'Montserrat', sans-serif;
        color: #d6d6d6;
    }


    .side-element-2{
        width: 100%;
        height: 50px;
        padding: 16px;
        box-sizing: border-box;
        border-radius: 50px;
        transition: background-color 0.1s ease;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 16px;
    }

    .side-element-2:hover{
        background-color: #404040;
        cursor: pointer;
    }

    .button-text{
        font-size: 16px;
        font-family: 'Montserrat', sans-serif;
        color: #d6d6d6;
    }


    .grid-cont {
        flex: 1; /* Expand to fill remaining horizontal space */
        display: grid;
        grid-gap: 10px;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: 2fr 3fr 2fr; /* Adjust the fr values as needed */
        box-sizing: border-box;
    }

    .grid-element-1 {
        width: 100%;
        height: 100%;
        background-color: #00284d;
        /*background-color: #131821;*/
        border-radius: 10px;
        padding: 8px 12px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        text-align: center;
    }

    .large {
        grid-column: span 3;
        background-color: #18181b;
    }

    .medium{
        grid-column: span 2;
        background-color: #18181b;
    }
</style>


<div class="main">

    <div class="top">
        <div class="logo-cont">
            <img alt="CVHS falcon logo" class="top-logo" src="/CVHS-logo.png">
            <div class="logo-text">CVHS Locker System</div>
        </div>
    </div>

    <div class="center">
        <div class="sidebar">
            <div class="side-element-1">
                <div class="material-symbols-outlined">account_circle</div>
                <div class="user-text">Birdpump</div>
            </div>

            <div class="side-element-2 active-button">
                <div class="material-symbols-outlined">data_usage</div>
                <div class="button-text">Overview</div>
            </div>
            <div class="side-element-2">
                <div class="material-symbols-outlined">list</div>
                <div class="button-text">Edit</div>
            </div>

            <div class="side-element-2">
                <div class="material-symbols-outlined">tune</div>
                <div class="button-text">Management</div>
            </div>

            <div class="side-element-2">
                <div class="material-symbols-outlined">settings</div>
                <div class="button-text">Settings</div>
            </div>
        </div>

        <div class="grid-cont">
            <div class="grid-element-1">
                <div class="button-text">Total users</div>
                <div class="button-text">2,563</div>
                <div class="button-text">+15%</div>
            </div>
            <div class="grid-element-1">
                <div class="button-text">Total lockers</div>
                <div class="button-text">1,253</div>
                <div class="button-text">+8%</div>
            </div>
            <div class="grid-element-1">
                <div class="button-text">last 30 days</div>
                <div class="button-text">+27 lockers</div>
                <div class="button-text">+35%</div>
            </div>
            <div class="grid-element-1">
                <div class="button-text">Last 30 days</div>
                <div class="button-text">+20 users</div>
                <div class="button-text">+18%</div>
            </div>

            <div class="grid-element-1 large">
                <div class="button-text">graph of some sort</div>
            </div>
            <div class="grid-element-1">
                <div class="button-text">list names of new users</div>
            </div>

            <div class="grid-element-1 medium">
                <div class="button-text">buttons to control something like freeze registration</div>
            </div>
            <div class="grid-element-1 medium">
                <div class="button-text">more buttons to do stuff, idk lol</div>
            </div>
        </div>
    </div>
</div>
