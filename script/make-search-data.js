const fs = require('fs');
const path = require('path');

const OBJ = [];

const fileBasePath = path.join(__dirname, '../data');

const KEY_MAP = JSON.parse(fs.readFileSync(path.join(__dirname, '../public/mapping-key.json'), "utf-8"));

fs.readdirSync(fileBasePath).forEach(name => {
    const data = JSON.parse(fs.readFileSync(path.join(fileBasePath, name), "utf-8"));

    if (data.info?.id != undefined) {
        OBJ.push({
            id: KEY_MAP[data.info?.id],
            label: data.info?.title + ' - ' + data.info?.singer,
            category: data.info?.category,
        })
    }

})

fs.writeFileSync(path.join(__dirname, '../public/search-data.json'), JSON.stringify(OBJ, null, 2), "utf-8");