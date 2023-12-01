<script>
    export let pageId;

    import { fade } from 'svelte/transition';


    import {tweened} from 'svelte/motion';
    import {cubicOut} from 'svelte/easing';
    import {onMount} from 'svelte';

    let start
    let currentTargetIndex = 0; // Initialize with the first icon
    let beforecenter;
    let icon1;
    let tests;
    const test = tweened(start, {
        duration: 300,
        easing: cubicOut,
    });

    function move(number) {
        currentTargetIndex = number;
        const icons = document.querySelectorAll('.icond');
        const targetIcon = icons[currentTargetIndex];
        const targetIconRect = targetIcon.getBoundingClientRect();
        const contRect = document.querySelector('.icon-background').getBoundingClientRect();
        const centerPosition = targetIconRect.left - contRect.left + targetIconRect.width / 2;
        beforecenter = Math.round(centerPosition - 32);
        test.set(Math.round(centerPosition - 32));
        icons.forEach((icon) => icon.classList.remove('active'));
        icon1 = targetIcon;
    }

    $: if ($test === Math.round(beforecenter)) {
        tests = true;
        console.log('done');
        icon1.classList.add('active');
        const icons = document.querySelectorAll('.icond');
        const prevIndex = (currentTargetIndex - 1 + icons.length) % icons.length;
        const prevTargetIcon = icons[prevIndex];
        prevTargetIcon.classList.remove('my-class');
    } else {
        tests = false;
    }
    onMount(async () => {
        move(0)
    });



</script>

<svelte:head>
    <link
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
            rel="stylesheet"
    />
</svelte:head>

<style>

    :global(.my-class),
    :global(.active) {
        /* Style for the active icon with the box */
        background-color: #003566;
        border-radius: 20px;
        width: 40px;
        height: 40px;
        /*transition: background-color 0.5s ease;*/
    }

    .logo-cont a {
        display: inherit;
        -webkit-tap-highlight-color: transparent;
        user-select: none;
    }

    a:link {
        text-decoration: none;
        user-select: none;
    }

    a:visited {
        text-decoration: none;
        user-select: none;
    }

    a:hover {
        text-decoration: none;
        user-select: none;
    }

    a:active {
        text-decoration: none;
        user-select: none;
    }

    :root {
        --text: #d6d6d6;
        --background: #101014;
        --primary: #0084ff;
        --secondary: #1b2c42;
        --accent: #577db2;
    }

    .icon-background {
        position: relative;
        display: flex;
        justify-content: space-around;
        height: 32px;
        width: 100vw;
    }

    .icon-stack {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 4px;
        cursor: pointer;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
    }

    /* .icon-stack:hover{
        background-color: #101014;
        border-radius: 6px;
    } */

    .stack-text {
        /* font-family: Mo; */
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        color: var(--text);
        user-select: none;
        width: 64px;
        -webkit-tap-highlight-color: transparent;
    }

    .material-symbols-outlined {
        font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
        color: var(--text);
        user-select: none;
        cursor: pointer;
        width: 64px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 16px;
        -webkit-tap-highlight-color: transparent;


    }

    .icond{
        z-index: 9999;
    }

    /*.active {*/
    /*    background-color: #003566;*/
    /*    transition: background-color 1s;*/
    /*}*/

    .icon-cont {
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        -webkit-tap-highlight-color: transparent;
        /*gap: 35px;*/
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

    .test {
        position: absolute;
        top: 0;
        left: 0;
        width: 64px;
        border-radius: 50px;
        height: 32px;
        background-color: #003566;
    }

    .visible {
        display: none;
    }

    .text-cont{
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-around;
    }


    @media only screen and (min-width: 600px) {
        .top {
            display: none; /* Hide the entire top container */
        }
    }
</style>

<div class="top">
    <div class="icon-cont">
        <div class="icon-background">
            <div class="test" class:visible={tests} style:left={$test + 'px'}></div>
            <div in:fade={{ duration: 300 }} class="material-symbols-outlined icond" on:click={() => move(0)}>home</div>
            <div in:fade={{ duration: 300 }} class="material-symbols-outlined icond" on:click={() => move(1)}>person_add</div>
            <div in:fade={{ duration: 300 }} class="material-symbols-outlined icond" on:click={() => move(2)}>search</div>
            <div in:fade={{ duration: 300 }} class="material-symbols-outlined icond" on:click={() => move(3)}>help</div>
        </div>

        <div class="text-cont">
            <div class="stack-text">Home</div>
            <div class="stack-text">Register</div>
            <div class="stack-text">Lookup</div>
            <div class="stack-text">Help</div>
        </div>
    </div>
</div>



