<script>
    import { createEventDispatcher } from "svelte";
    import { fade } from 'svelte/transition';

    const dispatch = createEventDispatcher();

    let studentId;

    function submit() {
        // alert(studentId);
        // dispatch("test");
        dispatch("message", {
            studentId: studentId,
        });
        //TODO make the db route for this
    }

    function handleKeyPress(event) {
        if (event.key === "Enter") {
            submit();
        }
    }
</script>

<svelte:head>
    <link href="https://fonts.googleapis.com" rel="preconnect" />
    <link crossorigin href="https://fonts.gstatic.com" rel="preconnect" />
    <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap"
        rel="stylesheet"
    />
</svelte:head>


<style>
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

    .lookup {
        display: flex;
        flex-direction: column;
        height: 100vh;
        width: 100vw;
        align-items: center;
        justify-content: center;
        /* row-gap: 30px; */
    }

    .lookup-cont {
        display: flex;
        align-items: center;
        flex-direction: column;
        border-radius: 8px;
        /*border: 2px solid black;*/
        width: 416px;
        box-shadow: 0px 18px 18px rgba(0, 0, 0, 0.15),
            0 0 18px rgba(0, 0, 0, 0.15);
        padding-bottom: 32px;
        background-color: #313338;
        color: #fbfdfe;
        background: rgb(2, 0, 36);
        /*background: linear-gradient(14deg, rgba(2,0,36,1) 0%, rgba(101,62,165,1) 100%);*/
        background: linear-gradient(
            14deg,
            rgb(17, 9, 157) 0%,
            rgb(40, 108, 255) 100%
        );
    }

    .lookup-header {
    }

    .lookup-form {
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

    input[type="text"],
    input[type="password"] {
        width: 100%;
        padding: 0px 8px 0px 8px;
        box-sizing: border-box;
        height: 35px;
        line-height: 35px;
        color: #fbfdfe;
        border: 2px solid #3f51b5;
        background-color: #1e1f22;
        border-radius: 4px;
        transition-duration: 50ms;
        font-size: 14px;
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

    .search {
        width: 100%;
        height: 35px;
        background-color: #32353b;
        border: none;
        border-radius: 4px;
        font-weight: bold;
        margin-top: 10px;
        cursor: pointer;
        transition-duration: 150ms;
        color: #fbfdfe;
    }

    .search:hover {
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
            background: linear-gradient(
                14deg,
                rgb(9, 3, 121) 0%,
                rgb(33, 97, 239) 100%
            );
        }

        .logo {
            height: 35px;
            /*left: 20px;*/
        }

        .lookup {
            row-gap: 30px;
        }

        .lookup-cont {
            width: 100vw;
            box-shadow: none;
            padding-bottom: 0;
            background: unset;
        }

        .lookup-form {
            width: 90vw;
        }

        input[type="text"],
        input[type="password"] {
            width: 100%;
        }
    }
</style>


<div class="main" out:fade={{ delay: 50, duration: 300 }}>
    <div class="top">
        <a href="/"><img alt="IMS logo" class="logo" src="/CVHS-logo.png" /></a>
        <div class="top-text">CVHS Locker System</div>
    </div>

    <div class="lookup">
        <div class="lookup-cont">
            <h2 class="lookup-header">Find your Locker</h2>

            <div class="lookup-form">
                <label for="studentId">Student ID</label>
                <input
                    id="studentId"
                    name="sutdentId"
                    placeholder="Enter student ID"
                    type="text"
                    bind:value={studentId}
                    on:keydown={handleKeyPress}
                />

                <button class="search" type="submit" on:click={submit}
                    >Search</button
                >
            </div>
        </div>
    </div>
</div>
