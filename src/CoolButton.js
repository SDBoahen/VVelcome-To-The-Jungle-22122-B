



function CoolButton( props ){  // props: { someCoolText: 'π₯COOLπ₯', onClickButItsAProp: Ζ }

    
    //// js

        console.log( "CoolButton( props ) : " , props )  //

    //// js

    return(<div>

        <h1>π₯ππ Cool Button! πππ₯</h1>

        <button onClick={ props.onClickButItsAProp } > { props.someCoolText } </button>

    </div>)

}
export default CoolButton






//  <button> πππ₯SuperCOOL!!!! (But in a Component)π₯ππ</button>