import express from 'express';
import { Express } from 'express';
import { initializeMongoConnection } from './mongo';

const app: Express = express();

app.listen(8080, async () => {
    console.log(`REST API listenting on port: 8080`);
    await initializeMongoConnection();
});
