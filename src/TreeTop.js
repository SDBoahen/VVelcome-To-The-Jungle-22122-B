import BranchesBelow from "./BranchesBelow"




function TreeTop (){

    //// js

        const ringTheBell=( yourRequest )=>{

            console.log( " πΆπΆπΆππΆπΆπΆ " )
            console.log( "This Person wants: " , yourRequest )

        }

    //// js

    return(<div>

        <h1> π³π³TreeπTopπ³π³ </h1>

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

    //    πΆππΆ    //

*/ 