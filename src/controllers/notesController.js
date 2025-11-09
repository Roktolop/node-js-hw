import {Note} from '../models/note.js';
import createHttpError from 'http-errors';

//GET /notes
export const getAllNotes = async (req, res) => {
  const notes = await Note.find();

  res.status(200).json(notes);
};

//GET /notes/:noteId
export const getNoteById = async (req, res, next) => {
  const { noteId } = req.params;
  const note = await Note.findById(noteId);

  if (!note) {
    next(createHttpError(404, 'Note not found'));
    return;
  }

  res.status(200).json(note);
};

//POST /notes
export const createNote = async (req, res) => {
  const newNote = await Note.create(req.body);

  res.status(201).json(newNote);
};

//PATCH /notes/:noteId
export const updateNote = async (req, res, next) => {
  const { noteId } = req.params;
  const updateNote = await Note.findByIdAndUpdate(noteId, req.body, { new: true});

  if (!updateNote) {
    next(createHttpError(404, 'Note not found'));
    return;
  }
  res.status(200).json({
    note: updateNote
  });
};

//DELETE /notes/:noteId
export const deleteNote = async (req, res) => {
  const { noteId } = req.params;
  const deleteNote = await Note.findByIdAndDelete(noteId);

  res.status(200).json({
    note: deleteNote
  });
};



