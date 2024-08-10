<script>
    import {draw, fade} from 'svelte/transition';
    import {quintOut} from 'svelte/easing';
    import {onMount} from 'svelte';
    import { goto } from '$app/navigation';

    let condition = false;

    let count = 0;
    function incrementCount() {
        count++
        if(count === 5){
            window.location = "https://shattereddisk.github.io/rickroll/rickroll.mp4"
        }
    }

    onMount(() => {
        condition = true;
    });
</script>

<style>
    svg {
        display: block;
        height: 200px;
        width: 200px;
    }

    .svg-cont {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .cred-text{
        font-family: "Montserrat", sans-serif;
        color: var(--text);
        font-size: 16px;
    }
</style>

<div class="svg-cont">
    <svg class="logo" viewBox="0 0 1175 825" xmlns="http://www.w3.org/2000/svg" on:click={incrementCount}>
        {#if condition}
            <g id="_0" serif:id="0" transform="matrix(1,0,0,1,214.015,494.108)">
                <g transform="matrix(1,0,0,1,-214.015,-494.108)">
                    <path d="M228.643,550.801L371.173,53.741L430.15,53.741L367.014,273.925L596.07,273.925L516.677,550.801L228.643,550.801ZM303.877,494.108L473.956,494.108L520.836,330.618L350.757,330.618L303.877,494.108Z"
                          style="fill:white;" in:fade="{{duration: 700, delay: 1400}}"/>
                </g>
                <g>
                    <g transform="matrix(1,0,0,1,-214.015,-494.108)">
                        <path d="M228.643,550.801L371.173,53.741L430.15,53.741L367.014,273.925L596.07,273.925L516.677,550.801L228.643,550.801Z"
                              style="fill:none;stroke:white;stroke-width:6px;stroke-miterlimit:1.5;"
                              in:draw="{{duration: 2000, easing: quintOut}}"/>
                    </g>
                    <g transform="matrix(1,0,0,1,-214.015,-494.108)">
                        <path d="M303.877,494.108L350.757,330.618L520.836,330.618L473.956,494.108L303.877,494.108Z"
                              style="fill:none;stroke:white;stroke-width:6px;stroke-miterlimit:1.5;"
                              in:draw="{{duration: 2000, delay: 200, easing: quintOut}}"/>
                    </g>
                </g>
                <g transform="matrix(1,0,0,1,-214.015,-494.108)">
                    <path d="M515.311,770.984L657.84,273.925L945.874,273.925L866.481,550.801L637.425,550.801L574.288,770.984L515.311,770.984ZM653.681,494.108L823.76,494.108L870.64,330.618L700.561,330.618L653.681,494.108Z"
                          style="fill:white;" in:fade="{{duration: 700, delay: 1400}}"/>
                </g>
                <g>
                    <g transform="matrix(1,0,0,1,-214.015,-494.108)">
                        <path d="M515.311,770.984L657.84,273.925L945.874,273.925L866.481,550.801L637.425,550.801L574.288,770.984L515.311,770.984Z"
                              style="fill:none;stroke:white;stroke-width:6px;stroke-miterlimit:1.5;"
                              in:draw="{{duration: 2000, easing: quintOut}}"/>
                    </g>
                    <g transform="matrix(1,0,0,1,-214.015,-494.108)">
                        <path d="M653.681,494.108L700.561,330.618L870.64,330.618L823.76,494.108L653.681,494.108Z"
                              style="fill:none;stroke:white;stroke-width:6px;stroke-miterlimit:1.5;"
                              in:draw="{{duration: 2000, delay: 200, easing: quintOut}}"/>
                    </g>
                </g>
            </g>
        {/if}
    </svg>

    <div class="cred-text">Site Developed by birdpump</div>
</div>