<template>
  <h1>Hello World!</h1>
  <IonIcon :icon="heart"></IonIcon>
</template>

<script>
// import { addIcons } from "ionicons";
// import { iconList } from "./ionicons_imports";
// addIcons(iconList);

import { IonIcon } from '@ionic/vue';
import { heart } from 'ionicons/icons';

export default {
  components: [ IonIcon, heart ]
}
</script>