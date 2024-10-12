// =====================dom part start
// ==========todoHead dom start
let todoHead        = document.querySelector(".todoHead")
let todoInput       = document.querySelector(".todoInput")
let error           = document.querySelector(".error")
// =====todoList start
let todoList =document.querySelector(".todoList")
// =====function start
let handelButton =()=>{
    if (todoInput.value ==""){
        error.innerHTML ="Enter a Number First"
    }
    else{
        //========= create element
        let singleTodoList          =document.createElement("div")
        let singleInput             = document.createElement("input")
        let singleEditButton        =document.createElement("button")
        let singleDeleteButton      =document.createElement("button")

        // =====making child
        todoList.appendChild(singleTodoList)
        singleTodoList.appendChild(singleInput)
        singleTodoList.appendChild(singleEditButton)
        singleTodoList.appendChild(singleDeleteButton)


        //====== seating class name
        singleTodoList.classList.add("singleTodoList")
        singleInput.classList.add("singleInput")
        singleEditButton.classList.add("singleEditButton")
        singleDeleteButton.classList.add("singleDeleteButton")

        // ======seating contain to the tags
        singleEditButton.innerHTML      = "edit"
        singleDeleteButton.innerHTML    = "remove"

        // adding data into input filed
        singleInput.value   = todoInput.value 
        todoInput.value     = ""
        error.innerHTML     =""

        // =====set attribute 
        singleInput.setAttribute("readonly" ,"readonly")
        //=========edit button set 
        singleEditButton.addEventListener("click" , ()=>{
            if (singleEditButton.innerHTML == "edit"){
                singleEditButton.innerHTML      = "Save"
                singleEditButton.style = "background:green;color:white;"
                singleInput.removeAttribute("readonly" , "readonly")
            }
            else{
                singleEditButton.innerHTML      = "Edit"
                singleInput.setAttribute("readonly" ,"readonly")
                singleEditButton.style = "background:yellow;color:black;"

            }
        })

        // =====remove button set
        singleDeleteButton.addEventListener("click" , ()=>{
            singleTodoList.remove()
        })
    }
}
// =========Enter function 

let EnterClick =(item)=>{
    console.log(item.key)
    if(item.key == "Enter"){
        handelButton()
    }
}
