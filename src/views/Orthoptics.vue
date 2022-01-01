<template>
  <ion-page>
      <Header></Header>

    <ion-content overflow-scroll="true">
         <!-- <ion-button class='btn-lang' color='primary' expand="block"> -->
         <ion-item color='none' class='item-lang'  lines=none>
             <ion-label><strong>Language</strong></ion-label>
        <ion-select multiple="false" value='fr' cancel-text="Cancel" ok-text="Select">
        <ion-select-option value="en">English</ion-select-option>
        <ion-select-option value="fr">French (Français)</ion-select-option>
    
      </ion-select>
         </ion-item>

         <ion-card>
             <ion-card-content>
                 Tap on a button to play recording in selected language. Long press (tap and hold) to display what will be played.
             </ion-card-content>
         </ion-card>
         <!-- </ion-button> -->
        <ion-card>
          <ion-card-header>
            <ion-card-title class='small-title'>Eye movements</ion-card-title>
          </ion-card-header>
          <ion-card-content>
                <ion-grid>
                    <ion-row>
                       <ion-col class='nav-container' @click="playAudio('look-up-right')"><i class="ri-arrow-left-up-line nav-icons" v-tippy="{content: 'Look up and to the right', touch: tippyTouchOptions}"></i></ion-col>
                       <ion-col class='nav-container' @click="playAudio('look-up')"><i class="ri-arrow-up-line nav-icons" v-tippy="{content: 'Look up', touch: tippyTouchOptions}"></i></ion-col>
                       <ion-col class='nav-container' @click="playAudio('look-up-left')"><i class="ri-arrow-right-up-line nav-icons" v-tippy="{content: 'Look up and to the left', touch: tippyTouchOptions}"></i></ion-col>
                    </ion-row>
                    <ion-row>
                       <ion-col class='nav-container' @click="playAudio('look-right')"><i class="ri-arrow-left-line nav-icons" v-tippy="{content: 'Look to the right', touch: tippyTouchOptions}"></i></ion-col>
                       <ion-col class='nav-container' @click="playAudio('look-at-light')"><i class="ri-lightbulb-line nav-icons" v-tippy="{content: 'Look straight at the light', touch: tippyTouchOptions}"></i></ion-col>
                       <ion-col class='nav-container' @click="playAudio('look-left')"><i class="ri-arrow-right-line nav-icons" v-tippy="{content: 'Look to the left', touch: tippyTouchOptions}"></i></ion-col>
                    </ion-row>
                    <ion-row>
                       <ion-col class='nav-container' @click="playAudio('look-down-right')"><i class="ri-arrow-left-down-line nav-icons" v-tippy="{content: 'Look down and to the right', touch: tippyTouchOptions}"></i></ion-col>
                       <ion-col class='nav-container' @click="playAudio('look-down')"><i class="ri-arrow-down-line nav-icons" v-tippy="{content: 'Look down', touch: tippyTouchOptions}"></i></ion-col>
                       <ion-col class='nav-container' @click="playAudio('look-down-left')"><i class="ri-arrow-right-down-line nav-icons" v-tippy="{content: 'Look down and to the left', touch: tippyTouchOptions}"></i></ion-col>
                    </ion-row>
                    <ion-row>
                       <ion-col class='nav-container' @click="playAudio('move-eyes-only')"><i class="ri-eye-line nav-icons" v-tippy="{content: 'Please move your eyes only!', touch: tippyTouchOptions}"></i></ion-col>
                       <ion-col class='nav-container'></ion-col>
                       <ion-col class='nav-container' @click="playAudio('dont-move-head')"><i class="ri-close-circle-line nav-icons" v-tippy="{content: 'Please don\'t move your head!', touch: tippyTouchOptions}"></i></ion-col>
                    </ion-row>
                </ion-grid>
            </ion-card-content>
        </ion-card>

        <ion-card>
          <ion-card-header>
            <ion-card-title class='small-title'>Head movements</ion-card-title>
          </ion-card-header>
          <ion-card-content>
                <ion-grid>
                    <ion-row>
                       <ion-col class='nav-container'></ion-col>
                       <ion-col class='nav-container'><i class="ri-arrow-up-line nav-icons" v-tippy="{content: 'Tilt your head up', touch: tippyTouchOptions}"></i></ion-col>
                       <ion-col class='nav-container'></ion-col>
                    </ion-row>
                    <ion-row>
                       <ion-col class='nav-container'><i class="ri-arrow-left-line nav-icons" v-tippy="{content: 'Turn your head to the right', touch: tippyTouchOptions}"></i></ion-col>
                       <ion-col class='nav-container'><i class="ri-user-line nav-icons" v-tippy="{content: 'Look straight ahead', touch: tippyTouchOptions}"></i></ion-col>
                       <ion-col class='nav-container'><i class="ri-arrow-right-line nav-icons" v-tippy="{content: 'Turn your head to the left', touch: tippyTouchOptions}"></i></ion-col>
                    </ion-row>
                    <ion-row>
                       <ion-col class='nav-container'></ion-col>
                       <ion-col class='nav-container'><i class="ri-arrow-down-line nav-icons" v-tippy="{content: 'Tilt your head down', touch: tippyTouchOptions}"></i></ion-col>
                       <ion-col class='nav-container'></ion-col>
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
      tippyTouchOptions: ['hold', 300],
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