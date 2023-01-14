import React, {useState}  from 'react'

const  Nome = () =>{
  const [weigth, setWeigth] = useState()
  const [heigth,setHeigth ] = useState()

  const calculaImc = () =>{
    const imc = weigth / (heigth * heigth)
    if (imc < 19) { 
    alert('Esse é seu IMC : ' + imc.toFixed(2)+ " Você está abaixo do peso ") 
    }
    if (imc > 24) { 
      alert('Esse é seu IMC : ' + imc.toFixed(2)+ " Você está acima do peso ") 
      }
    else{
      alert('Esse é seu IMC : ' + imc.toFixed(2)+ " Você está no peso ideal") 
    }
  }
  return(
    <div> 
      <label> <strong> Peso(g):</strong> </label>
      <input type="number" onChange= {(e) => setWeigth(+e.target.value)} value={weigth} placeholder="Digite seu peso..."/>
      <label> <strong> Altura(m): </strong> </label>
      <input type="number" onChange= {(e) => setHeigth(+e.target.value)} value={heigth} placeholder="Digite sua altura..."/>  
      <button onClick={calculaImc}> calcular </button>
      <p id='resultado'> </p> 
  </div>
    )
}
export default Nome