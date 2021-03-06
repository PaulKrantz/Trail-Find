import React, { Component } from 'react';

export default class Reviews extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nameInput: "",
            reviewInput: "",
            loading: false,
            error: false
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault()

        this.setState({
            loading: true,
            error: false
        })

        fetch("https://trail-find-api.herokuapp.com/reviews/add", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                name: this.state.nameInput,
                reviews: parseFloat(this.state.reviewInput)
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.id) {
                this.props.history.push("/reviews")
            }
        })
        .catch(error => {
           // console.log("Error adding review ", error)
           console.log('Test from handle submit');

            this.setState({
                loading: false,
                error: true
            })
        })
    }

    render() {
        return (
            <div className='add-item-wrapper'>
                <h2>Submit a Review</h2>

                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Park Name"
                        name="nameInput" 
                        value={this.state.nameInput}
                        onChange={this.handleChange}
                    />

                    <input 
                        type="text" 
                        placeholder="Park Review"
                        name="parkreviewInput" 
                        value={this.state.parkreviewInput}
                        onChange={this.handleChange}
                    />

                    <button type="submit" disabled={this.state.loading}>Submit Review</button>
                </form>

                {this.state.loading ? <div className="loading">Submitting...</div> : null}

                {this.state.error ? <div className="error">An error occured... Please try again later.</div> : null}
            </div>
        )
    }
}