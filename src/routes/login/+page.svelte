<script>
    // import Topnav from "$lib/components/Topnav.svelte";
    import {goto} from '$app/navigation';

    let username = "";
    let password = "";

    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            // Enter key was pressed, do something
            login();
        }
    }


    async function login() {
        const response = await fetch('https://locker-api.cvapps.net/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({

                password: password,
                username: username
            }),
            credentials: 'include', // Send and store cookies
        });

        if (response.ok) {
            // Redirect or perform other actions upon successful login
            await goto('/admin');
        } else {
            // Handle login error
            alert('error');
        }
    }


</script>

<svelte:head>
    <title>Login</title>
    <link href="https://fonts.googleapis.com" rel="preconnect">
    <link crossorigin href="https://fonts.gstatic.com" rel="preconnect">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet">
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
        font-family: 'Montserrat', sans-serif;
        background-color: var(--background);
        display: flex;
        flex-direction: column;
        height: 100vh;
        width: 100vw;
    }

    .top {
        position: absolute;
        left: 30px;
        top: 20px;

        display: flex;
        justify-content: left;
        align-items: center;
        flex-direction: row;
        gap: 15px;
    }

    .logo {
        height: 70px;
        cursor: pointer;
    }

    .top-text {
        font-size: 18px;
        color: var(--text);
    }

    .login {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        width: 100%;
        align-items: center;
        justify-content: center;
        /*row-gap: 30px;*/
    }

    .login-cont {
        display: flex;
        align-items: center;
        flex-direction: column;
        border-radius: 8px;
        /*border: 2px solid black;*/
        /*width: 416px;*/
        /*box-shadow: 0px 18px 18px rgba(0, 0, 0, 0.15), 0 0 18px rgba(0, 0, 0, 0.15);*/
        padding: 32px;
        color: green;

        /*background: linear-gradient(14deg, rgba(2,0,36,1) 0%, rgba(101,62,165,1) 100%);*/
        /*background: linear-gradient(14deg, #182435 0%, #577db2 100%);*/
        /* background-color:#131d2a; */
        background-color: #1b2c42;
    }

    .login-header {
        font-size: 24px;
        color: var(--text);
        margin-bottom: 12px;
    }

    .login-form {
        display: flex;
        justify-content: center;

        width: 352px;
        flex-direction: column;
        /*align-items: center;*/
        row-gap: 10px;
    }


    label {
        color: var(--text);
        line-height: 20px;
    }

    a {
        text-decoration: none;
    }

    .forgot {
        color: #4ca6ff;
    }

    input[type=text],
    input[type=password] {
        width: 100%;
        padding: 0px 8px 0px 8px;
        box-sizing: border-box;
        height: 35px;
        line-height: 35px;
        color: var(--text);
        border: 2px solid #005cb3;
        /* border: none; */
        background-color: #17171c;

        border-radius: 4px;
        transition-duration: 50ms;
        font-size: 14px;
    }

    input:focus {
        outline: none;
        border-color: #577db2;
        /*background-color: #eaeaea;*/
    }

    input:hover {
        border-color: #577db2;
        /*background-color: #eaeaea;*/
    }

    .submit {
        width: 100%;
        height: 35px;
        background-color: #0082ff;
        border: none;
        border-radius: 4px;
        font-weight: bold;
        margin-top: 10px;
        cursor: pointer;
        transition-duration: 150ms;
        color: var(--text);
    }

    .submit:hover {
        background-color: #577db2;
    }

    .bottom-text {
        width: 100%;
        display: flex;
        /*align-items: center;*/
        justify-content: center;
        column-gap: 5px;
    }

    .reg {
        color: #fbfdfe;
    }

    .regs {
        color: #4ca6ff;
        cursor: pointer;
    }

    @media only screen and (max-width: 600px) {
        .main {
            /* background: rgb(2, 0, 36); */
            /* background: linear-gradient(14deg, rgb(9, 3, 121) 0%, rgb(33, 97, 239) 100%); */
        }

        .logo {
            height: 35px;
            /*left: 20px;*/
        }

        .login {
            row-gap: 30px;
        }

        .login-cont {
            width: 100vw;
            box-shadow: none;
            padding: 0;
            background: unset;
        }

        .login-form {
            width: 90vw;
        }

        input[type=text],
        input[type=password] {
            width: 100%;

        }
    }

</style>
<div class="main">
    <div class="top">
        <a href="/"><img alt="IMS logo" class="logo" src="/CVHS-logo.png"></a>
        <div class="top-text">CVHS Locker System</div>
    </div>

    <div class="login">

        <div class="login-cont">
            <div class="login-header">Admin Login</div>

            <div class="login-form" on:keydown={handleKeyPress}>
                <label for="username">Username</label>
                <input bind:value={username} id="username" name="username" required type="text">

                <label for="password">Password</label>
                <input bind:value={password} id="password" name="password" required type="password">

                <button class="submit" on:click={login}>Sign in</button>
            </div>

        </div>

    </div>
</div>
