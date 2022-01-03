<template>
  <ion-page>
      <Header></Header>

    <ion-content overflow-scroll="true">
         <ion-item color='none' class='item-lang'  lines=none>
            <ion-label><strong>Language</strong></ion-label>
            <ion-select multiple="false" cancel-text="Cancel" ok-text="Select" v-model="langvalue">
              <ion-select-option value="en">English</ion-select-option>
              <ion-select-option value="fr">French (Français)</ion-select-option>
            </ion-select>
         </ion-item>

         <ion-card class="instructions-card">
             <ion-card-content>
                 Tap on a button to play recording in selected language. Tap and hold on a button to preview what will be played.
             </ion-card-content>
         </ion-card>
         <!-- </ion-button> -->
        <ion-card>
          <ion-card-content>
                <ion-grid>
                    <ion-row>
                       <ion-col class='nav-container' @click="playAudio('chin-up')"><i class="fas fa-angle-double-up nav-icons" v-tippy="{content: 'Move your chin up', touch: tippyTouchOptions}"></i></ion-col>
                       <ion-col class='nav-container' @click="playAudio('follow-light')"><i class="far fa-dot-circle nav-icons" v-tippy="{content: 'Follow the light', touch: tippyTouchOptions}"></i></ion-col>
                       <ion-col class='nav-container' @click="playAudio('look-top-light')"><i class="far fa-arrow-alt-circle-up nav-icons" v-tippy="{content: 'Look at the top light', touch: tippyTouchOptions}"></i></ion-col>
                  
                    </ion-row>
                    <ion-row>
                       <ion-col class='nav-container' @click="playAudio('chin-down')"><i class="fas fa-angle-double-down nav-icons" v-tippy="{content: 'Move your chin down', touch: tippyTouchOptions}"></i></ion-col>
                       <ion-col class='nav-container' @click="playAudio('dont-move-eyes')"><i class="ri-eye-off-line nav-icons" v-tippy="{content: 'Don\'t move your eyes', touch: tippyTouchOptions}"></i></ion-col>
                       <ion-col class='nav-container' @click="playAudio('look-bottom-light')"><i class="far fa-arrow-alt-circle-down nav-icons" v-tippy="{content: 'Look at the bottom light', touch: tippyTouchOptions}"></i></ion-col>
                    </ion-row>
                </ion-grid>
            </ion-card-content>
        </ion-card>
    </ion-content>

  </ion-page>
</template>

<script lang='js'>
import { defineComponent } from "vue";
import Header from "./Header.vue";
import {IonPage, IonContent, IonSelect, IonSelectOption} from '@ionic/vue';
export default defineComponent({
  name: "SlitLamp",
  components: {
    Header,
    IonPage,
    IonContent,
    IonSelect,
    IonSelectOption
  },
  data() {
    return {
      tippyTouchOptions: ['hold', 50],
      langvalue: 'en'
    }
  },
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

    playAudio(fileName) {
      console.log(this.langvalue, ':', fileName)
      const audioFile = '/assets/audio/' + this.langvalue + '/' + fileName + '.m4a'
      const audio = new Audio(audioFile)
      audio.onerror = function(){
        console.log('Error:', audioFile, 'does not exist' )
      }
      audio.play()
    }

  },
})
</script>

<style scoped>
</style>