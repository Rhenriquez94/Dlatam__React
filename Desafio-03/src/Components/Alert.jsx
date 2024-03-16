/* eslint-disable react/prop-types */
import Alerta from 'react-bootstrap/Alert';

const Alert = ({tipo,mensaje}) => {
  return (
      <Alerta variant={tipo}>
        {mensaje}
      </Alerta>
   
  )
}

export default Alert