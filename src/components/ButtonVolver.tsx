
import "../styles/ButtonVolver.css";
import { useNavigate } from 'react-router-dom';


 export const ButtonVolver = () => {
    const navigate = useNavigate();
    const handleIngresarPage = ()=> navigate("/home");
    return (
      <>
        <button className='btn-volver' onClick={handleIngresarPage}>Volver</button>
      </>
    )
}