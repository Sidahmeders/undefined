import React from 'react';
import '../styles/home/home.css'
import { Link } from 'react-router-dom';


function Home() {
    return(
       <div className="home">
         
         <header>

           <section className="section one">
             <h1>Wellcome to the place where javascript is made simple</h1>
             <p>
               we belive that our free and completley awsome website will help you achive 
               your goal faster than ever with our best collected and studied resources
             </p>
           </section>

           <section className="section two">
             <div className="js-logo">
               js
             </div>
           </section>

          <section className="section three">
            <h2>
              get the lasets new right now
            </h2>
          </section>
          
          <Link to="/cool">
            get started
          </Link>

         </header>

       </div> 
    )
}

export default Home;