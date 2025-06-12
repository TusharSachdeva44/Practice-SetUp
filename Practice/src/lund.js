// prettier setup

import lundPeCurrent from 'express';
import dotenv from 'dotenv';

const chutiyapa = lundPeCurrent();
const chhed = 3000;

dotenv.config({
    path: './.env'
})

chutiyapa.get('/', (lundLe, lundBhej) => {
    lundBhej.send("<h1>Teri maa ki chut</h1>")
})

chutiyapa.listen(process.env.PORT, () => {
    console.log(`Teri maa http://localhost:${process.env.PORT} pe chud ri hai`);
})