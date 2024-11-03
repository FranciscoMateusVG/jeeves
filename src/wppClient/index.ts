import { type Client, NotificationLanguage, create } from '@open-wa/wa-automate'
let whatsappClient: Client

const initClient = async () => {
  whatsappClient = await create({
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
  })
  return whatsappClient
}

export { initClient, whatsappClient }
