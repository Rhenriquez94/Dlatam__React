/* eslint-disable react/prop-types */
import Alert from 'react-bootstrap/Alert';

const CustomAlert = ({tipo,mensaje}) => {
  return (
    <Alert variant={tipo}>
      {mensaje}
    </Alert>
  );
}

export default CustomAlert;
