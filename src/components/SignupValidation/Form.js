 import React, { useState } from 'react';
 import Signup from './Signup';
 import FormSuccess from './FormSuccess';




const Form = () => {
    const [submitted, setSubmitted] = useState(false)

    function formSubmitting(){
        setSubmitted(true)
    }
    return (
        <>
        {/* <Signup /> */}
        {!submitted ? (<Signup formSubmitting = {formSubmitting} />) 
        : (<FormSuccess />)}
        </>
    )
}


export default Form;































// const Form = () => {
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   function submitForm() {
//     setIsSubmitted(true);
//   }
//   return (
//     <>
//       <div className='form-container'>
//         <span className='close-btn'>×</span>
//         <div className='form-content-left'>
//           <img className='form-img' src='img/img-2.svg' alt='spaceship' />
//         </div>
//         {!isSubmitted ? (
//           <Signup submitForm={submitForm} />
//         ) : (
//           <FormSuccess />
//         )}
//       </div>
//     </>
//   );
// };
