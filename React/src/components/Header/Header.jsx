import reactImg from '../../assets/react-core-concepts.png'
import './Header.css'


const reactDescriptions = ['Fundamentals', 'Components', 'Props', 'State', 'Lifecycle']

function genRandomDescription(value) {
  return Math.floor(Math.random() * (value + 1))
}


export default function Header() {

  const description = reactDescriptions[genRandomDescription(2)]
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  )
}