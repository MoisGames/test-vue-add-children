/* eslint-disable */
<template>
<FormPersonalData />
<ButtonAddChildren/>
<FormChildrenData v-if="shapeSwitch"/>

</template>
<script>
import ButtonAddChildren from '@/components/ButtonAddChildren.vue';
import FormChildrenData from '@/components/FormChildrenData.vue';
import FormPersonalData from '@/components/FormPersonalData.vue';

export default {
  name: 'FormPage',
  components: {
        FormChildrenData,
        FormPersonalData,
        ButtonAddChildren,
      }
}
let shapeSwitch = false;
</script>

<style>
</style>