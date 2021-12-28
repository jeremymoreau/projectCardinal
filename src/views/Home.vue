<template>
  <ion-page>
      <Header></Header>

    <ion-content overflow-scroll="true">
        <ion-card>
            <ion-img id='cardinal-logo' src='assets/icon/projectCardinal_logo.svg' />
            <ion-card-content id='top-blurb'>
            <ion-text>
                Cardinal (cardinal.ophtho.app) provides a simple way for ophthalmologists and allied health professionals to communicate essential instructions to patients in over 10 languages.
            </ion-text>
            </ion-card-content>
        </ion-card>
        <ion-card>
            <ion-card-content class='btn-card'>
                <ion-grid>
                    <ion-row>
                        <ion-col>
                            <div class='btn-group'>
                                <ion-img src='assets/icon/slit_lamp.svg' />
                                <ion-button expand="block" @click="gotoPage('SlitLamp')">Slit Lamp</ion-button>
                            </div>
                        </ion-col>
                        <ion-col>
                            <div class='btn-group'>
                                <ion-img src='assets/icon/trial_frames.svg' />
                                <ion-button expand="block" @click="gotoPage('Orthoptics')">Orthoptics</ion-button>
                            </div>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col>
                            <div class='btn-group'>
                                <ion-img src='assets/icon/cataract.svg' />
                                <ion-button expand="block" @click="gotoPage('SlitLamp')">Cataracts</ion-button>
                            </div>
                        </ion-col>
                        <ion-col>
                            <div class='btn-group'>
                                <ion-img src='assets/icon/neuro.svg' />
                                <ion-button expand="block" @click="gotoPage('Orthoptics')">Neuro</ion-button>
                            </div>
                        </ion-col>
                    </ion-row>
                </ion-grid>
            </ion-card-content>
        </ion-card>
        <ion-text class="copyright" color="dark"
            >© 2021 Section of Ophthalmology,<br>University of Calgary
        </ion-text>
    </ion-content>

  </ion-page>
</template>

<script lang='js'>
import { defineComponent } from "vue";
import Header from "./Header.vue";
import {IonPage, IonContent} from '@ionic/vue';
export default defineComponent({
  name: "Home",
  components: {
    Header,
    IonPage,
    IonContent
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
#cardinal-logo {
    margin: auto;
    width: 180px;
}
#top-blurb {
    padding-top: 0px;
}
.main-content {
    padding: 10px;
}
.btn-group {
    padding: 10px;
}
.btn-card {
    padding: 0px;
}

.copyright {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  text-align: center;
  hyphens: none;
  padding-bottom: 20px;
}
</style>