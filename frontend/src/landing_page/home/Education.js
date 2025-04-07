import React from 'react';
function Education() {
  return (  
    <div className='container mt-5'>
       <div className='row'>
    <div className='col-6'>
      <img src='media\Images\education.svg'style={{width:"70%"}}/>
          </div>
   
    <div className='col-6'>
      <h1 className='mb-3' fs-2> Free an open market education</h1>
      <p>Varsity , the largest online stock market education book in the world covering everything from the basic to advanced trading</p>
      <a href='' className='mx-5' style={{ textDecoration:"none"}}> Versity<i class="fa-solid fa-arrow-right-long" aria-hidden="true"></i></a>
      <p className='mt-5'>
        Trading Q&A, the most acting trading investment community in India for all your related
      </p>
      <a href='' className='mx-5' style={{ textDecoration:"none"}}> Trading Q&A<i class="fa-solid fa-arrow-right-long" aria-hidden="true"></i></a>
       
        </div>
      </div>
    </div>
  
  );
}

export default Education;