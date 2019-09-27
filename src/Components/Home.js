import React from 'react';
import {Hero} from "./Hero";
import {Banner} from "./Banner";
import {NavLink} from "react-router-dom";

export const Home = () => {
    return (
        <div>
            <Hero>
                <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
                    <NavLink to="/rooms" className="btn-primary">
                        our rooms
                    </NavLink>
                </Banner>
            </Hero>
        </div>
    )
}