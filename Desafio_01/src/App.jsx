import { useState, useEffect } from 'react'
import './App.css'
import Header from '../src/components/Header'
import Card from '../src/components/Card'
import DataPerritos from '../src/assets/data/api-perritos.json'
import Footer from '../src/components/Footer'

function App() {
  const [animales, setAnimales] = useState([]);

  useEffect(() => {
    setAnimales(DataPerritos);
  }, []);


  return (
    <>
    <div>
      <Header/>
    </div>

   
    <main className="container mx-auto mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
      {animales.map(animal => (

        <div key={animal.Nombre} className='flex justify-center'>
          <Card
            imagen = {animal.Imagen}
            nombre={animal.Nombre}
            edad={animal.Edad}
            raza={animal.Raza}
            descripcion={animal.Descripcion}
          />
        </div>

      ))}
    </main>

    <footer className="pt-10 ">
        <Footer />
    </footer>
   
    </>
  )
}

export default App
