class Quote extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {
      quote: '',
      author: ''
    }
    
    this.url = "https://talaikis.com/api/quotes/random/"
    
    this.next = this.next.bind(this)
  }
  
  componentDidMount() {  
    this.getQuote(this.url)
  }
  
  getQuote(url) {
      fetch(url)
       .then(response => {
        console.log(response)
        return response.json();
      })
      .then(quote => {
        this.setState({
          quote: quote.quote,
          author: quote.author
        });
        console.log(quote)
    })
  }
  
  next() {
    this.getQuote(this.url)
  }
             
  render() {
     return (
        <div className="card" id="quote-box">
         <div className="card-body">
           <center><h1 id="text">"{this.state.quote ? this.state.quote : "Loading"}"</h1></center><br />
           <h4 id="author"> - {this.state.author ? this.state.author : "Loading"}</h4><br />
           <a href="https://twitter.com/intent/tweet?text=Hello%20world"
              data-size="large" className="btn btn-primary" id="tweet-quote">Tweet It</a>
           <button className="btn btn-secondary" id="new-quote" onClick={this.next}>Next</button>
         </div>
        </div>
     )
  }
}

React.render(<Quote />, document.getElementById("app"))
