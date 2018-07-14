<template>
    <div>
        <b-button
            @click="showForm = !showForm"
            variant="primary">Add a Bill</b-button>
        <b-form @submit="onSubmit" v-if="showForm">
            <b-form-group id="name"
                            label="Bill Name:"
                            label-for="name">
                <b-form-input id="name"
                            type="string"
                            v-model="form.name"
                            required
                            placeholder="Enter bill name">
                </b-form-input>
            </b-form-group>
            <b-form-group id="amount"
                            label="Amount:"
                            label-for="amount">
                <b-form-input id="amount"
                            type="number"
                            v-model="form.amount"
                            required
                            placeholder="Amount due">
                </b-form-input>
            </b-form-group>
            <b-form-group id="dueDate"
                            label="Due Date:"
                            label-for="dueDate">
                    <b-form-input id="dueDate"
                                type="date"
                                v-model="form.dueDate"
                                required
                                placeholder="Due date">
                    </b-form-input>
            </b-form-group>
            <b-button type="submit" variant="success">Add Bill</b-button>
        </b-form>
    </div>
</template>

<script>
export default {
props: ['userId', 'getBills'],
data () {
    return {
        showForm: false,
        form: {
            userId: this.userId,
            name: '',
            amount: null,
            dueDate: null,
            status: 'Unpaid'
        }
    }
},
methods: {
    onSubmit() {
        const POST_API_URL = 'https://sheltered-meadow-21600.herokuapp.com/api/bills/'
        const data = this.form
        fetch(POST_API_URL, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data),
            mode: 'cors',
        })
        .then(res => res.json())
        .then(res => {
            this.getBills()
            this.showForm = false
            this.clearForm()
            console.log('it posted')
        })
    },
    clearForm() {
        this.form = {
            userId: this.userId,
            name: '',
            amount: null,
            dueDate: null,
            status: 'Unpaid'
        }
    }
}
}
</script>

<style>
form {
    padding-bottom: 2em;
}

</style>
