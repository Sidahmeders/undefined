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
             <div className="text">
               <h1>Why learn JavaScript?</h1>
               <ul>
                 <li>it's the most popluar that mean you can find a lot of free courses</li>
                 <li>you can build allmost anything you want with it</li>
                 <li>it has a lot of support from it's community</li>
                 <li>beginner frinedly compared to many other languages</li>
                 <li>you don't need to have any degree to start making millon's of dollar</li>
               </ul>
               <h1>Prerequisites</h1>
               <ul>
                 <li>a not so powerful computer</li>
                 <li>a network connection</li>
                 <li>and a basic knowladge of 1 + 1</li>
               </ul>
               <h1>for who is this courses</h1>
               <p>for any one interseted in learing the basics of programming from:</p>
               <ul>
                 <li>HTML and CSS</li>
                 <li>basic data structure</li>
                 <li>basic javascript & ES6</li>
                 <li>basic algorithm scripting</li>
                 <li>object oriented programming</li>
                 <li>functional programming</li>
                 <li>regular expressions</li>
                 <li>frontend libraries & frameworks</li>
                 <li>JSON and AJAX</li>
                 <li>nodeJS and data bases</li>
                 <li>restful APIs and Microservices</li>
                 <li>Linux command & bash scripting</li>
               </ul>
             </div> 

             <div className="image">
               <div>
                <span></span>
                <p>what are waiting for to start coding!</p>
               </div>
               <div>
                 <span></span>
                 <p>the best time to code was a year ago the second best time is now</p>
               </div>
               <div>
                 <span></span>
                 <p>how do you stand out from the rest is how you learn</p>
               </div>
             </div>
           </section>

           <section className="section two">
             
           </section>

           <section className="section three">
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
            <div>
              <span></span>
              <p>JavaScript for Beginners</p>
            </div>
           </section>

         </main>

       </div> 
    );
};

export default Home;