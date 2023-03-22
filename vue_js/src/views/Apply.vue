<template>
  <div class="page-apply">

    <header class="site-header">
      <menus :extraHeader="true" :title="title" :content="content" />
    </header>
    <section class="content">
      <div class="row column medium-10 large-7 xlarge-5">
        <p>
          Welcome to Office Dog Leasing, the ultimate career destination for dog lovers!
        <p>
          Do you have a passion for pups and a love for the office grind? Do you want to spend your days surrounded by
          wagging tails and slobbery kisses? Then you've come to the right place!
        </p>
        <p>
          At Office Dog Leasing, we're not just a company, we're a pack. And we're always on the lookout for new members to join
          our team. Here are just a few of the positions we're currently hiring for:
        </p>
        <p>
          Dog Leasing Coordinator: Are you a natural matchmaker with a talent for connecting dogs with the perfect
          workplace? Then this is the job for you! As our Dog Leasing Coordinator, you'll be responsible for matching our
          furry friends with companies in need of a little canine companionship.
        </p>
        <p>
          Canine Trainer: Do you have a knack for teaching dogs new tricks and manners? Are you a master at obedience
          training and potty training? Then we need you! As our Canine Trainer, you'll be responsible for making sure our
          office dogs are well-behaved and friendly, with a few impressive tricks up their sleeves.
        </p>
        So what are you waiting for? Join the Office Dog Leasing team and let your love for dogs and your career collide in the
        best way possible. We promise it will be pawsome!
        </p>
      </div>
    </section>
    <footers />
  </div>
</template>

<script>
import footers from '@/components/footer.vue'
import menu from '@/components/menu.vue'

export default {
  name: 'home',
  data() {
    return {
      title: "Apply Today"
    }
  },
  components: {
    footers: footers,
    menus: menu
  },
}
</script>

