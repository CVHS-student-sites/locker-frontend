<script>
    import {fade} from 'svelte/transition';
    import {quartOut} from 'svelte/easing';

    import {pageView} from "./store.js";

    import View1 from "./views/View1.svelte";
    import View2 from "./views/View2.svelte";
    import Status from './views/Status.svelte';
    import Final from './views/Final.svelte';
    import Selection from './views/Selection.svelte';


    let data;

    let selected;

    $: if ($pageView === 0) selected = Status;
    $: if ($pageView === 1) selected = Selection;
    $: if ($pageView === 2) selected = View1;
    $: if ($pageView === 3) selected = View2;
    $: if ($pageView === 4) selected = Final;


</script>

<svelte:head>
    <title>Register</title>

    <meta content="Register for a locker at Crescenta Valley High School (CVHS) for the upcoming school year. Secure your locker space and stay organized."
          name="description">
    <meta content="Crescenta Valley High School, CVHS, locker registration, school locker, locker allocation, locker assignment"
          name="keywords">
    <meta content="cvapps.net" name="author">
</svelte:head>

<style>
    .main {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100vw;
        flex: 1;
    }
</style>

<div class="main" in:fade={{ delay: 0, duration: 700, easing: quartOut}}>
    <svelte:component
            data={data}
            this={selected}
    />
</div>