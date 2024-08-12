<script>
    import {getDebugLogs} from "$lib/services/admin/mainApi.js";
    import {onMount} from 'svelte';
    import AnsiToHtml from 'ansi-to-html';

    let logHtml = '';

    onMount(async () => {
        let test = await getDebugLogs()

        const convert = new AnsiToHtml();

        logHtml = test.map(log => convert.toHtml(log)).join('')
    });
</script>
<svelte:head>
    <title>Locker - Debug</title>
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
        background-color: var(--background);
        flex: 1;
    }

    .log-entry {
        white-space: pre-wrap;
        font-size: 12px;
        font-family: "Montserrat", sans-serif;
        color: #d6d6d6;
        height: 100%;
        overflow-y: scroll;
    }
</style>


<div class="main">
    <div class="log-entry">
        {@html logHtml}
    </div>
</div>