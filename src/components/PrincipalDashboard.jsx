
import styled from "styled-components"
import useHistory from "../hooks/useHistory"
import { useState } from "react"

const PrincipalDashboardWrapper = styled.main`

    height: calc(100% - 180px);
    width: 100%;

    box-sizing: border-box;
    margin-top: 50px;

    display: flex;
    justify-content: space-evenly;
    align-items: top;

    .container {

      height: 400px;
      width: 600px;

      background-color: white;
      border-radius: 20px;

      box-shadow: 1px 1px 5px 3px #d6d6d6;

    }

    .title {

      height: 55px;

      h1 {
        font-weight: 900;
        font-size: 25px;
        text-align: center;
        margin: 0;
      }

      span {
        color: #7FBE35;
      }
    }

    .budget {

      .form  {
        padding: 40px 0;
        height: 90%;
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;

        gap: 25px;

        label {
          font-size: 17px;
          font-weight: 700;
          text-transform: uppercase;
        }

        div {
          display: flex;
          flex-direction: column;
          gap: 10px;
          width: 90%;
          box-sizing: border-box;

          input {
            font-size: 15px;
            height: 40px;
            border-radius: 12px;
            border: 1px solid #d6d6d6;
            padding-left: 10px;
          }
        }

        .submit {
          border: none;
          background-color: transparent;

          background-color: #7FBE35;
          color: white;
          padding: 10px 80px;
          border-radius: 10px;

          font-weight: 600;
          text-transform: uppercase;

          cursor: pointer;
          transition: all 0.3s ease-in-out;

          &:hover {
            background-color: #4A9F55;
            transform: scale(1.05);
          }
        } 
      }
    }

    .added {

      display: flex;
      flex-direction: column;

      width: 610px;

      overflow-y: scroll;

       .user_content {
          margin-top: 10px;
          width: 100%;
          height: calc(90% - 55px);

          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 25px;

          padding: 15px 0;
  

          .card {
            height: 200px;
            width: 90%;
            background-color: white;
            padding-left: 50px;

            border-radius: 20px;
            box-shadow: 1px 1px 5px 3px #d6d6d6;

            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 15px;

            div {
              display: flex;
              align-items: center;

              gap: 10px;
              
              h5, p {
                margin: 0;
                font-size: 16px;
              }
            }
        }
       }
    }
`

const PrincipalDashboard = () => {

  const { history, setHistory } = useHistory()

  const [ name, setName ] = useState("")
  const [ price, setPrice ] = useState("")
  const [ description, setDescription ] = useState("")

  const handleSubmit = event => {

    event.preventDefault()

    if( [name, price].includes('') ) {
      alert("Please fill all the fields")
      return
    }

    const newHistory = [...history, { name, price, description: description === "" ? "No description" : description } ]
    setHistory(newHistory)
    setName('')
    setPrice('')
    setDescription('')

  }

  return (
    <PrincipalDashboardWrapper>

      <div className = "budget">

          <div className = "title">
              <h1>Crea Un Nuevo <span>Participante</span></h1>
          </div>
          <div  className = "container">
        
            <form
              className = "form"
              onSubmit = {handleSubmit}
            >

            <div> 
              <label htmlFor = "name" >Nombre del participante: </label>
              <input
                type = "text" 
                name = "name" 
                id = "name"
                placeholder = "Introduce el nombre de el participante"
                value = {name}
                onChange = { event => setName(event.target.value) }
              />
            </div>

            <div>
              <label htmlFor = "price">Cantidad aportada:</label>
              <input 
                type = "number" 
                name = "price" 
                id = "price" 
                placeholder = "Introduce la cantidad aportada"
                value = {price}
                onChange = { event => setPrice(event.target.value) }
              />
            </div>

            <div>
              <label htmlFor = "description">Descripción:</label>
              <input 
                type = "textarea" 
                name = "description" 
                id = "description" 
                placeholder = "Introduce una descripción (Opcional)"
                value = {description}
                onChange = { event => setDescription(event.target.value) }
              />
            </div>

            <input 
              type = "submit" 
              value = "Añadir" 
              className = "submit"
            />
         </form>

        </div>
      </div>

      <div className = "added">

        <div className = "title">
          <h1>Participantes <span>Añadidos</span></h1>
        </div>

        <div>
          <div className = "user_content">
            {
              history.map( (item, index) => (
                <div className = "card" key = {index} >
                  <div>
                    <h5> NOMBRE: </h5>
                    <p>{item.name}</p>
                  </div>
                  <div>
                    <h5> CANTIDAD APORTADA: </h5>
                    <p>{item.price}</p>
                  </div>
                  <div>
                    <h5> DESCRIPCIÓN: </h5>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>

    </PrincipalDashboardWrapper>
  )
}

export default PrincipalDashboard
