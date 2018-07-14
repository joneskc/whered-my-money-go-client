<template>
    <b-list-group class="bill">
        <b-list-group-item class="flex-column align-items-start bg-white">
            <div class="d-flex w-100 justify-content-between">
                <h4 class="mb-1">{{bill.name}}</h4>
                <p>{{bill.dueDate | moment("dddd MMMM, Do YYYY")}}</p>
            </div>
            <h3>${{bill.amount}}</h3>
            <p>{{bill.status}}</p>
        </b-list-group-item>
        <b-list-group-item class="flex-column align-items-start bg-primary">
            <b-button
                @click="showUpdateForm = !showUpdateForm"
                variant="secondary">Update</b-button>
            <b-button @click.prevent="deleteBill(bill)" size="small" variant="danger">
                Delete
            </b-button>
            <b-form @submit.prevent="updateBill(bill)" v-if="showUpdateForm">
                <b-form-group label="status">
                    <b-form-radio-group v-model="updateForm.status"
                                        :options="options"
                                        name="status">
                    </b-form-radio-group>
                </b-form-group>
                <b-button type="submit" variant="success">Update Bill</b-button>
            </b-form>
        </b-list-group-item>
    </b-list-group>
</template>

<script>
export default {
name: 'bill',
props: ['bill', 'getBills', 'userId', 'paidUnpaid'],
data () {
    return {
        showUpdateForm: false,
        selected: 'unpaid',
        deletedBill: null,
        newStatus: '',
        options: [
            { text: 'Unpaid', value: 'Unpaid' },
            { text: 'Paid', value: 'Paid' },
        ],
        deletedBill: null,
        updateForm: {
            userId: this.userId,
            name: this.bill.name,
            amount: this.bill.amount,
            dueDate: this.bill.dueDate,
            status: this.bill.status.value
        }
    }
},
methods: {
    deleteBill(deletedBill) {
        const DELETE_BILL_API_URL = `https://sheltered-meadow-21600.herokuapp.com/api/bills/${deletedBill.id}`
        fetch(DELETE_BILL_API_URL, {
            method: "DELETE",
            body: JSON.stringify(deletedBill),
            headers: new Headers({"content-type": "application/json"})
        })
        .then(data => {
            this.getBills();
        })
    },
    updateBill(bill) {
        const UPDATE_BILL_API_URL = `https://sheltered-meadow-21600.herokuapp.com/api/bills/${bill.id}`
        const data = this.updateForm
        fetch(UPDATE_BILL_API_URL, {
            method: "PUT",
            headers: new Headers({"content-type": "application/json"}),
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            this.getBills()
            this.showUpdateForm = false
        })
    },
}
}
</script>

<style>
.list-group-item {
    position: initial;
}
.bill {
    margin-bottom: 2em;
}
button {
    margin-bottom: 2em;
}
</style>
