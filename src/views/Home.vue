<template>
    <main>
        <h2>Bills Made Easy</h2>
        <p>A simple app to help keep all the bills in your life organized and in one place!</p>
        <Login :getUser="getUser" :username="username"/>
    </main>
</template>

<script>
import Login from '@/components/Login'

export default {
    name: 'Home',
    props: ['getBills', 'userId', 'getUser', 'username'],
    components: {
        Login
    },
}
</script>

<style>
main {
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding-top: 20%;
}

</style>
