<template>
    <div class="container">
        <div class="title">当前开户人数</div>
        <CountFolp num="num"/>
    </div>
</template>

<script>
import CountFolp from '@/components/CountFolp'
export default {
    components: {
        CountFolp
    },
    data() { 
        return {
            num:999
        }
    },
    mounted() { 
        // setInterval(() => {
        //     console.log(this.num1)
        //     this.num1 ++
        // }, 1000);
    }
}
</script>

<style>

</style>