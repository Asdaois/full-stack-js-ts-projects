import React, { useState } from 'react'

const useTelegram = () => {
  const [message, setMessage] = useState < ContactMeData >({ ...DEFAULT_MESSAGE })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const preparedMessage = formatContactInfo(message)

    await sendMessage(preparedMessage)

    setMessage({ ...DEFAULT_MESSAGE })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log(e)
    const changedMessage: ContactMeData = { ...message }
    changedMessage[e.target.name] = e.target.value as string
    setMessage(changedMessage)
  }

  return { message, handleChange, handleSubmit }
}

type ContactMeData = {
  message: string;
  name: string;
  email: string;
  subject: string;
}

const formatContactInfo = (contactMeData: ContactMeData): string => {
  const { name, email, subject, message } = contactMeData
  const formattedString = `From:${name} ${email}\nSubject: ${subject}\n\nMessage: ${message}`
  return encodeURIComponent(formattedString)
}

const sendMessage = async (message: string) : Promise<void> => {
  await fetch(`${process.env.REACT_APP_TELEGRAM_BOT}${message}`,
    {
      headers: { 'Content-Type': 'application/json' }
    })
}

const DEFAULT_MESSAGE: ContactMeData = { name: '', email: '', subject: '', message: '' }

export default useTelegram
