<template>
  <div class="contacts-header">
    <input class="contacts-header__search input" v-model="searchText" type="text" placeholder="Поиск ...">
    <div class="contacts-header__profile small-btn">F</div>
  </div>
</template>

<script setup>
import {ref, watch} from "vue";
import {useContactsStore} from "../../store/ContactsStore.js";

const searchText = ref('')
const store = useContactsStore()
watch(searchText, () => {
      store.findContacts(searchText)
    },
)
</script>

<style lang="scss">
@import "../../styles/variables";

.contacts-header {
  padding: 30px;
  position: relative;
  border-bottom: 1px solid $secondary;
  @media all and (max-width: 1280px) {
    padding: 20px;
  }

  &__profile {
    color: #FF9839;
  }

  &__search {
    @media all and (max-width: 650px) {
      padding: 16px 20px;
      font-size: 13px;
      border-radius: 15px;
    }
  }

  &__profile {
    @media all and (max-width: 650px) {
      width: 36px;
      height: 36px;
      top: 27px;
      right: 27px;
      border-radius: 15px;
    }

  }
}
</style>