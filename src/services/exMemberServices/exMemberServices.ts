import { exMember } from '../../types';
import exMemberData from './ex_members.json';

// this as just it's for compatibility with a json object cause the property could be different
const exMember: exMember[] = exMemberData as exMember[];

//Member is declare as array type member and all data of exMember are declared on Member array
export const getExMember = (): exMember[] => exMember;

//if there isn't a member with a id verify that it exists a member if not return undefined
export const findById = (id: number): exMember | undefined => {
    const idExMember = exMember.find(m => m.id === id);
    if (idExMember != undefined) {
        return idExMember;
    }
    return undefined;
};