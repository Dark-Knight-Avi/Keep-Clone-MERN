import { useContext } from "react";
import NoteContext from "../contexts/notes/NoteContext";

const useNotes = () => {
    const {notes, setNotes} = useContext(NoteContext)
    return {notes, setNotes}
}

export default useNotes