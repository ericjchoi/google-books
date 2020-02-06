import React, { Component } from "react";
import MainContainer from "../components/MainContainer/mainContainer.js";
import Nav from "../components/Nav/nav.js";
import Jumbotron from "../components/Jumbotron/jumbotron.js";
import SubContainer from "../components/SubContainer/subContainer.js";
import SavedCard from "../components/SavedCard/savedCard.js";
import API from "../utils/API.js";

class Saved extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.displaySavedBooks();
  }

  displaySavedBooks = () => {
    API.savedBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };

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
            <h5>Saved Books</h5>
            {this.state.books.map(oneSavedBook => (
              <SavedCard
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
            <SubContainer><h5><i>There are no books saved</i></h5></SubContainer>
          )}
      </MainContainer>
    );
  }
}

export default Saved;