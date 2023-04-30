const axios = require('axios');
const fs = require('fs');
const path = require('path');

const fileBasePath = path.join(__dirname, '../data');
const [_, __, ...etc] = process.argv;

const [startPage, endPage] = etc;

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

const getChordList = async (id) => {
    const { data: { data } } = await axios.get(`https://api.chordscore.com/api/score/detail?id=${id}`);

    fs.writeFileSync(path.join(fileBasePath, `/${id}.json`), JSON.stringify(data, null, 2));
}



async function init() {
    for (let index = parseInt(startPage); index < parseInt(endPage); index++) {
        console.log(index)
        await getChordList(index)
        await sleep(1000);
    }
}

init()