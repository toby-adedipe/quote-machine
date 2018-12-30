import React, { Component } from 'react';

class Quote extends Component{
    constructor(props){
        super(props);
        this.state={
            quotes:{
                name:"",
                quote:""
            }
        }
        this.generateQuote = this.generateQuote.bind(this);
    }
    generateQuote(){
        var quotes = [{
            "attrib": "Steve Jobs",
            "quote": "Design is not just what it looks like and feels like. Design is how it works."
          }, {
            "attrib": "Steve Jobs",
            "quote": "Innovation distinguishes between a leader and a follower."
          }, {
            "attrib": "Albert Einstein",
            "quote": "Reality is merely an illusion, albeit a very persistent one."
          }, {
            "attrib": "Albert Einstein",
            "quote": "If you can't explain it simply, you don't understand it well enough."
          }, {
            "attrib": "Albert Einstein",
            "quote": "Strive not to be a success, but rather to be of value."
          }, {
            "attrib": "Steve Jobs",
            "quote": "Your time is limited, so don’t waste it living someone else’s life."
          }, {
            "attrib": "Bill Gates",
            "quote": "Success is a lousy teacher. It seduces smart people into thinking they can't lose."
          }, {
            "attrib": "Albert Einstein",
            "quote": "Science without religion is lame, religion without science is blind."
          }, {
            "attrib": "Henry Ford",
            "quote": "Whether you think you can or you think you can’t, you’re right."
          }];
        

        var quoteId = Math.floor(Math.random()*(quotes.length));
        this.setState({
           quote : quotes[quoteId].quote,
           name : quotes[quoteId].attrib
        }) 
    }

    render(){
       
        return(
            <div>
                <div className="container">
                    <div className="quote">
                        <h1>{this.state.quote}</h1>
                    </div>
                    <div className="name">
                        <p>{this.state.name}</p>
                    </div>
                    <div className="tweet">
                    
                    <button onClick={this.generateQuote}>New quote</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Quote;