<script>
    import Grid from "gridjs-svelte";
    import {h} from "gridjs";
    import Modal from '../LockerEditmodal.svelte';

    import {onMount} from 'svelte';
    import '$lib/assets/admin-table.css'
    import {fetchLockerData} from "$lib/services/admin/mainApi.js";

    import moment from 'moment';
    import {Stretch} from "svelte-loading-spinners";

    let showModal = false;
    let data;
    let number;

    function launchEdit(data) {
        number = data;
        showModal = true;
    }

    async function updateData(){
        showData = false;
        data = await fetchLockerData();
        showData = true;
    }

    $: if (!showModal) {
        updateData()
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
            id: 'status',
            formatter: (cell) => {
                if (cell === 1) {
                    return 'Disabled'
                } else {
                    return '';
                }
            }
        },
        {
            name: 'Users',
            id: 'users',
            formatter: (cell) => {
                // Return the array of student IDs
                return cell.map(user => user.studentId).join(', ');
            }
        },
        {
            name: '',
            id: 'btn',
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
    .locker-edit{
        display: flex;
        justify-content: center;
    }
</style>

<div class="locker-edit">
    <div class="modal-cont">
        <Modal bind:showModal data={number}/>
    </div>
    {#if showData}
        <Grid
                {columns}
                pagination={{ enabled: true, limit: 14  }}
                sort
                search
                height="auto"
                {data}
                {style}
        />
    {:else}
        <Stretch size="60" color="#577db2" unit="px" duration="1s"/>
    {/if}
</div>
