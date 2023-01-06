<template>
<div class="page-unicorns">
    
    <menus class="site-header" :extraHeader="true" :title="title" :logoColor="'dark'"  />

 <div class="row column medium-10 large-8 xxlarge-6">
    <p class="content">
      Wild Rydes has a dedicated staff that recruits, trains, and tends to our herd of unicorns. We take great pride in the quality of unicorns and rydes that we provide to our customers, and our staff exercises the utmost care in vetting the unicorns that join our herd.
    </p>
    <p class="content">
      Every unicorn goes through a rigorous due diligence process where we perform background checks, flying exams, and several rounds of interviews. Unicorns accepted to Wild Rydes are then treated to the best care and maintenance possible. We provide them excellent benefits, health care, and employee perks. This is part of our company philosophy in which happy unicorns lead to happy customers.
    </p>
    <p class="content">Meet a few of the unicorns that are part of our family.</p>
  </div>

  <section class="unicorns-list">

    <div class="row" v-for="(unicorn, index) in unicorns" :key="unicorn.id">
      <div class="unicorn jimmy">
        <div :class="{'columns medium-5 large-6 xlarge-5 xlarge-offset-1': index%2==0, 'columns medium-5 medium-push-7 large-6 large-push-6 xlarge-5 xlarge-offset-1 xlarge-push-5': index%2!=0}">
          <img :src="`/api/unicorns/image?id=${unicorn.image}`" width="500">
        </div>
        <div :class="{'columns medium-7 large-6 xlarge-5 xxlarge-4': index%2==0, 'columns medium-7 medium-pull-5 large-6 large-pull-6 xlarge-5 xlarge-pull-5 xxlarge-4 xxlarge-offset-1': index%2!=0}">
          <h2 class="title">{{unicorn.name}}</h2>
          <div class="subtitle">{{unicorn.nickname}}</div>
          <p class="content">
            {{unicorn.info}}
          </p>
        </div>
      </div>
    </div>
  </section>
  <footers />
</div>

</template>

<script>
import footers from '@/components/footer.vue'
import menu from '@/components/menu.vue'
import {getAllUnicorns, getUnicornImage } from '../services/UnicornService'

export default {
  name: 'unicorns',
  data(){
    return{
      title:"Our Projects",
      content:"The app is what makes this service exist, but the unicorns make it move. Meet them and see who you are riding with!",
      unicorns: [],
    }
  },
  components: {
    footers: footers,
    menus: menu
  },
  methods: {
    getAllUnicorns() {
      getAllUnicorns().then(response => {
        console.log(response)
        this.unicorns = response
      })
    },
  },
  beforeMount () {
    this.getAllUnicorns();
  }
}
</script>

