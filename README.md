# BotVK
 Чат-бот ВКонтатке

# Настройка
 Все настройки бота находятся в файле `config.json`


 ``` js
 {
    "TOKEN": "", /* Токен сообщества
    "group_id": "", /* ID - сообщества для использования GroupPolling */
    "admins": [], /* Список ID администраторов */
    "is_explicit": true
 }
 ```

 Токен сообщества указывать в файле `.env` либо в [`config.json`](config.json)
 
 ``` js
 // .env
 TOKEN=""
 
 ```



# Создание плагина
 Плагины бота расположены в [`plugins/`](plugins/). 

 Для [hear](https://github.com/negezor/vk-io/blob/master/docs/ru/api-reference/updates.md#hear) в  [`plugins/hear`](plugins/hear).
 Для [on](https://github.com/negezor/vk-io/blob/master/docs/ru/api-reference/updates.md#on) в [`plugins/on`](plugins/on).

## Шаблон плагина

Шаблон для hear: 

```js
let { uptime } = require('../../utils.js');


const handler = async (cxt, vk) => {
    // some code ...
}

const uptime = async (ctx) => {
    await ctx.send(`Uptime: ${utils.uptime()}`);
}


module.exports = [
    {
        hear: '/text', // Текст с которым сверяет. Подробнее: https://github.com/negezor/vk-io/blob/master/docs/ru/api-reference/updates.md#hear
        execute: handler // Обработчик
    }, 
    {
        hear: '/uptime',
        execute: uptime
    }
]

```

Шаблон для on:  

```js
const hander = async (cxt, vk) => {
    // some code...
}

module.exports = [
    {
        type: 'message', // Тип события. Подробнее: https://github.com/negezor/vk-io/blob/master/docs/ru/api-reference/updates.md#on 
        execute: handler // Обработчик
    }
]

```
