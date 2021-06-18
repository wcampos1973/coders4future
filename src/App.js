// Acessando todas as bibliotecas importantes para o Código
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import styled from 'styled-components';
import { useReducer, useEffect } from 'react';

// constantes, variáveis e objetos
const styles = {
  card: {
    padding: '20px',
    margin: '20px',
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'steelblue',
    border: '1px solid rgba(0,0,0,0.15)',
  },
  title: {
    fontSize: '18px',
    lineHeight: '24px',
  },
  subtitle: {
    fontSize: '14px',
    lineHeight: '18px',
  },
  empty: {
    fontSize: '12px',
    lineHeight: '15px',
    opacity: '0.5',
  },
}

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
function CardRTernario({ title, subtitle }) {
  return (
    <div style={styles.card}>
      <h1 style={styles.title}>{title}</h1>
      {subtitle ? (
        <h2 style={styles.subtitle}>{subtitle}</h2>
      ) : (
        <h3 style={styles.empty}></h3>
      )}
    </div>
  )
}

/////////////////////// Main Function  ///////////////////////
// Objeto App
function App() {

  function ClearValues() {
    setNomedoAluno('');
    setEmail('');
    setMatricula('');
  }

  // funções  
  function RegistraValores() {
    console.log(nome_do_aluno);
    console.log(email);
    console.log(matricula);
    alert('vou registrar');
    ClearValues();
  }

  // variáveis, constantes e objetos using useState
  const [nome_do_aluno, setNomedoAluno] = useState('');
  const [email, setEmail] = useState('');
  const [matricula, setMatricula] = useState('');

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
        Entrada de Dados xxx
      </header>

      <label htmlFor={'my-nome'}> Digite seu Nome:</label>
      <input
        id={'my-nome'}
        type={'text'}
        value={nome_do_aluno}
        placeholder={'Digite seu Nome'}
        onChange={event => {
          setNomedoAluno(event.target.value)
        }}
      />
      <br />
      <label htmlFor={'my-email'}> Digite seu Email:</label>
      <input
        id={'my-email'}
        type={'email'}
        value={email}
        placeholder={'Digite seu Email'}
        onChange={event => {
          setEmail(event.target.value)
        }}
      />

      <br />
      <label htmlFor={'my-matricula'}> Digite sua Matrícula:</label>
      <input
        id={'my-matricula'}
        type={'text'}
        value={matricula}
        placeholder={'Digite sua Matrícula'}
        onChange={event => {
          setMatricula(event.target.value)
        }}
      />
      <br />
      <button
        onClick={() => {
          RegistraValores();
        }}
      >
        Registro dos Valores
      </button>

      <br></br>

    </div>
  );
}

export default App;
