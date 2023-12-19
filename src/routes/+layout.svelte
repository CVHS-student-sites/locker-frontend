<script>

    import Topnav from "$lib/components/Topnav.svelte";
    import Botnav from "$lib/components/Botnav.svelte";
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

    .flex-cont {
        flex: 1;
    }
</style>


<div class="layout-main">
    <Topnav/>
    <div class="flex-cont">
        <slot/>
    </div>
    <Botnav/>
</div>