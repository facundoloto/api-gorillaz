"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findById = exports.getExMember = void 0;
const ex_members_json_1 = __importDefault(require("./ex_members.json"));
// this as just it's for compatibility with a json object cause the property could be different
const exMember = ex_members_json_1.default;
//Member is declare as array type member and all data of exMember are declared on Member array
const getExMember = () => exMember;
exports.getExMember = getExMember;
//if there isn't a member with a id verify that it exists a member if not return undefined
const findById = (id) => {
    const idExMember = exMember.find(m => m.id === id);
    if (idExMember != undefined) {
        return idExMember;
    }
    return undefined;
};
exports.findById = findById;
