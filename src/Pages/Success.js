import React from 'react'
import Button from 'react-bootstrap/Button';
import {Link } from 'react-router-dom';

export default function Success() {

    // const containerStyle = {
    //     //marginBottom: '400px',
        
    // };
    const spacerStyle = {
        height: '300px',
        backgroundColor: ' #f8f9fa'
    }

    return (
        <div >
          <h1 className='text-center p-5'>Account created successfully!</h1>
          <div className="d-grid gap-2 col-3 mx-auto">
            <Button variant="primary" type="submit" >
                 <Link to='/Dashboard' className='btn text-white '>Go to Dashboard</Link>
            </Button>
          </div> 
          
          <div style={spacerStyle}></div>
          
        </div>
    );
    
}
