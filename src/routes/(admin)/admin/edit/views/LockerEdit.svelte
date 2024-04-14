<script>
    import Grid from "gridjs-svelte";
    import {h} from "gridjs";
    import Modal from '../Editmodal.svelte';
    import {onMount} from 'svelte';
    import '$lib/assets/admin-table.css'
    import {fetchLockerData} from "$lib/services/admin/mainApi.js";

    import moment from 'moment';

    let showModal = false;
    let data;

    function launchEdit(id) {
        console.log("all")
        showModal = true;
    }

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
        footer: {
            'color': '#d6d6d6',
            'background-color': '#18181b',
            'border-top': 'none',
        },
        header: {
            padding: '0px',
            border: 'none'
        }
    }

    const columns = [
        'Number',
        'Floor',
        'Level',
        'Building',
        {
            name: 'Status',
            formatter: (cell) => {
                if (cell === null) {
                    return 'No Status';
                } else {
                    return cell;
                }
            }
        },
        'Users',
        {
            name: 'Date Created',
            formatter: (cell) => moment(cell).format('M/D/YY, h:mm A')
        },
        {
            name: 'Date Updated',
            formatter: (cell) => moment(cell).format('M/D/YY, h:mm A')
        },
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
                ];
            }
        }
    ];

    let promise = Promise.resolve([]);
    onMount(async () => {
        promise = await fetchLockerData();
    });
</script>

<svelte:head>
    <title>Locker - Edit</title>
</svelte:head>

<style>
    /* Your styles here */
</style>

<div class="locker-edit">
    <div class="modal-cont">
        <Modal bind:showModal/>
    </div>
    {#await promise}
        <p>...waiting</p>
    {:then data}
        <Grid
                {columns}
                pagination={{ enabled: true, limit: 11 }}
                search
                {data}
                {style}
        />
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}
</div>
