/* eslint-disable react/prop-types */
import '../index.css'; 


const Card = ({ nombre, edad, raza, descripcion, imagen }) => {
  return (
    <div className="max-w-sm header-color rounded-lg border border-gray-300">
        <a href="#">
          <img className="h-auto max-w-full rounded-lg" src= {imagen} alt={nombre} style={{ height: '247px', width: '382px'}}/>
        </a>
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white " >{nombre}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 overflow-hidden" style={{ height: '100px' }}>{descripcion}</p>
           <div className='flex justify-around' >
            <p>Raza: {raza}</p>
            <p>|</p>
            <p>Edad: {edad}</p>
           </div>
        </div>
    </div>

  );
};

export default Card;
