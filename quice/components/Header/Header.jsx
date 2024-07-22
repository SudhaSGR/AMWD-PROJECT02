import React from 'react'
import './Header.css'

export function Header ({name}){
    return (
      <div className="header">
        <div>
            <img className='logo' src="../src/assets/QA.png" alt="QA" />
        </div>
        <div className='name'>
                 {name}
             </div>
      </div>
    );
}