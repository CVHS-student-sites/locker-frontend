<script>
    import Grid from "gridjs-svelte";
    import {h} from "gridjs";
    import Modal from '../Editmodal.svelte';
    import {onMount} from 'svelte';
    import '$lib/assets/admin-table.css'
    import {fetchUserData} from "$lib/services/admin/mainApi.js";

    import moment from 'moment';
    import {Stretch} from "svelte-loading-spinners";

    let showModal = false;
    let data;
    let id;

    function launchEdit(data) {
        id = data;
        showModal = true;
    }

    async function updateData(){
        showData = false;
        data = await fetchUserData();
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
        'Name',
        // 'Email',
        'ID',
        'Grade',
        {
            name: 'Permissions',
            formatter: (cell) => {
                if (cell === 1) {
                    return 'PreReg';
                } else {
                    return cell;
                }
            }
        },
        {
            name: 'Locker',
            formatter: (cell) => {
                if (cell === null) {
                    return 'No Locker';
                } else {
                    return cell;
                }
            }
        },
        {
            name: 'Date Registered',
            formatter: (cell) => moment(cell).format('M/D/YY, h:mm A')
        },
        {
            name: '',
            formatter: (cell, row) => {
                return [
                    h('button', {
                        "class": "main-btn",
                        onClick: () => {
                            launchEdit(row.cells[1].data)

                        }
                    }, 'Edit'),
                ];
            }
        }
    ];

    let showData = false;
    onMount(async () => {
        data = await fetchUserData();
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
        <Modal bind:showModal data={id}/>
    </div>
    {#if showData}
        <Grid
                {columns}
                pagination={{ enabled: true, limit: 14 }}
                sort
                search
                {data}
                {style}
        />

    {:else}
        <Stretch size="60" color="#577db2" unit="px" duration="1s"/>
    {/if}
</div>