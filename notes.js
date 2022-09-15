const fs = require('fs');
const chalk=require('chalk')



var saveNote = function (allNotes) {
    var newData = JSON.stringify(allNotes)
    fs.writeFileSync('my-notes.json', newData)
}
var loadNote = function () {

    try {
        const myFileBuffer = fs.readFileSync('my-notes.json')
        const myFile = myFileBuffer.toString()
        return JSON.parse(myFile)
    } catch (e) {
        return []
    }
}

const addNote = function (title, body) {
    var allNotes = loadNote();

    const duplicateTitle = allNotes.filter(
        function (i) {
            return i.title === title
        }
    )
    if (duplicateTitle.length === 0) {
        allNotes.push({

            title: title,
            body: body

        })
        saveNote(allNotes)
        console.log('New note added')
    } else {
        console.log('This title is already taken')
    }

}

const removeNote=function(title){
       const allNotes=loadNote()
       var count=0
        for(i=0;i<allNotes.length;i++){
            if(allNotes[i].title===title){
                allNotes.splice(i,1)
                console.log('Note removed successfully')
                count++
            }
        }
        if(count===0){
            console.log('Title is not present in notes')
        }
        saveNote(allNotes);
}


const listNode= () =>{
    const allNotes=loadNote()
    allNotes.forEach((notes) => {
        console.log(chalk.blue(notes.title))
    });
}

const readNote = (title) =>{
    const allNotes= loadNote()
    requiredNote = allNotes.find((note)=>{
        return title===note.title
    })
    if(requiredNote){
        console.log(requiredNote)
    }
    else{
        console.log("title not present in notes")
    } 
}


module.exports = {
    addNote: addNote,
    removeNote:removeNote,
    listNote:listNode,
    readNote:readNote
}