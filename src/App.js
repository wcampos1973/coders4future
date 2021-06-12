import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import styled from 'styled-components';
import { useReducer, useEffect } from 'react';
import axios from 'axios';


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
function App() {

// funções  
  function RegistraValores() {
    console.log(state);
    alert('vou registrar');
  }
  
  // variáveis, constantes e objetos using useState
  const [state, setState] = useState('');
  const [email, setEmail] = useState('');


  /////////////////////////////////  
  // compute things
  /////////////////////////////////


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
        Entrada de Dados
      </header>
      <label htmlFor={'my-nome'}> Digite seu Nome:</label>
      <input
        id={'my-nome'}
        type={'text'}
        value={state}
        placeholder={'Digite seu Nome'}
        onChange={event => {
          setState(event.target.value)
        }}
      />

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
      <br /><br />
      <button
        onClick={() => {
          RegistraValores();
        }}
      >
        Registro
      </button>


    </div>
  );
}

export default App;
