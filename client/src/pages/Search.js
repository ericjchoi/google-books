// Importing necessary components
import React, { Component } from "react";
import MainContainer from "../components/MainContainer/mainContainer.js";
import Nav from "../components/Nav/nav.js";
import Jumbotron from "../components/Jumbotron/jumbotron.js";
import { Input, SearchBtn } from "../components/Form/form.js";
import SubContainer from "../components/SubContainer/subContainer.js";
import ResultCard from "../components/ResultCard/resultCard.js";
import API from "../utils/API.js";
import Saved from "./Saved.js";
import NoMatch from "./NoMatch.js";

// State
class Search extends Component {
  state = {
    books: [],
    searchWord: ""
  };

  searchBooks = () => {
    API.queryBooks(this.state.searchWord)
      .then(res => this.setState({
        books: res.data.items,
        searchWord: "",
      }))
      .catch(err => console.log(err)
      );
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When search button clicked
  searchBtnClickHandle = event => {
    event.preventDefault();
    if (this.state.searchWord) {
      this.searchBooks();
    }
  };

  // When save button clicked
  saveBtnClickHandle = ID => {
    let currentBook = this.state.books
      .find(currentBook => (currentBook.id === ID));

    API.saveBook({
      _id: currentBook.id,
      title: currentBook.volumeInfo.title,
      link: currentBook.volumeInfo.previewLink,
      authors: currentBook.volumeInfo.authors,
      image: currentBook.volumeInfo.imageLinks.thumbnail,
      description: currentBook.volumeInfo.description
    })
      .then(res => Saved.displaySavedBooks())
      .catch(err => console.log(err));
  };

  render() {
    if (!this.state.books) return <NoMatch />
    else
      return (
        <MainContainer fluid>
          <Nav />
          <Jumbotron />
          <form>
            <Input
              value={this.state.searchWord}
              onChange={this.handleInputChange}
              name="searchWord"
              placeholder="Please enter search words"
            />
            <SearchBtn onClick={this.searchBtnClickHandle}>
              Search</SearchBtn>
            <br /><br />
          </form>
          {this.state.books.length ? (
            <SubContainer>
              <h2>Searched Result</h2>
              {this.state.books.map(item => (
                <ResultCard
                  key={item.id}
                  id={item.id}
                  title={item.volumeInfo.title}
                  authors={item.volumeInfo.authors}
                  image={item.volumeInfo.imageLinks.thumbnail}
                  description={item.volumeInfo.description}
                  link={item.volumeInfo.previewLink}
                  saveBtnClickHandle={this.saveBtnClickHandle}
                />
              ))}
            </SubContainer>
          ) : (
              <SubContainer><h2>No results to display</h2></SubContainer>
            )}
        </MainContainer>
      );
  }
};

export default Search;
