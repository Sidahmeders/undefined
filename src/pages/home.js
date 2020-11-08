import React from 'react'
import '../styles/home.scss'
import CodeShop from '../components/codeShop'
import { codeArea } from '../components/codeSnippet'

import DB from '../icons/database-solid.svg'
import Time from '../icons/hourglass-solid.svg'


function Home() {
  
  const sectionDiv = text => {
    return (
      <div>
        <span></span>
        <p>{text}</p>
      </div>
    )
  }

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
               {sectionDiv("what are waiting for to start coding!")}
               {sectionDiv("the best time to code was a year ago the second best time is now")}
               {sectionDiv("how do you stand out from the rest is how you learn")}
             </div>
           </section>

           <section className="section two">
             <h1>let us waste no time and start your first program</h1>
             <div>
               <p>
                  just <span style={{color:"#0df"}}>copy</span> and <span style={{color:"#0df"}}>paste </span> 
                  this <span style={{color:"#0f0"}}>code</span> below and click on the <span style={{color:"#d90"}}>red buuton</span>
               </p>
               {codeArea(`("hello world")`)}
               {codeArea(`var a = 5;`, `var b = 3;`, `a + b + 10`)}
               {codeArea(
                 `const greet = (name, age) => {`, '   return `Hi there, my name is ${name} and I am ${age}`', `};`, 
                  `greet("Ahmed", 32)`
               )}
             </div>
             <p style={{color:"#ddd", marginTop:"22px"}}><span style={{color:"#f88"}}>CAUTION:</span> dont try running infinte loops.</p>
             <CodeShop />
           </section>

           <section className="section two-and-half">
             <div>
               <h1>Time Complexity</h1>
               <p>      
                Why does building a heap only take O(N) time? What does O(logN) 
                really mean? What's the time-complexity difference between appending 
                a value to an array and adding a character to a string? We address all 
                of these things, and more.
               </p>
               <img src={Time} alt="time"/>
             </div>
             <div>
               <h1>Space Complexity</h1>
               <p>
               You know that thing you're kinda familiar with but not really? Yeah, 
               that's space complexity. And it turns out it's pretty important. 
               All of our video explanations dive deep into 
               space-complexity to turn you into a well rounded Big O expert.
               </p>
               <img src={DB} alt="db"/>
             </div>
           </section>
          
           <section className="section three">
             {sectionDiv("Web Development In 2020")}
             {sectionDiv("HTML Crash Course")}
             {sectionDiv("CSS Crash Course")}
             {sectionDiv("React JS Crash Course")}
             {sectionDiv("Vue JS Crash Course")}
             {sectionDiv("Git Crash Course")}
             {sectionDiv("Node.js For Beginners")}
             {sectionDiv("JavaScript for Beginners")}
           </section>
         </main>

       </div> 
    )
}


export default Home