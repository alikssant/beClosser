import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import { FirebaseApp } from "utils/firebase";

export class NoteAPI {
  static async create(formValues) {
    const response = await addDoc(
      collection(FirebaseApp.db, "notes"),
      formValues
    );
    return {
      id: response.id,
      ...formValues,
    };
  }

  static async fetchAll() {
    const q = query(
      collection(FirebaseApp.db, "notes"),
      orderBy("created_at", "asc")
    );
    const response = await getDocs(q);

    // Map the data and sort locally if necessary
    return response.docs
      .map((document) => {
        return {
          id: document.id,
          ...document.data(),
        };
      })
      .sort((a, b) => {
        // Local fallback sort by date (most recent first)
        return parseDMY(b.created_at) - parseDMY(a.created_at);
      });
  }

  static async deleteById(noteId) {
    await deleteDoc(doc(FirebaseApp.db, "notes", noteId));
  }

  static async updateById(id, values) {
    const queryRef = doc(FirebaseApp.db, "notes", id);
    await updateDoc(queryRef, values);
    return {
      id,
      ...values,
    };
  }
}

const parseDMY = (dateString) => {
  const [d, m, y] = dateString.split("/").map(Number);
  return new Date(y, m - 1, d);
};
