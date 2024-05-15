<script>
    import Grid from "gridjs-svelte";
    import {h} from "gridjs";
    import Modal from '../LockerEditmodal.svelte';
    
    import {onMount} from 'svelte';
    import '$lib/assets/admin-table.css'
    import {fetchLockerData} from "$lib/services/admin/mainApi.js";

    import moment from 'moment';

    let showModal = false;
    let data;

    let number;

    //todo on modal close, we should refresh the table data
    function launchEdit(data) {
        number = data;
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
                if (cell === 1) {
                    return 'Disabled'
                } else {
                    return 'No Status';
                }
            }
        },
        {
            name: 'Users',
            formatter: (cell) => {
                // Return the array of student IDs
                return cell.map(user => user.studentId).join(', ');
            }
        },
        {
            name: '',
            formatter: (cell, row) => {
                return [
                    h('button', {
                        "class": "main-btn",
                        onClick: () => {
                            launchEdit(row.cells[0].data)

                        }
                    }, 'Edit'),
                ];
            }
        }
    ];


    let showData = false;
    onMount(async () => {
        data = await fetchLockerData();
        showData = true;
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
        <Modal bind:showModal data={number}/>
    </div>
    {#if showData}
        <Grid
                {columns}
                pagination={{ enabled: true, limit: 15  }}
                sort
                search
                height="auto"
                {data}
                {style}
        />
    {/if}
</div>
