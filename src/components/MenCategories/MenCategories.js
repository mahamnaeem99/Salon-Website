import React, { useState, useEffect } from 'react';
import './mencat.css';
import mencat1 from '../../images/men-salon-1.jpg';
import mencat2 from '../../images/men-salon-2.jpg';
import {
    BrowserRouter as Router,
    Switch, Route, Link
} from 'react-router-dom';

const MenCategories = () => {

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await fetch('http://localhost:3000/salons?id=1');
        setUsers(await response.json());
        // console.log(data);

    }

    useEffect(() => {
        getUsers();
    }, []);

    const salonId=0;
    const getId=(e)=>{
        salonId=e.target.id;
        console.log(salonId);
    } 

    return (
        <>
            <h1 className='text-center orange px-5 py-5 d-flex justify-content-center align-items-center'>MEN CATEGORIES</h1>
            <div className='container'>
                <Link to="/mansalons" style={{ color: 'black', textDecoration: 'none' }}>
                    {
                        users.map((user) => {
                            // const {}=user; 
                           
                            return (
                                <>
                                    <div className='row d-flex justify-content-center align-items-center salon-categoryy mb-4'>
                                        <div className='col-lg-4 mb-4'>
                                            <img src={mencat2} className='men-salon-1' className='img-fluid' />
                                        </div>
                                        <div className='col-lg-8'>
                                            <h1>{user.name}</h1>
                                            <p>{user.description}
                                            </p>
                                            <h5>{user.timings}</h5>
                                            <p>{user.address}</p>

                                            <p>Ratings &nbsp;
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star"></span>
                                                <Link to="/mansalons">
                                                    <i id={user.id} class="fa fa-arrow-right men-arrow" onClick="getId()"></i>
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }




                </Link>
            </div>
        </>
    )
};
export default MenCategories;