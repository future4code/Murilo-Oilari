"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
function createTask(archive, task) {
    const newData = process.argv[2];
    const data = ("\n" + task);
    const fileName = archive;
    try {
        fs.appendFileSync(fileName, data, 'utf-8');
    }
    catch (e) {
        console.error(e);
    }
    ;
}
;
createTask('', '');
//# sourceMappingURL=index.js.map