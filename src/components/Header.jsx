import '../index.css'
import HeartIco from '../Image/icons/heart.svg'

const Header = () => {
  return (
    <header className="header-color">
      <div className="container mx-auto flex justify-center items-center h-full">
        <h1 className="text-3xl font-semibold">PERRITOS ESPERANDO UN HOGAR </h1> <img src={HeartIco} alt="" />
      </div>
    </header>
  )
}

export default Header