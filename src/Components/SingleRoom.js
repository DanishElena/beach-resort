import React from 'react';
import defaultBcg from '../images/room-1.jpeg'
import {RoomContext} from "../Context";
import {NavLink} from "react-router-dom";
import {Banner} from "./Banner";
import StyledHero from "./StyledHero";


export class SingleRoom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        }

    }

    static contextType = RoomContext;

    // componentDidMount() {
    // }

    render() {
        const {getRoom} = this.context
        const room = getRoom(this.state.slug)
        if (!room) {
            return <div className="error">
                <h3>No such room</h3>
                <NavLink to="/rooms">back to rooms</NavLink>
            </div>
        }
        const {
            name,
            description,
            capacity,
            size,
            price,
            extras,
            breakfast,
            pets,
            images
        } = room;
        const [mainImg, ...defaultImg] = images
        return (
            <>
                <StyledHero img={mainImg || this.state.defaultBcg}>
                    <Banner title={`${name} room`}>
                        <NavLink to="/rooms/" className='btn-primary'>back to rooms</NavLink>
                    </Banner>
                </StyledHero>
                <section className='single-room'>
                    <div className="single-room-images">
                        {images.map((item, index) => {
                            return <img key={index} src={item} alt={name}/>
                        })}
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>details</h3>
                            <p>{description}</p>
                        </article>
                    </div>
                </section>
            </>
        )
    }
}