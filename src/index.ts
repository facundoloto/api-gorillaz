import express from 'express';
import membersRoutes from './routes/memberRoutes';
import exMemberRoutes from './routes/exMemberRoutes';
import disk from './routes/diskRoutes'
import cors from 'cors';

const PORT = 8000;
const app = express();

app.use(express.json());
app.use(cors());
app.get('/', (_req, res) => { res.send('Hello World welcome api wiki gorillaz!'); });

app.use('/apigorillaz/v1/member', membersRoutes);
app.use('/apigorillaz/v1/exmember', exMemberRoutes);
app.use('/apigorillaz/v1/disk', disk);

app.listen(PORT, () => { console.log(`Example app listening at http://localhost:${PORT}`); });