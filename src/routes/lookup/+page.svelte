<script>

import Lookup from "./components/lookup.svelte";
import Show from "./components/show.svelte";
import { fade } from 'svelte/transition';

let selected = Lookup;
let studentId

function handleMessage(event) {
        selected = Show;
        // alert(event.detail.studentId)
        studentId = event.detail.studentId;
    }

</script>

<svelte:head>
    <link href="https://fonts.googleapis.com" rel="preconnect">
    <link crossorigin href="https://fonts.gstatic.com" rel="preconnect">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet">
</svelte:head>

<style>

    .main {
        font-family: 'Montserrat', sans-serif;
        background-color: #313338;
        display: flex;
        flex-direction: column;
        height: 100vh;
        width: 100vw;
    }

  

</style>
<div class="main">
    <svelte:component this={selected} on:message={handleMessage} id={studentId}></svelte:component>
</div>
