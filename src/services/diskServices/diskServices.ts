import { Disk } from '../../types';
import diskData from './disks.json';

// this as just it's for compatibility with a json object cause the property could be different
const disk: Disk[] = diskData as Disk[];

export const getDisk = (): Disk[] => disk;

export const findById = (id: number): Disk | undefined => {
    const idDisk = disk.find(d => d.id === id);
    if (idDisk != undefined) {
        return idDisk;
    }
    return undefined;
};