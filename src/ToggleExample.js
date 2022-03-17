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
            // someVariable  ?  true : false

            // showText ~ true 🔁 false
            showText ?

            // true
            <h2 onClick={ handleH2Toggle } > Toggle Example </h2> 
            
            : 
            
            <h2 onClick={ handleH2Toggle } > BOOM! WE TOGGLED!!!! </h2>
            // false

        }

    </div>)

}
export default ToggleExample