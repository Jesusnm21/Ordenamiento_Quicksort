const FRM_CALCULAR = document.querySelector("#frmCalcula");

FRM_CALCULAR.addEventListener("submit", function (event) {
    event.preventDefault();
});

let elementosIngresados = [];

document.getElementById("botones").addEventListener("click", function () {
    let numeroIngresado = parseInt(document.querySelector("#txtNumero").value);
    let numeroIngresadoInput = document.querySelector("#txtNumero");

    if (numeroIngresadoInput.value.trim() == "") {
        alert("Ingresa un valor en la caja de texto");
        return;
    }
    

    elementosIngresados = [];8

    for (let i = 0; i < numeroIngresado; i++) {
        const num = prompt(`Ingrese el elemento # ${i + 1}:`);

        if (!num) {
            alert('Por favor, ingrese un número válido.');
            return;
        }

        elementosIngresados.push(Number(num));
    }

    const originalArray = [...elementosIngresados];
    printArray('resultado', originalArray);

    document.getElementById("botones").style.display = "none";
    document.getElementById("ordenar").style.display = "block";
    document.getElementById("ordenSelect").style.display = "block";
});

document.getElementById("ordenar").addEventListener("click", function () {
    let ordenSeleccionado = document.querySelector("#ordenSelect").value;
    if(ordenSeleccionado==='nada'){
        alert("Por favor seleccione un tipo de orenamiento");
        return;

    }

    const arrayCopy = [...elementosIngresados];

    quicksort(arrayCopy, 0, arrayCopy.length - 1, ordenSeleccionado);

    printArray('resultado2', arrayCopy);
});

function printArray(elementId, array) {
    document.getElementById(elementId).textContent = array.join(', ');
}

function quicksort(arr, low, high, orden) {
    if (low < high) {
        const partitionIndex = partition(arr, low, high, orden);
        quicksort(arr, low, partitionIndex - 1, orden);
        quicksort(arr, partitionIndex + 1, high, orden);
    }
}

function partition(arr, low, high, orden) {
    const pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        let comparacion = orden === 'ascendente' ? arr[j] < pivot : arr[j] > pivot;

        if (comparacion) {
            i++;
            swap(arr, i, j);
        }
    }

    swap(arr, i + 1, high);
    return i + 1;
}

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
document.getElementById("imprimir").addEventListener("click", function () {
    location.reload();
});

