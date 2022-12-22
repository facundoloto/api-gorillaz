"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findById = exports.getDisk = void 0;
const disks_json_1 = __importDefault(require("./disks.json"));
// this as just it's for compatibility with a json object cause the property could be different
const disk = disks_json_1.default;
const getDisk = () => disk;
exports.getDisk = getDisk;
const findById = (id) => {
    const idDisk = disk.find(d => d.id === id);
    if (idDisk != undefined) {
        return idDisk;
    }
    return undefined;
};
exports.findById = findById;
