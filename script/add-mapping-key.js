const { randomUUID } = require("crypto");
const fs = require("fs");

const OBJ = {};

for (let ix = 0; ix < 50000; ++ix) {
    OBJ[ix] = randomUUID();
}

fs.writeFileSync("./public/mapping-key.json", JSON.stringify(OBJ, null, 2), "utf-8");