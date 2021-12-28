<template>
  <ion-page>
    <Header></Header>

    <ion-content overflow-scroll="true">
      <ion-card>
        <ion-card-content>
          <ion-text class="md-text"
            ><h3 id="iphone-ios">iPhone (iOS)</h3>
            <ol>
              <li>
                <p>
                  In Safari, tap the "share" icon at the bottom of the screen
                </p>
                <p>
                  <img
                    src="/assets/SideMenu-install/install-ios-step1.png"
                    alt="iOS installation instructions screenshot step 1"
                  />
                </p>
              </li>
              <li>
                <p>Select "Add to Home Screen"</p>
                <p>
                  <img
                    src="/assets/SideMenu-install/install-ios-step2.png"
                    alt="iOS installation instructions screenshot step 2"
                  />
                </p>
              </li>
            </ol>
            <h3 id="android">Android</h3>
            <ol>
              <li>
                <p>
                  In Google Chrome, tap the "3 dots" icon at the top right of
                  the screen
                </p>
                <p>
                  <img
                    src="/assets/SideMenu-install/install-android-step1.jpg"
                    alt="Android installation instructions screenshot step 1"
                  />
                </p>
              </li>
              <li>
                <p>Select "Install app"</p>
                <p>
                  <img
                    src="/assets/SideMenu-install/install-android-step2.jpg"
                    alt="Android installation instructions screenshot step 2"
                  />
                </p>
              </li>
            </ol>
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
  name: "SideMenu-Install",
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
</style>