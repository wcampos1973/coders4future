import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import styled from 'styled-components';
import { useReducer, useEffect } from 'react';
import axios from 'axios';


// constantes, variáveis e objetos
const types = {
  PET: 'PET',
  COLOR: 'COLOR',
}

const reducer = (state, action) => {
  switch (action.type) {
    case types.PET:
      return { ...state, pet: action.value }
    case types.COLOR:
      return { ...state, color: action.value }
  }
}

const initialState = {
  color: 'black',
  pet: 'cat',
}

const randomDiceRoll = () => {
  return Math.floor(Math.random() * 6) + 1
}

const data = [
  { id: 'a', name: 'Devin' },
  { id: 'b', name: 'Gabe' },
  { id: 'c', name: 'Kim' },
];

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
// functions
///////////////////////////

function MyComponent(props) {
  return (
    <div style={{ padding: '30px', backgroundColor: 'lightblue' }}>
      <button>{props.text2}</button>
      <button>{props.parametros2}</button>
    </div>
  )
}

function ShowRolls() {
  const [diceRolls, setDiceRolls] = useState([1, 2, 3])

  return (
    <div>
      <button
        onClick={() => {
          setDiceRolls([...diceRolls, randomDiceRoll()])
        }}
      >
        Roll dice
      </button>
      <ul>
        {diceRolls.map((diceRoll, index) => (
          <li key={index}>{diceRoll}</li>
        ))}
      </ul>
    </div>
  )
}

function GetLista({ lista }) {
  return (
    <div>
      {lista}<br />
      {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  )
}

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

function CardC({ loading, error, title, subtitle }) {
  let content

  if (error) {
    content = 'Error'
  } else if (loading) {
    content = <h3 style={styles.empty}>Loading...</h3>
  } else {
    content = (
      <div>
        <h1 style={styles.title}>{title}</h1>
        {subtitle ? (
          <h2 style={styles.subtitle}>{subtitle}</h2>
        ) : (
          <h3 style={styles.empty}>No subtitle</h3>
        )}
      </div>
    )
  }

  return <div style={styles.card}>{content}</div>
}

function CardR({ title, subtitle }) {
  return (
    <div style={styles.card}>
      <h1 style={styles.title}>{title}</h1>
      {subtitle && <h2 style={styles.subtitle}>{subtitle}</h2>}
    </div>
  )
}

function randomColor() {
  return `#${Math.random()
    .toString(16)
    .substr(-6)}`
}

function CounterButton({ title, onPress }) {
  return <button onClick={onPress}>{title}</button>
}


/////////////////////// Main Function  ///////////////////////
function App() {

  // variáveis, constantes e objetos using useState
  const [color, setColor] = useState('blue');
  const [count, setCount] = useState(0);
  const [state, setState] = useState('');
  const [covid, setData] = useState([]);

  /////////////////////////////////  
  // compute things
  /////////////////////////////////

  const computeMeaningOfLife = initialArg => {
    // Do some computationally expensive work...
    return { meaningOfLife: initialArg }
  }


  const getInformation = () => {
    axios.get("https://api.apify.com/v2/key-value-stores/TyToNta7jGKkpszMZ/records/LATEST?disableRedirect=true")
      .then(res => {
        setData(res);
        console.log(covid.data);
      })
  }

  // usando da forma tradicional
  const [statepet, dispatch] = useReducer(reducer, initialState);

  // usando com uma função para inicializar o valor
  const [valormochileiro, dispatch2] = useReducer(reducer, 42, computeMeaningOfLife);

  ////////////////////////////////////
  // UseEffect Code
  ////////////////////////////////////
  useEffect(() => {
    getInformation();
  }, [])

  // elemento
  const myElement = <MyComponent text2="Boa Noite" parametros2="xico" />

  const style = {
    padding: '5px',
    textAlign: 'center',
  }

  // consoles
  console.log(valormochileiro);

  // retorno em HTML
  return (
    <div className="App" style={style}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Watchmen Dr manhattan" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learning React with Willys <br /><br />

          {myElement}

        </a>
      </header>

      <Container>
        <Card color={color}>
          <input
            type={'button'}
            value={'Cor aleatória'}
            onClick={() => setColor(randomColor())}
          />
        </Card>
        <CounterButton
          title={`Click here to increment: ${count}`}
          onPress={() => setCount(count + 1)}
        />
      </Container>

      <label htmlFor={'my-inpuyt'}> Enter Text:</label>
      <input
        id={'my-input'}
        type={'text'}
        value={state}
        placeholder={'type here'}
        onChange={event => {
          setState(event.target.value)
        }}
      />
      <br /><br />
        You entered - {state}

      <CardR title="xico doido" />
      <CardR title="Título" subtitle="subtítulo" />

      <CardRTernario title="xico doido" />
      <CardRTernario title="xico doido" subtitle="ajsfpoiasjfpoias" />

      <CardC error={true} />
      <CardC loading={true} />
      <CardC loading={false} title={'Title'} subtitle={'Subtitle'} />

      <GetLista lista="atores" />
      <ShowRolls />
      <div>
        <label>Choose a color and a pet: </label>
        <br />
        <select
          value={statepet.color}
          onChange={event => {
            dispatch({ type: types.COLOR, value: event.target.value })
          }}
        >
          <option value="black">Black</option>
          <option value="pink">Pink</option>
          <option value="blue">Blue</option>
        </select>
        <select
          value={statepet.pet}
          onChange={event => {
            dispatch({ type: types.PET, value: event.target.value })
          }}
        >
          <option value="cat">Cat</option>
          <option value="dog">Dog</option>
          <option value="mouse">Mouse</option>
        </select>
        <br />
        <br />
      You chose a {statepet.color} {statepet.pet}
        <hr />
        
        <div>
          {
            covid.data ? (
              covid.data.infectedByRegion.map(item => (
                <div key={item.state}>{item.state} - {item.count}</div>
              ))) :
              (<div />)
          }
        </div>

      </div>
    </div>
  );
}

export default App;
