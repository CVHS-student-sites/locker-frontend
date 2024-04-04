<script>
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    

    import { DoubleBounce } from 'svelte-loading-spinners';

    let message = 'Verifying';
    let showCheck = false;
    let messageDiv;
    let visible = true;

    function test(){
        grecaptcha.ready(function() {
          grecaptcha.execute('6LdvDa4pAAAAAAT3LQR-kngSzbbpWbfpRwAdxcVM', {action: 'submit'}).then(function(token) {
              // Add your logic to submit to your backend server here.
            return token;
          });
        });
    }

    async function verify(token){
        fetch(`https://locker-api.cvapps.net/public/verify-student/${token}`)
            .then(response => {
                if (response.ok) {
                    console.log('Student verified successfully');
                    message = 'Done';
                    visible = false;
                    showCheck = true;
                } else {
                    // If the response status is not OK, handle the error (e.g., display an error message)
                    throw new Error('Failed to verify student');
                }
            })
            .catch(error => {
                // If there's an error in the fetch request itself (e.g., network error), handle it here
                console.error('Error:', error);
                message = 'Internal system error';
            });
    }

    onMount(() => {
        // message = 'Verifying'
        const param1Value = $page.url.searchParams.get('token');
        verify(param1Value);
        // test();
    });
</script>

<svelte:head>
    <script src="https://www.google.com/recaptcha/api.js?render=6LdvDa4pAAAAAAT3LQR-kngSzbbpWbfpRwAdxcVM"></script>
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

    .verify-cont{
        width: 100vw;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .header{
        color: var(--text);
    }


    .material-symbols-outlined {
        color: green;
        font-size: 100px;
        font-variation-settings:
            'FILL' 0,
            'wght' 400,
            'GRAD' 200,
            'opsz' 48
    }

    .status-cont{
        width: 100px;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>

<div class="main">
    <div class="verify-cont" bind:this={messageDiv}>
        <h1 class="header">{message}</h1>   
            <div class="status-cont">
                <div class="material-symbols-outlined" style="display: {showCheck ? '' : 'none'};">check_circle</div> 
                {#if visible}
                    <DoubleBounce size="85" color="#0084ff" unit="px" duration="1s" />
                {/if}
            </div> 
    </div>
</div>