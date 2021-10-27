import React, { Component } from 'react'
import axios from 'axios'

export default class Parks extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: [],
            loading: true,
            error: false
        }
    }

    componentDidMount() {
        fetch("https://trail-find.herokuapp.com/")
        .then(response => response.json())
        .then(data => {
            this.setState({
                parks: data,
                loading: false
            })
        })
        .catch(error => {
            console.log("Error getting parks ", error)
            this.setState({
                error: true,
                loading: false
            })
        })
    }

    renderParks() {
        const parksHtml = this.state.parks.map(parks => (
            <div className="parks-wrapper" key={parks.id}>
                <h3>{parks.name}</h3>
                <p>${parks.price.toFixed(2)}</p>
            </div>
    ))

    return parksHtml
    }

    render() {
        if (this.state.loading) {
            return (
                <div className='parks-page-wrapper'>
                    <h2>Parks</h2>
                    <div className='parks-wrapper'>
                        <div className="loading">Loading...</div>
                    </div>
                </div>
            )
        }

        else if (this.state.error) {
            return (
                <div className='parks-page-wrapper'>
                    <h2>Parks</h2>
                    <div className='parks-wrapper'>
                      <div className="error">An error occured... .</div>
                    </div>
                </div>
            )
        }

        else {
            return (
                <div className='parks-page-wrapper'>
                    <h2>Parks</h2>
                    <div className="parks-wrapper">
                        {this.renderParks()}
                    </div>
                </div>
            )
        }
    }
}