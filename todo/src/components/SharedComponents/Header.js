import React, { Component } from 'react'
import { connect } from 'react-redux'
import Moment from 'react-moment'

import { HeaderContainer, StatusContainer, DateContainer, QuoteContainer  } from './HeaderStyles'

class Header extends Component {
  state = {
    quote: 'Use the force, Harry',
    author: 'Gandolph'
  }

  getQuote = () => {
    fetch('https://quotes.rest/qod.json')
      .then(response => response.json())
      .then(data => (
        this.setState({
          quote: data.contents.quotes[0].quote,
          author: data.contents.quotes[0].author
        })
      ))
      .catch(error => console.log(error))
  }

  componentDidMount() {
    // this.getQuote()
  }

  render() {
    return (
      <>
      <HeaderContainer>
        <StatusContainer>
          <DateContainer>
            <Moment className="title" format="dddd, Do" />
            <Moment className="tagline" format="MMMM" />
          </DateContainer>
          <div className="status">
            {this.props.todos.filter(task => !task.completed).length} Tasks
          </div>
        </StatusContainer>
        <QuoteContainer>
          <q className="quote-text">{this.state.quote}</q>
          <div className="quote-author">{this.state.author}</div>
        </QuoteContainer> 
      </HeaderContainer>

      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps,{})(Header)