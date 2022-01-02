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
                        <ion-col class='nav-container'><i class="far fa-thumbs-up nav-icons" v-tippy="{content: 'Show me a thumbs up for &quot;Yes&quot;', touch: tippyTouchOptions}"></i></ion-col>
                        <ion-col class='nav-container'></ion-col>
                        <ion-col class='nav-container'><i class="far fa-thumbs-down nav-icons" v-tippy="{content: 'Show me a thumbs down for &quot;No&quot;', touch: tippyTouchOptions}"></i></ion-col>
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
                    <span class='categ-sub-title'>Visual acuity (tumbling E chart)</span>
                    <ion-row>
                       <ion-col class='nav-container'><i class="ri-eye-close-line nav-icons" v-tippy="{content: 'Cover your right eye', touch: tippyTouchOptions}"></i></ion-col>
                       <ion-col class='nav-container'><i class="far fa-hand-point-up nav-icons" v-tippy="{content: 'Point your finger in the same direction as the horizontal bars of the letter E', touch: tippyTouchOptions}"></i></ion-col>
                       <ion-col class='nav-container'><i class="ri-eye-close-line nav-icons" v-tippy="{content: 'Cover your left eye', touch: tippyTouchOptions}"></i></ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col class='nav-container'></ion-col>
                        <ion-col class='nav-container'><i class="fas fa-dice nav-icons" v-tippy="{content: 'It\'s ok to guess if you are unsure. Try giving an answer even if you are guessing.', touch: tippyTouchOptions}"></i></ion-col>
                        <ion-col class='nav-container'></ion-col>
                    </ion-row>
                    <span class='categ-sub-title'>Visual acuity (CF/HM/LP)</span>
                    <ion-row>
                       <ion-col class='nav-container'><i class="far fa-hand-peace nav-icons" v-tippy="{content: 'How many fingers do you see?', touch: tippyTouchOptions}"></i></ion-col>
                       <ion-col class='nav-container'><i class="far fa-hand-paper nav-icons" v-tippy="{content: 'Can you see my hand moving?', touch: tippyTouchOptions}"></i></ion-col>
                       <ion-col class='nav-container'><i class="ri-lightbulb-line nav-icons" v-tippy="{content: 'Can you see a light?', touch: tippyTouchOptions}"></i></ion-col>
                    </ion-row>
                    <span class='categ-sub-title'>Visual Fields</span>
                    <ion-row>
                       <ion-col class='nav-container'><i class="ri-eye-close-line nav-icons" v-tippy="{content: 'Cover your right eye', touch: tippyTouchOptions}"></i></ion-col>
                       <ion-col class='nav-container'></ion-col>
                       <ion-col class='nav-container'><i class="ri-eye-close-line nav-icons" v-tippy="{content: 'Cover your left eye', touch: tippyTouchOptions}"></i></ion-col>
                    </ion-row>
                    <ion-row>
                       <ion-col class='nav-container'><i class="far fa-hand-peace nav-icons" v-tippy="{content: 'How many fingers do you see?', touch: tippyTouchOptions}"></i></ion-col>
                       <ion-col class='nav-container'><i class="ri-eye-off-line nav-icons" v-tippy="{content: 'Do not move your eyes. Look straight at my nose.', touch: tippyTouchOptions}"></i></ion-col>
                       <ion-col class='nav-container'><i class="far fa-hand-point-left nav-icons" v-tippy="{content: 'Clap your hands once as soon as you can see my finger.', touch: tippyTouchOptions}"></i></ion-col>
                    </ion-row>
                    <!-- <ion-row>
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
                    </ion-row> -->
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
                       <ion-col class='nav-container'><i class="ri-eye-line nav-icons" v-tippy="{content: 'Follow my finger with your eyes. Do not move your head.', touch: tippyTouchOptions}"></i></ion-col>
                       <ion-col class='nav-container'><i class="far fa-clone nav-icons" v-tippy="{content: 'Clap your hands if you see double.', touch: tippyTouchOptions}"></i></ion-col>
                       <ion-col class='nav-container' @click="playAudio('dont-move-head')"><i class="ri-close-circle-line nav-icons" v-tippy="{content: 'Please don\'t move your head!', touch: tippyTouchOptions}"></i></ion-col>
                    </ion-row>
                    <span class='categ-sub-title'>Strabismus</span>
                    <ion-row>
                       <ion-col class='nav-container'><i class="fas fa-bullseye nav-icons" v-tippy="{content: 'Fixate your vision on the object I\'m pointing at.', touch: tippyTouchOptions}"></i></ion-col>
                       <ion-col class='nav-container'><i class="ri-eye-off-line nav-icons" v-tippy="{content: 'Do not move your eyes. Keep fixating the object I pointed at.', touch: tippyTouchOptions}"></i></ion-col>
                       <ion-col class='nav-container' @click="playAudio('dont-move-head')"><i class="ri-close-circle-line nav-icons" v-tippy="{content: 'Please don\'t move your head!', touch: tippyTouchOptions}"></i></ion-col>
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
                       <ion-col class='nav-container'><i class="ri-eye-close-line nav-icons" v-tippy="{content: 'Close both your eyes', touch: tippyTouchOptions}"></i></ion-col>
                       <ion-col class='nav-container'><i class="far fa-hand-point-down nav-icons" v-tippy="{content: 'Clap your hands when you feel a touch', touch: tippyTouchOptions}"></i></ion-col>
                       <ion-col class='nav-container'><i class="fas fa-balance-scale nav-icons" v-tippy="{content: 'Clap your hands twice if the sensation feels different between the right and left sides.', touch: tippyTouchOptions}"></i></ion-col>
                    </ion-row>
                    <span class='categ-sub-title'>Motor (V3)</span>
                    <ion-row>
                       <ion-col class='nav-container'></ion-col>
                       <ion-col class='nav-container'><i class="far fa-laugh-beam nav-icons" v-tippy="{content: 'Open your mouth', touch: tippyTouchOptions}"></i></ion-col>
                       <ion-col class='nav-container'></ion-col>
                    </ion-row>
                    <span class='categ-sub-title'>Corneal reflex (V1 afferent, VII efferent)</span>
                    <ion-row>
                       <ion-col class='nav-container'></ion-col>
                       <ion-col class='nav-container'><i class="far fa-eye nav-icons" v-tippy="{content: 'Keep your eyes open. I will gently touch your eye with this piece of cotton wool to test a reflex.', touch: tippyTouchOptions}"></i></ion-col>
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
                       <ion-col class='nav-container'><i class="far fa-surprise nav-icons" v-tippy="{content: 'Raise your eyebrows as if you’re surprised.', touch: tippyTouchOptions}"></i></ion-col>
                       <ion-col class='nav-container'><i class="far fa-laugh-squint nav-icons" v-tippy="{content: 'Close your eyes tightly and don\'t let me open them.', touch: tippyTouchOptions}"></i></ion-col>
                       <ion-col class='nav-container'><i class="far fa-meh nav-icons" v-tippy="{content: 'Blow out your cheeks and don\'t let me deflate them.', touch: tippyTouchOptions}"></i></ion-col>
                    </ion-row>
                    <ion-row>
                       <ion-col class='nav-container'></ion-col>
                       <ion-col class='nav-container'><i class="far fa-grin nav-icons" v-tippy="{content: 'Give me a wide smile. Show me your teeth.', touch: tippyTouchOptions}"></i></ion-col>
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
                       <ion-col class='nav-container'><i class="far fa-bell nav-icons" v-tippy="{content: 'Clap your hands if you can hear a sound.', touch: tippyTouchOptions}"></i></ion-col>
                       <ion-col class='nav-container'></ion-col>
                    </ion-row>
                    <span class='categ-sub-title'>Vestibulo-ocular reflex</span>
                    <ion-row>
                       <ion-col class='nav-container'></ion-col>
                       <ion-col class='nav-container'><i class="fas fa-bullseye nav-icons" v-tippy="{content: 'Fixate your vision on my nose. Keep looking at my nose while I move your head.', touch: tippyTouchOptions}"></i></ion-col>
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
                       <ion-col class='nav-container'><i class="far fa-laugh-beam nav-icons" v-tippy="{content: 'Open your mouth', touch: tippyTouchOptions}"></i></ion-col>
                       <ion-col class='nav-container'><i class="far fa-surprise nav-icons" v-tippy="{content: 'Say &quot;ahh&quot;', touch: tippyTouchOptions}"></i></ion-col>
                       <ion-col class='nav-container'><i class="far fa-tired nav-icons" v-tippy="{content: 'Cough once', touch: tippyTouchOptions}"></i></ion-col>
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
                       <ion-col class='nav-container'><i class="far fa-user nav-icons" v-tippy="{content: 'Raise your shoulders. Don\'t let me push them down.', touch: tippyTouchOptions}"></i></ion-col>
                       <ion-col class='nav-container'></ion-col>
                    </ion-row>
                    <ion-row>
                       <ion-col class='nav-container'><i class="ri-arrow-left-line nav-icons" v-tippy="{content: 'Turn your head to the right', touch: tippyTouchOptions}"></i></ion-col>
                       <ion-col class='nav-container'><i class="far fa-hand-paper nav-icons" v-tippy="{content: 'Push against my hand', touch: tippyTouchOptions}"></i></ion-col>
                       <ion-col class='nav-container'><i class="ri-arrow-right-line nav-icons" v-tippy="{content: 'Turn your head to the left', touch: tippyTouchOptions}"></i></ion-col>
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
                       <ion-col class='nav-container'><i class="far fa-laugh-beam nav-icons" v-tippy="{content: 'Open your mouth', touch: tippyTouchOptions}"></i></ion-col>
                       <ion-col class='nav-container'><i class="far fa-grin-tongue nav-icons" v-tippy="{content: 'Show me your tongue', touch: tippyTouchOptions}"></i></ion-col>
                       <ion-col class='nav-container'><i class="far fa-meh nav-icons" v-tippy="{content: 'Push your tongue against the inside of your cheek. Don\'t let me push it back.', touch: tippyTouchOptions}"></i></ion-col>
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