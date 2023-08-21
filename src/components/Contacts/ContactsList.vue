<template>
  <div class="contacts-list">
    <ContactsEl v-for="contact in contactsStore.foundContacts" :contact="contact"></ContactsEl>
  </div>
</template>
<script setup>
import ContactsEl from "./ContactsEl.vue";
import { useContactsStore } from '../../store/ContactsStore.js'
const contactsStore = useContactsStore()
</script>

<style lang="scss">
.contacts-list {
  height: calc(70vh + 121px);
  overflow: auto;
  @media all and (max-width: 1280px) {
    height: calc(70vh + 100px);
  }
  @media all and (max-width: 650px) {
    height: calc(100vh - 91px);
  }

}
</style>