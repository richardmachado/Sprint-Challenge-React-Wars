import React, {useState, useEffect} from "react";
import axios from "axios";
import StarWarCards from "./components/StarWarCard"
import styled from 'styled-components';

const ReactWars = styled.h1`
text-align: center;
font-size: 4rem;
animation:blinkingText 2s infinite;
}
@keyframes blinkingText{
    0%{     color: #000;    }
    49%{    color: #f77402; }
    50%{    color: orange; }
    99%{    color: transparent;  }
    100%{   color: #000;    }
}

`

function StarWarsList (){
    const [cards, setCards] = useState([]);
    

    useEffect(() => {
        axios.get("https://swapi.co/api/people/")
        .then(response => {
            const charData = response.data.results;
            console.log(response.data.results)
           
            setCards(charData);
        })
        .catch(error => {
            console.log('Sorry no response', error)
        })
    }, []);
    
    // /dependency array*/


    return(
        <div className = "container">
            <div className = "people">
              <ReactWars>React Wars</ReactWars>
            {cards.map((card, index)=>{
                return(
                    <StarWarCards
                    key={index}
                    name={card.name}
                    birth_year={card.birth_year}
                    eye_color={card.eye_color}
                    gender={card.gender}
                    weight={card.mass}
                    skin={card.skin_color}
                    height={card.height}


                    />
                )
            })

            }

            </div>

    
        </div>
    )
}
export default StarWarsList