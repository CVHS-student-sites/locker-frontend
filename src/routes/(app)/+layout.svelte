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
    <Botnav/>
</div>
