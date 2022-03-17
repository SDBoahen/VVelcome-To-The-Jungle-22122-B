import BranchesBelow from "./BranchesBelow"




function TreeTop (){

    //// js

        const ringTheBell=( yourRequest )=>{

            console.log( " 🎶🎶🎶🔔🎶🎶🎶 " )
            console.log( "This Person wants: " , yourRequest )

        }

    //// js

    return(<div>

        <h1> 🌳🌳Tree🔔Top🌳🌳 </h1>

            <br/><br/>

        < BranchesBelow 

            ringTheBellFromBelow={ ringTheBell }  

        />
        
    </div>)

}
export default TreeTop


/*

    < TreeTop />
    L> < BranchesBelow />

    //    🎶🔔🎶    //

*/ 