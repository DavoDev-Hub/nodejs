import { DiaryEntry, NonSensitiveInfoDiaryEntry } from '../types';
import diaryData from './diaries.json';


// Los archivos de typescript siempre buscan primero ".tsx" -> ".ts" -> ".node.ts" -> ".js" -> ".json"
// Es buena práctica definir los tipos de datos que se importan desde archivos JSON

// Aserción de tipos para indicar que diaryData es un array de DiaryEntry
// Esto es seguro siempre y cuando el contenido de diaries.json cumpla con la estructura de DiaryEntry
// Evitar esto, es poco recomendable en producción sin validación adicional
const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>;

export const getEntries = (): DiaryEntry[] => diaries;

export const findById = (id: number): DiaryEntry | undefined => {
    const entry = diaries.find(d => d.id === id);
    if (entry !== undefined) {
        return entry;
    }
    throw new Error('Entry not found');
}

export const getEntriesWithoutSensitiveInfo = (): Array<NonSensitiveInfoDiaryEntry> => {
    return diaries.map(({ id, date, weather, visibility }) => ({ id, date, weather, visibility }));
}

export const addEntry = (): undefined => undefined;

