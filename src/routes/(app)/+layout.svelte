<script>

    import Topnav from "$lib/components/Topnav.svelte";
    import Botnav from "$lib/components/Botnav.svelte";
</script>

<style>
    /* todo fix weird layout shift on google when keyboard deployed */
    .layout-main {
        font-family: "Montserrat", sans-serif;
        background-color: var(--background);
        display: flex;
        flex-direction: column;
        height: 100%;
        position: absolute;
        width: 100vw;
    }

    .credits{
        position: absolute;
        bottom: 0;
        color: rgba(214, 214, 214, 0.14);
        font-family: "Montserrat", sans-serif;
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
    }

    :root {
        --text: #d6d6d6;
        --background: #101014;
        --primary: #0084ff;
        --secondary: #1b2c42;
        --accent: #577db2;
    }
</style>


<div class="layout-main">
    <Topnav/>
    <slot/>
<!--    <div class="credits">Developed by Marc Hyeler</div>-->
    <Botnav/>
</div>
