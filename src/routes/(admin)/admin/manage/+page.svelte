<script>
    import BuildingEdit from "./BuildingEdit.svelte";

    import RegisterEdit from "./RegisterEdit.svelte";

    import UploadData from "./UploadData.svelte";
</script>

<svelte:head>
    <title>Locker - Manage</title>
</svelte:head>

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
        background-color: var(--background);
        flex: 1;
    }

    .grid-container {
        width: 100%;
        flex: 1;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        gap: 10px;
        min-height: 0;
        min-width: 0;
    }

    .grid-item {
        /*background-color: #1b2c42;*/
        background-color: #18181b;
        border-radius: 10px;
        padding: 8px 8px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        min-width: 0;
        min-height: 0;
    }

    .subcont-title {
        font-size: 17px;
        font-family: "Montserrat", sans-serif;
        color: #d6d6d6;
    }

    .subcont-main {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: start;
        flex-direction: column;
        gap: 5px;
        padding: 5px;
        box-sizing: border-box;
    }

    .subcont-order {
        flex: 1;
        width: 100%;
        display: flex;
        flex-direction: row;
        /*background-color: green;*/
        box-sizing: border-box;
        align-items: center;
        justify-content: center;
        overflow-y: scroll;
        gap: 5px;
    }


</style>

<div class="main">
    <div class="grid-container">
        <div class="grid-item">
            <div class="subcont-main">
                <div class="subcont-title">Config Restrictions</div>
                <div class="subcont-order">
                    <RegisterEdit/>
                    <BuildingEdit/>
                </div>
            </div>

        </div>

        <div class="grid-item">
            <div class="subcont-main">
                <div class="subcont-title">Upload Data</div>
                <UploadData/>
            </div>
        </div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
    </div>
</div>
