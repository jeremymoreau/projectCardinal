<template>
  <ion-page>
    <Header></Header>

    <ion-content overflow-scroll="true">
      <ion-card>
        <ion-card-header>
          <ion-card-title class="case-title">
            About Us
          </ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-text class="md-text"> The Cardinal app was developed by the Section of Ophthalmology at the University of Calgary.</ion-text>


            <div class='md-text' id='main-about-block'>
              <h3> Team </h3>
              <ion-list>
                  <ion-item class='aboutus-avatar-item ion-no-padding' lines='none'>
                    <ion-avatar class="aboutus-avatar"><img src="/img/aboutus/aboutus-moreau.jpg"/></ion-avatar>
                    <ion-label text-wrap class='aboutus-label'>
                       <h3 class="aboutus-title">  Jeremy Moreau, PhD </h3>
                       <p class="aboutus-subtitle"> Medical Student </p>
                       <p class="aboutus-subtitle"> University of Calgary </p>
                        </ion-label>
                    
                  </ion-item>
                  <ion-item class='aboutus-avatar-item ion-no-padding' lines='none'>
                    <ion-avatar class="aboutus-avatar"><img src="/img/aboutus/aboutus-mak.jpg"/></ion-avatar>
                    <ion-label text-wrap class='aboutus-label'>
                       <h3 class="aboutus-title">  Michael Mak, MD, FRCSC </h3>
                       <p class="aboutus-subtitle"> Retina Fellow </p>
                       <p class="aboutus-subtitle"> McGill University </p>
                        </ion-label>
                  </ion-item>
                  <ion-item class='aboutus-avatar-item ion-no-padding' lines='none'>
                    <ion-avatar class="aboutus-avatar"><img src="/img/aboutus/aboutus-trask.jpg"/></ion-avatar>
                    <ion-label text-wrap class='aboutus-label'>
                       <h3 class="aboutus-title"> William Trask, MD </h3>
                       <p class="aboutus-subtitle"> Ophthalmology Resident </p>
                       <p class="aboutus-subtitle"> University of Calgary </p>
                        </ion-label>
                  </ion-item>
                  
                  

              </ion-list>

              <h3> Staff Supervisors </h3>
              <ion-list>

                  <ion-item class='aboutus-avatar-item ion-no-padding' lines='none'>
                    <ion-avatar class="aboutus-avatar"><img src="/img/aboutus/aboutus-adatia.jpg"/></ion-avatar>
                    <ion-label text-wrap class='aboutus-label'>
                       <h3 class="aboutus-title">  Feisal Adatia, MD, MSc, FRCSC </h3>
                       <p class="aboutus-subtitle"> Medical and Surgical Retina Specialist </p>
                       <p class="aboutus-subtitle"> University of Calgary </p>
                        </ion-label>
                    
                  </ion-item>

              </ion-list>
            </div>


          <ion-text class="md-text" v-html="pageFooter"> </ion-text>
        </ion-card-content>
      </ion-card>
    </ion-content>

    <Footer></Footer>
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

  methods: {
    gotoPage(pageName) {
      this.$router.push({
        name: pageName,
      });
    },

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
#main-about-block {
  padding-top: 10px;
}
</style>