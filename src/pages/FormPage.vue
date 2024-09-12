/* eslint-disable */
<template>
<FormPersonalData />
<FormChildrenData />

</template>
<script>
import FormChildrenData from '@/components/FormChildrenData.vue';
import FormPersonalData from '@/components/FormPersonalData.vue';

export default {
  name: 'FormPage',
  components: {
        FormChildrenData,
        FormPersonalData,
      }
}
</script>

<style>
</style>