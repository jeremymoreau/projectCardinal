<template>
  <ion-page>
    <Header></Header>

    <ion-content overflow-scroll="true">
      <ion-card>
        <ion-card-header>
          <ion-card-title> About this App </ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-text class="md-text">
            <p>To learn more about the team behind Cardinal see the <a href="/about-us" target="_self">About Us</a> page.</p>
            <p><strong>App developed by:</strong> <a target="_blank" rel="noopener" href="https://jeremymoreau.com">Jeremy Moreau</a></p>
            <p>For questions, suggestions, or bug reports about this app send an email to:</p>
            <p> <a class="obfs-m" data-part1="jeremy.moreau" data-part2="mail.mcgill" data-part3="ca">Jeremy Moreau (tap to reveal email)</a></p>
            <br> 

            <p>Issues and pull requests are also welcome on the project GitHub: <a target="_blank" rel="noopener" href="https://github.com/jeremymoreau/projectCardinal">github.com/jeremymoreau/projectCardinal</a></p>
            
            <h3>Open Source Acknowledgments</h3>    
            <ul>
            <li><a target="_blank" rel="noopener" href="https://github.com/zloirock/core-js">core-js (MIT)</a></li>
            <li><a target="_blank" rel="noopener" href="https://github.com/ionic-team/ionic-framework">Ionic Framework (MIT)</a></li>
            <li><a target="_blank" rel="noopener" href="https://github.com/yyx990803/register-service-worker">register-service-worker (MIT)</a></li>
            <li><a target="_blank" rel="noopener" href="https://github.com/vuejs/vue-next">Vue (MIT)</a></li>
            <li><a target="_blank" rel="noopener" href="https://github.com/robinrodricks/vue3-touch-events">vue3-touch-events (MIT)</a></li>
            <li><a target="_blank" rel="noopener" href="https://github.com/MatteoGabriele/vue-gtag">Vue-gtag (MIT)</a></li>
            <li><a target="_blank" rel="noopener" href="https://github.com/vuejs/vue-router-next">Vue Router (MIT)</a></li>
            <li><a target="_blank" rel="noopener" href="https://github.com/KABBOUCHI/vue-tippy">VueTippy (MIT)</a></li>
            </ul>
            <h3>Icon Acknowledgments</h3>
            <ul>
            <li><a target="_blank" rel="noopener" href="https://jeremymoreau.com">Cardinal App Icon by <i>Jeremy Moreau</i> (© 2022 Section of Ophthalmology, University of Calgary)</a></li>
            <li><a target="_blank" rel="noopener" href="https://github.com/FortAwesome/Font-Awesome">Font-Awesome (Font Awesome Free License)</a></li>
            <li><a target="_blank" rel="noopener" href="https://github.com/Remix-Design/RemixIcon">Remix Icon (Apache License 2.0)</a></li>
            <li><a target="_blank" rel="noopener" href="https://thenounproject.com/icon/slit-lamp-3509301/">Slit Lamp Icon by <i>Nareerat Jaikaew</i> (CC-BY)</a></li>
            <li><a target="_blank" rel="noopener" href="https://thenounproject.com/icon/testing-3509299/">Testing Icon by <i>Nareerat Jaikaew</i> (CC-BY)</a></li>
            <li><a target="_blank" rel="noopener" href="https://thenounproject.com/icon/eye-surgery-4414763/">Eye Surgery Icon (Adapted) by <i>Brickclay</i> (CC-BY)</a></li>
            <li><a target="_blank" rel="noopener" href="https://thenounproject.com/icon/innovator-eye-4418125/">Innovator Eye Icon (Adapted) by <i>Berkah Icon</i> (CC-BY)</a></li>
            </ul>
          </ion-text>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang='js'>
import { defineComponent } from "vue";
import Header from "./Header.vue";
import {IonPage, IonContent} from '@ionic/vue';
export default defineComponent({
  name: "SideMenuInstall",
  components: {
    Header,
    IonPage,
    IonContent,
  },
  data() {
    return {
      tippyTouchOptions: ['hold', 300],
      langvalue: 'en'
    }
  },
  // setup() {
  //   const langvalue = {}
  //   langvalue.value = 'test'
  //   return { langvalue }
  // },
  mounted() {
    // disable context menu on nav icons (to not interfere with tooltips)
    [...document.querySelectorAll(".nav-icons")].forEach( el => 
    el.addEventListener('contextmenu', e => e.preventDefault())
    );
  },
  updated() {
    this.deObfsMail()
  },

  methods: {
    gotoPage(pageName) {
      this.$router.push({
        name: pageName,
      });
    },

    // Obfs addresses (tap to reveal)
    async deObfsMail() {
        const obfsList = document.getElementsByClassName("obfs-m")
        for (const obfsItem of obfsList) {
            obfsItem.onclick = function() {
                const outputVal = obfsItem.dataset.part1 + "@" + obfsItem.dataset.part2 + "." + obfsItem.dataset.part3
                obfsItem.href = "mai" + "lto:" + outputVal
                obfsItem.innerHTML = outputVal
            }
        }
    }
  },
})
</script>

<style scoped>
.instructions-card {
  margin-top: 10px;
}
.header-title {
  padding-top: 0px;
  padding-bottom: 0px;
}
</style>