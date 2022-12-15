import { Member } from '../../types';
import memberData from './members.json';

// this as just it's for compatibility with a json object cause the property could be different
const member: Member[] = memberData as Member[];

export const getMember = (): Member[] => member;

export const findById = (id: number): Member | undefined => {
    const idMember = member.find(m => m.id === id);
    if (idMember != undefined) {
        return idMember;
    }
    return undefined;
};