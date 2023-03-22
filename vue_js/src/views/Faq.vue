<template>
  <div class="page-faq">

    <menus class="site-header" :extraHeader="true" :title="title" />

    <section class="faq-list">
      <div class="row column medium-10 large-8 xxlarge-6">
        <dl>
          <dt>Q: Why should I use this app?</dt>
          <dd>A: Our app is the ultimate tool for any dog-loving professional looking to bring a little joy and
            companionship to their workplace.</dd>
          <dt>Q: How do I request a unicorn?</dt>
          <dd>A: Requesting an office dog from Pups at Work is easy! Download our app, create an account, browse office
            dogs and select a dog.</dd>
          <dt>Q: How much does it cost?</dt>
          <dd>A: The price you pay is based on factors such as distance and availability of office dogs. You set the
            maximum price you’re willing to pay.</dd>
          <dt>Q: What if I have a complaint about my Office Dog?</dt>
          <dd>A: Office Dog Leasing is a customer obsessed company. We value each customer and want to ensure a positive
            experience. Therefore, we’ve staffed our customer service team with serverless chatbots that are available
            24/7 to assist you.</dd>
          <dt>Q: How do I cancel my ride?</dt>
          <dd>A: Tap the “Cancel Dog Booking" button in the app.</dd>
          <dt>Q: Can I use Office Dog Leasing internationally?</dt>
          <dd>A: Yes, you can use Office Dog Leasing in most countries.</dd>
          <dt>Q: How do I pay for my Office Dog?</dt>
          <dd>A: After creating a account, fill in your payment method such as credit card, debit card, Bitcoin wallet, or
            Vespene gas repository. After you complete your booking, you will automatically be charged the fare.</dd>
        </dl>
      </div>
    </section>
    <footers />
  </div>
</template>

<script>
import footers from '@/components/footer.vue'
import menu from '@/components/menu.vue'

export default {
  name: 'faq',
  data() {
    return {
      title: "Frequently Asked Questions",
    }
  },
  components: {
    footers: footers,
    menus: menu
  },
}
</script>

