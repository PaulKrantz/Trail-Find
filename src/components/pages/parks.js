import React, { Component } from 'react'

export default class Parks extends Component {
    constructor(props) {
        super(props)

        this.state = {
            reviews: [],
            loading: true,
            error: false
        }
    }

    componentDidMount() {
        fetch("https://trail-find-api.herokuapp.com/reviews/get")
        .then(response => response.json())
        .then(data => {
            this.setState({
                reviews: data,
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

    renderReviews() {
        const reviewsHtml = this.state.reviews.map(reviews => (
            // class name
            <div className="parks-wrapper" key={reviews.id}>
                <h3>{reviews.name}</h3>
                <p>{reviews.reviews}</p>
            </div>
    ))

        return reviewsHtml
    }

    render() {
        if (this.state.loading) {
            return (
                // class name
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
                        {this.renderReviews()}
                    </div>
                </div>
            )
        }
    }
}