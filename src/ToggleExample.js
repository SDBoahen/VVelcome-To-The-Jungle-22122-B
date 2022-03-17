import { useState } from "react"




function ToggleExample( ){

    //// js

        let show = true

      //const [ someVariable , someSetterFunction ] = useState( someStartValue ) 
        const [ showText     , toggleShowText     ] = useState( true )  // useState Causes ReRenders
            console.log( "State Of showText: " , showText )  //

            const handleH2Toggle =( )=>{

                console.log( "toggle 👀" )  //

                    //X// a NO-NO for Visual Changes
                        show = !show
                        console.log( "show: " , show )  //
                    //// This will ONLY make Internal Changes

                toggleShowText( !showText )  // our Setter Function

            }
        

    //// js

    return(<div>

        {

            //// Ternary Syntax Flow
            // someVariable  ?  true : false
            ////

            // showText  ~  true 🔁 false
            showText ?

            // true
            <h2 onClick={ handleH2Toggle } > Toggle Example </h2> 
            
            : 
            
            <h2 onClick={ handleH2Toggle } > BOOM! WE TOGGLED!!!! </h2>
            // false          

        }
        <br/><br/>
        <h2>
            - Wooblay! -
        </h2>
        <br/><br/>

        {

            <h2 onClick={ handleH2Toggle } >
                { 
                    showText ?

                    // true
                    "Toggle Example - Ternary In Text Space" 

                    :

                    "BOOM! This is how we'd kinda change the textContent here in TheJungle"
                    // false
                }
            </h2>

            // <h2 onClick={ handleH2Toggle } > Toggle Example - Ternary In Text Space </h2> 
            
            // <h2>.addEventListener( "click" , handleH2Toggle )
            /*

                let show = true 

                <h2>.addEventListener( "click" , function(){

                    // change something on theDOM

                    show ?

                    h2.textContent = "Toggle Example"

                    :

                    h2.textContent = " BOOM! WE TOGGLED!!!!"


                } )

            */

        }

    </div>)

}
export default ToggleExample