<template>
    <div>
        <div class="flex align-content space-between">
        <router-link to="/inbox/friends">
        <button class="btn">Friends</button> 
        </router-link> 
        <router-link to="/inbox/requests">
        <button class="btn">Requests</button> 
        </router-link>
        <router-view></router-view>
        </div>

    </div>
</template>

<script>
export default {
    data: () => ({
  })
}
</script>

<style>
    .btn{
        z-index: 10;
    }
</style>
