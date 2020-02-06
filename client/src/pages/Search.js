import React, { Component } from "react";
import MainContainer from "../components/MainContainer/mainContainer.js";
import Nav from "../components/Nav/nav.js";
import Jumbotron from "../components/Jumbotron/jumbotron.js";
import { Input, SearchBtn } from "../components/Form/form.js";
import SubContainer from "../components/SubContainer/subContainer.js";
import ResultCard from "../components/ResultCard/resultCard.js";
import API from "../utils/API.js";

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
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  searchBtnClickHandle = event => {
    event.preventDefault();
    if (this.state.searchWord) {
      this.searchBooks();
    }
  };

  saveBtnClickHandle = id => {
    let currentBook = this.state.books
      .find(currentBook => (currentBook.id === id));
    console.log(currentBook);
    API.saveBook({
      id: currentBook.id,
      title: currentBook.volumeInfo.title,
      link: currentBook.volumeInfo.previewLink,
      authors: currentBook.volumeInfo.authors,
      image: "http://books.google.com/books/content?id=" + currentBook.id + "&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      description: currentBook.volumeInfo.description
    })
      .then(res => this.searchBooks())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <MainContainer fluid>
        <Nav />
        <Jumbotron />
        <form>
          <Input
            value={this.state.searchWord}
            onChange={this.handleInputChange}
            name="searchWord"
            placeholder="Please enter a book title."
          />
          <SearchBtn onClick={this.searchBtnClickHandle}>
            Search</SearchBtn>
          <br /><br />
        </form>
        {this.state.books.length ? (
          <SubContainer>
            <h5>Results</h5>
            {this.state.books.map(item => (
              <ResultCard
                id={item.id}
                title={item.volumeInfo.title}
                authors={item.volumeInfo.authors}
                //image={item.volumeInfo.imageLinks.thumbnail}
                image={"http://books.google.com/books/content?id=" + item.id + "&printsec=frontcover&img=1&zoom=1&source=gbs_api"}
                description={item.volumeInfo.description}
                link={item.volumeInfo.previewLink}
                saveBtnClickHandle={this.saveBtnClickHandle}
              />
            ))}
          </SubContainer>
        ) : (
            <SubContainer><h5>No results to display</h5></SubContainer>
          )}
      </MainContainer>
    );
  }
}

export default Search;