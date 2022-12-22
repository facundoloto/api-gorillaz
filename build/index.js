"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const memberRoutes_1 = __importDefault(require("./routes/memberRoutes"));
const exMemberRoutes_1 = __importDefault(require("./routes/exMemberRoutes"));
const diskRoutes_1 = __importDefault(require("./routes/diskRoutes"));
const cors_1 = __importDefault(require("cors"));
const PORT = process.env.PORT || 8000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get('/', (_req, res) => { res.send('Hello World welcome api wiki gorillaz!'); });
app.use('/apigorillaz/v1/member', memberRoutes_1.default);
app.use('/apigorillaz/v1/exmember', exMemberRoutes_1.default);
app.use('/apigorillaz/v1/disk', diskRoutes_1.default);
app.listen(PORT, () => { console.log(`Example app listening at http://localhost:${PORT}`); });
