<script>

    import Topadmin from "$lib/components/admin/Topadmin.svelte";
    import Sidenav from "$lib/components/admin/Sidenav.svelte";
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
        flex: 1; /* Expand to fill remaining vertical space */
        margin: 20px 12vw; /* Adjust the margin as needed */
        overflow: hidden;
    }

    @media screen and (max-width: 1500px) {
        .center {
            margin: 20px 16px; /* Adjust the margin as needed */
        }
    }
</style>

<div class="layout-main">
    <Topadmin/>
    <div class="center">
        <Sidenav/>
        <slot/>
    </div>
</div>