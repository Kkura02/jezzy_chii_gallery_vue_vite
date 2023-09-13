<template>
    <div :class="contStyle" class="flex mt-2 sm:mt-8">
        <button :class="btnStyle" class="shadow-md hover-animation border-2 border-solid border-kokoWhite text-kokoEyeLiner">
            {{ text }}
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
.hover-animation{
    @apply transform transition-all delay-100 duration-200 ease-in-out overflow-hidden
}
.hover-animation::before{
    content: "";


    @apply absolute left-0 top-0 w-full h-full z-[-1] bg-gradient-to-t from-kokoEyePink via-kokoEyelightPurple to-kokoEyedimPurple translate-x-0 rounded-sm transform transition-all delay-100 duration-300 ease-in-out translate-y-full
}
/* .hover-animation:hover{
    @apply -translate-x-2 -translate-y-2
} */
.hover-animation:hover::before{
    @apply translate-y-0
}
.hover-animation:hover{
    @apply border-solid border-2 border-transparent text-kokoWhite
}
</style>