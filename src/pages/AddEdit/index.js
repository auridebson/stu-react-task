import React, { useState, useEffect} from 'react'
import { useHistory, useParams } from "react-router-dom"
import './index.css'
import fireDb from '../../firebase'
import { toast } from 'react-toastify'

const initialState = {
    name : "",
    email : "",
    contact : ""
}

export default function AddEdit() {
    const [state, setState] = useState(initialState)
    const [data, setData] = useState({})

    const {name, email, contact} = state
    const history = useHistory()

    const handleSubmit = (e) => {
        const {name, value} = e.target
        setState({ ...state,[name]:value})
    }
    const handleInputChange = (e) => {
        e.preventDefault()
        if (!name || !email || !contact) {
            toast.error("Preencha todos os campos")
        } else {
            fireDb.child("contacts").push(state, (err) => {
                if (err) {
                   toast.error(err) 
                } else {
                toast.success("Contato adicionado com sucesso")
                }
            })        
            setTimeout(() => history.push("/"), 500)
        }
    }


    return (
        <div>
            <form
                style={{
                    margin: "auto",
                    padding: "15px",
                    maxWidth: "400px",
                    alignContent: "center"
                }}
                onSubmit={handleSubmit}
            >
                <label htmlFor='name'>Name</label>
                <input 
                    type="text" 
                    id='name' 
                    name='name' 
                    placeholder='Your name...' 
                    value={name} 
                    onChange={handleInputChange}
                />

                <label htmlFor='emaili'>E-mail</label>
                <input 
                    type="text" 
                    id='email' 
                    name='email' 
                    placeholder='Your email...' 
                    value={email} 
                    onChange={handleInputChange}
                />

                <label htmlFor='contact'>Contact</label>
                <input 
                    type="number" 
                    id='contact' 
                    name='contact' 
                    placeholder='Your contact number...' 
                    value={contact} 
                    onChange={handleInputChange}
                />

                <input type="submit" value="Save" />
            </form>
        </div>
    )
}