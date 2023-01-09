

<template>
  <div class="home">
   
      <menus class="site-header" showTitle="true" />
    
  <section class="home-about">
    <div class="row column large-9 xlarge-6 xxlarge-4">
      <h2 class="section-title">How Does This Work?</h2>
      <p class="content">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
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
      <img class="icon-w" src="images/wr-home-W.png">

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

  <section class="home-quote">
    <div class="row column medium-8 xxlarge-6">
      <div class="quote-wrap">
        <div class="quote">
          “I was almost late to my ultimate frisbee tournament in DOLORES park. But Wild Rydes Got me there from the marina in under five minutes.”
        </div>
        <div class="quoter">- Satisfied Wild Rydes User</div>
      </div>
    </div>
  </section>

  <section class="kraken-callout">
    <div class="row">
      <div class="columns medium-6 xxlarge-4 xxlarge-offset-2">
        <img src="images/wr-home-kraken.png">
      </div>

      <div class="columns medium-6 xlarge-5 xxlarge-4">
        <h4 class="title">Coming Soon</h4>
        <p class="content">
          Kraken 3xplorer and Dragon Flyght. We’re looking to provide you a full service package from air, land, and to sea.
        </p>
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
