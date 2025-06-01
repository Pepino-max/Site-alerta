function enviar() {
    //isso serve para não carregar a página ao clicar no botão
    event.preventDefault()

    Swal.fire({
        title: "Parabéns!",
        text: "Dados enviados com sucesso!",
        icon: "success"
      });
}
