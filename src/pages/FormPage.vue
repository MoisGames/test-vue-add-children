
<template>
<!-- <FormPersonalData /> -->
<FormChildrenData />

</template>
<script>
import FormChildrenData from '@/components/forms/FormChildrenData.vue';
import FormPersonalData from '@/components/forms/FormPersonalData.vue';

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