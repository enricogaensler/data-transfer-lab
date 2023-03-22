

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
          <p class="content">Looking for a furry companion to keep you company at the office? Look no further than our new app, Office Dog Leasing!</p>
        </div>
      </div>

      <div class="column">
        <div class="home-about-block">
          <h3 class="title icon-dog">Request An Office Dog</h3>
          <p class="content">Have a look at our Office Dogs and request the one that is the best fit to your company!</p>
        </div>
      </div>

      <div class="column">
        <div class="home-about-block">
          <h3 class="title icon-price">Pick A Price</h3>
          <p class="content">Pick a price that has all services included you wish for!</p>
        </div>
      </div>

      <div class="column">
        <div class="home-about-block">
          <h3 class="title icon-success">Boost your company</h3>
          <p class="content">Have fun with our furry friends and enjoy a productive time at the office!</p>
        </div>
      </div>
    </div>
  </section>

  <section class="home-story">
    <div class="row column large-9 xlarge-6 xxlarge-4">
      <h2 class="section-title">Our Story</h2>
      <p class="content">
        Once upon a time, a group of dog enthusiasts decided to start a company called Office Dog Leasing. Our vision was to bring the wagging tails and slobbery kisses of dogs to workplaces across the country. Because, let's be honest, who wouldn't want to cuddle a furry friend during a boring meeting?  
        We trained out furry colleagues to be well-behaved and friendly, teaching them how to fetch coffee and file papers. Okay, maybe not the latter, but they were still good boys and girls.

        Our first client was a small tech startup that was struggling with low employee morale. Our team arrived with a pack of dogs ready to brighten everyone's day. The office was suddenly filled with a chorus of barks and tail wags, and everyone's mood instantly improved. It was like the dogs had brought a whole new level of "pawsitivity" to the office.
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

      <p class="content">Enter your email to enter the limited private beta</p>

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
