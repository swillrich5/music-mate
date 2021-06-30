import React from 'react';
import { Link } from 'react-router-dom';
import Spinner from './Spinner';

const SearchArtistsResults = (props) => {

    console.log(props);

    if (props.loading) {
        return <Spinner />
    } else {
        return (
            <div className="row">
                {props.artists.map(artist =>
                    <div key={artist.id} className='col-lg-4 col-md-6 col-sm-12 justify-content-around'>
                        <div className="card mb-3">
                            <div className="card-body">
                                <div className='row'>
                                    <img className="pl-4 col-5" src={artist.thumbnail.path + '/portrait_small.jpg'} alt="" />
                                    <h5 className="card-title col-7 mt-2 pl-0">{artist.name}</h5>
                                </div>
                                {/* <p className="card-subtitle scroll mb-2">{character.description}</p> */}
                                <Link to={`/artist/${artist.id}`} className='btn btn-dark btn-sm my-2'>More</Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default SearchArtistsResults;