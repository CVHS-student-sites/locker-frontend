<script>

    import Topnav from "$lib/components/Topnav.svelte";
    import Lookup from "./views/lookup.svelte";
    import Show from "./views/show.svelte";
    import Botnav from "$lib/components/Botnav.svelte";
    import { fade } from 'svelte/transition';
    import { slide } from 'svelte/transition';
    import { quartOut } from 'svelte/easing';


    let selected = Lookup;
    let data;

    function handleMessage(event) {
        selected = Show;
        // alert(event.detail.studentId)
        data = event.detail.data;
    }
</script>

<svelte:head>
    <title>Lookup</title>

    <meta
            content="Find your locker at Crescenta Valley High School (CVHS) with our locker lookup tool. Easily locate your locker and get organized for the school year."
            name="description"
    />
    <meta
            content="Crescenta Valley High School, CVHS, locker lookup, locker search, school locker"
            name="keywords"
    />
    <meta content="cvapps.net" name="author"/>

    <link href="https://fonts.googleapis.com" rel="preconnect"/>
    <link crossorigin href="https://fonts.gstatic.com" rel="preconnect"/>
    <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap"
            rel="stylesheet"
    />
</svelte:head>

<div class="main" in:fade={{ delay: 200, duration: 700, easing: quartOut, axis: 'x' }} out:fade={{ duration: 200, easing: quartOut, axis: 'x' }}>
<!--    <Topnav/>-->
    <svelte:component
            data={data}
            on:message={handleMessage}
            this={selected}
    />
<!--    <Botnav pageId={2}/>-->
</div>

<style>
    .main {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100vw;
        flex: 1;
    }
</style>
