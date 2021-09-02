import React, {useState, useEffect} from 'react'
import {TextField, Typography, Grid, MenuItem} from '@material-ui/core'; 
import useStyles from './SearchCompStyles';
import languageOptions  from '../../lib/languageOptions';
import Results from './Results/Results';
const SearchComponent = ({searchWord}) => {
    const classes = useStyles();
    const [word, setWord] = useState("hai");
    const [lang, setLang] = useState("en");
    const [searchResult, setSearchResult] = useState([]);

    useEffect(()=>{
        async function getSearchResult(){
            const results = await searchWord(word, lang);
            setSearchResult(results);
            console.log(results);
        }
        if(word !== "" && lang !== ""){
            getSearchResult();
        }
        if(word === ""){
            setSearchResult([]);
        }
       
    }, [word, lang, searchWord])
    return (
        <div>
            <Grid container display="flex" direction="column" justifyContent="center" alignItems="center">
                <p className={classes.title}><span>{word ? word : 'Word Hunt'}</span></p>
                <Grid className={classes.paper} container spacing={8}>
                    <Grid item xs={12} sm={6} lg={3}>
                        <TextField fullWidth label="Search" placeholder={'Search for any word'}value={word} onChange={(event)=>setWord(event.target.value)}>Search.....</TextField>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                    <TextField
                        fullWidth
                        id="language"
                        select
                        color="primary"
                        label="Language"
                        value={lang}
                        onChange={(event)=>setLang(event.target.value)}
                        helperText="Please select the language"
                    >
                    {languageOptions.map((option) => (
                        <MenuItem key={option.label} value={option.label}>
                        {option.value}
                        </MenuItem>
                    ))}
                    </TextField>
                    </Grid>
                </Grid>
                {
                    searchResult === undefined ?
                    <Typography variant="h4" className={classes.displayText} style={{color: "red"}}>Couldn't get any results for the word {word}</Typography>
                    :
                    searchResult.length > 0 ?
                    <Results result={searchResult} language={lang}/>
                    :
                    <Typography variant="h4" className={classes.displayText}>Start by searching for a word</Typography>
                }
                
            </Grid>
           

        </div>
    )
}

export default SearchComponent
