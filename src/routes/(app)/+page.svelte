<script>
    import {blur} from 'svelte/transition';
    import { fly } from 'svelte/transition';
    import {onMount} from 'svelte';

    import HomepageTilt from "$lib/components/app/tilt/HomepageTilt.svelte";

    let visible = false;
    onMount(() => {
        visible = true;
    });
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

    .landing {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }


    .sub {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        height: 100%;
    }

    .sub1 {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: var(--text);
        /*width: 50%;*/
    }

    .info-cont {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        flex-direction: column;
    }

    .list-cont {
        justify-content: center;
        display: flex;

        width: 400px;
        border: 2px solid #577db2;
        border-radius: 100px;
        padding: 8px;
        box-sizing: content-box;
    }

    p {
        width: 350px;
        font-size: 16px;
        font-family: 'Montserrat', sans-serif;
        color: #d6d6d6;
        text-align: center;
        margin: 0;
    }

    h1{
        margin: 0;
    }

    h3 {
        margin-bottom: 6px;
        color: #acacb0;
        /*align-self: flex-start;*/
    }

    @media screen and (max-width: 600px) {
        .sub {
            display: flex;
            flex-direction: column;
            gap: 30px;
            align-items: center;
            justify-content: center;
            height: 100%;
        }
    }
</style>

<div class="main">
    <div class="sub">
        {#if visible}
            <div class="sub1">


                <div class="landing">
                    <h1 in:blur={{ delay: 50, duration: 300 }}>Welcome To CV Locker</h1>
                    <h3 in:blur={{ delay: 300, duration: 500 }}>Some info to get you started</h3>

                    <div class="info-cont">
                        <div class="list-cont" in:fly={{ delay: 700, duration: 350, x: -800, y: 0, opacity: 0.5 }}>
                            <p>To register for a locker at CV, you need a locker partner, except for single lockers on
                                the 3rd floor of the 1000 building.</p>
                        </div>

                        <div class="list-cont" in:fly={{ delay: 800, duration: 350, x: -800, y: 0, opacity: 0.5 }}>
                            <p>You and your partner are responsible for all items in the locker. CV is not liable for
                                lost or stolen items.</p>
                        </div>

                        <div class="list-cont" in:fly={{ delay: 900, duration: 350, x: -800, y: 0, opacity: 0.5 }}>
                            <p>Locks are available for purchase at the Student Store.</p>
                        </div>
                    </div>
                </div>

            </div>

            <div class="sub1" in:blur={{ delay: 250, duration: 300 }}>
                <HomepageTilt/>
            </div>
        {/if}
    </div>
</div>
