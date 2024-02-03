import { Formularios } from './components/Formularios';
import { Login } from './components/Login';
import { Usuarios } from './components/Usuarios';

const App = () => {
  return (
    <div className='mt-2'>
      <h1>Introducción a TS- React</h1>
      <hr />
      <Usuarios />
    </div>
  )
}

export default App;