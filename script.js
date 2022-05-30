var selectedRow = null;

function onFormSubmit(){
     var formData = readFormData();
    if(selectedRow == null)
        insertar(formData);
    else
        actualizar(formData);
    resetear();
}

function readFormData(){
    var formData = {};
    formData["nombre"] = document.getElementById("nombre").value;
    formData["codigo"] = document.getElementById("codigo").value;
    formData["descripcion"] = document.getElementById("descripcion").value;
    formData["fecha"] = document.getElementById("fecha").value;
    formData["tipo"] = document.getElementById("tipo").value;
    return formData;
}

function insertar(data){
    var table = document.getElementById("listar").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML =  data.nombre; 
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.codigo;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.descripcion;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML ='<span class ="mx-4">' + data.fecha; '</span>'
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.tipo;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = `<a class="btn btn-sm btn-success ms-1" onClick = 'editar(this)'>Editar</a>`;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = `<a class="btn btn-sm btn-success" onClick = 'borrar(this)'> Eliminar </a>`;
}

function resetear(){
    document.getElementById("nombre").value = "";
    document.getElementById("codigo").value = "";
    document.getElementById("descripcion").value = "";
    document.getElementById("fecha").value = "";
    document.getElementById("tipo").value = "";
    selectedRow = null;
}

function editar(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("nombre").value = selectedRow.cells[0].innerHTML;
    document.getElementById("codigo").value = selectedRow.cells[1].innerHTML;
    document.getElementById("descripcion").value = selectedRow.cells[2].innerHTML;
    document.getElementById("fecha").value = selectedRow.cells[3].innerHTML;
    document.getElementById("tipo").value = selectedRow.cells[4].innerHTML;
}

function actualizar(formData){
    selectedRow.cells[0].innerHTML = formData.nombre;
    selectedRow.cells[1].innerHTML = formData.codigo;
    selectedRow.cells[2].innerHTML = formData.descripcion;
    selectedRow.cells[3].innerHTML = formData.fecha;
    selectedRow.cells[4].innerHTML = formData.tipo;
}

function borrar(td){
    if(confirm('Seguro que desea eliminar esto?')){
    row = td.parentElement.parentElement;
    document.getElementById("listar").deleteRow(row.rowIndex);
    resetear();
    }
}