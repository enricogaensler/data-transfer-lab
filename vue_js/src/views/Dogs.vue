<template>
<div class="page-dogs">
    
    <menus class="site-header" :extraHeader="true" :title="title" :logoColor="'dark'"  />

 <div class="row column medium-10 large-8 xxlarge-6">
    <p class="content">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.    </p>
    <p class="content">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
    </p>
    <p class="content">See our new windfarm projects.</p>
  </div>

  <section class="dogs-list">

    <div class="row" v-for="(dog, index) in dogs" :key="dog.id">
      <div class="dog jimmy">
        <div :class="{'columns medium-5 large-6 xlarge-5 xlarge-offset-1': index%2==0, 'columns medium-5 medium-push-7 large-6 large-push-6 xlarge-5 xlarge-offset-1 xlarge-push-5': index%2!=0}">
          <img :src="`/api/dogs/image?id=${dog.image}`" width="500">
        </div>
        <div :class="{'columns medium-7 large-6 xlarge-5 xxlarge-4': index%2==0, 'columns medium-7 medium-pull-5 large-6 large-pull-6 xlarge-5 xlarge-pull-5 xxlarge-4 xxlarge-offset-1': index%2!=0}">
          <h2 class="title">{{dog.name}}</h2>
          <div class="subtitle">{{dog.nickname}}</div>
          <p class="content">
            {{dog.info}}
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
import {getAllDogs} from '../services/DogService'

export default {
  name: 'dogs',
  data(){
    return{
      title:"The Office Dogs",
      content:"The app is what makes this service exist, but the unicorns make it move. Meet them and see who you are riding with!",
      dogs: [],
    }
  },
  components: {
    footers: footers,
    menus: menu
  },
  methods: {
    getAllDogs() {
      getAllDogs().then(response => {
        console.log(response)
        this.dogs = response
      })
    },
  },
  beforeMount () {
    this.getAllDogs();
  }
}
</script>

