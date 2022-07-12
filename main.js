function tocaSom(idElementoSom) {
    const elemento = document.querySelector(idElementoSom);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        console.log("ERRO: Elemento ou Seletor inválido!");
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const somInstrumento = tecla.classList[1];
    const idSomInstrumento = `#som_${somInstrumento}`; 

    tecla.onclick = function () {
        tocaSom(idSomInstrumento);
    }

    tecla.onkeydown = function (event) {
        if (event.code === 'Space' || event.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}