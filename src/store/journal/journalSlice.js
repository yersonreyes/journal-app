import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
  name: "journalSlice",
  initialState: {
    isSaving: false,
    messageSaved: "",
    notes: [],
    active: null,
  },
  reducers: {
    savingNewNote: (state) => {
      state.isSaving = true;
    },
    addNewEmptyNotes: (state, action) => {
      state.notes.push(action.payload);
      state.isSaving = false;
    },

    setActiveNotes: (state, action) => {
      state.active = action.payload;
    },

    setNotes: (state, action) => {
      state.notes = action.payload;
    },

    setSaving: (state, action) => {
      state.isSaving = true;
    },

    updateNotes: (state, action) => {
      state.isSaving = false;
      state.notes = state.notes.map((note) => {
        if (note.id === state.active.id) {
          return state.active;
        }
        return note;
      });
    },

    deleteNoteById: (state, action) => {},
  },
});

export const {
  addNewEmptyNotes,
  setActiveNotes,
  setNotes,
  setSaving,
  updateNotes,
  deleteNoteById,
  savingNewNote,
} = journalSlice.actions;
