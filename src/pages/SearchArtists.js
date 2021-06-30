import React, { useState } from 'react';
import axios from 'axios';
// import Spinner from "../components/Spinner";
import SearchArtistsResults from '../components/SearchArtistsResults';
import './SearchArtists.css';

const SearchArtists = () => {

    const [artistName, setArtistName] = useState("");
    const [artists, setArtists] = useState([]);
    const [loading, setLoading] = useState(false);
    
    
    const searchArtists = async (e) => {
    
        const TOKEN = 'IdAUSAlVjONIwSPTnimPvVkbNKLyIbZsLPHZhwoQ'; 
        const baseURL = "https://api.discogs.com/database/search?type=artist&token=" + TOKEN + "&artist=" + artistName;
    
        e.preventDefault();
        try {
            const URL = baseURL;
            console.log(URL);
            setLoading(true);
            const res = await axios.get(URL);
            // console.log(res.data);
            console.log(res.data);
            setArtists(res.data.results);
            setLoading(false);
        }
        catch(err) {
            console.log(err);
        }
    }
    
    const artistNameChangeHandler = (e) => {
        setArtistName(e.target.value);
        console.log(e.target.value);
    }

    console.log(artists);
    return (
        <div className="container space-background">
            <div className="jumbotron">
                <div className="row justify-content-center">
                    <form id="search-form" className="col-lg-6 col-md-12">  
                        <h2>Search Artists</h2>
                        <div className="form-group form-inline row ml-5">
                            <label htmlFor="characterName" className="space-right">Artist Name: </label>
                            <input type="text" name={artistName} value={artistName} onChange={artistNameChangeHandler} className="form-control" id="character-name" />
                        </div>
                        <div>
                            <button type="submit" className="btn btn-primary mt-4 mb-4" onClick={searchArtists}>Submit</button>
                        </div>
                    </form>
                </div>
                <SearchArtistsResults artists={artists} loading={loading} />
            </div>
        </div>
    )
}

export default SearchArtists;
