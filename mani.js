document.getElementById('createFile').addEventListener('click', function() {
    const fileNameInput = document.getElementById('fileName');
    const fileName = fileNameInput.value.trim();

    if (fileName) {
        addFileToList(fileName);
        fileNameInput.value = ''; 
    } else {
        alert('Por favor, insira um nome para o arquivo.');
    }
});

function addFileToList(fileName) {
    const fileList = document.getElementById('fileList');
    
    const li = document.createElement('li');
    li.textContent = fileName;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Deletar';
    
    deleteButton.addEventListener('click', function() {
        fileList.removeChild(li);
    });

    li.appendChild(deleteButton);
    fileList.appendChild(li);
}
