"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findById = exports.getMember = void 0;
const members_json_1 = __importDefault(require("./members.json"));
// this as just it's for compatibility with a json object cause the property could be different
const member = members_json_1.default;
const getMember = () => member;
exports.getMember = getMember;
const findById = (id) => {
    const idMember = member.find(m => m.id === id);
    if (idMember != undefined) {
        return idMember;
    }
    return undefined;
};
exports.findById = findById;
