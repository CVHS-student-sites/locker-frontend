<script>
    import Topnav from "$lib/components/Topnav.svelte";

</script>

<svelte:head>
    <title>CVHS Locker</title>

    <meta
        name="description"
        content="Manage your locker at Crescenta Valley High School (CVHS) with our locker system tool. Easily locate and register your locker and get organized for the school year."
    />
    <meta
        name="keywords"
        content="Crescenta Valley High School, CVHS, locker app, locker system, locker site, school locker, locker manager"
    />
    <meta name="author" content="cvapps.net" />

    <link href="https://fonts.googleapis.com" rel="preconnect" />
    <link crossorigin href="https://fonts.gstatic.com" rel="preconnect" />
    <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap"
        rel="stylesheet"
    />
</svelte:head>

<div class="main">
    <Topnav />

</div>

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
        height: 100vh;
        width: 100vw;
    }
</style>
