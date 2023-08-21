<template>
  <div class="messages-footer">
    <input class="messages-footer__input input" v-model="messageText" type="text" placeholder="Напишите сообщение ...">
    <div class="messages-footer__send small-btn" @click="sendMessage">
      <img src="../../assets/arrow.svg" alt="Отправить">
    </div>
  </div>
</template>
<script setup>
import {ref, toRefs, onMounted, onBeforeUnmount} from "vue";
import {useContactsStore} from "../../store/ContactsStore.js";

const props = defineProps({
  contact: Object
})
const {contact} = toRefs(props)

const store = useContactsStore()
let messageText = ref('')
function sendMessage() {
  if(messageText.value != '') {
    const date = new Date()
    let time = date.toLocaleTimeString().slice(0,-3)
    store.sendMessage(contact.value.id, messageText.value, time)
    messageText.value = ''
  }
}
function listener(e) {
  if( e.code === 'Enter' ) {
    sendMessage()
  }
}
onMounted(()=>{
  document.addEventListener('keydown', (e) => listener(e))
})
onBeforeUnmount(() => {
  document.removeEventListener('keydown', (e) => listener(e))
})
</script>

<style lang="scss">
@import "../../styles/variables";
.messages-footer {
  padding: 30px;
  position: relative;
  border-top: 1px solid $secondary;
  @media all and (max-width: 1280px) {
    padding: 20px;
  }
  &__input {
    @media all and (max-width: 1024px) {
      padding: 16px 50px 16px 20px;
      border-radius: 17px;
    }
  }
  &__send {
    @media all and (max-width: 1024px) {
      width: 37px;
      height: 37px;
      border-radius: 15px;
    }
  }
}
</style>