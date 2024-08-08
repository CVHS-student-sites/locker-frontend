<script>

    import {pageView} from "../store.js";

    import {postCreateUser} from "$lib/services/admin/mainApi.js";

    import Switch from "$lib/components/global/Switch.svelte";
    import {throwErrorToast, throwSuccessToast} from "$lib/services/admin/throwToast.js";


    let studentId = "";
    let name = "";
    let grade = "";
    let email = "";
    let preReg = false;


    let input1;
    let input2;


    function handleKeyPress(event) {
        if (event.key === "Enter") {
            login();
        }
    }


    async function login(event) {
        event.preventDefault();
        let data = {
            studentId: parseInt(studentId),
            name: name,
            grade: parseInt(grade),
            email: email,
            permissions: preReg ? 1 : null
        }
        console.log(data)
        try {
            let response = await postCreateUser(data);
            if (response.status === 200) {
                throwSuccessToast("User Create successfully");
                pageView.set(0);
            }
        } catch (error) {
            throwErrorToast(error.response.data.error)
        }

    }

    function back() {

    }

</script>

<svelte:head>
    <title>Locker - Create</title>
</svelte:head>

<style>
    :root {
        --text: #d6d6d6;
        --background: #101014;
        --primary: #0084ff;
        --secondary: #1b2c42;
        --accent: #577db2;
    }

    .create-cont {
        height: 100%;
    }

    .login {
        display: flex;
        flex-direction: row;
        flex: 1;
        width: 100%;
        /*align-items: center;*/
        justify-content: center;
        row-gap: 30px;
        height: 100%;
    }

    .notes-cont {
        width: 352px;
        /*height: 100%;*/
        padding: 32px;
        text-align: center;
        font-family: "Montserrat", sans-serif;
        color: var(--text);
        box-sizing: border-box;
    }

    .login-cont {
        display: flex;
        align-items: center;
        /*justify-content: center;*/
        flex-direction: column;
        border-radius: 8px;
        padding: 32px;
        /*color: green;*/
        /*background-color: #1b2c42;*/
        /*position: absolute;*/
    }

    .login-header {
        font-size: 24px;
        color: var(--text);
        margin-bottom: 24px;
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

    input[type="text"],
    input[type="password"] {
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
        transition-duration: 500ms;
        font-size: 14px;
    }

    input:focus {
        outline: none;
        border-color: #577db2;
        /*background-color: #eaeaea;*/
    }


    .nav-btn {
        flex: 1;
        height: 35px;
        background-color: #0082ff;
        border: none;
        border-radius: 4px;
        font-weight: bold;
        cursor: pointer;
        transition-duration: 150ms;
        color: var(--text);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;

    }

    .nav-btn:hover {
        background-color: #577db2;
    }

    .material-symbols-outlined {
        color: #d6d6d6;
        width: 24px;
        user-select: none;
    }

    .filled-icons {
        font-variation-settings: "FILL" 1,
        "wght" 600,
        "GRAD" 0,
        "opsz" 24;
    }

    .button-cont {
        margin-top: 10px;
        height: 35px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        gap: 10px;
    }

    .loading-bar {
        position: absolute;
        top: -50px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
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

        input[type="text"],
        input[type="password"] {
            width: 100%;
        }
    }
</style>


<div class="create-cont">
    <div class="login">

        <!--        todo talk to poole to see if there should be notes here-->
        <!--        <div class="notes-cont">-->
        <!--            <h3>Notes on using Create User</h3>-->
        <!--            <p>Students entered into system using this dialog will be automatically verified</p>-->

        <!--            <p>After creating user, they can register locker on their own, or admin can assign locker number manually</p>-->
        <!--        </div>-->

        <!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
        <div class="login-cont">


            <div class="login-header">Create User</div>


            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div
                    class="login-form"
                    on:click|stopPropagation

            >
                <label>Student ID</label>
                <input
                        bind:value={studentId}
                        id="1studentId"
                        name="1studentId"
                        placeholder="6-Digit ID"
                        required
                        type="text"
                />

                <label>Full Name</label>
                <input
                        bind:value={name}
                        id="1studentId"
                        name="1studentId"
                        placeholder="Full Name"
                        required
                        type="text"
                />

                <label>Grade</label>
                <input
                        bind:value={grade}
                        id="1studentId"
                        name="1studentId"
                        placeholder="9-12"
                        required
                        type="text"
                />


                <label>Email</label>
                <input
                        bind:value={email}
                        id="1studentId"
                        name="1studentId"
                        placeholder="GUSD Email"
                        required
                        type="text"
                />

                <label>Pre Register</label>
                <Switch
                        bind:checked={preReg}
                        fontSize={12}
                        design="slider"
                />


                <div class="button-cont">
                    <button class="nav-btn" type="button" on:click={login}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>