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
      state.messageSaved = "";
    },

    setNotes: (state, action) => {
      state.notes = action.payload;
    },

    setSaving: (state, action) => {
      state.isSaving = true;
      state.messageSaved = "";
    },

    updateNotes: (state, action) => {
      state.isSaving = false;
      state.notes = state.notes.map((note) => {
        if (note.id === state.active.id) {
          return state.active;
        }
        return note;
      });

      state.messageSaved = `${state.active.title}, actualizada correctamente`;
    },

    setPhotosToActiveNote: (state, action) => {
      state.active.imageUrls = [...state.active.imageUrls, ...action.payload];
      state.isSaving = false;
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
  setPhotosToActiveNote,
} = journalSlice.actions;
