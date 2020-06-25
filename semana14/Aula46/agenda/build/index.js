"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
moment.locale('pt-br');
const allEvents = [
    {
        name: "Super evento",
        description: "Super, duper, mega evento",
        startAt: moment("26/06/2020 17:00", "DD/MM/YYYY HH:mm"),
        finishAt: moment("30/06/2020 17:00", "DD/MM/YYYY HH:mm")
    },
    {
        name: "Mini evento",
        description: "Mini, micro, nano evento",
        startAt: moment("30/06/2020 10:00", "DD/MM/YYYY HH:mm"),
        finishAt: moment("30/06/2020 10:05", "DD/MM/YYYY HH:mm")
    }
];
const printAllEvents = (events) => {
    events.forEach((item) => {
        const duration = item.finishAt.diff(item.startAt, "minutes");
        const today = moment();
        const daysUntilEvent = item.startAt.diff(today, "days");
        console.log(`
            Nome: ${item.name}
            Horário de início: ${item.startAt.format("dddd, DD [de] MMMM [de] YYYY, HH:mm")}
            Horário de fim: ${item.finishAt.format("DD [de] MMMM [de] YYYY, HH:mm")}
            Descrição: ${item.description}
            Duração: ${duration} minutos
            Dias até o evento: ${daysUntilEvent}
        `);
    });
};
const createEvent = (name, description, startAt, finishAt) => {
    console.log("passou 1");
    if (!name || !description || !startAt || !finishAt) {
        console.log("Invalid input");
        return;
    }
    ;
    console.log("passou 2");
    const diffStartAtAndToday = startAt.diff(moment(), "seconds");
    const diffFinishAtAndToday = startAt.diff(moment(), "seconds");
    if (diffStartAtAndToday < 0 && diffFinishAtAndToday < 0) {
        console.log("Date cannot be prior to the current date");
        return;
    }
    ;
    console.log("passou 3");
    allEvents.push({
        name,
        description,
        startAt,
        finishAt
    });
    console.log("passou 4");
};
createEvent("eventin", "evento bem pequeninin", moment("01/07/2020 07:00", "DD/MM/YYYY HH:mm"), moment("01/07/2020 07:01", "DD/MM/YYYY HH:mm"));
printAllEvents(allEvents);
//# sourceMappingURL=index.js.map