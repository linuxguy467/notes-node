const notes = require('./notes');
const {argv, command} = require('./yargs.config');

if (command === 'add'){
  const note = notes.addNote(argv.title, argv.body);
  if(note) {
    console.log('Note created');
    notes.logNote(note);
  } else {
    console.log('Note title taken');
  }
} else if (command === 'list'){
  const notesList = notes.getAll();
  if (notesList.length > 0) {
    notesList.forEach((note) => notes.logNote(note));
  } else {
    console.log('No notes found');
  }
} else if (command === 'read') {
  const note = notes.getNote(argv.title);
  if(note) {
    console.log('Note found');
    notes.logNote(note);
  } else {
    console.log('Note not found');
  }
} else if (command === 'remove') {
  const note = notes.remove(argv.title);
  const message = note ? 'Note was removed' : 'Note not found';
  console.log(message);
} else {
  console.log('command not recognized');
}
