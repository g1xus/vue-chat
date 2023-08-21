<template>
  <div class="messages-header">
    <div class="messages-header__contact">
      <img src="../../assets/backArrow.svg" alt="Назад" class="messages-header__back" @click="backToContacts">
      <img :src=contact.img alt="Аватар" class="messages-header__avatar avatar">
      <div class="messages-header__info">
        <div class="messages-header__name">{{ contact.name }}</div>
        <div class="messages-header__last-seen">Был 7 часов назад</div>
      </div>
    </div>
    <div class="messages-header__support more-1024">
      Связаться с поддержкой
    </div>
    <div class="messages-header__support less-1024">
      Поддержка
    </div>
  </div>
</template>
<script setup>
import {toRefs} from "vue";
import {useContactsStore} from "../../store/ContactsStore.js";

const props = defineProps({
  contact: Object
})
const {contact} = toRefs(props)

const contactsStore = useContactsStore()

function backToContacts() {
  contactsStore.changeChatId(0)
}
</script>

<style lang="scss">
@import "../../styles/variables";
.more-1024 {
  display: block;
  @media all and (max-width: 1024px) {
    display: none;
  }
}
.less-1024 {
  display: none;
  @media all and (max-width: 1024px) {
    display: block;
  }
}
.messages-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  border-bottom: 1px solid $secondary;
  @media all and (max-width: 1280px) {
    padding: 20px;
  }
  @media all and (max-width: 650px) {
    padding: 16px;
  }
  &__contact {
    display: flex;
  }
  &__avatar {
    margin-right: 20px;
    height: 60px;
    @media all and (max-width: 1024px) {
      height: 50px;
    }
  }
  &__info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  &__name {
    font-size: 18px;
    color: #fff ;
    @media all and (max-width: 1280px) {
      font-size: 16px;
    }
    @media all and (max-width: 650px) {
      font-size: 13px;
    }
  }
  &__last-seen {
    font-size: 12px;
    color: $secondary;
  }
  &__support {
    font-size: 14px;
    font-weight: 600;
    padding: 15px 20px;
    border: 1px solid rgba(255, 174, 71, 0.80);
    border-radius: 15px;
    color: #ffffff;
    cursor: pointer;
    @media all and (max-width: 1280px) {
      font-size: 12px;
    }
  }
  &__back {
    display: none;
    @media all and (max-width: 650px) {
      display: block;
      margin-right: 23px;
    }
  }
}
</style>