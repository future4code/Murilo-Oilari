import * as moment from "moment";

moment.locale('pt-br');

type event = {
    name: string,
    description: string,
    startAt: moment.Moment,
    finishAt: moment.Moment
};

const allEvents: event[] = [
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

const printAllEvents = (events: event[]): void => {
    events.forEach((item: event) => {
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

/**
 * para atender ao horário da Inglaterra (GMT+1)
 * seria necessário adicionar as seguintes linhas
 * de código:
 * const dataAserConvertida = ***Aqui vai a data a ser convertida
 * dataAserConvertida.utcOffset("+0100").format("DD MM YYYY")
 */

const createEvent = (
    name: string,
    description: string,
    startAt: moment.Moment,
    finishAt: moment.Moment
): void => {
    if (!name || !description || !startAt || !finishAt) {
        console.log("Invalid input");
        return;
    };

    const diffStartAtAndToday = startAt.diff(moment(), "seconds");
    const diffFinishAtAndToday = startAt.diff(moment(), "seconds");

    if (diffStartAtAndToday < 0 && diffFinishAtAndToday < 0) {
        console.log("Date cannot be prior to the current date");
        return;
    };

    allEvents.push({
        name,
        description,
        startAt,
        finishAt 
    });
};

createEvent("eventin", "evento bem pequeninin", moment("01/07/2020 07:00", "DD/MM/YYYY HH:mm"), moment("01/07/2020 07:01", "DD/MM/YYYY HH:mm"))

printAllEvents(allEvents)
