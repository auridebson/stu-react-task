import React, { useState, useEffect} from 'react'
import { useHistory, useParams } from "react-router-dom"
import './index.css'
import db from '../../firebase'
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
    return (
        <div>
            <form
                style={{
                    margin: "auto",
                    padding: "15px",
                    maxWidth: "400px",
                    alignContent: "center"
                }}
                onSubmit={handleInputChange}
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
                    value={name} 
                    onChange={handleInputChange}
                />
            </form>
        </div>
    )
}