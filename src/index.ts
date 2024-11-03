import express from 'express'
import { initClient, whatsappClient } from './wppClient'

const app = express()

app.use(express.json())

app.get('/all-contacts', async (req, res) => {
  const contacts = await whatsappClient.getAllContacts()
  const filteredContacts = contacts.filter((contact) =>
    contact.id.includes('@c.us')
  )
  res.json(filteredContacts)
})

app.post('/send-message', async (req, res) => {
  const { contactId, message } = req.body

  const messageSent = await whatsappClient.sendText(contactId, message)

  res.json({ message: 'Message sent' })
})

initClient().then(() => {
  app.listen(3000, () => {
    console.log('Server is running on port 3000')
  })
})
