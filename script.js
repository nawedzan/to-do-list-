const addNotes = document.querySelector(".addNotes");
const createNotes = document.querySelector(".createNotes");
const todoList =document.querySelector(".todoList")

addNotes.addEventListener("click",createNote);

function createNote(){
    // createNotes.style.backgroundColor="red";
    const textAreaDiv=document.createElement("div");
    textAreaDiv.classList.add("textAreaDiv");
    const optionsDiv=document.createElement("div");
    optionsDiv.classList.add("optionsDiv")


    //Input field

    const textbox=document.createElement("INPUT");
    textbox.type="text";
    textbox.value="Create TodoList Here";
    textbox.classList.add('textBoxStyle');
    
    textAreaDiv.appendChild(textbox);
    createNotes.appendChild(textAreaDiv);
    createNotes.appendChild(optionsDiv);
    
    console.log(createNotes.classList);

    //options for textbox
    const save = document.createElement('div');
    save.classList.add('save');
    save.innerHTML = '<b>Save</b>';
    
    const saveDraft = document.createElement('div');
    saveDraft.classList.add('saveDraft');
    saveDraft.innerHTML = "<b>Save Draft</b>";

    const clear = document.createElement('div');
    clear.classList.add('clear');
    clear.innerHTML = "<b>Clear</b>";
    
    const clearBox = document.createElement('div');
    clearBox.classList.add('clearBox');
    clearBox.innerHTML = "<b>Clear Box</b>";

    optionsDiv.appendChild(save);
    optionsDiv.appendChild(saveDraft);
    optionsDiv.appendChild(clear);
    optionsDiv.appendChild(clearBox);

    console.log(optionsDiv.childNodes);

    // event listeneers and calling  functions
    save.addEventListener('click',(e)=>{
        const text= textbox.value;
        console.dir(textbox)
        console.log(text);
        saveToList(text);
    });
}

function saveToList(text){
    // create a div 
    // give it a style class 
    // append the div to the todolist
    const list = document.createElement("div")
    list.classList.add('listStyle')
    list.innerText=text;

    todoList.appendChild(list)
}


