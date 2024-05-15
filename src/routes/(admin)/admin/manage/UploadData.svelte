<script>
    let files;

    async function SubmitEvent() {
        if (!files || files.length === 0) {
            alert("Please select a file.");
            return;
        }

        // Access the first file from the files array
        let file = files[0];

        var formData = new FormData();
        formData.append("csvFile", file);

        try {
            let response = await axios.post('https://locker-api.cvapps.net/admin/lockerUpload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                withCredentials: true
            });

            if (response.status === 200) {
                alert("Locker uploaded");
            } else {
                alert("Error uploading locker");
            }
        } catch (error) {
            alert("Error uploading locker: " + error.message);
        }
    }
</script>

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

<div class="import-cont">
    <div class="form">
        <!-- Bind the files array -->
        <input accept=".csv" id="locker" name="locker" type="file" bind:files />
        <button on:click={SubmitEvent}>Upload locker</button>
    </div>

    <div class="form">
        <form action="https://locker-api.cvapps.net/admin/userUpload" enctype="multipart/form-data" method="post">
            <input accept=".csv" name="csvFile" required type="file" />
            <button type="submit">Upload User</button>
        </form>
    </div>
</div>
