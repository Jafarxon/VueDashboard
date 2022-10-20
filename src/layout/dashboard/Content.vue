<template>
  <div class="content">
    <fade-transition :duration="100" mode="out-in">
      <router-view></router-view>
    </fade-transition>
  </div>
</template>
<script>
import { FadeTransition } from "vue2-transitions";
export default {
  components: {
    FadeTransition,
  },
};
</script>

<style lang="scss">
.content {
  min-height: calc(100vh - 150px);
  max-width: 100%;
  overflow-x: overlay;
  margin: 25px;
  background-color: white;
  border-radius: 10px;
  padding: 10px 20px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
}
</style>
