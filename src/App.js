// Acessando todas as bibliotecas importantes para o Código
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import styled from 'styled-components';
import { useReducer, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';

// constantes, variáveis e objetos

// styled components
const Card = styled.div`
  padding: 20px;
  text-align: center;
  color: white;
  background-color: ${props => props.color};
`
const Container = styled.div`
  padding: 20px;
`

///////////////////////////
// functions e components
///////////////////////////

/////////////////////// Main Function  ///////////////////////
// Objeto App
function App() {


  // funções  
  function validacaoNome(value) {
    let error;
    //alert(value);
    if (value == '') {
      error = 'Nome tem que ser preenchido';
    }
    return error;
  }

  function validateEmail(value) {
    let error;
    if (!value) {
      error = 'Preencher e-mail';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Endereço de e-mail inválido';
    }
    return error;
  }

  function RegistraValores() {
    if (nome_do_aluno == '') {
      alert('Favor preencher o nome do aluno');
    }
    else {
      console.log(nome_do_aluno);
      console.log(email);
      console.log(matricula);
      console.log(idade);
      alert('vou registrar');

    }

  }

  // variáveis, constantes e objetos using useState
  const [nome_do_aluno, setNomedoAluno] = useState('');
  const [email, setEmail] = useState('');
  const [matricula, setMatricula] = useState('');
  const [idade, setIdade] = useState('');

  // elemento
  const style = {
    padding: '5px',
    textAlign: 'center',
  }

  // consoles

  // retorno em HTML
  return (

    <div className="App" style={style}>

      <header className="App-header">
        Entrada de Dados usando Formik
      </header>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          age: '',
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ errors, touched, validateField, validateForm }) => (
          <Form>
            <label htmlFor="firstName">Nome</label>
            <Field id="firstName" name="firstName" validate={validacaoNome} placeholder="Digite seu primeiro nome" />
            {errors.firstName && touched.firstName && <div>{errors.firstName}</div>}
            <br />
            <label htmlFor="lastName">Sobrenome</label>
            <Field id="lastName" name="lastName" placeholder="Digite seu sobrenome" />
            <br />
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              placeholder="jane@acme.com"
              validate={validateEmail}
              type="text"
            />
            {errors.email && touched.email && <div>{errors.email}</div>}
            <br />
            <label htmlFor="age">Preencha sua Idade</label>
            <Field id="age" name="age" placeholder="Digite sua Idade" />
            <br />            
            <button type="submit">Registrar</button>
          </Form>
        )}
      </Formik>


    </div>
  );
}

export default App;
