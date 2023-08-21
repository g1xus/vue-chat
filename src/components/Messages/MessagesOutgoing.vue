<template>
  <div class="messages-outgoing">
    <div class="messages-outgoing__wrapper">
      <div class="messages-el">
        <div class="messages-el__text">
          {{ message.text }}
        </div>
        <div class="messages-el__time">{{ message.time }}</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {toRefs} from "vue";

const props = defineProps({
  message: Object
})
const {message} = toRefs(props)
</script>
<style lang="scss">
.messages-outgoing {
  display: flex;
  justify-content: end;
  margin-bottom: 5px;

  &__wrapper {
    padding: 15px;
    border-radius: 30px 30px 2px 30px;
    background: #3E4070;
    width: 70%;
    @media all and (max-width: 1280px) {
      width: 75%;
    }
    @media all and (max-width: 1024px) {
      width: calc(100% - 57px);
    }
  }
}

.messages-el {
  color: #A2A4D1;
}
</style>