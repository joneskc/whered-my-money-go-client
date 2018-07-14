<template>
    <div>
        <p>{{username}}</p>
        <b-form class="login container">
            <b-form-input
                v-model="username"
                size="sm"
                class="login-text mr-sm-2"
                type="text"
                placeholder="User Name"/>
            <b-button
                to="/bills"
                type="submit"
                size="sm"
                class="my-2 my-sm-0"
                @click.prevent="getUser(username)">
                Login</b-button>
        </b-form>
    </div>
</template>

<script>
export default {
    name: 'Login',
    props: ['getUser', 'username'],
}
</script>

<style>
.container {
    width: 50%;
}

</style>
