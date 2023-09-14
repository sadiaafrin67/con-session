/* eslint-disable react/jsx-key */

import { useEffect } from "react";
import "./Home.css";
import { useState } from "react";
import Cart from "../Cart/Cart";

const Home = () => {
  const [allActors, setAllActors] = useState([]);
  const [selectedActors, setSelectedActors] = useState([]);
  const [reamaining, setRemaining] = useState(0)
  const [totalCost, setTotalCost] = useState(0)

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setAllActors(data));
  }, []);

  const handleSelectedActor = (actor) => {
    let count = actor.salary;
    console.log(actor);
    const newSelectedActor = [...selectedActors, actor];
    // console.log(newSelectedActor)
    const isExist = selectedActors.find((item) => item.id == actor.id);
    if (isExist) {
      return alert("already selected");
    } 
    
    else {
      selectedActors.forEach((item) => {
        count = count + item.salary;
      });

     
      const totalRemaining = 20000 - count;
      if (count > 20000){
        return alert('tk sesh')
      }


      else{
        setTotalCost(count);
      setRemaining(totalRemaining);
      setSelectedActors(newSelectedActor);
      }
      
    }
  };

  return (
    <div className="container">
      <div className="home-container">
        {/* card container start */}
        <div className="card-container">
          {allActors.map((actor) => (
            <div key={actor.id} className="card">
              <div className="card-img">
                <img className="photo" src={actor.image} alt="" />
              </div>
              <h2>{actor.name}</h2>
              <p>
                <small>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore, dignissimos!
                </small>
              </p>
              <div className="info">
                <p>salary:${actor.salary}</p>
                <p>{actor.role}</p>
              </div>
              <button
                onClick={() => handleSelectedActor(actor)}
                className="card-btn"
              >
                select
              </button>
            </div>
          ))}
        </div>

        {/* cart container start */}
        <div className="cart">
          <Cart selectedActors={selectedActors} reamaining={reamaining} totalCost={totalCost}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Home;
