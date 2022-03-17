// File Imports
import logo from './styles/svg_files/logo.svg';


// CSS Imports
import './styles/css/App.css';


// Hook Imports
////   { 📚📚📚📚 ,    📘                 } from 'react' |📚📚📚📚📚📚|
import { React   , useState , useEffect } from 'react';


// Component Import
import ToggleExample from './ToggleExample.js';
import CoolButton from './CoolButton.js';

import TreeTop from './TreeTop';







function App( ){  // App( ~props~ )
  
  //// js

    //// const [ someVariable , someFunction ] = useState( someStartingValue )  ////

       const [ count , setCount ] = useState( 10 )  // useState -> 👷🏗
        console.log( "The State Of count: " , count )  //state//

    // const [ count , setCount ]  =  [  "someStartingValueTHISSTRING" , function(){}  ]
    // const count = 0
    // const setCount = someSetterFunction(){}
    // const [ a , b ]             =  [  1 , 2  ]  // Array Destructuring


      // setCount( 3 )

    
    let anotherCount = 0


    function handleClick(){  
      
      console.log( "click! factored out Function Reference" )  


      anotherCount++
      console.log( anotherCount )


      let newCount = count + 1
      setCount( newCount )
    
    }  
    const handleChange =()=>{  
      
      console.log( "click! factored out Function Reference" )  
    
    }  
    const handleSubmit =()=>{  
      
      console.log( "click! factored out Function Reference" )  
    
    } 
 


    const handleSuperCoolButton =( )=>{ 
  
      console.log("🔥COOL🔥")  //

        // alert( "🔥COOL🔥" );
      
      window.alert( "🔥COOL🔥" );
      
    }
  //// js

  ////////////////////////////////

  //// html like structure ~ JSX
  return (
    <div>

      
      {/* 
      
        // 🎶🎶🎶🔔🎶🎶🎶 //
        < TreeTop />

        < BranchesBelow />
        //    🎶🔔🎶    //

        
      */}
      < TreeTop />


      <br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/>


      <button  onClick={ handleSuperCoolButton } >  🆒😎🔥SuperCOOL!!!! </button>

      < CoolButton
      
        onClickButItsAProp={ handleSuperCoolButton }
        someCoolText={"🔥COOL🔥"} 

      />


      <br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/>


      < ToggleExample />


      <br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/>

      <img 
        src={logo} 
        className="App-logo" 
        alt="react logo - spinning" 
      />

      {/* These Are All Our h1-Clicks */}
      <>

        {/*  <h1 onclick="" >🌿VVVVelcome To Deh Juhngle🌿</h1>  */}

        <h1 onClick={ handleClick }>
          
          🌿VVVVelcome To Deh Juhngle (But Factored Out)🌿 
        
        </h1>

        <h1 onClick={  function(){  console.log( "click function keyword! :)" )  }  }>

          🌿VVVVelcome To Deh Juhngle🌿

        </h1>

        <h1 onClick={  ()=>{  console.log( "click! arrow function =()=> :)" )  }  }>

          🌿VVVVelcome To Deh Juhngle....AgeeehnAgeeehn😅🌿

        </h1>

        <h1 

          onClick={  

            ()=>{  
              
              console.log( "click! arrow function =()=> :) ++" )  
            
            }  

          }
        >

          🌿VVVVelcome To Deh Juhngle....Ageeehn😅🌿

        </h1>

        <img 
          src="https://www.wallpapers13.com/wp-content/uploads/2016/06/Animal-kingdom-dwellers-of-the-jungle-Desktop-backgrounds-free-download-for-windows-1920x1080.jpg" 
        />

      </>

      
    </div>
  );
  //// html like structure ~ JSX
}
export default App;











    //   //// 💭💭💭💭

  // ////  const [ variable1 , function1 ] = [  someStartingValue , function(){}  ]
  //       const theResultOfUseState = useState( "someStartingValue" )  // -> 👷🏗

  //         console.log( "theResultOfUseState - Is an Array: " , theResultOfUseState )  //

  //     function someFunctionMockingUseState( someStartingValue ){

  //       // some super complex code beyond us O_O ....

  //       return [  someStartingValue , function(){}  ]
        
  //     }
  //   //// 💭💭💭💭

  //     //// const [ someVariable , someFunction ] = useState( someStartingValue )  ////
  //     const [ someVariable , someFunction ] = useState( "someStartingValueTHISSTRING" )
  //     // console.log( "someVariable: " , someVariable )  //
  //     // console.log( "someFunction: " , someFunction )  //
  //     //// const [ variable1 , function1 ] = [  someStartingValue , function(){}  ]

  //     // console.log( "--------" )  //

  //     //// arrayDestructuring Says
  //     //// const [ variable1 , variable2 ] = [ 1 , 2 ]
  //           const [ variable1 , variable2 ] = [ "a" , "b" ]
  //           // console.log( "variable1: " , variable1 )  //
  //           // console.log( "variable2: " , variable2 )  //

  //     // console.log( "--------" )  //




  ////   {  📚📚📚📚 } from 'theLibrary' |📚📚📚📚📚📚|
  // import React from 'theLibrary';
  // import { useState , React } from 'react';




  // //// Pure JS Event Handling Refernece

  // const h1ToClickOn = document.querySelector( "h1" )
  //   h1ToClickOn.addEventListener( "click" , function(){

  //     console.log( "click! :)" )  //

  //   } )

