import { Client, create, NotificationLanguage } from '@open-wa/wa-automate'

create({
  sessionId: 'COVID_HELPER',
  multiDevice: true, //required to enable multiDevice support
  authTimeout: 60, //wait only 60 seconds to get a connection with the host account device
  blockCrashLogs: true,
  disableSpins: true,
  headless: true,
  hostNotificationLang: NotificationLanguage.PTBR,
  logConsole: false,
  popup: 7500,
  qrTimeout: 0 //0 means it will wait forever for you to scan the qr code
}).then((client) => start(client))

function start(client: Client) {
  console.log('Client started')
  client.onMessage(async (message) => {
    if (message.body) {
      client.sendText(message.from, message.body).catch((err) => {
        console.log(err)
      })

      // client.getAllContacts().then((contacts) => {
      //   contacts.forEach((contact) => {
      //     if (contact.id === '553171511181@c.us') {
      //       client.sendText(contact.id, message.body).catch((err) => {
      //         console.log(err)
      //       })
      //     }
      //   })
      // })
    }
  })
}
