// Função para carregar a imagem
function carregarImagem(event) {
    var imagem = document.getElementById('imagem');
    imagem.src = URL.createObjectURL(event.target.files[0]);
  }
  
  // Função para exibir informações dentro da imagem
  function exibirInformacoes() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var imagem = document.getElementById('imagem');
    ctx.drawImage(imagem, 0, 0);
    ctx.font = '30px Arial';
    ctx.fillStyle = 'white';
    ctx.fillText('Informações', 50, 50);
  }