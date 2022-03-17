



function CoolButton( props ){  // props: { someCoolText: '🔥COOL🔥', onClickButItsAProp: ƒ }

    
    //// js

        console.log( "CoolButton( props ) : " , props )  //

    //// js

    return(<div>

        <h1>🔥😎🆒 Cool Button! 🆒😎🔥</h1>

        <button onClick={ props.onClickButItsAProp } > { props.someCoolText } </button>

    </div>)

}
export default CoolButton






//  <button> 🆒😎🔥SuperCOOL!!!! (But in a Component)🔥😏🆒</button>