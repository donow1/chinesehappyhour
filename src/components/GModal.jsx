import React from 'react';

const GModal = ({ open, onClose }) => {
  if (!open) return null;
  return (
      <div className='overlay'>


      <div className='modalContainer max-w-[400px] w-full fixed top-3/4 left-3/4 -translate-x-1/2 -translate-y-1/2 flex bg-[#c78787] rounded-[8px]'>

        <img src='/gmail.png' alt='/' className='w-[100px] object-cover rounded-tl-[8px] rounded-bl-[8px]' />

          <div className='modalRight w-full'>


            <button className='closeBtn fixed top-1 right-2 text-white' onClick={onClose}>X</button>


              <div className='content flex flex-col justify-center text-center mt-3 px-8 py-4 text-white'>
                <p>ellaLyang@gmail.com</p>
              </div>
          </div>

      </div>
      </div>
  );
};

export default GModal;



