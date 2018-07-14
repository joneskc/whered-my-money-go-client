<template>
  <section>
    <div id="chart-container">
      <pie
        :chart-data="chartData"
        :options="options"/>
    </div>
  </section>
</template>

<script>
import Pie from '../Chart'

export default {
  props: ['paid', 'unpaid'],
  components: {
      Pie
  },
  data() {
    return {
      options: {
        legend: {
          labels: {
            fontColor: "black",
          }
        }
      },
      chartData: {
        labels: ['Paid', 'Unpaid'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: ['green', 'red'],
            data: [
              this.paid,
              this.unpaid
              ]
          }
        ],
      },
    }
  },
}
</script>

<style scoped>
  #chart-container {
    display: block;
    background-color: white;
    color: black;
    width: 500px;
    padding-bottom: 5%;
    border-radius: .25rem;
    padding-top: 0.375rem;
    padding-right: 0.75rem;
    padding-bottom: 3rem;
    padding-left: 0.75rem;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 500px){
    #chart-container {
        margin-bottom: 1%;
    }

  }
</style>
