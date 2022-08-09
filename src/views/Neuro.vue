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

         <ion-card>
             <ion-card-content>
                 Tap on a button to play recording in selected language. Long press (tap and hold) to preview what will be played.
             </ion-card-content>
         </ion-card>
         
        <ion-card>
          <ion-card-header>
            <ion-card-title class='small-title'>Thumbs up/down for Yes/No</ion-card-title>
          </ion-card-header>
          <ion-card-content>
                <ion-grid>
                    <ion-row>
                        <ion-col class='nav-container' @click="playAudio('thumbsup-yes')"><i class="far fa-thumbs-up nav-icons" v-tippy="{content: 'Show me a thumbs up for &quot;Yes&quot;', ...tippyOptions}"></i></ion-col>
                        <ion-col class='nav-container'></ion-col>
                        <ion-col class='nav-container' @click="playAudio('thumbsdown-no')"><i class="far fa-thumbs-down nav-icons" v-tippy="{content: 'Show me a thumbs down for &quot;No&quot;', ...tippyOptions}"></i></ion-col>
                    </ion-row>
                </ion-grid>
            </ion-card-content>
        </ion-card>

        <ion-card>
          <ion-card-header>
            <ion-card-title class='small-title'>CN II</ion-card-title>
          </ion-card-header>
          <ion-card-content>
                <ion-grid>
                    <span class='categ-sub-title'>Visual acuity</span>
                    <ion-row>
                       <ion-col class='nav-container' @click="playAudio('cover-right-eye')"><i class="ri-eye-close-line nav-icons" v-tippy="{content: 'Cover your right eye', ...tippyOptions}"></i></ion-col>
                       <ion-col class='nav-container' @click="playAudio('guess')"><i class="fas fa-dice nav-icons" v-tippy="{content: 'It\'s ok to guess if you are unsure. Try giving an answer even if you are guessing.', ...tippyOptions}"></i></ion-col>
                       
                       <ion-col class='nav-container' @click="playAudio('cover-left-eye')"><i class="ri-eye-close-line nav-icons" v-tippy="{content: 'Cover your left eye', ...tippyOptions}"></i></ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col class='nav-container' @click="playAudio('read-letters')"><i class="fa-solid fa-a nav-icons" v-tippy="{content: 'Read the letters you see', ...tippyOptions}"></i></ion-col>
                        <ion-col class='nav-container' @click="playAudio('point-e')"><i class="far fa-hand-point-up nav-icons" v-tippy="{content: 'Point your finger in the same direction as the horizontal bars of the letter E', ...tippyOptions}"></i></ion-col>
                        <ion-col class='nav-container' @click="playAudio('try-again')"><i class="fa-solid fa-repeat nav-icons" v-tippy="{content: 'Try again', ...tippyOptions}"></i></ion-col>
                    </ion-row>
                     <ion-row>
                       <ion-col class='nav-container' @click="playAudio('read-top-line')"><i class="fa-solid fa-arrows-up-to-line nav-icons" v-tippy="{content: 'Can you read me the top line', ...tippyOptions}"></i></ion-col>
                       <ion-col class='nav-container' @click="playAudio('read-middle-line')"><i class="fas fa-grip-lines nav-icons" v-tippy="{content: 'Can you read me the middle line', ...tippyOptions}"></i></ion-col>
                       <ion-col class='nav-container' @click="playAudio('read-bottom-line')"><i class="fa-solid fa-arrows-down-to-line nav-icons" v-tippy="{content: 'Can you read me the bottom line', ...tippyOptions}"></i></ion-col>
                    </ion-row>
                    
                    <span class='categ-sub-title'>Visual acuity (CF/HM/LP)</span>
                    <ion-row>
                       <ion-col class='nav-container' @click="playAudio('how-many-fingers')"><i class="far fa-hand-peace nav-icons" v-tippy="{content: 'How many fingers do you see? Show me the number with your hands.', ...tippyOptions}"></i></ion-col>
                       <ion-col class='nav-container' @click="playAudio('hand-moving')"><i class="far fa-hand-paper nav-icons" v-tippy="{content: 'Can you see my hand moving? Show me a thumbs up if you can.', ...tippyOptions}"></i></ion-col>
                       <ion-col class='nav-container' @click="playAudio('see-light')"><i class="ri-lightbulb-line nav-icons" v-tippy="{content: 'Can you see a light? Show me a thumbs up if you can.', ...tippyOptions}"></i></ion-col>
                    </ion-row>
                    <span class='categ-sub-title'>Visual Fields</span>
                    <ion-row>
                       <ion-col class='nav-container' @click="playAudio('cover-right-eye')"><i class="ri-eye-close-line nav-icons" v-tippy="{content: 'Cover your right eye', ...tippyOptions}"></i></ion-col>
                       <ion-col class='nav-container' @click="playAudio('dont-move-eyes-look-nose')"><i class="ri-eye-off-line nav-icons" v-tippy="{content: 'Don\'t move your eyes. Look straight at my nose.', ...tippyOptions}"></i></ion-col>
                       <ion-col class='nav-container' @click="playAudio('cover-left-eye')"><i class="ri-eye-close-line nav-icons" v-tippy="{content: 'Cover your left eye', ...tippyOptions}"></i></ion-col>
                    </ion-row>
                    <ion-row>
                       <ion-col class='nav-container' @click="playAudio('how-many-fingers')"><i class="far fa-hand-peace nav-icons" v-tippy="{content: 'How many fingers do you see?', ...tippyOptions}"></i></ion-col>
                       <ion-col class='nav-container' @click="playAudio('dont-move-head')"><i class="ri-close-circle-line nav-icons" v-tippy="{content: 'Don\'t move your head!', ...tippyOptions}"></i></ion-col>
                       <ion-col class='nav-container' @click="playAudio('see-finger')"><i class="far fa-hand-point-left nav-icons" v-tippy="{content: 'Show me a thumbs up as soon as you can see my finger.', ...tippyOptions}"></i></ion-col>
                    </ion-row>
                </ion-grid>
            </ion-card-content>
        </ion-card>

        <ion-card>
          <ion-card-header>
            <ion-card-title class='small-title'>CN III/IV/VI</ion-card-title>
          </ion-card-header>
          <ion-card-content>
                <ion-grid>
                    <span class='categ-sub-title'>EOM</span>
                    <ion-row>
                       <ion-col class='nav-container' @click="playAudio('follow-finger')"><i class="ri-eye-line nav-icons" v-tippy="{content: 'Follow my finger with your eyes. Do not move your head.', ...tippyOptions}"></i></ion-col>
                       <ion-col class='nav-container' @click="playAudio('see-double')"><i class="far fa-clone nav-icons" v-tippy="{content: 'Show me a thumbs up if you see double.', ...tippyOptions}"></i></ion-col>
                       <ion-col class='nav-container' @click="playAudio('dont-move-head')"><i class="ri-close-circle-line nav-icons" v-tippy="{content: 'Don\'t move your head!', ...tippyOptions}"></i></ion-col>
                    </ion-row>
                    <span class='categ-sub-title'>Strabismus</span>
                    <ion-row>
                       <ion-col class='nav-container' @click="playAudio('fixate-object')"><i class="fas fa-bullseye nav-icons" v-tippy="{content: 'Fixate your vision on the object I\'m pointing at.', ...tippyOptions}"></i></ion-col>
                       <ion-col class='nav-container' @click="playAudio('dont-move-eyes-fixate')"><i class="ri-eye-off-line nav-icons" v-tippy="{content: 'Do not move your eyes. Keep fixating the object I pointed at.', ...tippyOptions}"></i></ion-col>
                       <ion-col class='nav-container' @click="playAudio('dont-move-head')"><i class="ri-close-circle-line nav-icons" v-tippy="{content: 'Don\'t move your head!', ...tippyOptions}"></i></ion-col>
                    </ion-row>
                </ion-grid>
            </ion-card-content>
        </ion-card>

        <ion-card>
          <ion-card-header>
            <ion-card-title class='small-title'>CN V</ion-card-title>
          </ion-card-header>
          <ion-card-content>
                <ion-grid>
                    <span class='categ-sub-title'>Sensory</span>
                    <ion-row>
                       <ion-col class='nav-container' @click="playAudio('close-both-eyes')"><i class="ri-eye-close-line nav-icons" v-tippy="{content: 'Close both your eyes', ...tippyOptions}"></i></ion-col>
                       <ion-col class='nav-container' @click="playAudio('feel-touch')"><i class="far fa-hand-point-down nav-icons" v-tippy="{content: 'Show me a thumbs up when you feel a touch.', ...tippyOptions}"></i></ion-col>
                       <ion-col class='nav-container' @click="playAudio('feel-same')"><i class="fas fa-balance-scale nav-icons" v-tippy="{content: 'Show be a thumbs up if both sides feel the same. Point towards the side you feel less if the sensation is different.', ...tippyOptions}"></i></ion-col>
                    </ion-row>
                    <span class='categ-sub-title'>Motor (V3)</span>
                    <ion-row>
                       <ion-col class='nav-container'></ion-col>
                       <ion-col class='nav-container' @click="playAudio('open-mouth')"><i class="far fa-laugh-beam nav-icons" v-tippy="{content: 'Open your mouth. Don\'t let me close it.', ...tippyOptions}"></i></ion-col>
                       <ion-col class='nav-container'></ion-col>
                    </ion-row>
                    <span class='categ-sub-title'>Corneal reflex (V1 afferent, VII efferent)</span>
                    <ion-row>
                       <ion-col class='nav-container'></ion-col>
                       <ion-col class='nav-container' @click="playAudio('corneal-reflex')"><i class="far fa-eye nav-icons" v-tippy="{content: 'Keep your eyes open. I will gently touch your eye with this piece of cotton wool to test a reflex.', ...tippyOptions}"></i></ion-col>
                       <ion-col class='nav-container'></ion-col>
                    </ion-row>
                </ion-grid>
            </ion-card-content>
        </ion-card>

        <ion-card>
          <ion-card-header>
            <ion-card-title class='small-title'>CN VII</ion-card-title>
          </ion-card-header>
          <ion-card-content>
                <ion-grid>
                    <ion-row>
                       <ion-col class='nav-container' @click="playAudio('raise-eyebrows')"><i class="far fa-surprise nav-icons" v-tippy="{content: 'Raise your eyebrows as if you’re surprised.', ...tippyOptions}"></i></ion-col>
                       <ion-col class='nav-container' @click="playAudio('close-eyes-tightly')"><i class="far fa-laugh-squint nav-icons" v-tippy="{content: 'Close your eyes tightly and don\'t let me open them.', ...tippyOptions}"></i></ion-col>
                       <ion-col class='nav-container' @click="playAudio('blow-out-cheeks')"><i class="far fa-meh nav-icons" v-tippy="{content: 'Blow out your cheeks and don\'t let me deflate them.', ...tippyOptions}"></i></ion-col>
                    </ion-row>
                    <ion-row>
                       <ion-col class='nav-container'></ion-col>
                       <ion-col class='nav-container' @click="playAudio('smile')"><i class="far fa-grin nav-icons" v-tippy="{content: 'Give me a wide smile. Show me your teeth.', ...tippyOptions}"></i></ion-col>
                       <ion-col class='nav-container'></ion-col>
                    </ion-row>
                </ion-grid>
            </ion-card-content>
        </ion-card>

        <ion-card>
          <ion-card-header>
            <ion-card-title class='small-title'>CN VIII</ion-card-title>
          </ion-card-header>
          <ion-card-content>
                <ion-grid>
                    <span class='categ-sub-title'>Sensory</span>
                    <ion-row>
                       <ion-col class='nav-container'></ion-col>
                       <ion-col class='nav-container' @click="playAudio('hear-sound')"><i class="far fa-bell nav-icons" v-tippy="{content: 'Show me a thumbs up if you can hear a sound.', ...tippyOptions}"></i></ion-col>
                       <ion-col class='nav-container'></ion-col>
                    </ion-row>
                    <span class='categ-sub-title'>Vestibulo-ocular reflex</span>
                    <ion-row>
                       <ion-col class='nav-container'></ion-col>
                       <ion-col class='nav-container' @click="playAudio('fixate-nose')"><i class="fas fa-bullseye nav-icons" v-tippy="{content: 'Fixate your vision on my nose. Keep looking at my nose while I move your head.', ...tippyOptions}"></i></ion-col>
                       <ion-col class='nav-container'></ion-col>
                    </ion-row>
                </ion-grid>
            </ion-card-content>
        </ion-card>

        <ion-card>
          <ion-card-header>
            <ion-card-title class='small-title'>CN IX/X</ion-card-title>
          </ion-card-header>
          <ion-card-content>
                <ion-grid>
                    <ion-row>
                       <ion-col class='nav-container' @click="playAudio('open-mouth')"><i class="far fa-laugh-beam nav-icons" v-tippy="{content: 'Open your mouth', ...tippyOptions}"></i></ion-col>
                       <ion-col class='nav-container' @click="playAudio('say-ahh')"><i class="far fa-surprise nav-icons" v-tippy="{content: 'Say &quot;ahh&quot;', ...tippyOptions}"></i></ion-col>
                       <ion-col class='nav-container' @click="playAudio('cough-once')"><i class="far fa-tired nav-icons" v-tippy="{content: 'Cough once', ...tippyOptions}"></i></ion-col>
                    </ion-row>
                </ion-grid>
            </ion-card-content>
        </ion-card>

        <ion-card>
          <ion-card-header>
            <ion-card-title class='small-title'>CN XI</ion-card-title>
          </ion-card-header>
          <ion-card-content>
                <ion-grid>
                    <ion-row>
                       <ion-col class='nav-container'></ion-col>
                       <ion-col class='nav-container' @click="playAudio('raise-shoulders')"><i class="far fa-user nav-icons" v-tippy="{content: 'Raise your shoulders. Don\'t let me push them down.', ...tippyOptions}"></i></ion-col>
                       <ion-col class='nav-container'></ion-col>
                    </ion-row>
                    <ion-row>
                       <ion-col class='nav-container' @click="playAudio('head-right')"><i class="ri-arrow-go-forward-line nav-icons nav-icons" v-tippy="{content: 'Turn your head to the right', ...tippyOptions}"></i></ion-col>
                       <ion-col class='nav-container' @click="playAudio('push-hand')"><i class="far fa-hand-paper nav-icons" v-tippy="{content: 'Push against my hand', ...tippyOptions}"></i></ion-col>
                       <ion-col class='nav-container' @click="playAudio('head-left')"><i class="ri-arrow-go-back-line nav-icons" v-tippy="{content: 'Turn your head to the left', ...tippyOptions}"></i></ion-col>
                    </ion-row>
                </ion-grid>
            </ion-card-content>
        </ion-card>

        <ion-card>
          <ion-card-header>
            <ion-card-title class='small-title'>CN XII</ion-card-title>
          </ion-card-header>
          <ion-card-content>
                <ion-grid>
                    <ion-row>
                       <ion-col class='nav-container' @click="playAudio('open-mouth')"><i class="far fa-laugh-beam nav-icons" v-tippy="{content: 'Open your mouth', ...tippyOptions}"></i></ion-col>
                       <ion-col class='nav-container' @click="playAudio('show-tongue')"><i class="far fa-grin-tongue nav-icons" v-tippy="{content: 'Show me your tongue', ...tippyOptions}"></i></ion-col>
                       <ion-col class='nav-container' @click="playAudio('push-tongue')"><i class="far fa-meh nav-icons" v-tippy="{content: 'Push your tongue against the inside of your cheek. Don\'t let me push it back.', ...tippyOptions}"></i></ion-col>
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
      const audioFile = '/assets/audio/' + this.langvalue + '/' + fileName + '.mp3'
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