<template>
  <div class="contacts-el" @click="changeChat" :class="{'contacts-el_active' : contact.active}">
    <img :src=contact.img alt="Аватар" class="contacts-el__avatar avatar" >
    <div class="contacts-el__info">
      <div class="contacts-el__top">
        <div class="contacts-el__name">{{ contact.name }}</div>
        <div class="contacts-el__time">{{ lastMessage.time }}</div>
      </div>
      <div class="contacts-el__message">{{ lastMessage.text }}</div>
    </div>
  </div>
</template>

<script setup>
import {computed, toRefs} from "vue";
import { useRouter } from 'vue-router'
import {useContactsStore} from '../../store/ContactsStore.js'
const props = defineProps({
  contact: Object
})
const {contact} = toRefs(props)

let lastMessage = computed(()=> {
  return contact.value.chat[contact.value.chat.length - 1]
})


const store = useContactsStore()
function changeChat() {
  store.changeChatId(contact.value.id)
}
</script>

<style lang="scss">
@import "../../styles/variables";
.contacts-el {
  display: flex;
  padding: 20px 30px;
  cursor: pointer;
  @media all and (max-width: 1280px) {
    padding: 20px;
  }
  &_active {
    background: rgba(#5855FF, 0.2);
    .contacts-el__message {
      color: #A2A4D1;
    }
  }
  &__avatar {
    margin-right: 20px;
    @media all and (max-width: 1280px) {
      margin-right: 15px;
      height: 65px;
    }
    @media all and (max-width: 1024px) {
      height: 55px;
    }
  }
  &__info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
  }
  &__top {
    display: flex;
    justify-content: space-between;
  }
  &__name {
    color: #fff;
    font-size: 18px;
    @media all and (max-width: 1280px) {
      font-size: 14px;
    }
    @media all and (max-width: 650px) {
      font-size: 13px;
    }
  }
  &__time {
    color: $secondary;
    font-size: 14px;
    @media all and (max-width: 1280px) {
      font-size: 12px;
    }
  }
  &__message {
    color: $secondary;
    font-size: 14px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    word-break: break-all;
    @media all and (max-width: 1280px) {
      font-size: 12px;
    }
  }
}
</style>