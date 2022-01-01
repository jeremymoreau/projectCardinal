<template>
  <IonApp>
    <IonSplitPane content-id="main-content">
      <ion-menu menu-id="side-menu" content-id="main-content" type="overlay">
        <ion-content>
          <ion-list id="inbox-list">
            <ion-list-header>Project Cardinal</ion-list-header>

            <!-- <ion-menu-toggle> -->
              <ion-item>
                <ion-icon slot="start" :icon="personCircleOutline"></ion-icon>
                <ion-label>About us</ion-label>
              </ion-item>
              <ion-item>
                <ion-icon slot="start" :icon="helpCircleOutline"></ion-icon>
                <ion-label>About this app</ion-label>
              </ion-item>
              <!-- <ion-item>
                <ion-icon slot="start" :icon="mailOutline"></ion-icon>
                <ion-label>Contact / Suggestions</ion-label>
              </ion-item> -->
              <ion-item button="true" @click="gotoPage('SideMenuInstall')">
                <ion-icon slot="start" :icon="downloadOutline"></ion-icon>
                <ion-label>Install this app</ion-label>
              </ion-item>
            <!-- </ion-menu-toggle> -->
          </ion-list>
  
        </ion-content>
      </ion-menu>
      <ion-router-outlet id="main-content"></ion-router-outlet>
    </IonSplitPane>
  </IonApp>
</template>

<script lang="js">
import { IonApp, IonContent, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonRouterOutlet, IonSplitPane } from '@ionic/vue';
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import { helpCircleOutline, personCircleOutline, mailOutline, downloadOutline } from 'ionicons/icons';
import 'remixicon/fonts/remixicon.css'
import { menuController } from "@ionic/vue";

export default defineComponent({
  name: 'App',
  components: {
    IonApp, 
    IonContent, 
    IonIcon, 
    IonItem, 
    IonLabel, 
    IonList, 
    IonListHeader, 
    IonMenu, 
    // IonMenuToggle, 
    IonRouterOutlet, 
    IonSplitPane,
  },
  methods: {
    gotoPage(pageName) {
      this.$router.push({
        name: pageName,
      });
      menuController.close("side-menu");
    },

  },
  setup() {
    const route = useRoute();
    
    return { 
      helpCircleOutline, personCircleOutline, mailOutline, downloadOutline
    }
  }
});
</script>

<style scoped>
ion-menu ion-content {
  --background: var(--ion-item-background, var(--ion-background-color, #fff));
}

ion-menu.md ion-content {
  --padding-start: 8px;
  --padding-end: 8px;
  --padding-top: 20px;
  --padding-bottom: 20px;
}

ion-menu.md ion-list {
  padding: 20px 0;
}

ion-menu.md ion-note {
  margin-bottom: 30px;
}

ion-menu.md ion-list-header,
ion-menu.md ion-note {
  padding-left: 10px;
}

ion-menu.md ion-list#inbox-list {
  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);
}

ion-menu.md ion-list#inbox-list ion-list-header {
  font-size: 22px;
  font-weight: 600;

  min-height: 20px;
}

ion-menu.md ion-list#labels-list ion-list-header {
  font-size: 16px;

  margin-bottom: 18px;

  color: #757575;

  min-height: 26px;
}

ion-menu.md ion-item {
  --padding-start: 10px;
  --padding-end: 10px;
  border-radius: 4px;
}

ion-menu.md ion-item.selected {
  --background: rgba(var(--ion-color-primary-rgb), 0.14);
}

ion-menu.md ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.md ion-item ion-icon {
  color: #616e7e;
}

ion-menu.md ion-item ion-label {
  font-weight: 500;
}

ion-menu.ios ion-content {
  --padding-bottom: 20px;
}

ion-menu.ios ion-list {
  padding: 20px 0 0 0;
}

ion-menu.ios ion-note {
  line-height: 24px;
  margin-bottom: 20px;
}

ion-menu.ios ion-item {
  --padding-start: 16px;
  --padding-end: 16px;
  --min-height: 50px;
}

ion-menu.ios ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.ios ion-item ion-icon {
  font-size: 24px;
  color: #73849a;
}

ion-menu.ios ion-list#labels-list ion-list-header {
  margin-bottom: 8px;
}

ion-menu.ios ion-list-header,
ion-menu.ios ion-note {
  padding-left: 16px;
  padding-right: 16px;
}

ion-menu.ios ion-note {
  margin-bottom: 8px;
}

ion-note {
  display: inline-block;
  font-size: 16px;

  color: var(--ion-color-medium-shade);
}

ion-item.selected {
  --color: var(--ion-color-primary);
}
</style>