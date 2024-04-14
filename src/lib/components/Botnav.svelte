<script>
    import {page} from "$app/stores";
    import {fade} from 'svelte/transition';


    import {tweened} from 'svelte/motion';
    import {cubicOut} from 'svelte/easing';
    import {onMount} from 'svelte';

    let selectPage;


    // jank but ok
    $: if ($page.url.pathname === '/') selectPage = 0;
    $: if ($page.url.pathname === '/register') selectPage = 1;
    $: if ($page.url.pathname === '/lookup') selectPage = 2;
    $: if ($page.url.pathname === '/help') selectPage = 3;

    let start
    let currentTargetIndex = 0; // Initialize with the first icon
    let beforecenter;
    let icon1;
    let tests = true;
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
        icons.forEach((icon) => icon.classList.remove('botnav-active'));
        icon1 = targetIcon;
    }

    $: if ($test === Math.round(beforecenter)) {
        tests = true;
        icon1.classList.add('botnav-active');
        const icons = document.querySelectorAll('.icond');
        const prevIndex = (currentTargetIndex - 1 + icons.length) % icons.length;
        const prevTargetIcon = icons[prevIndex];
        prevTargetIcon.classList.remove('my-class');
    } else {
        tests = false;
    }

    onMount(async () => {
        move(selectPage)
        const tests1 = document.querySelector('.test');
        const icons2 = document.querySelectorAll('.icond');
        const targetIcon2 = icons2[selectPage];

        targetIcon2.classList.add('botnav-active');
        tests1.classList.add('visible');
    });

</script>

<style>

    :global(.botnav-active) {
        /* Style for the active icon with the box */
        background-color: #003566;
        border-radius: 20px;
        width: 40px;
        height: 40px;
        /*transition: background-color 0.5s ease;*/
    }

    .icond a {
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

    .icond {
        z-index: 9998;
        position: relative;
    }

    .icon-cont {
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        -webkit-tap-highlight-color: transparent;
        gap: 4px;
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
        z-index: 9998;
    }

    .visible {
        display: none;
    }

    .text-cont {
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
            <div class="test visible" class:visible={tests} style:left={$test + 'px'}></div>

            <a href="/">
                <div class="material-symbols-outlined icond" in:fade={{ duration: 300 }} on:click={() => move(0)}>home
                </div>
            </a>
            <a href="/register">
                <div class="material-symbols-outlined icond" in:fade={{ duration: 300 }} on:click={() => move(1)}>
                    person_add
                </div>
            </a>
            <a href="/lookup">
                <div class="material-symbols-outlined icond" in:fade={{ duration: 300 }} on:click={() => move(2)}>
                    search
                </div>
            </a>
            <a href="/help">
                <div class="material-symbols-outlined icond" in:fade={{ duration: 300 }} on:click={() => move(3)}>help
                </div>
            </a>
        </div>

        <div class="text-cont">
            <div class="stack-text">Home</div>
            <div class="stack-text">Register</div>
            <div class="stack-text">Lookup</div>
            <div class="stack-text">Help</div>
        </div>
    </div>
</div>



