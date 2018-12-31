import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class Quote extends Component{
    constructor(props){
        super(props);
        this.state={
            quotes:{
                name:"",
                quote:"",
                color:""
            }
        }
        this.generateQuote = this.generateQuote.bind(this);
    }

    componentDidMount(){
        this.setState({
            quote: "Design is not just what it looks like and feels like. Design is how it works.",
            name: "Steve Jobs",
            color: "palevioletred"
        })
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
        
        var colors=["palevioletred", "#fe4a49", "#2ab7ca", "#fed766", "#851e3e", "#f4b6c2", "#03396c", "#005b96",  "#6497b1"]
        var quoteId = Math.floor(Math.random()*(quotes.length));

        this.setState({
           quote : quotes[quoteId].quote,
           name : quotes[quoteId].attrib,
           color: colors[quoteId]
        }) 
    }

    render(){

        const styling = {
            buttonStyle: {
                background: this.state.color,
                width: '20vw',
                color: '#fff',
                borderRadius: '3px',
                border: 0,
                marginLeft: '20vw'
            },
            containerStyle:{
                margin: 0,
                padding: 0,
                border: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: this.state.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            },
            boxStyle:{
                backgroundColor: '#fff',
                borderRadius: '3px',
                width: '60vw',
                padding: '10vw',
            }
            
        }
       const { buttonStyle, containerStyle, boxStyle } = styling;
        return(
            <div style={containerStyle}>
                <div style={boxStyle}>
                    <div >
                        <h1 style={{color: this.state.color}}>{this.state.quote}</h1>
                    </div>
                    <div className="name">
                        <p style={{color: this.state.color}}>{this.state.name}</p>
                    </div>
                    <div className="tweet">
                    
                        <button style={buttonStyle} onClick={this.generateQuote}>New quote</button>
                    </div>
                </div>
            </div>
        )
    }
}

const styles = StyleSheet.create({
    box:{
        
    },

})

export default Quote;