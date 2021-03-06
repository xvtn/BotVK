const help = async(context, vk) => {
	await context.send(`
		Для получения информации отправьте e-mail.

		Список команд:
		/start - Нaчать
		/help - Получить список команд
		/time - Текущая дата и время
		/about - Информация о боте
		
		Дополнительные команды:

		/cat - Случайное фото с котиком.
		/shrug - ¯\\_(ツ)_/¯
		/ping - Pong.
		/minfo - Информация о сообщении в формате JSON.
		/stick - Получить ссылки на изображения стикера. Команду необходимо отправить в ответ на сообщение со стикером.
		/git <название репозитория> - Получить информацию о репозитории GitHub.
		/uptime - получить uptime бота.
		/please - бот отправит случайную просьбу.
		/плиз <ваша просьба> - бот отправит вашу просьбу.
		/8 <ваш вопрос> - Волшебный 8 шар.
		/coin - игра в монетку
		/trum - Сгенерировать заголовок в стиле TrumTrum.
		/stas - Сгенерировать заголовок в стиле Стаса Ай Как Просто.

		Подробнее https://vk.com/@emailsbot-start
	`);
}


module.exports = [
	{
		hear: [/^(справка|помощь|бот|хелп|хэлп|help)$/i, "/help"],
		execute: help
	},
	{
		hear: {
			text: [/^(справка|помощь|\?|бот|хелп|хэлп|help)$/i],
			isChat: false
		},
		execute: help
	}
]
