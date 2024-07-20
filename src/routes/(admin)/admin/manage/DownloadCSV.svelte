<script>
    import { throwSuccessToast, throwWarningToast } from "$lib/services/admin/throwToast.js";

    import {getLockerCSV, getUserCSV} from "$lib/services/admin/mainApi.js";


    async function getUser(){
        await getUserCSV();
    }

    async function getLocker(){
        await getLockerCSV();
    }
</script>

<style>
    .import-cont {
        flex: 1;
        width: 100%;
        display: flex;
        flex-direction: row;
        box-sizing: border-box;
        align-items: center;
        justify-content: space-evenly;

    }

    .form {
        /* width: 100%; */
        display: flex;
        align-items: center;
        flex-direction: column;
        height: 100%;
    }

    .input {
        color: transparent;
        width: 100%;
        display: none;
    }

    .custom-upload {
        /* background-color: grey; */
        /* padding: 6px; */
        cursor: pointer;
        box-sizing: border-box;
    }

    .material-symbols-outlined {
        color: #577db2;
        /* width: 24px; */
        user-select: none;
        font-size: 48px;
    }

    .filled-icons {
        font-variation-settings:
                "FILL" 1,
                "wght" 600,
                "GRAD" 0,
                "opsz" 24;
    }

    .submit {
        outline: none;
        border-radius: 5px;
        color: var(--text);
        padding: 5px;
        background: none;
        border: 2px solid var(--accent-color);
    }

    .submit:hover {
        cursor: pointer;
        background-color: #528cac;
    }
</style>

<div class="import-cont">
    <div class="form">

        <button class="submit" on:click={getLocker}>Download locker</button>
    </div>

    <div class="form">

        <button class="submit" on:click={getUser}>Download User</button>
    </div>
</div>
