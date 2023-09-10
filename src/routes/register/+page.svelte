<script>
    import Topnav from "$lib/components/Topnav.svelte";
    import Bottom_links from "$lib/components/Bottom_links.svelte";

    function test() {
        alert("done")
    }

</script>

<svelte:head>
    <link href="https://fonts.googleapis.com" rel="preconnect">
    <link crossorigin href="https://fonts.gstatic.com" rel="preconnect">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet">
    <script async defer src="https://www.google.com/recaptcha/api.js"></script>
</svelte:head>

<style>
    /*.top{*/
    /*    width: 100%;*/
    /*    display: flex;*/
    /*    justify-content: left;*/
    /*}*/

    .logo {
        position: absolute;
        left: 30px;
        top: 20px;
        height: 45px;
        cursor: pointer;
    }

    .main {
        font-family: 'Montserrat', sans-serif;
        display: flex;
        flex-direction: column;
        height: 100vh;
        width: 100vw;
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
        border-radius: 5px;
        /*border: 2px solid black;*/
        width: 416px;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15), 0 0 2px rgba(0, 0, 0, 0.15);
        padding-bottom: 32px;
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
        color: black;
    }

    a {
        text-decoration: none;
    }

    .forgot {
        color: #0a66c2;
    }

    input[type=text],
    input[type=password] {
        width: 100%;
        padding: 12px 15px;
        box-sizing: border-box;
        color: black;
        border: 2px solid black;
        border-radius: 4px;
        transition-duration: 50ms;
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

    .g-recaptcha-cont {
        width: 100%;
        display: flex;
        justify-content: left;
    }

    .tos {
        display: flex;
        column-gap: 5px;
    }

    .submit {
        width: 100%;
        height: 50px;
        background-color: #ee3224;
        border: none;
        border-radius: 10px;
        font-weight: bold;
        margin-top: 10px;
        cursor: pointer;
        transition-duration: 150ms;
    }

    .submit:hover {
        background-color: rgba(239, 97, 86, 0.97);
    }

    .bottom-text {
        width: 100%;
        display: flex;
        /*align-items: center;*/
        justify-content: center;
        column-gap: 5px;
    }

    .reg {

    }

    .regs {
        color: #0a66c2;
        cursor: pointer;
    }

    .bottom_links {
        width: 100%;
    }

    @media only screen and (max-width: 600px) {
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
        }

        .login-form {
            width: 90vw;
        }

        input[type=text],
        input[type=password] {
            width: 100%;

        }

        .bottom_links {
            display: none;
        }
    }

</style>
<div class="main">
    <div class="top">
        <a href="/"><img alt="IMS logo" class="logo" src="/ItsMySeatLogoBlack.png"></a>
    </div>

    <div class="login">

        <div class="login-cont">
            <h2 class="login-header">Register</h2>
            <form class="login-form">


                <label for="email">Email</label>
                <input id="email" name="email" required type="text">

                <label for="password">Password</label>
                <input id="password" name="psw" required type="password">


                <div class="g-recaptcha-cont">
                    <div class="g-recaptcha" data-callback="test()"
                         data-sitekey="6LeWHuomAAAAAILCpRApzB8nRiNo9_ztVH2-Izu2"></div>
                </div>

                <div class="tos">
                    <input id="agreedtos" name="tos" type="checkbox" value="Boat">
                    <div class="tos-text">I Accept the Terms Of Service</div>
                </div>
                <button class="submit" type="submit">Register</button>


            </form>

        </div>

        <div class="bottom-text">
            <div class="reg">Already A Member?</div>
            <a href="/login">
                <div class="regs">Sign in</div>
            </a>
        </div>

    </div>

    <div class="bottom_links">
        <Bottom_links/>
    </div>
</div>
