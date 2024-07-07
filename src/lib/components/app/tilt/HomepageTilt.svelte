<script>
    import {tilt} from "./effect.js";
</script>

<style>


    .main {
        width: 300px;
        height: 300px;
        display: flex;
        align-items: center;
        justify-content: center;
        transform-style: preserve-3d;
        transform: perspective(1000px);
        background-image: url('/locker.svg');
        background-size: contain;
    }

    .inner {
        width: 200px;
        height: 200px;
        transform: translateZ(20px);
    }

    .logo{
        width: 200px;
        height: 200px;
    }
</style>


<div class="main"
     use:tilt={{ "full-page-listening": true, reverse: true, glare: false, "max-glare":0.5, speed:2000, "max":"10", perspective:500 }}>
    <div class="inner">
        <img class="logo" src="/CVHS-logo.png">
    </div>

</div>

