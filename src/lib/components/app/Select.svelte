<script>
    import Select from 'svelte-select';
      
      export let items;
      export let value = null;

      export let placeholder;
  </script>
  <Select {items} bind:value clearable={false} showChevron={true} placeholder={placeholder} --item-transition="0.3s ease" inputStyles="caret-color: transparent;" --background="#17171c" --border="2px solid #005cb3" --border-hover="2px solid #577db2"  --border-focused="2px solid #577db2" --list-background="#1a3c69" --item-color="#d6d6d6" --item-hover-bg="#0084ff"/>