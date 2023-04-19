import foto01 from './img/foto01.jpg';
import foto02 from './img/foto02.jpg';
import './css/style.css';

function Painel() {
  return (
    <div className="container">
      <div className="card">
        <img src={foto01} alt="Imagem" />
        <h2>Ana Bruck</h2>
        <h4>"Eu recomendo a Letícia, pois o atendimento dele fez toda diferença"</h4>
        <p>"A escolha de imóvel, no nosso caso uma casa, não é uma tarefa fácil. A escolha de um profissional qualificado poupou o nosso tempo e nos ajudou a encontrar o que realmente queríamos"</p>
      </div>
      <div className="card">
        <img src={foto01} alt="Imagem" />
        <h2>Ana Bruck</h2>
        <h4>"Eu recomendo a Letícia, pois o atendimento dele fez toda diferença"</h4>
        <p>"A escolha de imóvel, no nosso caso uma casa, não é uma tarefa fácil. A escolha de um profissional qualificado poupou o nosso tempo e nos ajudou a encontrar o que realmente queríamos"</p>
      </div>
      <div className="card">
        <img src={foto02} alt="Imagem" />
        <h2>Ana Bruck</h2>
        <h4>"Eu recomendo a Letícia, pois o atendimento dele fez toda diferença"</h4>
        <p>"A escolha de imóvel, no nosso caso uma casa, não é uma tarefa fácil. A escolha de um profissional qualificado poupou o nosso tempo e nos ajudou a encontrar o que realmente queríamos"</p>
      </div>
    </div>
  );
}

export default Painel;
