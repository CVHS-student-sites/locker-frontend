<script>
  import Select from 'svelte-select';
    
    export let items;
    export let value = null;

    export let placeholder;
</script>
<Select {items} bind:value clearable={false} searchable={false} showChevron={true} placeholder={placeholder} inputStyles="caret-color: transparent;" --list-border-radius="4px" --background="#17171c" --border="2px solid #005cb3" --border-hover="2px solid #577db2"  --list-background="#1a3c69" --item-color="#d6d6d6" --item-hover-bg="#0084ff"/>