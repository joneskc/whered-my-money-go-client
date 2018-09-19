<template>
    <div class="container">
        <h1>{{userName}}'s Bills</h1>
        <NewBillForm
            :userIdNumber="userId"
            :getBills="getBills"/>
        <Bill
            v-for="bill in bills.data"
            :bill="bill"
            :key="bill.id"
            :userId="userId"
            :getUsersBills="getUsersBills"/>
        <b-button
            id="chartButton"
            @click="onClick"
            variant="secondary">Show Monthly Progress</b-button>
        <paymentChart
            :paid="paid"
            :unpaid="unpaid"
            v-if="openChart"/>
    </div>
</template>

<script>
import Bill from '@/components/Bill'
import NewBillForm from '@/components/NewBillForm'
import paymentChart from '@/components/paymentChart'

export default {
    name: 'Bills',
    components: {
        Bill,
        NewBillForm,
        paymentChart
    },
    props: ['userName', 'userId', 'bills', 'getUsersBills'],
    data() {
        return {
            openChart: false,
            paid: null,
            unpaid: null,
        }
    },
    methods: {
        onClick() {
            this.showChart()
            this.paidUnpaid()
        },
        showChart() {
            this.openChart = !this.openChart
        },
        paidUnpaid() {
            this.paidBills()
            this.unpaidBills()
        },
        paidBills(bills) {
            this.paid = this.bills.data.filter(bill => bill.status === 'Paid').length
        },
        unpaidBills(bills) {
            this.unpaid = this.bills.data.filter(bill => bill.status === 'Unpaid').length
        }
    }
}
</script>

<style>
.container {
    width: 60%;
}

h1 {
    margin: 0.5em;
}

#chartButton {
    margin-bottom: 4em;
}

</style>
