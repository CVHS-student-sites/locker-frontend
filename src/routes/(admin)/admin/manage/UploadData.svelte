<script>
    import { postLockerFile, postUserFile } from "$lib/services/admin/mainApi.js";
    import { throwSuccessToast, throwWarningToast } from "$lib/services/admin/throwToast.js";

    let file1;
    let file2;

    async function submitLocker() {
        if (!file1 || file1.length === 0) {
            throwWarningToast("No File Selected");
            return;
        }
        const formData = new FormData();
        formData.append("csvFile", file1[0]);

        let response = await postLockerFile(formData);
        if (response.status === 200) {
            throwSuccessToast("Lockers Uploaded Successfully");
        }
    }

    async function submitUser() {
        if (!file2 || file2.length === 0) {
            throwWarningToast("No File Selected");
            return;
        }
        const formData = new FormData();
        formData.append("csvFile", file2[0]);

        let response = await postUserFile(formData);
        if (response.status === 200) {
            throwSuccessToast("UserData Uploaded Successfully");
        }
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

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 5px;

    }

    .hint-text{
        color: var(--text);
        font-size: 12px;
        font-family: 'Montserrat', sans-serif;
        margin-bottom: 5px;
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
        <label class="custom-upload">
            <input accept=".csv" class="input" id="locker" name="locker" type="file" bind:files={file1} />

            <div class="material-symbols-outlined filled-icons">upload_file</div>
            <div class="hint-text">Click icon to select file</div>
        </label>
        <button class="submit" on:click={submitLocker}>Upload locker</button>
    </div>

    <div class="form">
        <label class="custom-upload">
            <input accept=".csv" class="input" id="locker" name="locker" type="file" bind:files={file2} />

            <div class="material-symbols-outlined filled-icons">upload_file</div>
            <div class="hint-text">Click icon to select file</div>
        </label>
        <button class="submit" on:click={submitUser}>Upload user</button>
    </div>
</div>
