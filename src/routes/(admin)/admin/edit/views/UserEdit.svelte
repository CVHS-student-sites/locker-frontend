<script>
    import Grid from "gridjs-svelte";
    import { h, PluginPosition } from "gridjs";
    // import "gridjs/dist/theme/mermaid.css";
    import '$lib/assets/admin-table.css'
    import Modal from '../Editmodal.svelte';
    import { onMount } from 'svelte';

    import {fetchUserData} from "$lib/services/admin/mainApi.js";


    let showModal = false;

    function launchEdit(id){
        console.log("all")
        showModal = true;
    }

    let data;

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
        'Date Created',
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


    onMount(async () => {
        data = await fetchUserData();
    });
</script>

<svelte:head>
    <title>Locker - Edit</title>
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
            pagination={{ enabled: true, limit: 11 }}
            {style}
            {columns}
            {data}
             />
</div>
