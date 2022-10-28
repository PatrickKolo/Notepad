let notes = [];


function render() {
    let content = document.getElementById('content');
    content.innerHTML = '';
    for (let i = 0; i < notes.length; i++) {
        const note = notes[i];

        content.innerHTML += /*html*/ `

    
           <div class="postIt">

                 ${note}

                <div class="buttonClass">

                <img class="trashButton" onclick="deleteNote(${i})" src="img/trash.png" alt="">

                  
                 </div>
            </div>


    `;
    }



   
}

function addNote() {
    let note = document.getElementById('note');

    notes.push(note.value);
    render();

}

function deleteNote(i) {
    notes.splice(i, 1);

    render()

}


