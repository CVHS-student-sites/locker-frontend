<script>
    import {page} from '$app/stores';
    import {onMount} from 'svelte';


    import {DoubleBounce} from 'svelte-loading-spinners';

    let message = 'Verifying';
    let showCheck = false;
    let showError = false;
    let messageDiv;
    let visible = true;

    async function verify(token) {
        fetch(`https://locker-api.cvapps.net/public/verify-student/${token}`)
            .then(response => {
                if (response.ok) {
                    console.log('Student verified successfully');
                    message = 'Done';
                    visible = false;
                    showCheck = true;
                } else {
                    visible = false;
                    showError = true;
                    let message = response.json();

                    throw new Error(message.error);
                }
            })
            .catch(error => {
                message = error.message;
            });
    }

    onMount(() => {
        const param1Value = $page.url.searchParams.get('token');
        verify(param1Value);
    });
</script>

<svelte:head>
    <title>Locker Verify</title>
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
        font-family: "Montserrat", sans-serif;
        background-color: var(--background);
        display: flex;
        flex-direction: column;
        height: 100vh;
        width: 100vw;
    }

    .verify-cont {
        width: 100vw;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .header {
        color: var(--text);
    }


    .material-symbols-outlined {
        color: green;
        font-size: 100px;
        font-variation-settings: 'FILL' 0,
        'wght' 400,
        'GRAD' 200,
        'opsz' 48
    }

    .status-cont {
        width: 100px;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>

<div class="main">
    <div bind:this={messageDiv} class="verify-cont">
        <h1 class="header">{message}</h1>
        <div class="status-cont">
            <div class="material-symbols-outlined" style="display: {showCheck ? '' : 'none'}; color: green;">
                check_circle
            </div>
            <div class="material-symbols-outlined" style="display: {showError ? '' : 'none'}; color: red;">error</div>
            {#if visible}
                <DoubleBounce size="85" color="#0084ff" unit="px" duration="1s"/>
            {/if}
        </div>
    </div>
</div>