import React from 'react'
import { connectSocket } from '../../socket'

function JoinForm() {
  return (
    <form className='w-25 mx-auto'>
      <div className='mb-3'>
        <label for='room' className='form-label'>
          Введите номер комнаты
        </label>
        <input type='text' className='form-control' id='room' />
      </div>
      <div className='mb-3'>
        <label for='username' className='form-label'>
          Введите Ваше имя
        </label>
        <input type='text' className='form-control' id='username' />
      </div>
      <div class='d-grid'>
        <button onClick={connectSocket} class='btn btn-primary' type='button'>
          Войти
        </button>
      </div>
    </form>
  )
}

export default JoinForm
