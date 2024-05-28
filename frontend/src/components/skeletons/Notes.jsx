import Note from "./Note";
export default function () {
    let Notes = [];
    for (let i = 0; i <= 4; i++) {
        Notes.push(<Note key={i} />);
    }
    return Notes;
}
