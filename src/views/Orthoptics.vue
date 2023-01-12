<template>
  <ion-page>
      <Header></Header>

    <ion-content overflow-scroll="true">
         <ion-item color='none' class='item-lang'  lines=none>
            <ion-label><strong>Language</strong></ion-label>
            <ion-select multiple="false" cancel-text="Cancel" ok-text="Select" v-model="langvalue">
              <ion-select-option value="en-US">English</ion-select-option>
              <ion-select-option value="fr-CA">French (Français)</ion-select-option>
              <ion-select-option value="cmn-CN">Mandarin (官话)</ion-select-option>
              <ion-select-option value="yue-HK">Cantonese (廣東話)</ion-select-option>
              <ion-select-option value="ar-XA">Arabic (اَلْعَرَبِيَّةُ)</ion-select-option>
              <ion-select-option value="de-DE">German (Deutsch)</ion-select-option>
              <ion-select-option value="it-IT">Italian (Italiano )</ion-select-option>
              <ion-select-option value="pa-IN">Punjabi (ਪੰਜਾਬੀ)</ion-select-option>
              <ion-select-option value="pt-PT">Portuguese, Portugal (Português, Portugal)</ion-select-option>
              <ion-select-option value="pt-BR">Portuguese, Brazil (Português, Brasil)</ion-select-option>
              <ion-select-option value="es-ES">Spanish (Español)</ion-select-option>
              <ion-select-option value="fil-PH">Tagalog/Filipino (Tagalog)</ion-select-option>
            </ion-select>
         </ion-item>
         <ion-card>
             <ion-card-content>
                 Tap on a button to play recording in selected language. Long press (tap and hold) to preview what will be played.
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
                       <ion-col class='nav-container' @click="playAudio('look-up-right', $event)"><i class="ri-arrow-left-up-line nav-icons" v-tippy="{content: 'Look up and to the right', ...tippyOptions}"></i></ion-col>
                       <ion-col class='nav-container' @click="playAudio('look-up', $event)"><i class="ri-arrow-up-line nav-icons" v-tippy="{content: 'Look up', ...tippyOptions}"></i></ion-col>
                       <ion-col class='nav-container' @click="playAudio('look-up-left', $event)"><i class="ri-arrow-right-up-line nav-icons" v-tippy="{content: 'Look up and to the left', ...tippyOptions}"></i></ion-col>
                    </ion-row>
                    <ion-row>
                       <ion-col class='nav-container' @click="playAudio('look-right', $event)"><i class="ri-arrow-left-line nav-icons" v-tippy="{content: 'Look to the right', ...tippyOptions}"></i></ion-col>
                       <ion-col class='nav-container' @click="playAudio('look-at-light', $event)"><i class="ri-lightbulb-line nav-icons" v-tippy="{content: 'Look straight at the light', ...tippyOptions}"></i></ion-col>
                       <ion-col class='nav-container' @click="playAudio('look-left', $event)"><i class="ri-arrow-right-line nav-icons" v-tippy="{content: 'Look to the left', ...tippyOptions}"></i></ion-col>
                    </ion-row>
                    <ion-row>
                       <ion-col class='nav-container' @click="playAudio('look-down-right', $event)"><i class="ri-arrow-left-down-line nav-icons" v-tippy="{content: 'Look down and to the right', ...tippyOptions}"></i></ion-col>
                       <ion-col class='nav-container' @click="playAudio('look-down', $event)"><i class="ri-arrow-down-line nav-icons" v-tippy="{content: 'Look down', ...tippyOptions}"></i></ion-col>
                       <ion-col class='nav-container' @click="playAudio('look-down-left', $event)"><i class="ri-arrow-right-down-line nav-icons" v-tippy="{content: 'Look down and to the left', ...tippyOptions}"></i></ion-col>
                    </ion-row>
                    <ion-row>
                       <ion-col class='nav-container' @click="playAudio('move-eyes-only', $event)"><i class="ri-eye-line nav-icons" v-tippy="{content: 'Please move your eyes only!', ...tippyOptions}"></i></ion-col>
                       <ion-col class='nav-container'><ion-col class='nav-container' @click="playAudio('open-eyes', $event)"><i class="ri-eye-2-line nav-icons" v-tippy="{content: 'Open your eyes', ...tippyOptions}"></i></ion-col></ion-col>
                       <ion-col class='nav-container' @click="playAudio('dont-move-head', $event)"><i class="ri-close-circle-line nav-icons" v-tippy="{content: 'Please don\'t move your head!', ...tippyOptions}"></i></ion-col>
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
                       <ion-col class='nav-container' @click="playAudio('head-up', $event)"><i class="ri-arrow-up-line nav-icons" v-tippy="{content: 'Tilt your head up', ...tippyOptions}"></i></ion-col>
                       <ion-col class='nav-container'></ion-col>
                    </ion-row>
                    <ion-row>
                       <ion-col class='nav-container' @click="playAudio('head-tilt-right', $event)"><i class="ri-arrow-left-line nav-icons" v-tippy="{content: 'Turn your head to the right', ...tippyOptions}"></i></ion-col>
                       <ion-col class='nav-container' @click="playAudio('head-straight', $event)"><i class="ri-user-line nav-icons" v-tippy="{content: 'Look straight ahead', ...tippyOptions}"></i></ion-col>
                       <ion-col class='nav-container' @click="playAudio('head-tilt-left', $event)"><i class="ri-arrow-right-line nav-icons" v-tippy="{content: 'Turn your head to the left', ...tippyOptions}"></i></ion-col>
                    </ion-row>
                    <ion-row>
                       <ion-col class='nav-container' @click="playAudio('head-right', $event)"><i class="ri-arrow-go-forward-line nav-icons" v-tippy="{content: 'Turn your head to the right', ...tippyOptions}"></i></ion-col>
                       <ion-col class='nav-container' @click="playAudio('head-down', $event)"><i class="ri-arrow-down-line nav-icons" v-tippy="{content: 'Tilt your head down', ...tippyOptions}"></i></ion-col>
                       <ion-col class='nav-container' @click="playAudio('head-left', $event)"><i class="ri-arrow-go-back-line nav-icons" v-tippy="{content: 'Turn your head to the left', ...tippyOptions}"></i></ion-col>
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
      tippyOptions: {touch: ['hold', 20], offset: [0, 50]},
      langvalue: 'en-US'
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

    playAudio(fileName, event) {
      // Set colour of clicked button
      event.target.style.color = "var(--ion-color-primary)";

      console.log(this.langvalue, ':', fileName)
      const audioFile = '/assets/audio/' + this.langvalue + '/' + fileName + '.mp3'
      const audio = new Audio(audioFile)
      audio.onerror = function(){
        console.log('Error:', audioFile, 'does not exist' )
      }
      audio.play()

      // Reset colour of clicked button to default
      audio.onended = function() {
        event.target.style.color = "var(--ion-color-dark)";
      }

    }

  },
})
</script>

<style scoped>
</style>