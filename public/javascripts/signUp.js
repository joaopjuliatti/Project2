window.addEventListener('load', () => {
  document.getElementById('medico-sign-up-buttom').addEventListener('click', function (event) {
    console.log('TA ENTRANDO')
    const formContainer = document.getElementById('addition-inputs');
    formContainer.innerHTML = `
      <input type="text" name="CRM" placeholder="Digite seu CRM">
      <div>
        <h3>Principal Endereço de endereço de atendimento</h3>
        <input type="text" name="cep" placeholder="Digite seu CEP">
        <input type="text" name="logradouro" placeholder="Digite o nome da rua">
        <input type="text" name="bairro" placeholder="Digite o nome do bairro">
        <input type="text" name="cidade" placeholder="Digite o nome do cidade">
        <input type="text" name="cidade" placeholder="Digite o nome do estado">
        <input type="text" name="Numero" placeholder="Digite o número do endereço">
      </div>
      <button  type="submit">Finalizar Cadastro</button>
      `
  });

  document.getElementById('paciente-sign-up-buttom').addEventListener('click', function (event) {
    const formContainer = document.getElementById('addition-inputs');
    formContainer.innerHTML = `
      <input type="text" name="CPF" placeholder="Digite seu CPF">
      <div>
        <h3>Principal Endereço de endereço de atendimento</h3>
        <input type="text" name="cep" placeholder="Digite seu CEP">
        <input type="text" name="logradouro" placeholder="Digite o nome da rua">
        <input type="text" name="bairro" placeholder="Digite o nome do bairro">
        <input type="text" name="cidade" placeholder="Digite o nome do cidade">
        <input type="text" name="cidade" placeholder="Digite o nome do estado">
        <input type="text" name="Numero" placeholder="Digite o número do endereço">
      </div>
      <div>
      <h3>Médico de confiança (opcional)</h3>
        <input type="text" name="Numero" placeholder="Digite o nome do médico de confiança">
      </div>
      <button  type="submit">Finalizar Cadastro</button>
      `
  });
});
