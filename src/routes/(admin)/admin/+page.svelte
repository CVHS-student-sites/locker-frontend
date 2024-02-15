
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

    .main {
        display: flex;
        flex-direction: column;
        background-color: var(--background);
        flex: 1;
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
        <div class="grid-cont">
            <div class="grid-element-1">
                <div class="button-text">Total users</div>
                <div class="button-text">2,563</div>
                <div class="button-text">+15%</div>
            </div>
            <div class="grid-element-1">
                <div class="button-text">Total lockers</div>
                <div class="button-text">1,253</div>
                <div class="button-text">80% capacity</div>
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
                <div class="button-text">locker stats like grades enabled</div>
            </div>
            <div class="grid-element-1 medium">
                <div class="button-text">system stats like uptime, ect</div>
            </div>
        </div>
</div>
