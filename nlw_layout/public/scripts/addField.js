
document.querySelector("#add-time")
.addEventListener('click', cloneField)

//criando a funcao
function cloneField(){
//Duplciar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

//limpar campos
    const fields = newFieldContainer.querySelectorAll('input')
    
    fields.forEach(function (field) {
        field.value = ""
    })


//Colocar na pagina
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
    