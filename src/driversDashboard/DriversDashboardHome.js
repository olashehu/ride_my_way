import axios from 'axios';
import React, {useState } from 'react';
import { useHistory } from "react-router-dom";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import './DriversDashboardHome.css';
import DriversNavbar from './DriversNavbar';
import { addOffer, setAddOffer } from '../reducers/offerSlice';

toast.configure();
const DriversDashboardHome = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [offer, setOffer ] = useState({
        location: '',
        destination: '',
        price: '',
    })

    const handleChange = (e) => {
        setOffer({...offer, [e.target.name]: e.target.value})
    }

    const handleOffer = async (e) => {
        e.preventDefault()
        const token = JSON.parse(localStorage.getItem('driver-token'));
        try {
            const {data} = await axios({
                method: 'post',
                baseURL: "http://localhost:3000/v1/driver/ride-offer",
                data: offer,
                headers:{
                    Authorization: `Bearer ${token}`
                }   
            })
            console.log(data.data);
            dispatch(setAddOffer({offer}))
            history.push('/my-offer')
            const notify = () => toast(data.message);
            notify();
        } catch (error) {
            const notify = () => toast(error.response.data.message);
            notify();
        }
    }
    return (
        <DriversNavbar>
            <div className="add-offer-container">
                <div className="add_offer_container_content">
                    <h1 className='add_offer_header'>Add your offer below</h1>
                    <div className="add_offer_inputs">
                        <div className="offer_field">
                            <input
                             type="text"
                             name="location"
                             placeholder=' Your location here...'
                             onChange={handleChange}
                             value={offer.location}
                            />
                        </div>
                        <div className="offer_field">
                            <input
                              type="text"
                              name='destination'
                              placeholder='Your destination here...'
                              value={offer.destination}
                              onChange={handleChange}
                            />
                        </div>
                        <div className="offer_field">
                            <input
                              type="text"
                              name='price'
                              placeholder='Your amount here...'
                              value={offer.price}
                              onChange={handleChange}
                            />
                        </div>
                    </div>
                    <button className='add_offer' onClick={handleOffer}>Add offer</button>
                </div>
            </div>
        </DriversNavbar>
    )
}
export default DriversDashboardHome
