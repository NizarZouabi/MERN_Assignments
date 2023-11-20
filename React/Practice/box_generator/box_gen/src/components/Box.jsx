import React from 'react';

const Box = (props) => {
    const { boxList } = props
  return (
    <div className='border border-1 p-5 mt-5 d-flex justify-content-center gap-5'>
          {
              boxList.map((box) => (
                <div style={{ backgroundColor: box.color, height: box.height + 'px', width: box.width + 'px' }}></div>
              ))
      }
    </div>
  )
}

export default Box
