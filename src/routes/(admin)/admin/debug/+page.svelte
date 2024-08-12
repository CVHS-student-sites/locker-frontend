<script>
    import {getDebugLogs} from "$lib/services/admin/mainApi.js";
    import {onMount} from 'svelte';
    import AnsiToHtml from 'ansi-to-html';

    let logHtml = '';

    let autoRefresh = false;

    onMount(async () => {
        await updateLogs();
    });

    let interval
    $: if (autoRefresh) {
        interval = setInterval(updateLogs, 1000);
    }

    $: if (!autoRefresh) {
        clearInterval(interval);
    }

    async function updateLogs() {
        let test = await getDebugLogs()
        const convert = new AnsiToHtml();
        logHtml = test.map(log => convert.toHtml(log)).join('')
        await scrollToBottom(element);
    }

    let element;

    const scrollToBottom = async (node) => {
        node.scroll({top: node.scrollHeight, behavior: 'smooth'});
    };
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

    .check-text {
        font-size: 12px;
        font-family: "Montserrat", sans-serif;
        color: #d6d6d6;
    }
</style>


<div class="main">
    <div class="top-menu">
        <label class="check-text"><input type="checkbox" bind:checked={autoRefresh}/>Auto Refresh Logs</label>
    </div>
    <div class="log-entry" bind:this={element}>
        {@html logHtml}
    </div>
</div>