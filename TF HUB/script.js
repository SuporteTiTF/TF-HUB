function nomevalida(){
	var nome = document.getElementById('nome');
    var email = document.getElementById('email');
    var mensagem = document.getElementById('mensagem');

	if (nome.value == ""){
		alert("O campo nome não pode estar em branco.");
	}
    else if (email.value == ""){
		alert("O campo email não pode estar em branco.");
	}
    else if (mensagem.value == ""){
		alert("O campo mensagem não pode estar em branco.");
	}
	else {
		alert("Nenhum problema foi detectado. Seu formulário pode ser enviado com sucesso.");
	}
}
