import { useState } from "react"




function ReactForms(){

    //// js

            //  listOfCoolThangs = updateListOfThings( "something" )
        const [ listOfCoolThangs , updateListOfThings ] = useState( [ "thang1" ] )
            console.log( "STATE of listOfCoolThangs: " , listOfCoolThangs )  //

        function handleSubmit( synthEvent ){

            synthEvent.preventDefault()
            
            console.log( "synthEvent:  " , synthEvent )  //
            console.log( "synthEvent.target:  " , synthEvent.target )  //
            console.log( "synthEvent.target[ 0 ]:  " , synthEvent.target[ 0 ] )  //
            console.log( "synthEvent.target[ 0 ].value:  " , synthEvent.target[ 0 ].value )  //

                let newThang = synthEvent.target[ 0 ].value

                updateListOfThings(  [ ...listOfCoolThangs , newThang  ]  )

        }

    //// js 

    return(<div>


        <h1>React Forms</h1>

        ----------------
        <form onSubmit={ handleSubmit } >

            <input />

                <br/><br/>

            <input type="submit" />

        </form>
        ----------------
        <ul>
            <h4>Stuff From The Form - Listed</h4>
            { 
                listOfCoolThangs.map(  
                    ( eachThingWeMap )=>{  return <h6>{eachThingWeMap}</h6>  }  
                ) 
            }
        </ul>


    </div>)
}
export default ReactForms








/*


    <form onSubmit={ console.log } >

        <input />

            <br/><br/>

        <input type="submit" />

        <button type="submit"> submit </button>

    </form>


*/