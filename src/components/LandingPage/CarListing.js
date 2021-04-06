import React from 'react'

const cars =[{
    id: 1,
    name:"Infinity",
    Price: "$700",
    Availability:"Lagos",
    passenger: "3",
    image:
    'https://images.unsplash.com/photo-1598889933677-e433366327f6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80',
}, 
{
    id: 2,
    name:"Honda",
    Price: "$500",
    Availability:"Lagos",
    passenger: "1",
    image:
    'https://preview.colorlib.com/theme/carrentals/images/car_5.jpg',
},
{
    id: 3,
    name:"Roll Royce",
    Price: "$2000",
    Availability:"Ibadan",
    passenger: "1",
    image:
      'https://images.unsplash.com/photo-1598195221927-fc335f446870?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
},
{
    id: 4,
    name:"Volvo",
    Price: "$300",
    Availability:"Lagos",
    passenger:"3",
    image:
      'https://images.unsplash.com/photo-1506244856291-8910ea843e81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
},
{
    id: 5,
    name:"Porche",
    Price: "$1000",
    Availability:"Lagos",
    passenger: 2,
    image:
    'https://images.unsplash.com/photo-1601679147136-22d1032399e4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1000&q=80',
},
{
    id: 6,
    name:"Corolla",
    Price: "$500",
    Availability:"Lagos",
    passenger: "4",
    image:
    'https://images.unsplash.com/photo-1596429916858-6f97b5b9cf48?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1441&q=80',
},
{
    id: 7,
    name:"Benz",
    Price: "$1500",
    Availability:"Lagos",
    passenger:"1",
    image:
      'https://images.unsplash.com/photo-1563059999-9bcd13ce672d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80',
    
},
{
    id: 8,
    name:"Toyota",
    Price: "$200",
    Availability:"Abuja",
    image:
    'https://images.unsplash.com/flagged/photo-1564153296137-400b51e1ff6d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1389&q=80',
}

]
const CarListing = () => {
    return (
        <div>
            <div style={{marginTop:"4rem"}}>
            <div className="how-it-works-header">
            <h1 className="card-guide">Car Listings</h1>
            <div className="underline"></div>
            <p className="card-guide">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            </div>
        <div className="flex-car">
          {cars.map((car)=>{
              const { id, name, Price, Availability, image} = car
              return <Cars key={id} name={name} price={Price} Availability={Availability} image={image} />
          })}
        </div>
        </div>
    )
}

export default CarListing;


export const Cars =(props) =>{

    return(
        <article className="single-tour">
        <img src={props.image} alt="car" width="100%"/>
        <footer>
          <div className="tour-info">
            <h3 className="car-names">{props.name}</h3>
            <h4 className="tour-price">{props.price}/day</h4>
          </div>
          <hr></hr>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos eos at eum, voluptatem quibusdam.
          </p>
            <button style={{width:"8rem", background:"rgb(0,123,255)", height:"4rem", borderRadius:"1rem",color:"white", outline:"none"}} >
             Get Now
            </button>
    
    
        </footer>
      </article>
    )
}