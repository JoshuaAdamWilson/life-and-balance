import React, { useState, useEffect, useContext } from 'react';
import './Events.css';
import EventsPicture from '../images/events.jpg';
import axios from "axios"
import { Context } from "../../context/Context"
import ReactModal from "react-modal"



const Events = () => {
    const [ searchEvent, setSearchEvent ] = useState('')
    const [ eventsList, setEventsList ] = useState([])
    const [ foundEvents, setFoundEvents ] = useState(eventsList)
    const PF = "https://life-and-balance.herokuapp.com/images/"
    const { user } = useContext(Context)
    const path = location.pathname.split("/")[1]

    const filterEvents = (e) => {
        const keyword = e.target.value;
        setSearchEvent(keyword)
        if (keyword !== '') {
            const results = eventsList.filter(event => {
                return event.title.toLowerCase().includes(keyword.toLowerCase())
            })
            setFoundEvents(results)
        } else {
            setFoundEvents(eventsList)
        }
    }

    useEffect(() => {
        const fetchEvents = async () => {
            const response = await axios.get("https://life-and-balance.herokuapp.com/api/events")
            setEventsList(response.data)
            setFoundEvents(response.data)
        }
        fetchEvents()
    }, [])

    function validURL(str) {
        var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
            '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
        return !!pattern.test(str);
    }

    const handleDelete = async (event) => {
        console.log(event.target.id)
        try {
            await axios.delete(`https://life-and-balance.herokuapp.com/api/events/${event.target.id}`, { data: { username: user.username }})
            window.location.replace("/events")
        } catch (error) {
            console.log(error)
        }
    }

    ///////////////////////////////////////////////
    //  Modal
    ///////////////////////////////////////

    const [ modalIsOpen, setIsOpen ] = useState(false)
    const [ eventTitle, setEventTitle ] = useState("")
    const [ dateTime, setDateTime ] = useState(0)
    const [ geoLocation, setGeoLocation ] = useState("")
    const [ price, setPrice ] = useState("")
    const [ eventId, setEventId ] = useState()

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        },
    }

    ReactModal.setAppElement('#root');

    const openModal = async (e) => {
        const response = await axios.get(`https://life-and-balance.herokuapp.com/api/events/${e.target.id}`, { data: { username: user.username }})
        setIsOpen(true)
        setEventTitle(response.data.title)
        setGeoLocation(response.data.location)
        setPrice(response.data.price)
        setEventId(response.data._id)
    }

    const updateEvent = async (e) => {
        try {
            await axios.put(`https://life-and-balance.herokuapp.com/api/events/${eventId}`, { 
                username: user.username,
                title: eventTitle,
                dateTime,
                location: geoLocation,
                price
            })
            window.location.reload()
        } catch (error) {
            console.log(error)
        }
    }

    /////////////////////////////////////////////
    // RETURN ////////////////////////////////////////
    ///////////////////////////////////////////

    return (
        <div id="events" className='events'>
            <img src={EventsPicture} alt="events" className="events-picture" />
            <div className="events-section">
                <div className="events-intro">
                    <h2>Stop by here for News and Information</h2>
                    <p>Learn about what we have happening or get suggestions for events, workshops or retreats to enhance your life/journey.</p>
                </div>
                <div className="events-search">
                    <i className="fas fa-search"></i>
                    <input 
                        className="search-input"
                        type="search" 
                        placeholder="Search Title..." 
                        value={searchEvent} 
                        onChange={filterEvents} 
                    />
                </div>
                <ul className="events-list">
                    {foundEvents && foundEvents.length > 0 ? (
                        foundEvents
                            .sort((a, b) => b.dateTime > a.dateTime ? -1: 1)
                            .map((event) => {
                                return <li key={event._id} className="event-post">
                                    {event.username === user?.username && (
                                        <div className="icons">
                                            <i className="event-icon far fa-edit" id={event._id} onClick={openModal}></i>
                                            <i className="event-icon far fa-trash-alt" id={event._id} onClick={handleDelete}></i>
                                        </div>
                                    )}
                                    <img className="event-post-picture" src={event.photo} alt="event" />
                                    <h2 className="event-post-title">{event.title}</h2>
                                    <p className="host">Hosted by:<br />
                                        <strong className="indent">
                                            {event.username}</strong></p>
                                    {new Date(event.dateTime) > Date.now() ? (
                                        <p className="event-date">Date:<br />
                                            <strong className="indent">
                                                {new Date(event.dateTime).toLocaleString()}</strong></p>
                                    ) : (
                                        <p className="event-date">Date:<br />
                                            <strong className="indent happening">
                                                HAPPENING NOW</strong></p>
                                    )}
                                    
                                    {validURL(event.location) ? (
                                        <p className="event-location">Location:<br />
                                            <a href={event.location} className="indent">
                                                {event.location}</a></p>
                                    ) : (
                                        <p className="event-location">Location:<br />
                                            <strong className="indent">
                                                {event.location}</strong></p>
                                    )}
                                    {event.price > 0 ? (
                                        <p className="event-location">Price:<br />
                                            <strong className="indent">
                                                $ {event.price}</strong></p>
                                    ) : (
                                        <p className="event-location">Price:<br />
                                            <strong className="indent">
                                                Free</strong></p>
                                    )}
                                        
                                </li>
                            })
                        ) : (
                            <h2>No Current Events</h2>
                        )
                    }
                </ul>

    {/* ////////////////////// ////////// */}
    {/* // Modal /////////////////////////////////// */}
    {/* /////////////////////////////////  */}

                <ReactModal
                    isOpen={modalIsOpen}
                    // onAfterOpen={afterOpenModal}
                    // onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Event Modal"
                >
                    <h2>Update Event</h2>
                    <input 
                        type="text"
                        placeholder="Title"
                        className="write-input-title"
                        autoFocus={true}
                        value={eventTitle}
                        onChange={e => setEventTitle(e.target.value)}
                    />
                    <br />
                    <input
                        type="datetime-local" 
                        onChange={e => setDateTime(e.target.value)}
                    ></input>
                    <br />
                    <input 
                        type="text"
                        placeholder="Location"
                        className="write-input-title"
                        value={geoLocation}
                        onChange={e => setGeoLocation(e.target.value)}
                    />
                    <br />
                    <input 
                        type="number"
                        placeholder="Price"
                        className="write-input-title"
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                    />
                    <br />
                    <button className="write-submit" type="submit" onClick={updateEvent}>Update</button>
                    <button className="write-submit" type="submit" onClick={() => setIsOpen(false)}>Close</button>
                </ReactModal>
            </div>
        </div>
    )
}

export default Events;