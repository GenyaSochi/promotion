import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  // Валидация данных
  if (!body.name || !body.email || !body.message) {
    throw createError({
      statusCode: 400,
      message: 'Заполните обязательные поля'
    })
  }

  // Создаём транспортер для Яндекс.Почты
  const transporter = nodemailer.createTransport({
    service: 'yandex',
    host: 'smtp.yandex.ru',
    port: 465,
    secure: true,
    auth: {
      user: 'promotion.w@yandex.ru',
      pass: process.env.YANDEX_APP_PASSWORD // Пароль приложения Яндекс
    }
  })

  // Формируем письмо
  const mailOptions = {
    from: '"Форма связи" <promotion.w@yandex.ru>',
    to: 'promotion.w@yandex.ru',
    replyTo: body.email,
    subject: `Новое сообщение от ${body.name}`,
    html: `
      <h2>Новое сообщение с сайта</h2>
      <p><strong>Имя:</strong> ${body.name}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      ${body.phone ? `<p><strong>Телефон:</strong> ${body.phone}</p>` : ''}
      ${body.service ? `<p><strong>Услуга:</strong> ${body.service}</p>` : ''}
      <p><strong>Сообщение:</strong></p>
      <p>${body.message}</p>
    `
  }

  try {
    await transporter.sendMail(mailOptions)
    return {
      success: true,
      message: 'Письмо успешно отправлено'
    }
  } catch (error) {
    console.error('Ошибка отправки письма:', error)
    throw createError({
      statusCode: 500,
      message: 'Ошибка при отправке письма'
    })
  }
})
