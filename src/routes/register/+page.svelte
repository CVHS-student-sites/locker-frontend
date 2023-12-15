<script>

    import {fade} from 'svelte/transition';
    import {quartOut} from 'svelte/easing';

    import {goto} from '$app/navigation';

    let oneUsername = "";
    let onePassword = "";


    let twoUsername = "";
    let twoPassword = "";

    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            // Enter key was pressed, do something
            login();
        }
    }


    async function login() {
        alert("yoyo")
        const response = await fetch('https://locker-api.cvapps.net/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({

                password: onePassword,
                username: oneUsername
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
    <title>Register</title>

    <meta content="Register for a locker at Crescenta Valley High School (CVHS) for the upcoming school year. Secure your locker space and stay organized."
          name="description">
    <meta content="Crescenta Valley High School, CVHS, locker registration, school locker, locker allocation, locker assignment"
          name="keywords">
    <meta content="cvapps.net" name="author">

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
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100vw;
        flex: 1;
    }

    .main-animate{
        position: absolute;
        height: 100%;
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
        flex: 1;
        width: 100%;
        align-items: center;
        /*justify-content: center;*/
        row-gap: 30px;
        margin-top: 15vh;
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

    /*input:hover {*/
    /*    !*border-color: #577db2;*!*/
    /*    background-color: #eaeaea;*/
    /*!*}*!*/

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
<!--todo fix layout shift that occurs from transition-->
<div class="main">
    <div class="main-animate" in:fade={{ delay: 200, duration: 700, easing: quartOut, axis: 'x' }}
         out:fade={{ duration: 200, easing: quartOut, axis: 'x' }}>
        <div class="login">

            <div class="login-cont">
                <div class="login-header">Register for a locker</div>

                <form class="login-form" on:keydown={handleKeyPress}>

                    <label>Student 1</label>
                    <input bind:value={oneUsername} id="1username" name="1username" placeholder="Full Name" required
                           type="text">
                    <input bind:value={onePassword} id="1studentId" name="1studentId" placeholder="Student ID" required
                           type="text">

                    <label>Student 2</label>
                    <input bind:value={twoUsername} id="2username" name="2username" placeholder="Full Name" required
                           type="text">
                    <input bind:value={twoPassword} id="2studentId" name="2studentId" placeholder="Student ID" required
                           type="text">

                    <button class="submit" on:click={login}>Next Page</button>
                </form>

            </div>

        </div>
    </div>
</div>
