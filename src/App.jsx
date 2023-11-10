import { Button } from './components/button'
import './App.css'

function App() {
  return <>
     <h1>Hello</h1>
     <Button>Hello </Button>
     <h2>Button Size</h2>
     <div className='button-group'>
     <Button size='lg'>Hello </Button>
     <Button size='md'>Hello </Button>
     <Button size='sm'>Hello </Button>
     </div>
     <h2>Button Color</h2>
     <div className='button-group'>
     <Button size='sm' color='neutral'>neutral </Button>
     <Button color='primary'>primary </Button>
     <Button color='success'>success </Button>
     <Button color='danger'>danger </Button>
     <Button color='warning'>warning </Button>
     </div>
     <h2>Button Color Variant</h2>
     <div className='button-group'>
     <Button color='primary' variant='soft'>primary soft</Button>
     <Button color='success' variant='soft'>primary soft</Button>
     <Button color='success' variant='outlined'>success outlined</Button>
     <Button color='primary' variant='outlined'>primary outlined</Button>
     <Button color='danger' variant='soft'>danger soft</Button>
     <Button color='danger' variant='outlined'>danger outlined</Button>
     <Button color='warning' variant='soft'>warning soft</Button>
     <Button color='warning' variant='plain'>warning plain</Button>
     </div>
     <h2>Disabled button</h2>
     <div className='button-group'>
     <Button color='warning' variant='plain' disabled={true}>warning plain</Button>
     <Button color='warning' variant='outlined' disabled={true}>warning outlined</Button>
     <Button color='warning' disabled>warning </Button>
     </div>
    </>
  
}

export default App
