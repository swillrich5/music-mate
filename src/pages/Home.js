import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import artists from '../images/artists.jpg';

const Home = () => {

    return (
        <div className="container space-background">
            <div className="jumbotron">
                <h2 className="text-center">Welcome to Music Mate</h2>
                <h4 className="text-center">Your Music Media Archive</h4>
                <p className="lead">Catalog all of your vinyl, CD, and tape media in one place.  Create a list
                    of the albums and singles you'd like to add to your music collection.
                </p>
                <p className="lead mt-3 mb-5">My code repo for this app can be found in my <a  className="text-primary" href="https://github.com/swillrich5/music-mate">GitHub</a>.  Also, here's a link to my <a className="text-primary" href="https://www.scottwillrich.com/">portfolio site</a>.
                </p>
                <Link className="row justify-content-center" to='/artists'>
                    <div className="card col-md-12 col-lg-3 justify-content-center shadow-lg bg-light rounded">
                        <img className="artist-img card-img-top mx-auto pt-3" src={artists} alt="artists"/>
                        <div className="card-body">
                            <p className="card-text text-center">Artists</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>


    )

}

export default Home;