<script>

    import Topnav from "$lib/components/Topnav.svelte";
    import Botnav from "$lib/components/Botnav.svelte";
</script>

<style>
    .layout-main{
        font-family: "Montserrat", sans-serif;
        background-color: var(--background);
        display: flex;
        flex-direction: column;
        height: 100vh;
        position: absolute;
        width: 100vw;
    }
</style>

<div class="layout-main">
<Topnav/>
<slot />
<Botnav pageId={2}/>
</div>