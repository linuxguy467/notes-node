const yargs = require('yargs');

const yargsConfig = {
  options: {
    title: {
      describe: 'Title of note',
      demand: true,
      alias: 't'
    },
    body: {
      describe: 'Body of note',
      demand: true,
      alias: 'b'
    }
  },
  commands: {
    add: {
      name: 'add',
      desc: 'Add a note'
    },
    list: {
      name: 'list',
      desc: 'List all notes'
    },
    read: {
      name: 'read',
      desc: 'Read a note'
    },
    remove: {
      name: 'remove',
      desc: 'Remove a note'
    }
  }
};

const argv = yargs
  .command(
  yargsConfig.commands.add.name,
  yargsConfig.commands.add.desc,
  yargsConfig.options
  )
  .command(
  yargsConfig.commands.list.name,
  yargsConfig.commands.list.desc
  )
  .command(
  yargsConfig.commands.read.name,
  yargsConfig.commands.read.desc, {
    title: yargsConfig.options.title
  }
  )
  .command(
  yargsConfig.commands.remove.name,
  yargsConfig.commands.remove.desc, {
    title: yargsConfig.options.title
  }
  )
  .help()
  .argv;
var command = argv._[0];

module.exports = {
  argv,
  command
}