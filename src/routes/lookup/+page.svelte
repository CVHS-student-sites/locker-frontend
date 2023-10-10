<script>
    import Topnav from "$lib/components/Topnav.svelte";

    import Lookup from "./views/lookup.svelte";
    import Show from "./views/show.svelte";
    import { fade } from "svelte/transition";

    let selected = Lookup;
    let studentId;

    function handleMessage(event) {
        selected = Show;
        // alert(event.detail.studentId)
        studentId = event.detail.studentId;
    }
</script>

<svelte:head>
    <title>Lookup</title>

    <meta
        name="description"
        content="Find your locker at Crescenta Valley High School (CVHS) with our locker lookup tool. Easily locate your locker and get organized for the school year."
    />
    <meta
        name="keywords"
        content="Crescenta Valley High School, CVHS, locker lookup, locker search, school locker"
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
    <svelte:component
        this={selected}
        on:message={handleMessage}
        id={studentId}
    />
</div>

<style>
    .main {
        font-family: "Montserrat", sans-serif;
        background-color: #101014;
        display: flex;
        flex-direction: column;
        height: 100vh;
        width: 100vw;
        /* flex: 0; */
    }
</style>
