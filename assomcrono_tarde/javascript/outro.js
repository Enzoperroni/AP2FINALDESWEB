const parametros = new URLSearchParams(window.location.search)

document.getElementById('id').innerHTML = parametros.get("id");
document.getElementById('nome_completo').innerHTML = parametros.get("nome_completo");