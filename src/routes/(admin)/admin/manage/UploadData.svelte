<script>
let files;
import axios from "axios";

async function SubmitEvent(){
    var formData = new FormData();
    formData.append("image", files);

    let response = await axios.post('https://locker-api.cvapps.net/admin/lockerUpload', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });

    if(response.status === 200){
        alert("form uploaded");
    }else{
        alert(response.status);
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
        <!-- <form
                action="https://locker-api.cvapps.net/admin/lockerUpload"
                enctype="multipart/form-data"
                method="post"
        >
            <input
                    accept=".csv"
                    name="csvFile"
                    required
                    type="file"
            />
            <button type="submit">Upload Locker</button>
        </form> -->

        <input accept=".csv" bind:files id="locker" name="locker" type="file" />
        <button on:click={SubmitEvent}>Upload locker</button>


    </div>

    <div class="form">
        <form
                action="https://locker-api.cvapps.net/admin/userUpload"
                enctype="multipart/form-data"
                method="post"
        >
            <input
                    accept=".csv"
                    name="csvFile"
                    required
                    type="file"
            />
            <button type="submit">Upload User</button>
        </form>
    </div>
</div>