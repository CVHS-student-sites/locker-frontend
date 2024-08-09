<script>
    import BPLogo from "$lib/components/global/BPLogo.svelte";
</script>

<svelte:head>
    <title>CVHS Locker</title>

    <meta
            content="Manage your locker at Crescenta Valley High School (CVHS) with our locker system tool. Easily locate and register your locker and get organized for the school year."
            name="description"
    />
    <meta
            content="Crescenta Valley High School, CVHS, locker app, locker system, locker site, school locker, locker manager"
            name="keywords"
    />
    <meta content="cvapps.net" name="author"/>
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
        height: 100%;
        width: 100vw;
        flex: 1;
    }

    .list {
        padding: 2vw;
    }

    .big-logo {
        display: block;
        max-height: 20vh;
        margin-left: auto;
        margin-right: auto;
    }

    p, a {
        font-size: 20px;
        font-family: 'Montserrat', sans-serif;
        color: #d6d6d6;
        text-align: center;
        padding: 1vh;
    }

    .sub {

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        height: 100%;

    }

</style>

<div class="main">
    <div class="sub">
        <img alt="CVHS falcon logo" class="big-logo" src="/CVHS-logo.png">

        <p>Please contact the AP office for help with locker registration: <a
                href="mailto:miguelgonzalez@gusd.net" target="_blank">Miguel Gonzalez</a></p>

        <BPLogo/>
    </div>
</div>
