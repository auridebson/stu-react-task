import React, {useEffect, useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
import './index.css'

export default function Header() {
    const [activeTab, setActiveTab] = useState('Home')
    return (
        <div className="header">
            <p className="logo">Contato App</p>
            <div className="header-right">
                <Link to="/">
                    <p 
                        className={`${activeTab === "Home" ? "active" : "" }`}
                        onClick={() => setActiveTab=("Home")}
                    >
                        Home
                    </p>
                </Link>

                <Link to="/add">
                    <p 
                        className={`${activeTab === "AddContact" ? "active" : "" }`}
                        onClick={() => setActiveTab=("AddContact")}
                    >
                        Add Contact
                    </p>
                </Link>

            </div>
        </div>
    )
}