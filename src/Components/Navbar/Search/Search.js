import React, { Component } from "react";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import axios from "axios";
import ImageResults from "../../image-results/ImageResults";
import { Button } from "reactstrap";

class Search extends Component {
  state = {
    searchText: "",
    amount: 10,
    apiUrl: "https://pixabay.com/api/",
    apiKey: "15794997-e34a19590a236d2cdfa77f508",
    images: [],
  };
  onTextChange = (e) => {
    e.preventDefault();
    const val = this.state.searchText;
    this.setState({ [e.target.name]: val }, () => {
      if (val === "") {
        this.setState({ images: [] });
      } else {
        axios
          .get(
            `${this.state.apiUrl}?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`
          )
          .then((res) => this.setState({ images: res.data.hits }))
          .catch((err) => console.log(err));
      }
    });
  };
  onSearchChange = (e, index, value) => {
    this.setState({ searchText: e.target.value });
    console.log(this.state.searchText);
  };

  onAmountChange = (e, index, value) => {
    this.setState({ amount: value });
  };
  render() {
    return (
      <div>
        <div className="d-flex justify-content-center">
          <TextField
            name="searchText"
            value={this.state.searchText}
            onChange={this.onSearchChange}
            floatingLabelText="Type what to Search"
          />
          <SelectField
            name="amount"
            floatingLabelText="Number of Images"
            value={this.state.amount}
            onChange={this.onAmountChange}
          >
            <MenuItem value={5} primaryText="5" />
            <MenuItem value={10} primaryText="10" />
            <MenuItem value={15} primaryText="15" />
            <MenuItem value={30} primaryText="30" />
            <MenuItem value={50} primaryText="50" />
          </SelectField>
        </div>

        <div className="text-center">
          <Button
            outline
            color="secondary"
            size="lg"
            onClick={this.onTextChange}
          >
            Search
          </Button>
        </div>
        <br />
        {this.state.images.length > 0 ? (
          <ImageResults images={this.state.images} />
        ) : null}
      </div>
    );
  }
}

export default Search;
