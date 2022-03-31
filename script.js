// Além de colocar a imagem do filme, também adicionar o nome por meio de outro input

let listaFilmes = []; // url
let listaimgFilmes = []; // url com tag html

function verifyExtensionAdd() {

    const FilmeFavorito = document.getElementById("filme").value;
    if (FilmeFavorito.endsWith(".jpg") || FilmeFavorito.endsWith(".JPG") ||
        FilmeFavorito.endsWith(".jpeg") || FilmeFavorito.endsWith(".JPEG")) {
        adicionarLista(FilmeFavorito);
    } else { window.alert("URL INVÁLIDO.") }
    document.getElementById("filme").value = "";
}

function adicionarFilme() {
    verifyExtensionAdd();
}

function adicionarLista(filmeFavorito) {
    listaFilmes.push(filmeFavorito);
    listaimgFilmes.push("<img src=" + filmeFavorito + ">");
    mostrarFilme(listaimgFilmes);
}

function mostrarFilme(lista) {
    const elementoFilme = document.getElementById("listaFilmes");
    const mostrartagFilme = document.getElementById("MostrarFilme");
    mostrartagFilme.innerHTML = "<h1> Filmes </h1>";
    elementoFilme.innerHTML = lista;
}

function verifyExtensionRemove() {
    const FilmeFavorito = document.getElementById("filme").value;
    const searchTerm = listaFilmes.indexOf(FilmeFavorito);
    if (searchTerm == -1) {
        window.alert("Nenhum filme foi informado ou URL inválido.");

    } else {
        if (FilmeFavorito.endsWith(".jpg") || FilmeFavorito.endsWith(".JPG") ||
            FilmeFavorito.endsWith(".JPEG") || FilmeFavorito.endsWith(".JPEG")) {
            listaFilmes.splice(searchTerm, 1);
            listaimgFilmes.splice(searchTerm, 1);

        } else {
            //console.error("URL INCORRETO");
            window.alert("URL INCORRETO.")
        }
    }

    //TODO: 1. LIMPAR A TAG H1 APÓS TODOS OS FILMES SEREM REMOVIDOS
    //      2. APRESENTAR O NOME DOS FILMES ACIMA DA CARTAZ

    document.getElementById("filme").value = "";
}

function removerFilme() {
    verifyExtensionRemove();
    mostrarFilme(listaimgFilmes);
}
