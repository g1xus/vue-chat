<template>
  <div class="contacts">
    <Header></Header>
    <ContactsList></ContactsList>
  </div>
</template>
<script setup>
import Header from "./Header.vue";
import ContactsList from "./ContactsList.vue";
</script>

<style lang="scss">
.contacts {
  width: 40%;
  @media all and (max-width: 1280px) {
    width: 49%;
  }
  @media all and (max-width: 1024px) {
    width: 40%;
  }
  @media all and (max-width: 650px) {
    width: 100%;
    display: none;
  }
}
</style>