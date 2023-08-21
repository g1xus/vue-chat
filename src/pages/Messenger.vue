<template>
  <div class="messenger">
    <Contacts v-if="contactsStore.contacts.length > 0" :class="{'contacts_show':!activeContact}"></Contacts>
    <ContactsEmpty v-else-if="contactsStore.contacts.length == 0"></ContactsEmpty>
    <Messages v-if="activeContact" :contact="activeContact"></Messages>
    <MessagesEmpty v-else></MessagesEmpty>
  </div>
</template>

<script setup>
import Messages from "../components/Messages/Messages.vue";
import Contacts from "../components/Contacts/Contacts.vue";
import MessagesEmpty from "../components/Messages/MessagesEmpty.vue";
import ContactsEmpty from "../components/Contacts/ContactsEmpty.vue";
import {useContactsStore} from "../store/ContactsStore.js";
import {computed} from "vue";

const contactsStore = useContactsStore()

const activeContact = computed(() => contactsStore.currentChat)
</script>

<style lang="scss">
.messenger {
  display: flex;
  justify-content: space-between;
  padding: 100px;
  @media all and (max-width: 1024px) {
    padding: 20px;
  }
  @media all and (max-width: 650px) {
    padding: 0;
  }

}
.contacts_show {
  @media all and (max-width: 650px) {
    display: block;
  }

}
.contacts, .messages {
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.07);
  background: rgba(255, 255, 255, 0.03);
  box-shadow: 2px 0px 10px 0px rgba(6, 3, 9, 0.05), 30px 25px 48px 8px rgba(6, 3, 9, 0.10);
  backdrop-filter: blur(5px);
  @media all and (max-width: 650px) {
    border-radius: 0;
  }
}
</style>