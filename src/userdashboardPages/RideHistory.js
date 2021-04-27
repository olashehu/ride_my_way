import React from 'react'
import Sidebar from '../dashboard/Sidebar'
import './RideHistory.css'
//import '../dashboard/Sidebar.css'

const user = [
    {
        pic: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        name: 'John',
        mile: '100Miles',
        time: '9:15am',
        id: 1,
        from: 'Mushin-Ajah',
        date: '20/02/2021'
    },
    {
        pic: 'https://images.unsplash.com/photo-1619190219732-18141c39b26b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        name: 'Emeka',
        mile: '200miles',
        time: '10:00pm',
        id: 2,
        from: 'lagos-ibadan',
        date: '01/02/2021'
    },
    {
        pic: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        name: 'Emeka',
        mile: '200miles',
        time: '10:00pm',
        id: 2,
        from: 'lagos-ibadan',
        date: '01/02/2021'
    },
    {
        pic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80',
        name: 'John',
        mile: '200miles',
        time: '10:00pm',
        id: 2,
        from: 'lagos-ibadan',
        date: '01/02/2021'
    }
]


const RideHistory = () => {
    return (
        <div className="bg-color">
           <Sidebar/>
            <div className='ride__history'>
                {user.map((lists, id)=>{
                   const {pic, name, mile, time, from, date} = lists
                   return <History 
                          pic={pic}
                          name={name}
                          mile={mile}
                          time={time}
                          from={from}
                          date={date} 
                          key={id}
                          className= 'bg-color'/>
               })} 
           </div>  
        </div>
    )
}

export default RideHistory


 const History = (props) => {
    return (
        <div className="rider-history">
          <div className="first-child me">
              <img src={props.pic} className="picture" alt="name"/>
              <div>Customer's Name: {props.name}</div>
              <div>{props.id}</div>
          </div>
          <div className="second-child me">
              <div>
                  <img src="" alt="icon"/>
                  <span>{props.from}</span>
              </div>
              <div>
                  <img src="" alt="icon"/>
                  <span>Mile: {props.mile}</span>
              </div>
              <div>
                  <img src="" alt="icon"/>
                  <span>Departing: {props.time} - {props.date}</span>
              </div>
          </div>
        </div>
    );
}
