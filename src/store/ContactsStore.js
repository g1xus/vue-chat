import {defineStore} from "pinia";
import {ref} from "vue";

export const useContactsStore = defineStore('contactsStore', () => {
    const contacts = ref([
        {
            id: 1,
            name: 'someUser1',
            img: '/src/assets/avatar-1.jpg',
            chat: [
                {
                    id: 1,
                    time: "19:10",
                    text: "Hi there! How r u doin'Hi there! How r u doin'Hi there! How r u doin'Hi there! How r u doin'Hi there! How r u doin'Hi there! How r u doin'Hi there! How r u doin'Hi there! How r u doin'Hi there! How r u doin'? ",
                    type: "incoming"
                },
                {
                    id: 2,
                    time: "19:10",
                    text: "Hi there! Hi there! How r u doin'Hi there! How r u doin'Hi there! How r u doin'Hi there! How r u doin'How r u doin'? ",
                    type: "incoming"
                },
                {
                    id: 3,
                    time: "19:10",
                    text: "Hi there! HHi there! How r u doin'Hi there! How r u doin'Hi there! How r u doin'Hi there! How r u doin'Hi there! How r u doin'ow r u doin'? ",
                    type: "outgoing"
                },{
                    id: 3,
                    time: "19:10",
                    text: "Hi there! HHi there! How r u doin'Hi there! How r u doin'Hi there! How r u doin'Hi there! How r u doin'Hi there! How r u doin'Hi there! How r u doin'Hi there! How r u doin'Hi there! How r u doin'Hi there! How r u doin'Hi there! How r u doin'Hi there! How r u doin'Hi there! How r u doin'Hi there! How r u doin'Hi there! How r u doin'Hi there! How r u doin'Hi there! How r u doin'ow r u doin'? ",
                    type: "outgoing"
                },
                {
                    id: 4,
                    time: "19:10",
                    text: "Hi there! HowHi there! How r u doin'Hi there! How r u doin'Hi there! How r u doin' r u doin'? ",
                    type: "incoming"
                },
                {
                    id: 5,
                    time: "19:10",
                    text: "Hi there! How r u doin'? ",
                    type: "incoming"
                },
            ],
            active: false
        },
        {
            id: 2,
            name: 'someUser2',
            img: '/src/assets/avatar-2.jpg',
            chat: [
                {
                    id: 1,
                    time: "19:10",
                    text: "Hi there! asdasdasd r u doin'? ",
                    type: "incoming"
                },
                {
                    id: 2,
                    time: "19:10",
                    text: "Hi there! How rasdasdsa u doin'? ",
                    type: "incoming"
                },
                {
                    id: 3,
                    time: "19:10",
                    text: "Hi there! How r asfasdfasu doin'? ",
                    type: "outgoing"
                },{
                    id: 3,
                    time: "19:10",
                    text: "Hi tgdfgashere! How r dfasdasu doin'? ",
                    type: "outgoing"
                },
                {
                    id: 4,
                    time: "19:10",
                    text: "Hi fasdfrasdfasdfa u doin'? ",
                    type: "incoming"
                },
                {
                    id: 5,
                    time: "19:10",
                    text: "Hi thfasdfasdfasdfasdfasdfsdfdoin'? ",
                    type: "incoming"
                },
            ],
            active: false
        },
    ])
    const foundContacts = ref(contacts.value)
    const currentChat = ref(null)

    const changeChatId = (id) => {
        if(id == 0) {
            currentChat.value.active = false
            currentChat.value = null
        } else {
            currentChat.value = contacts.value.filter((contact) => contact.id == id)[0]
            contacts.value.forEach((item) => {
                item.active = false
            })
            currentChat.value.active = true
        }
    }
    const sendMessage = (contactId, text, time) => {
        const foundContact = contacts.value.findIndex((contact)=>contact.id==contactId)
        let chatLength = (contacts.value[foundContact].chat).length
        contacts.value[foundContact].chat.push(
            {
                id: chatLength + 1,
                time: time,
                text: text,
                type: "outgoing"
            }
        )
        console.log(currentChat.value)
    }

    const findContacts = (searchTerm) => {
        foundContacts.value = []
        contacts.value.forEach((contact)=>{
            const lowerCaseContactName = contact.name.toLowerCase()
            const lowerCaseSearchTerm = searchTerm.value.toLowerCase()
            const contactNameArr = lowerCaseContactName.split('')
            const searchTermArr = lowerCaseSearchTerm.split('')
            //Берем столько символов из контакта-претендента, сколько было введено симоволов
            //пользователем и сравниваем с тем, что ввёл пользователь
            if((contactNameArr.splice(0, searchTermArr.length)).join('') == lowerCaseSearchTerm) {
                foundContacts.value.push(contact)
            }
        })
    }

    return {
        contacts,
        currentChat,
        changeChatId,
        sendMessage,
        foundContacts,
        findContacts
    }
})