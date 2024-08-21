const textArea = document.querySelector(".area_texto");
const mensagem = document.querySelector(".area_resposta");

//A letra "e" é convertida para "enter"
//A letra "i" é convertida para "imes"
//A letra "a" é convertida para "ai"
//A letra "o" é convertida para "ober"
//A letra "u" é convertida para "ufat"


function btnEncriptar(){
    const textoEncriptado= encriptar(textArea.value);
    mensagem.value=textoEncriptado;
    textArea.value="";
}

function encriptar(stringEncriptada){

    let matrizCodigo= [["e" , "enter"], ["i", "imes"], ["a","ai"],["o","ober"], ["u","ufat"]];
    stringEncriptada=stringEncriptada.toLowerCase()

    for(let i=0;i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada=stringEncriptada.replaceAll(matrizCodigo [i][0],matrizCodigo[i][1])
        }
    }
    
    document.querySelector('.telaDeEspera').style.display ="none";
    document.querySelector('.botao_copiar').style.display ="inline";
    document.querySelector('.area_resposta').style.display ="inline";

    return stringEncriptada;
}

function btnDesencriptar(){
    const textoDescriptado= desencriptar(textArea.value);
    mensagem.value=textoDescriptado;
    textArea.value="";
}

function desencriptar(stringDesencriptada){

    let matrizCodigo= [["e" , "enter"], ["i", "imes"], ["a","ai"],["o","ober"], ["u","ufat"]];
    stringDesencriptada=stringDesencriptada.toLowerCase()

    for(let i=0;i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][0])){
            stringDesencriptada=stringDesencriptada.replaceAll(matrizCodigo [i][1],matrizCodigo[i][0])
        }
    }
    document.querySelector('.telaDeEspera').style.display ="none";
    document.querySelector('.botao_copiar').style.display ="inline";
    document.querySelector('.area_resposta').style.display="inline";
    return stringDesencriptada;
}

function copiar(){

    document.querySelector(".area_resposta").select();
    document.execCommand('copy');
   }
