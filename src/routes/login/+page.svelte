<script>
    // import Topnav from "$lib/components/Topnav.svelte";
    import { goto } from '$app/navigation';
    let username = "";
    let password = "";

    async function login() {
        const response = await fetch('https://locker-api.cvapps.net/login', {
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
            alert('error')
        }
    }


</script>

<svelte:head>
    <link href="https://fonts.googleapis.com" rel="preconnect">
    <link crossorigin href="https://fonts.gstatic.com" rel="preconnect">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet">
</svelte:head>

<style>

    .main {
        font-family: 'Montserrat', sans-serif;
        background-color: #313338;
        display: flex;
        flex-direction: column;
        height: 100vh;
        width: 100vw;
    }

    .top {
        position: absolute;
        left: 30px;
        top: 20px;
        /*background-color: green;*/

        display: flex;
        justify-content: left;
        align-items: center;
        flex-direction: row;
        gap: 15px;
    }

    .logo {
        height: 65px;
        cursor: pointer;
    }

    .top-text {
        font-size: 18px;
        color: #fbfdfe;
    }


    .login {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        width: 100%;
        align-items: center;
        justify-content: center;
        row-gap: 30px;

    }

    .login-cont {
        display: flex;
        align-items: center;
        flex-direction: column;
        border-radius: 8px;
        /*border: 2px solid black;*/
        width: 416px;
        box-shadow: 0px 18px 18px rgba(0, 0, 0, 0.15), 0 0 18px rgba(0, 0, 0, 0.15);
        padding-bottom: 32px;
        background-color: #313338;
        color: #fbfdfe;
        background: rgb(2, 0, 36);
        /*background: linear-gradient(14deg, rgba(2,0,36,1) 0%, rgba(101,62,165,1) 100%);*/
        background: linear-gradient(14deg, rgb(9, 3, 114) 0%, rgb(33, 97, 239) 100%);
    }

    .login-header {

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
        color: #fbfdfe;
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
        padding: 8px 15px;
        box-sizing: border-box;
        color: #fbfdfe;
        border: 2px solid #3f51b5;
        background-color: #1e1f22;
        border-radius: 4px;
        transition-duration: 50ms;
        font-size: 12px;
    }


    input:focus {
        outline: none;
        border-color: grey;
        /*background-color: #eaeaea;*/
    }

    input:hover {
        border-color: grey;
        /*background-color: #eaeaea;*/
    }

    .submit {
        width: 100%;
        height: 35px;
        background-color: #3f51b5;
        border: none;
        border-radius: 4px;
        font-weight: bold;
        margin-top: 10px;
        cursor: pointer;
        transition-duration: 150ms;
        color: #fbfdfe;
    }

    .submit:hover {
        background-color: rgb(146, 192, 226);
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
            background: rgb(2, 0, 36);
            background: linear-gradient(14deg, rgb(9, 3, 121) 0%, rgb(33, 97, 239) 100%);
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
            padding-bottom: 0;
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
            <h2 class="login-header">Sign in</h2>

            <div class="login-form">
                <label for="email">Email</label>
                <input id="email" name="username" required type="text" bind:value={username}>

                <label for="password">Password</label>
                <input id="password" name="password" required type="password" bind:value={password}>

                <button class="submit" on:click={login}>Sign in</button>
            </div>

        </div>

    </div>
</div>
