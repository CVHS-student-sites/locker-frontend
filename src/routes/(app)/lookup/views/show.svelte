<script>
    import { onMount } from 'svelte';
    import { confetti } from '@neoconfetti/svelte'
    import { tick } from 'svelte'
    import {page} from "$app/stores";

    import {fade} from 'svelte/transition';
    import {quartOut} from 'svelte/easing';

    let isVisible = false;
    export let data;


    onMount(async () => {
        if($page.url.searchParams.get('id')){
            isVisible = false;
            await tick();
            isVisible = true;
        }
    });

</script>

<style>
    :root {
        --text: #d6d6d6;
        --background: #101014;
        --primary: #0084ff;
        --secondary: #1b2c42;
        --accent: #577db2;
    }


    .main {
        font-family: 'Montserrat', sans-serif;
        background-color: var(--background);
        display: flex;
        flex-direction: column;
        flex: 1;
    }


    .lookup {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        width: 100%;
        align-items: center;
        /*justify-content: center;*/
        margin-top: 20vh;
    }

    .lookup-cont {
        display: flex;
        align-items: center;
        flex-direction: column;
        border-radius: 8px;

        width: 352px;
        padding: 32px;

        background-color: #1b2c42;
    }

    .lookup-header {
        font-size: 24px;
        color: var(--text);
        margin-bottom: 20px;
    }

    .item {
        width: 100%;
        /*background-color: green;*/
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: left;
        gap: 15px;
    }

    .data-cont {
        height: 40px;
        width: 90px;
        background-color: #17171c;
        border-radius: 10px;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        border: 2px solid #005cb3;
    }

    .text {
        color: #d6d6d6;
        font-size: 24px;
    }

    .expand {
        display: flex;
        gap: 10px;
        flex-direction: column;
    }

    @media only screen and (max-width: 600px) {

        .lookup {
            row-gap: 30px;
        }

        .lookup-cont {
            width: 90vw;
            padding: 0;
            background: unset;
        }
    }

</style>


<div class="main">
    <div class="lookup">
        {#if isVisible}
            <div>
                <div use:confetti={{ particleCount: 100, force: 0.4, particleSize: 6, duration: 3500, stageWidth: 800, colors: ['#E06C75', '#E5C07B', '#98C379', '#56B6C2', '#61AFEF', '#C678DD']}} />
            </div>
        {/if}

        <div class="lookup-cont" in:fade={{ delay: 0, duration: 700, easing: quartOut}}>
            <div class="lookup-header">Your locker</div>
            <div class="expand">
                <div class="item">
                    <div class="data-cont">{data.Locker.lockerNumber}</div>
                    <div class="text">Locker Number</div>
                </div>
                <div class="item">
                    <div class="data-cont">{data.Locker.location.Level}</div>
                    <div class="text">Position</div>
                </div>
                <div class="item">
                    <div class="data-cont">{data.Locker.location.Building}</div>
                    <div class="text">Building</div>
                </div>
                <div class="item">
                    <div class="data-cont">{data.Locker.location.Floor}</div>
                    <div class="text">Floor</div>
                </div>
            </div>
        </div>


    </div>
</div>