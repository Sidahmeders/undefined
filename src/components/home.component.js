import React from 'react';
import '../styles/home/home.css'


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
            <div className="card right">
              <h2>
                Interactive courses on JavaScript
              </h2>
              <p>
                Learn how to write the programming language from scratch, so you can start 
                creating code of your own.
              </p>
              <small>
                Hundreds of on-demand courses covering fundamental JavaScript tutorials through 
                advanced techniques for free.
              </small>
            </div>
            <div className="card left">
              <h1>JavaScript Best Practices</h1>
              <p>
                A series of books by Kyle Simpson that dives deep into JavaScript.
              </p>
              <small>
                If you’re a cat who wants to learn JavaScript, there isn’t a better place
              </small>
            </div>
          </section>

         </header>

         <main>

           <section className="section one">
           </section>

           <section className="section two">
            <div>
              <span></span>
              <p>Web Development In 2020</p>
            </div>
            <div>
              <span></span>
              <p>HTML Crash Course</p>
            </div>
            <div>
              <span></span>
              <p>CSS Crash Course</p>
            </div>
            <div>
              <span></span>
              <p>React JS Crash Course</p>
            </div>
            <div>
              <span></span>
              <p>Vue JS Crash Course</p>
            </div>
            <div>
              <span></span>
              <p>Git Crash Course</p>
            </div>
            <div>
              <span></span>
              <p>Node.js For Beginners</p>
            </div>
           </section>

         </main>

       </div> 
    );
};

export default Home;