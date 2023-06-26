import ilustration from './assets/images/bg-header-desktop.svg'
import { JobsList } from './components/JobsLabel'
import data from './mocks/data.json'



const job = data[0]
function App() {
  return (
    <>
    <header className='w-full h-32 bg-[#458586]' style={{backgroundImage : `url(${ilustration})`, backgroundSize: 'cover'}}></header>
    <main>
      <JobsList data={job}/>
    </main>
    </>
  )
}

export default App
