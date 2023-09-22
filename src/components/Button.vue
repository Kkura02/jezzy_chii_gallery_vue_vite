<template>
    <div :class="contStyle" class="">
        <button :class="btnStyle" class="btn-default-style">
            {{ text }}
            <slot></slot>
        </button>
    </div>
</template>

<script>
export default {
    props:['btnStyle','text','contStyle'],
    data(){
        return{
            btnStyle: this.btnStyle,
            text: this.text,
            contStyle: this.contStyle
        }
    }
}
</script>

<style>
.btn-default-style{
    /* @apply shadow-md hover-animation border-2 border-solid border-kokoWhite text-kokoEyeLiner */
}

.btn-default-style {
 background-color: #f8f7fd;
 border: none;
 padding: .5rem;
 font-size: 1rem;
 border-radius: 1rem;
 color: #f08080;
 box-shadow: 0 0.4rem #dfd9d9;
 cursor: pointer;

 @apply transition ease-in-out delay-100 duration-300
}

.standard-size{
    @apply w-[8em] sm:w-[10em]
}

.btn-default-style:active {
 color: white;
 box-shadow: 0 0.2rem #dfd9d9;
 transform: translateY(0.2rem);
}

.btn-default-style:hover:not(:disabled) {
 background: lightcoral;
 color: white;
 text-shadow: 0 0.1rem #bcb4b4;
}

.btn-default-style:disabled {
 cursor: auto;
 color: grey;
}
</style>