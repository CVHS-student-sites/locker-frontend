<script>
    import Topadmin from "$lib/components/admin/Topadmin.svelte";
    import Sidenav from "$lib/components/admin/Sidenav.svelte";

    import {onMount} from "svelte";

    let isSmallScreen = false;
    onMount(() => {
        isSmallScreen = window.innerWidth < 600;
        const updateScreenSize = () => {
            isSmallScreen = window.innerWidth < 600;
        };
        window.addEventListener("resize", updateScreenSize);
        return () => {
            window.removeEventListener("resize", updateScreenSize);
        };
    });
</script>

<style>
    .layout-main {
        font-family: "Montserrat", sans-serif;
        background-color: var(--background);
        display: flex;
        flex-direction: column;
        height: 100vh;
        position: absolute;
        width: 100vw;
    }

    .center {
        gap: 16px;
        display: flex;
        flex: 1;
        margin: 20px 12vw;
        overflow: hidden;
    }

    .no-phones {
        font-family: "Montserrat", sans-serif;
        background-color: var(--background);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        position: absolute;
        width: 100vw;
        text-align: center;
        color: #d6d6d6;
    }

    .sus-gif {
        width: 85%;
    }

    @media screen and (max-width: 1500px) {
        .center {
            margin: 20px 16px; /* Adjust the margin as needed */
        }
    }
</style>

{#if !isSmallScreen}
    <div class="layout-main">
        <Topadmin/>
        <div class="center">
            <Sidenav/>
            <slot/>
        </div>
    </div>
{:else }
    <div class="no-phones">
        <h1>No phones on admin pages</h1>
        <img class="sus-gif" src="/sus.gif" alt="highly sus gif">
        <p>You think I got time to make that work?</p>
    </div>
{/if}