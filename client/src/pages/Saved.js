// Importing necessary components
import React, { Component } from "react";
import MainContainer from "../components/MainContainer/mainContainer.js";
import Nav from "../components/Nav/nav.js";
import Jumbotron from "../components/Jumbotron/jumbotron.js";
import SubContainer from "../components/SubContainer/subContainer.js";
import SavedCard from "../components/SavedCard/savedCard.js";
import API from "../utils/API.js";

// State
class Saved extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.displaySavedBooks();
  }

  displaySavedBooks = () => {
    console.log("rendered saved books from database");
    API.savedBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };

  // When delete button clicked
  deleteBtnClickHandle = id => {
    API.deleteBook(id)
      .then(res => this.displaySavedBooks())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <MainContainer fluid>
        <Nav />
        <Jumbotron />
        {this.state.books.length ? (
          <SubContainer>
            <h2>Saved Books</h2>
            {this.state.books.map(oneSavedBook => (
              <SavedCard
              key={oneSavedBook._id}
                id={oneSavedBook._id}
                title={oneSavedBook.title}
                authors={oneSavedBook.authors}
                image={oneSavedBook.image}
                description={oneSavedBook.description}
                link={oneSavedBook.link}
                deleteBtnClickHandle={this.deleteBtnClickHandle}
              />
            ))}
          </SubContainer>
        ) : (
            <SubContainer><h2>There are no books saved</h2></SubContainer>
          )}
      </MainContainer>
    );
  }
}

export default Saved;