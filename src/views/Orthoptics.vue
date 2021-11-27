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
          <ion-card-content>
                <ion-grid>
                    <ion-row>
                       <ion-col class='nav-container'><i class="ri-arrow-left-up-line nav-icons"></i></ion-col>
                       <ion-col class='nav-container'><i class="ri-arrow-up-line nav-icons"></i></ion-col>
                       <ion-col class='nav-container'><i class="ri-arrow-right-up-line nav-icons"></i></ion-col>
                    </ion-row>
                    <ion-row>
                       <ion-col class='nav-container'><i class="ri-arrow-left-line nav-icons"></i></ion-col>
                       <ion-col class='nav-container'><i class="ri-lightbulb-line nav-icons"></i></ion-col>
                       <ion-col class='nav-container'><i class="ri-arrow-right-line nav-icons"></i></ion-col>
                    </ion-row>
                    <ion-row>
                       <ion-col class='nav-container'><i class="ri-arrow-left-down-line nav-icons"></i></ion-col>
                       <ion-col class='nav-container'><i class="ri-arrow-down-line nav-icons"></i></ion-col>
                       <ion-col class='nav-container'><i class="ri-arrow-right-down-line nav-icons"></i></ion-col>
                    </ion-row>
                    <ion-row>
                       <ion-col class='nav-container'><i class="ri-eye-line nav-icons"></i></ion-col>
                       <ion-col class='nav-container'></ion-col>
                       <ion-col class='nav-container'><i class="ri-close-circle-line nav-icons"></i></ion-col>
                    </ion-row>
                </ion-grid>
            </ion-card-content>
        </ion-card>

        <ion-card>
          <ion-card-content>
                <ion-grid>
                    <ion-row>
                       <ion-col class='nav-container'></ion-col>
                       <ion-col class='nav-container'><i class="ri-arrow-up-line nav-icons"></i></ion-col>
                       <ion-col class='nav-container'></ion-col>
                    </ion-row>
                    <ion-row>
                       <ion-col class='nav-container'><i class="ri-arrow-left-line nav-icons"></i></ion-col>
                       <ion-col class='nav-container'><i class="ri-user-line nav-icons"></i></ion-col>
                       <ion-col class='nav-container'><i class="ri-arrow-right-line nav-icons"></i></ion-col>
                    </ion-row>
                    <ion-row>
                       <ion-col class='nav-container'></ion-col>
                       <ion-col class='nav-container'><i class="ri-arrow-down-line nav-icons"></i></ion-col>
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
import {IonPage, IonContent} from '@ionic/vue';
export default defineComponent({
  name: "Orthoptics",
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
.instructions-card {
  margin-top: 10px;
}
.header-title {
    padding-top: 0px;
    padding-bottom: 0px;
}
.nav-icons {
    font-size: 50px;
    color: var(--ion-color-dark);
}
.nav-container {
    text-align: center;
    vertical-align: middle;
}
.btn-lang {
    margin: 10px 15px 0px 15px;
}
.item-lang {
    width: 100%;
}
ion-select {
    min-width: 70%;
    text-align: right;
}
</style>