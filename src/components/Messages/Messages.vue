<template>
  <div class="messages">
    <Header :contact="contact"></Header>
    <MessagesList :contact="contact"></MessagesList>
    <Footer :contact="contact"></Footer>
  </div>
</template>
<script setup>
import Header from "./Header.vue";
import MessagesList from "./MessagesList.vue";
import Footer from "./Footer.vue";
import {toRefs} from "vue";
const props = defineProps({
  contact: Object,
})
const {contact} = toRefs(props)



</script>

<style lang="scss">
@import "../../styles/variables";
.messages {
  width: 56%;
  @media all and (max-width: 1280px) {
    width: 49%;
  }
  @media all and (max-width: 1024px) {
    width: 58%;
  }
  @media all and (max-width: 650px) {
    width: 100%;
  }
}
.messages-el {
  display: flex;
  justify-content: space-between;
  align-items: end;
  &__text {
    line-height: 28px;
    text-align: left;
    word-break: break-all;
    @media all and (max-width: 1280px) {
      font-size: 14px;
    }
    @media all and (max-width: 650px) {
      font-size: 13px;
    }
  }
  &__time {
    font-size: 12px;
  }
}
</style>