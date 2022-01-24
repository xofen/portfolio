function changeText(){
    fetch("texto.json").then(Response => Response.json().then(data => {
        document.getElementById("bio").innerHTML = data.Biografia.texto;
    }) )
    fetch("texto.json").then(Response => Response.json().then(data => {
        document.getElementById("cur").innerHTML = data.Curriculo.texto;
    }) )
    fetch("texto.json").then(Response => Response.json().then(data => {
        document.getElementById("por").innerHTML = data.Portfolio.texto;
    }) )
    fetch("texto.json").then(Response => Response.json().then(data => {
        document.getElementById("con").innerHTML = data.Contato.texto;
    }) )
}
changeText();


function showContent(section) {
    let secoes = ['bio', 'cur', 'por', 'con'];
    const codigo = 'bttn' + section;

    document.getElementById(section).style.display = 'block';
    document.getElementById(codigo).style.color = 'white';
    document.getElementById(codigo).style.background = 'black';
    document.getElementById(codigo).style.textDecoration = 'line-through';

    secoes.splice(secoes.indexOf(section), 1);

    for (let i = 0, len = secoes.length, text = ""; i < len; i++) {
        const remove = 'bttn' + secoes[i];

        document.getElementById(secoes[i]).style.display = 'none';
        document.getElementById(remove).style.color = 'black';
        document.getElementById(remove).style.background = 'lightgreen';
        document.getElementById(remove).style.textDecoration = 'none';
    }
}


function goToSection(section) {
    document.getElementById('frente').style.display = 'none';
    document.getElementById('verso').style.display = 'inline-grid';
    showContent(section);
}


function backtoHome() {
    document.getElementById('verso').style.display = 'none';
    document.getElementById('frente').style.display = 'inline-grid';
}
