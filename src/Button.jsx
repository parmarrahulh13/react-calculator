import { useState } from 'react'



function Button() {
     const [numbers] = useState({
    firstnumber: 10,
    secondnumber: 5
  });
  
 const [answer,setanswer]=useState(0);
  return (
    <>
        <div className="buttons">
            <p className='firstnumber'>firstnumber 10</p><br />
            <p className='secondnumber'>secondnumber 5</p><br />
            <p className='secondnumber'>10 + 5 </p>
            <button className='sum' onClick={()=>setanswer(numbers.firstnumber+numbers.secondnumber)}>sum</button><br />
            <p>Answer is {answer}</p>
        </div>

    </>
  )
}

export default Button
