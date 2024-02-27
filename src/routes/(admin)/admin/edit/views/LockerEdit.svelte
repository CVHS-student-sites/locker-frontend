<script>
    //todo create reusable table component
    import Grid from "gridjs-svelte";
    import { h, PluginPosition } from "gridjs";
    // import "gridjs/dist/theme/mermaid.css";
    import '$lib/assets/admin-table.css'
    import Modal from '../Editmodal.svelte';

    let showModal = false;

    function launchEdit(id){
        console.log("all")
        showModal = true;
    }

    const data = [
        ["2024", "mhye5631@stu.gusd.net", 415631, 10, "1125"],
        ["2028", "bfred415@stu.gusd.net", 415632, 10, "1125"],
        ["2024", "juo9d415@stu.gusd.net", 415532, 11, "1130"],
    ];

    const style = {
        container: {
            padding: '0px',
        },
        table: {
            border: 'none'
        },
        th: {
            color: '#d6d6d6',
            'background-color': '#18181b',
            'border-bottom': '2px solid #0084ff',
            'border-left': 'none',
            'border-right': 'none',
            'text-align': 'center',

        },
        td: {
            color: '#d6d6d6',
            'background-color': '#18181b',
            'border-bottom': '1px solid #1b2c42',
            'border-left': 'none',
            'border-right': 'none',
            'text-align': 'center'
        },
        footer:{
            'color': '#d6d6d6',
            'background-color': '#18181b',
            'border-top': 'none',
        },
        header:{
            padding: '0px',
            border: 'none'
        }

    }

    const columns = [
        'Name',
        'Email',
        'ID',
        'Grade',
        'Locker',
        {
            name: '',
            formatter: (cell, row) => {
                return [
                    h('button', {
                        "class": "main-btn",
                        onClick: () => {
                            launchEdit(row.cells[2].data)

                        }
                    }, 'Edit'),
                    h('button', {
                        "class": "main-btn",
                        onClick: () => {


                        }
                    }, 'Delete')
                ];
            }
        }
    ];


</script>

<svelte:head>
    <title>Locker - Edit</title>
    <link href="https://fonts.googleapis.com" rel="preconnect">
    <link crossorigin href="https://fonts.gstatic.com" rel="preconnect">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet">
    <link
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
            rel="stylesheet"
    />
</svelte:head>

<style>
    :root {
        --text: #d6d6d6;
        --background: #101014;
        --primary: #0084ff;
        --secondary: #1b2c42;
        --accent: #577db2;
    }

    .locker-edit {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        background-color: var(--background);
        /* flex: 1; */
    }

    :global(.main-btn) {
        color: #d6d6d6;
        background-color: #0084ff;
        border: none;
        border-radius: 5px;
        padding: 5px;
        margin: 0 5px 0 5px;
    }
    :global(.main-btn:hover) {
        cursor: pointer;
        background-color: #577db2;
    }
</style>

<div class="locker-edit">

    <div class="modal-cont">
        <Modal bind:showModal/>
    </div>
    <Grid

            search
            pagination={{ enabled: true, limit: 2 }}
            {style}
            {columns}
            {data} />
</div>
