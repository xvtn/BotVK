
const help = async(context, vk) => {
    await context.send(`
        Для получения информации отправьте e-mail.

        Список команд:
        /start - Нaчать
        /help - Получить список команд
        /time - Текущая дата и время
        /about - Информация о боте

        Подробнее https://vk.com/@emailsbot-start
    `);
}


module.exports = [
    {
        hear: [/^(справка|помощь|бот|help)$/i, "/help"],
        execute: help
    },
    {
        hear: {
            text: [/^(справка|помощь|\?|бот|help)$/i],
            isChat: false
        },
        execute: help
    }
]