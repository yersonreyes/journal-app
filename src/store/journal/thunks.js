import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseFirestore } from "../../firebase/config";
import {
  addNewEmptyNotes,
  savingNewNote,
  setActiveNotes,
} from "./journalSlice";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    dispatch(savingNewNote());

    const { uid } = getState().auth;
    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };

    const newDoc = doc(collection(FirebaseFirestore, `${uid}/journal/notes`));
    await setDoc(newDoc, newNote);

    newNote.id = newDoc.id;

    dispatch(addNewEmptyNotes(newNote));
    dispatch(setActiveNotes(newNote));
  };
};
