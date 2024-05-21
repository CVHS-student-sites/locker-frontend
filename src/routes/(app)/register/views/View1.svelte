<script>
    import {createEventDispatcher} from "svelte";
    import {slide} from "svelte/transition";
    import {quartOut} from "svelte/easing";
    import {
        validateID,
        sendVerification,
        fetchEnabledGrades,
    } from "$lib/services/app/mainApi.js";
    import {
        singleLocker,
        studentId1,
        studentId2,
        pageView,
    } from "../store.js";

    const dispatch = createEventDispatcher();

    let student1 = "";
    let student2 = "";

    let input1;
    let input2;

    function handleKeyPress(event) {
        if (event.key === "Enter") {
            login();
        }
    }

    function back(){
        //todo make this move page back to prev screen
    }

    let gradeCanRegister = false;

    // updated to include prereg, todo change this later if needed
    async function checkGrade(grade, permissions) {
        let enableGrades = await fetchEnabledGrades();

        const gradeKey = "grade_" + grade;
        // Check if the grade exists in the JSON object and if it's enabled
        if (enableGrades.hasOwnProperty(gradeKey) && enableGrades[gradeKey]) {
            gradeCanRegister = true;
        }else if(enableGrades["preReg"] && permissions === 1){
            gradeCanRegister = true;
        }
    }

    //todo this could use a hell of a lot of optimization
    async function login(event) {
        event.preventDefault();

        if ($singleLocker) {
            try {
                let response = await validateID(student1);
                const jsonResponse = await response.json();
                if (response.status === 400) {
                    input1.style.borderColor = "red";
                    input1.value = "";
                    input1.placeholder = jsonResponse.error;
                } else if (response.ok) {
                    await checkGrade(jsonResponse.grade, jsonResponse.permissions);
                    if (gradeCanRegister) {
                        studentId1.set(student1);
                        await sendVerification($studentId1);
                        pageView.set(3);
                    } else {
                        input1.style.borderColor = "red";
                        input1.value = "";
                        input1.placeholder = "Grade cannot register";
                    }
                }
            } catch (error) {
                input1.style.borderColor = "red";
                input1.value = "";
                input1.placeholder = "Internal system error";
            }
        } else {
            //student 1
            let status = true;

            //todo display some sort of error here
            if (student1 === student2) status = false;

            try {
                let response = await validateID(student1);
                const jsonResponse = await response.json();
                if (response.status === 400) {
                    status = false;
                    input1.style.borderColor = "red";
                    input1.value = "";
                    input1.placeholder = jsonResponse.error; //todo this should get a message from the server
                } else if (response.ok) {
                    await checkGrade(jsonResponse.grade, jsonResponse.permissions);
                    studentId1.set(student1);
                }
            } catch (error) {
                input1.style.borderColor = "red";
                input1.value = "";
                input1.placeholder = "Internal system error";
                status = false;
            }

            //student 2
            try {
                let response = await validateID(student2);
                const jsonResponse = await response.json();
                if (response.status === 400) {
                    status = false;
                    input2.style.borderColor = "red";
                    input2.value = "";
                    input2.placeholder = jsonResponse.error; //todo this should get a message from the server
                } else if (response.ok) {
                    await checkGrade(jsonResponse.grade, jsonResponse.permissions);
                    studentId2.set(student2);
                }
            } catch (error) {
                input2.style.borderColor = "red";
                input2.value = "";
                input2.placeholder = "Internal system error";
                status = false;
            }

            //once both all good, send the response
            if (status) {
                if (gradeCanRegister) {
                    await sendVerification($studentId1);
                    await sendVerification($studentId2);
                    pageView.set(3);
                } else {
                    input1.style.borderColor = "red";
                    input1.value = "";
                    input1.placeholder = "Grade cannot register";
                }
            }
        }
    }
</script>

<svelte:head>
    <title>Register</title>

    <meta
            content="Register for a locker at Crescenta Valley High School (CVHS) for the upcoming school year. Secure your locker space and stay organized."
            name="description"
    />
    <meta
            content="Crescenta Valley High School, CVHS, locker registration, school locker, locker allocation, locker assignment"
            name="keywords"
    />
    <meta content="cvapps.net" name="author"/>
</svelte:head>

<!--todo fix layout shift that occurs from transition-->
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

    /*.main-animate{*/
    /*    !*position: absolute;*!*/
    /*    height: 100vh;*/
    /*    width: 100vw;*/
    /*}*/

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
        margin-top: 20vh;
    }

    .login-cont {
        display: flex;
        align-items: center;
        flex-direction: column;
        border-radius: 8px;
        padding: 32px;
        color: green;
        background-color: #1b2c42;
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

    /*input:hover {*/
    /*    !*border-color: #577db2;*!*/
    /*    background-color: #eaeaea;*/
    /*!*}*!*/

    .submit {
    
        
    }


    .nav-btn{
        flex: 1;
        height: 35px;
        background-color: #0082ff;
        border: none;
        border-radius: 4px;
        font-weight: bold;
        cursor: pointer;
        transition-duration: 150ms;
        color: var(--text);
    }

    .button-cont{
        margin-top: 10px;
        height: 35px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        gap: 10px;
    }

    .submit:hover {
        background-color: #577db2;
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

<div
        class="main"
        in:slide={{ delay: 250, duration: 600, easing: quartOut, axis: "x" }}
>
    <div class="login">
        <div class="login-cont">
            <div class="login-header">Verify IDs</div>

            <form
                    class="login-form"
                    on:keydown={handleKeyPress}
                    on:submit={login}
            >
                <label>Student 1</label>

                <input
                        bind:this={input1}
                        bind:value={student1}
                        id="1studentId"
                        name="1studentId"
                        placeholder="Student ID"
                        required
                        type="text"
                />

                {#if !$singleLocker}
                    <label>Student 2</label>
                    <input
                            bind:value={student2}
                            bind:this={input2}
                            id="2studentId"
                            name="2studentId"
                            placeholder="Student ID"
                            required
                            type="text"
                    />
                {/if}

                <div class="button-cont">
                    <button class="submit nav-btn" type="submit">Next</button>
                    <button class="submit nav-btn" on:click={back}>Next</button>
                </div>
            </form>
        </div>
    </div>
</div>
