

    // props = {  }

function BranchesBelow ({ ringTheBellFromBelow }){  //  ringTheBellFromBelow: ƒ


    //// js

        console.log( "--------" )  //
            // console.log( "BranchesBelow ( ringTheBellFromBelow ) : " , ringTheBellFromBelow )  //
        console.log( "--------" )  //

    //// js

    return(<div>

        <h1 onClick={ ringTheBellFromBelow } > 
            🌿 BranchesBelow - SynthEvent 🌿 
        </h1>

            <br/>

        <h1 onClick={  ( synthEvent )=>{ ringTheBellFromBelow( ) }  } > 
            🌿 BranchesBelow - No SynthEvent - BUT - undefined 🌿
        </h1>

            <br/>

        <h1 onClick={  ()=>{ ringTheBellFromBelow( "Water Please!" ) }  } > 
            🌿 BranchesBelow - No SynthEvent - With Actual Data Passed Up :) 🌿
        </h1>
        
    </div>)

}
export default BranchesBelow