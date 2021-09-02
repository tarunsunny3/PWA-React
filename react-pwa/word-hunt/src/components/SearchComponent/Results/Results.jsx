import React from 'react'
import './Results.css';
const Results = ({result, language}) => {
    return (
        <div>
            {
                result[0] && language === "en" &&
                (
                    <>
                    <audio style={{width: "100%"}} className="audio" src={result[0] && result[0].phonetics[0] && result[0].phonetics[0].audio} controls>
                        Your Browser doesn't support audio
                    </audio>
                 </>
                )
            }
            {
            result.map((res)=>(
                res.meanings.map((item, index)=>(
                    
                    <div style={{ maxWidth: "60vw",  marginBottom: "5%", overflowX: "scroll", scrollbarWidth: "thin", padding: "20px 10px", backgroundColor: "#ffffff", color: "blue"}} key={index}>
                    <p>Part - {item.partOfSpeech}</p>
                    {
                    item.definitions.map((def, key)=>(
                       <div key={key}>
                       <p>{def.definition}</p>
                       <hr></hr>
                       {
                           def.example &&
                           (
                               <b>Example: {def.example}</b>
                           )
                       }
                       {
                           def.synonyms && def.synonyms.length > 0 &&
                           (
                               <>
                               <hr></hr>
                               <b>Synonyms: {def.synonyms.map((synonym)=>(
                                   <>
                                  {synonym},&nbsp;
                                  </>
                               ))}
                               </b>
                               </>
                           )
                       }
                       </div>
                   ))
                    }
                   </div>
                ))
            ))
            }
        </div>
    )
}

export default Results
