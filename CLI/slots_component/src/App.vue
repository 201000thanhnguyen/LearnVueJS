<template>
  <div>
    <form-helper>
      <h3 slot="title">
        {{ title }}
      </h3>
      <p slot="text">haha</p>
    </form-helper>

    <!-- <component is="form-helper"">
      <h3 slot="title">
        {{ title }}
      </h3>
      <p slot="text">haha</p>
    </component> -->

    // dynamic component
    <component :is="componentImp">
      <h3 slot="title">
        {{ title }}
      </h3>
      <p slot="text">haha</p>
    </component>
  </div>
</template>

<script>
import FormHelper from './components/FormHelper.vue'

export default {
  components: { 
    'form-helper': FormHelper 
  },
  data () {
    return {
      title: "i am dynamic title",
      componentImp: "form-helper"
    }
  }
}
</script>

<style>
</style>
