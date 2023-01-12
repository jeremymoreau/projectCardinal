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
                       <ion-col class='nav-container' @click="playAudio('chin-up', $event)"><i class="fas fa-angle-double-up nav-icons" v-tippy="{content: 'Move your chin up', ...tippyOptions}"></i></ion-col>
                       <ion-col class='nav-container' @click="playAudio('follow-light', $event)"><i class="far fa-dot-circle nav-icons" v-tippy="{content: 'Follow the light', ...tippyOptions}"></i></ion-col>
                       <ion-col class='nav-container' @click="playAudio('look-top-light', $event)"><i class="far fa-arrow-alt-circle-up nav-icons" v-tippy="{content: 'Look at the top light', ...tippyOptions}"></i></ion-col>
                  
                    </ion-row>
                    <ion-row>
                       <ion-col class='nav-container' @click="playAudio('chin-down', $event)"><i class="fas fa-angle-double-down nav-icons" v-tippy="{content: 'Move your chin down', ...tippyOptions}"></i></ion-col>
                       <ion-col class='nav-container' @click="playAudio('look-at-light', $event)"><i class="ri-lightbulb-line nav-icons" v-tippy="{content: 'Look straight at the light', ...tippyOptions}"></i></ion-col>
                       <ion-col class='nav-container' @click="playAudio('look-bottom-light', $event)"><i class="far fa-arrow-alt-circle-down nav-icons" v-tippy="{content: 'Look at the bottom light', ...tippyOptions}"></i></ion-col>
                    </ion-row>
                    <ion-row>
                       <ion-col class='nav-container'><ion-col class='nav-container' @click="playAudio('open-eyes', $event)"><i class="ri-eye-2-line nav-icons" v-tippy="{content: 'Open your eyes', ...tippyOptions}"></i></ion-col></ion-col>
                       <ion-col class='nav-container' @click="playAudio('dont-move-eyes', $event)"><i class="ri-eye-off-line nav-icons" v-tippy="{content: 'Don\'t move your eyes', ...tippyOptions}"></i></ion-col>
                       <ion-col class='nav-container' @click="playAudio('dont-move-head', $event)"><i class="ri-close-circle-line nav-icons" v-tippy="{content: 'Please don\'t move your head!', ...tippyOptions}"></i></ion-col>
                    </ion-row>
                    <ion-row>
                       <ion-col class='nav-container' @click="playAudio('feel-water', $event)"><i class="ri-drop-line nav-icons" v-tippy="{content: 'You will feel water. That is normal.', ...tippyOptions}"></i></ion-col>
                       <ion-col class='nav-container' @click="playAudio('feel-pressure', $event)"><i class="ri-slice-line nav-icons" v-tippy="{content: 'You will feel pressure. That is normal.', ...tippyOptions}"></i></ion-col>
                       <ion-col class='nav-container' @click="playAudio('all-good', $event)"><i class="ri-thumb-up-line nav-icons" v-tippy="{content: 'Everything is going well.', ...tippyOptions}"></i></ion-col>
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