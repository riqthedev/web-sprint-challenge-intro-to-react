// Write your Character component here
import React from "react";
import styled from "styled-components";

const StyledChar = styled.div `
display; flex;
flex-direction: row;
width:100%
justify-content: space-between;
`
const Styledh1 = styled.h1 `

color: white;
border: 4px solid green;
padding: 1px;
font-size: 14px;
font-color: white;

`



const Character = (props) => {
const {character} = props;





    

    return (
            <StyledChar>
                
        <div className="character-list">
         
        {character.map(char => {return <Styledh1><h1 key={char.name}>{char.name} 
           <p>{char.birth_year}</p></h1></Styledh1>})}
           
        
      
    </div>
    </StyledChar>
    )
}





export default Character