import { Schema, model } from 'mongoose';

const NoteSchema = new Schema({});

export const Note = model('Note', NoteSchema);
