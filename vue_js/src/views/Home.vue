

<template>
  <div class="home">
   
      <menus class="site-header" showTitle="true" />
    
  <section class="home-about">
    <div class="row column large-9 xlarge-6 xxlarge-4">
      <h2 class="section-title">How Does This Work?</h2>
      <p class="content">
        Attention all companies looking to boost employee morale and productivity! Introducing our office dog leasing program, the paw-some solution for companies looking to add some tail-wagging excitement to their workday. We're talking about the four-legged furballs who are scientifically proven to be the best stress-relievers, communication boosters, and morale-lifters around.
      </p>
    </div>

    <div class="row medium-up-2 large-up-4">
      <div class="column">
        <div class="home-about-block">
          <h3 class="title icon-download">Download The App</h3>
          <p class="content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
        </div>
      </div>

      <div class="column">
        <div class="home-about-block">
          <h3 class="title icon-unicorn">Request A Unicorn</h3>
          <p class="content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
        </div>
      </div>

      <div class="column">
        <div class="home-about-block">
          <h3 class="title icon-price">Pick A Price</h3>
          <p class="content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
        </div>
      </div>

      <div class="column">
        <div class="home-about-block">
          <h3 class="title icon-success">Ride Off To Success!</h3>
          <p class="content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
        </div>
      </div>
    </div>
  </section>

  <section class="home-story">
    <div class="row column large-9 xlarge-6 xxlarge-4">
      <h2 class="section-title">Our Story</h2>
      <p class="content">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </p>
    </div>
  </section>

  <section class="home-sign-up">
    <div class="row column">
      <img class="icon-w" src="images/logo-bone.png">

      <form onsubmit="javascript:void(0);">
        <input type="email" placeholder="Enter your email address">
        <button type="button">Submit</button>
      </form>

      <h2 class="section-title">Sign Up</h2>

      <p class="content">Wild Rydes is coming soon! Enter your email to enter the limited private beta</p>

      <div class="apps">
        <a class="app-icon" href=""><img src="images/wr-home-apple.png"></a>
        <a class="app-icon" href=""><img src="images/wr-home-google.png"></a>
        <a class="app-icon" href=""><img src="images/wr-home-blackberry.png"></a>
        <a class="app-icon" href=""><img src="images/wr-home-Xiaomi.png"></a>
      </div>

      <div class="social">
        <a class="icon-fb" href="">Facebook</a>
        <a class="icon-tw" href="">Twitter</a>
        <a class="icon-ig" href="">Instagram</a>
        <a class="icon-wc" href="">Wechat</a>
        <a class="icon-wb" href="">Weibo</a>
      </div>
    </div>
  </section>

    <footers />
  </div>
</template>

<script>
// @ is an alias to /src
import footers from '@/components/footer.vue'
import menu from '@/components/menu.vue'

export default {
  name: 'home',
  components: {
    footers: footers,
    menus: menu
  },
}

</script>
