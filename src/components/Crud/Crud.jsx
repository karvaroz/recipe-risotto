import React from 'react'
import { useDispatch } from 'react-redux';
import { startLogout } from '../../redux/actions/authActions';

const Crud = () => {
  const dispatch = useDispatch();
  return (
    <div>
      Crud
      <button className="btn btn-light" onClick={() => dispatch(startLogout())}>
        Cerrar
      </button>
    </div>
  );
}

export default Crud