import React from "react";

export default class Reviews extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nameInput: "",
            reviewInput: "",
            loading: false,
            error: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()

        this.setState({
            loading: true,
            error: false
        })

        fetch("https://trail-find.herokuapp.com/reviews/add", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                name: this.state.nameInput,
                price: parseFloat(this.state.priceInput)
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.id) {
                this.props.history.push("/items")
            }
        })
        .catch(error => {
            console.log("Error adding review ", error)

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