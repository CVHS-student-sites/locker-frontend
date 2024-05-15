<script>
    import axios from "axios";
    import { postLockerFile, postUserFile } from "$lib/services/admin/mainApi.js";
    import { throwSuccessToast } from "$lib/services/admin/throwToast.js";

    let file1;
    let file2;

    async function submitLocker() {
        if (!files1 || files1.length === 0) {
            alert("Please select a file.");
            return;
        }
        var formData = new FormData();
        formData.append("csvFile", file1[0]);

        let response = await postLockerFile(formData);
        if (response.status === 200) {
            throwSuccessToast("Lockers Uploaded Successfully");
        }
    }

    async function submitUser() {
        if (!files2 || files2.length === 0) {
            alert("Please select a file.");
            return;
        }
        var formData = new FormData();
        formData.append("csvFile", file2[0]);

        let response = await postUserFile(formData);
        if (response.status === 200) {
            throwSuccessToast("UserData Uploaded Successfully");
        }
    }
</script>

<div class="import-cont">
    <div class="form">
        <input accept=".csv" id="locker" name="locker" type="file" bind:files={file1} />
        <button on:click={submitLocker}>Upload locker</button>
    </div>

    <div class="form">
        <input accept=".csv" id="locker" name="locker" type="file" bind:files={file2} />
        <button on:click={submitUser}>Upload users</button>
    </div>
</div>

<style>
    .import-cont {
        flex: 1;
        width: 100%;
        display: flex;
        flex-direction: column;
        /* background-color: green; */
        box-sizing: border-box;
        align-items: center;
        justify-content: center;
    }

    .form {
        width: 100%;
        height: 100%;
    }
</style>
