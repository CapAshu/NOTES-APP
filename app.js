const chalk = require("chalk");
const { demandOption } = require("yargs");
const yargs = require('yargs');
const { readNote } = require("./notes.js");
const note = require('./notes.js')

yargs.command({
    command: 'add',
    describe: 'Adding a note',
    builder: {
        title: {
            describe: 'my title',
            demandOption: true,
            tyep: 'string'
        },
        body: {
            describe: 'notes body',
            demandOption: false,
            type: 'string'
        }
    },

    handler: function (argv) {
        note.addNote(argv.title, argv.body);
    }
})

yargs.command({
    command: 'remove',
    describe: 'removing a note',

    builder:{
        title:{
            describe: 'remove an existing note',
            demandOption:true,
            type:'string'
        }
    },
    handler: function (argv) {
        note.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'listing a note',
    handler: function () {
        note.listNote()
    }
})

yargs.command({
    command: 'read',
    describe: 'reading a note',
    builder:{
        title:{
            describe:"read a note with given title",
            demandOption:true,
            type:'string'
        }
    },
    handler: function (argv) {
        note.readNote(argv.title)
    }
})


yargs.parse()