<script>
    import Grid from "gridjs-svelte";
    import {h} from "gridjs";
    import Modal from '../Editmodal.svelte';
    import {onMount} from 'svelte';
    import '$lib/assets/admin-table.css'
    import {fetchUserData} from "$lib/services/admin/mainApi.js";

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
    /* Your styles here */
</style>

<div class="locker-edit">
    <div class="modal-cont">
        <Modal bind:showModal/>
    </div>
    <Grid
            {columns}
            pagination={{ enabled: true, limit: 11 }}
            search
            server={{
		url: 'https://locker-api.cvapps.net/admin/data/user-data?page=1&pageSize=10',
		then: data => data.results.map(movie => {
			return [movie[0], movie[1], movie[2], movie[3], movie[4], movie[5]]
		})
	}}
            {style}
    />
</div>
