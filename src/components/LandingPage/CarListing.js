const cars =[{
    id: 1,
    image:
    'https://images.unsplash.com/photo-1502654253-6a533f295544?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
}, 
{
    id: 2,
    image:
    'https://preview.colorlib.com/theme/carrentals/images/car_5.jpg',
},
{
    id: 3,
    image:
      'https://images.unsplash.com/photo-1491921125492-f0b9c835b699?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80',
},
{
    id: 4,
    image:
      'https://i2.wp.com/effiezy.com/wp-content/uploads/2018/03/uber-driver-tsb.jpg?w=600&ssl=1',
},
{
    id: 5,
    image:
    'https://images.unsplash.com/photo-1612345642327-e79b84fd94f6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
},
{
    id: 6,
    image:
    'https://images.unsplash.com/photo-1596429916858-6f97b5b9cf48?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1441&q=80',
},
{
    id: 7,
    image:
      'https://images.unsplash.com/photo-1541747277704-ef7fb8e1a31c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80',
    
},
{
    id: 8,
    image:
    'https://technext.ng/wp-content/uploads/2020/08/uber-driver-black-1024x576.jpg',
}

]
const CarListing = () => {
    return (
        <div id="listing">
            <div style={{marginTop:"4rem"}}>
            <div className="how-it-works-header">
            <h1 className="card-guide">We Hire Best Drivers In The World</h1>
            <div className="underline"></div>
            <p className="card-guide">Your Safety Is Our Periority.</p>
            </div>
            </div>
        <div className="flex-car">
          {cars.map((car)=>{
              const { id, image} = car
              return <Cars key={id} image={image} />
          })}
        </div>
        </div>
    )
}

export default CarListing;


export const Cars =(props) =>{

    return(
        <article className="single-tour">
        <img src={props.image} alt="car"/>
        <footer>
          {/* <div className="tour-info">
            <h3 className="car-names">{props.name}</h3>
            <h4 className="tour-price">{props.price}/day</h4>
          </div> */}
          <hr></hr>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos eos at eum, voluptatem quibusdam.
          </p>
            {/* <button style={{width:"8rem", background:"rgb(0,123,255)", height:"4rem", borderRadius:"1rem",color:"white", outline:"none"}} >
             
            </button> */}
    
    
        </footer>
      </article>
    )
}