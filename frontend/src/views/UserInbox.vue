<template>
    <div class="user-inbox">
        <!-- <div class="flex align-content space-between"> -->
        <router-view></router-view>
        <!-- </div> -->
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.user-inbox {
    padding-top: 60px;

    a {
        text-decoration: none;
    }

    .title-container {
        background-color: white;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        padding: 10px;
        margin-top: 20px;
        margin-bottom: 0;
        margin-right: 5px;

        .inbox-title {
            margin-top: 0;
            margin-bottom: 0;
            color: #292927;
            font-size: 1.2rem;
            display: inline-block;
        }
    }    
    
    .sub-title-container {
        background-color: #e9e9e5;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        padding: 10px;
        margin-top: 20px;
        margin-bottom: 0;
        margin-right: 5px;

        .inbox-sub-title {
            margin-top: 0;
            margin-bottom: 0;
            color: #9a9b94;
            display: inline-block;
        }
    }

    .friends-list, .requests-list {
        padding-top: 20px;
    }
}   
</style>
