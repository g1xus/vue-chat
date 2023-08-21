<template>
  <div class="messages-list" ref="messages">
    <div class="messages__scroll">
      <div class="messages-group" v-for="(message, index) in contact.chat">
        <MessagesIncoming v-if="message.type == 'incoming'"
                          :message="message"
                          :contact="contact"
                          :isLastMsgInGroup="index == (contact.chat).length - 1 || contact.chat[index+1].type == 'outgoing'"
                          :isFirstMsgInGroup="index == 0 || contact.chat[index-1].type == 'outgoing'"
                          :isLastMsgInList="index == (contact.chat).length - 1"
                          :isFirstMsgInList="index == 0"
        ></MessagesIncoming>
        <!--      <MessagesDivider></MessagesDivider>-->
        <MessagesOutgoing v-else :message="message"></MessagesOutgoing>
      </div>
    </div>
  </div>
</template>
<script setup>
import MessagesIncoming from "./MessagesIncoming.vue";
import MessagesOutgoing from "./MessagesOutgoing.vue";
import MessagesDivider from "./MessagesDivider.vue";
import {ref, onMounted, computed, toRefs, watch} from 'vue'

import {useContactsStore} from '../../store/ContactsStore.js'

const props = defineProps({
  contact: Object,
})
const {contact} = toRefs(props)
const messages = ref(null)

onMounted(()=>{
  messages.value.scrollTop = messages.value.scrollHeight

})
watch(contact, () => {
      setTimeout(()=>{
        messages.value.scrollTop = messages.value.scrollHeight
      },1)
    },
    {
      deep: true
    })


</script>

<style lang="scss">
.messages {
  &-list {
    padding: 20px 30px 30px 30px;
    height: calc(70vh);
    overflow: auto;

    @media all and (max-width: 1280px) {
      padding: 20px;
    }
    @media all and (max-width: 650px) {
      padding: 25px;
      height: calc(100vh - 173px);
    }
  }

  &__scroll {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: end;
  }

  &-group {
    text-align: center;
  }
}
</style>