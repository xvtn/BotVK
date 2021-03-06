const { randElement } = require('../../utils');


let requests = [
    /* @Euk0r давай еще реквесты */
    "и сделай 30 приседаний.",
    "и сделай 20 приседаний.",
    "и сделай 10 приседаний.",
    "и сделай 20 классических отжиманий.",
    "и сделай 20 отжиманий на кулаках.",
    "и сделай 10 подтягиваний.",
    "и сделай разминку шеи.",
    "и сделай разминку рук.",
    "и сделай разминку тела",
    "и сделай упражнения для туловища.",
    "и сделай по 15 выпадов на каждую ногу.",
    "и сделай по 5 наклонов в каждую сторону.",
    "и сделай 20 наклонов вперед.",
    "и сделай чай.",
    "и сделай кофе.",
    "и прочти книгу",
    "и сделай уборку в доме."
]

let requestPlease = async (context, vk) => {

    await context.send({
        attachment: 'photo502046138_457250333_7126224d0353b509d2',
        message: `Оторвись от компа ${requests.randElement()}`
    });
}

let requestPleaseCustom = async (context, vk) => {

    await context.send({
        attachment: 'photo502046138_457250333_7126224d0353b509d2',
        message: `${context.$match[1].split('').join('')}`
    });
}


module.exports = [
    {
        hear: ['/please', /^просьба/],
        execute: requestPlease
    },
    {
        hear: /\/плиз (.+)$/,
        execute: requestPleaseCustom
    }
]