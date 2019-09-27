import React from 'react';
import {Hero} from "./Hero";
import {Banner} from "./Banner";
import {NavLink} from "react-router-dom";

export const Room = () => {
    return (
        <div>
            <Hero hero="roomsHero">
                <Banner title="our rooms">
                    <NavLink to="/" className="btn-primary">
                        return home
                    </NavLink>
                </Banner>
            </Hero>
        </div>
    )
}