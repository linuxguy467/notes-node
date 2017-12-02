const fs = require('fs');

var fetchNotes = () => {
  try {
    var noteString = fs.readFileSync('notes-data.json');
    return JSON.parse(noteString);
  } catch (e) {
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var filterNotes = (notes, title) => {
  return notes.filter((note) => note.title === title);
};

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

  var duplicateNotes = filterNotes(notes, title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var getAll = () => {
  console.log('Getting all notes');
  const notes = fetchNotes();
  return notes;
};

var getNote = (title) => {
  // get all notes
  var notes = fetchNotes();
  var filteredNotes = filterNotes(notes, title);
  return filteredNotes[0];
};

var remove = (title) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title !== title);
  saveNotes(filteredNotes);

  return notes.length !== filteredNotes.length
};

var logNote = (note) => {
  console.log(`--\nTitle: ${note.title}\nBody: ${note.body}`);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  remove,
  logNote
};
