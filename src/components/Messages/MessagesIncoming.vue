<template>
  <div class="messages-incoming"
       :class="{'messages-incoming_last-in-group':isLastMsgInGroup,
        'messages-incoming_first-in-group':isFirstMsgInGroup,
        'messages-incoming_first-in-list':isFirstMsgInList,
        'messages-incoming_last-in-list':isLastMsgInList,
        }"
  >
    <div class="messages-incoming__avatar" >
      <img :src=contact.img class="avatar" alt="Аватар" v-if="isLastMsgInGroup">
    </div>
    <div class="messages-incoming__wrapper">
        <div class="messages-incoming__name" v-if="isFirstMsgInGroup">
          {{ contact.name }}
        </div>
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
  message: Object,
  contact: Object,
  isLastMsgInGroup: Boolean,
  isFirstMsgInGroup: Boolean,
  isLastMsgInList: Boolean,
  isFirstMsgInList: Boolean,
})
const {
  message,
  contact,
  isLastMsgInGroup,
  isFirstMsgInGroup,
  isLastMsgInList,
  isFirstMsgInList
} = toRefs(props)
</script>

<style lang="scss">
@import "../../styles/variables";

.messages-incoming {
  display: flex;
  align-items: end;
  margin-bottom: 5px;
  &__wrapper {
    padding: 15px;
    border-radius: 30px 30px 30px 2px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    background: #2C2731;
    width: 70%;
    @media all and (max-width: 1280px) {
      width: 75%;
    }
    @media all and (max-width: 1024px) {
      width: calc(100% - 57px);
    }

    :not(:first-child) {
      .messages-incoming__name {
        display: none;
      }
    }

    :not(:last-child) {
      .messages-incoming__avatar {
        display: none;
      }
    }

    :last-child {
      margin-bottom: 0;
    }
  }
  &__avatar {
    display: flex;
    align-items: end;
    margin-right: 20px;
    width: 47px;
    height: 47px;
    @media all and (max-width: 1280px) {
      margin-right: 10px;
    }
    @media all and (max-width: 650px) {
      display: none;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }

  &__name {
    color: #fff;
    font-weight: 600;
    margin-bottom: 5px;
    text-align: left;
    @media all and (max-width: 1280px) {
      font-size: 14px;
    }
    @media all and (max-width: 650px) {
      font-size: 13px;
      margin-bottom: 10px;
    }
  }
  &_last-in-group {
    margin-bottom: 20px;
    @media all and (max-width: 1280px) {
      margin-bottom: 10px;
    }
  }
  &_first-in-group {
    margin-top: 20px;
    @media all and (max-width: 1280px) {
      margin-top: 10px;
    }
  }
  &_first-in-list {
    margin-top: 0;
  }
  &_last-in-list {
    margin-bottom: 0;
  }
}

.messages-el {
  color: $secondary;
}
</style>
