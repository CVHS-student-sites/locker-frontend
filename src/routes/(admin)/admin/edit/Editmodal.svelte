<script>
    import {
        getCheckLockerNumber,
        getUserEditData,
        postDeleteUser,
        postRemoveUsersLocker,
        updateUserEditData
    } from "$lib/services/admin/mainApi.js";
    import {throwSuccessToast} from "$lib/services/admin/throwToast.js";
    import Switch from "$lib/components/global/Switch.svelte";

    export let showModal; // boolean
    export let data;

    let showData = false;

    let dialog; // HTMLDialogElement
    let userData = {};

    let preReg;
    let numberValid = true;

    async function fetchData() {
        userData = await getUserEditData(data);
        preReg = userData.permissions === 1;
        showData = true;
        dialog.showModal();
    }

    async function submit() {
        if (preReg) {
            userData.permissions = 1;
        } else {
            userData.permissions = null;
        }

        if (userData.LockerLockerNumber === '') userData.LockerLockerNumber = null;

        let response = await updateUserEditData(data, userData);

        if (response.status === 200) {
            dialog.close();
            throwSuccessToast("Submitted successfully");
        }
    }

    async function deleteUser() {
        let response = await postDeleteUser(userData.studentId);

        if (response.status === 200) {
            dialog.close();
            throwSuccessToast("User deleted successfully");
        }
    }

    async function removeLocker() {
        let response = await postRemoveUsersLocker(userData.studentId);

        if (response.status === 200) {
            dialog.close();
            throwSuccessToast("Locker cleared successfully");
        }
    }

    async function checkLockerNumber() {
        let response = await getCheckLockerNumber(userData.LockerLockerNumber);
        numberValid = response.exists;
    }

    $: if (userData.LockerLockerNumber !== undefined) {
        if (userData.LockerLockerNumber !== '') {
            checkLockerNumber();
        } else {
            numberValid = true;
        }

    }

    $: if (dialog && showModal) {
        fetchData();
    }


</script>

<style>
    dialog {

        background: none;
        border: none;
        padding: 0;
    }

    dialog::backdrop {
        background: rgba(0, 0, 0, 0.3);
    }

    dialog > div {
        padding: 32px;
        background-color: #1b2c42;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        border-radius: 8px;
    }

    dialog[open] {
        animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    @keyframes zoom {
        from {
            transform: scale(0.85);
        }
        to {
            transform: scale(1);
        }
    }

    dialog[open]::backdrop {
        animation: fade 0.15s ease-out;
    }

    @keyframes fade {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    .material-symbols-outlined {
        color: #d6d6d6;
        font-size: 32px;
        font-variation-settings: 'FILL' 0,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24
    }

    .exit-btn {
        position: absolute;
        top: 0;
        right: 0;
        margin: 10px;
        cursor: pointer;
    }

    .lookup-header {
        font-size: 24px;
        color: var(--text);
        margin-bottom: 20px;
    }

    .edit-cont {
        display: flex;
        justify-content: center;

        width: 352px;
        flex-direction: column;
        /*align-items: center;*/
        row-gap: 10px;
    }

    input[type="text"],
    input[type="email"] {
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
        transition-duration: 100ms;
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


    label {
        color: var(--text);
        line-height: 20px;
        /*margin-top: 10px;*/
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

    .action-cont {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        height: 35px;
        width: 100%;
        margin-top: 10px;
    }

    .hint-text{
        color: var(--text);
        font-size: 12px;
        font-family: 'Montserrat', sans-serif;
        margin-bottom: 5px;
    }

    .action-btn {
        cursor: pointer;
    }

    .action-btn-cont {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 4px;
    }

    .input-row {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        gap: 8px;
    }

    .material-symbols-outlined {
        user-select: none;
    }
</style>


<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
        bind:this={dialog}
        on:click|self={() => dialog.close()}
        on:close={() => (showModal = false)}
>
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div on:click|stopPropagation>
        <div class="exit-btn material-symbols-outlined" on:click={() => dialog.close()}>close</div>

        <div class="lookup-header">Edit User</div>
        {#if showData}
            <div class="edit-cont">

                <label for="studentID">Student ID</label>
                <input
                        bind:value={userData.studentId}
                        id="studentID"
                        name="studentID"
                        placeholder="Student ID"
                        required
                        type="text"
                        readonly
                />

                <label for="name">Name</label>
                <input
                        bind:value={userData.name}
                        id="name"
                        name="name"
                        placeholder="name"
                        required
                        type="text"
                />

                <label for="grade">Grade</label>
                <input
                        bind:value={userData.grade}
                        id="grade"
                        name="grade"
                        placeholder="Grade"
                        required
                        type="text"
                />


                <label for="permissions">Pre Register</label>
                <Switch
                        bind:checked={preReg}
                        fontSize={12}
                        design="slider"
                />


                <label for="email">Email</label>
                <input
                        bind:value={userData.email}
                        id="email"
                        name="email"
                        placeholder="Email"
                        required
                        type="email"
                />


                <label for="email">Locker Number</label>
                <div class="input-row">
                    <input
                            bind:value={userData.LockerLockerNumber}
                            id="locker"
                            name="locker"
                            placeholder="Locker Number"
                            type="text"
                    >
                    <div class="material-symbols-outlined filled-icons"
                         style="{numberValid ? 'color:darkgreen' : 'color:darkred'}">{numberValid ? 'check_circle' : 'cancel'}
                    </div>
                </div>

                <button class="submit" on:click={submit}>Submit</button>


                <div class="action-cont">
                    <div class="action-btn-cont">
                        <div class="action-btn material-symbols-outlined" on:click={deleteUser}>delete</div>
                        <div class="hint-text">Delete User</div>
                    </div>
                    <div class="action-btn-cont">
                        <div class="action-btn material-symbols-outlined" on:click={removeLocker}>person_remove</div>
                        <div class="hint-text">Clear Locker</div>
                    </div>
                </div>
            </div>
        {/if}

    </div>
</dialog>