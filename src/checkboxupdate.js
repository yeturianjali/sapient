import React,{Component} from 'react';



class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayCategory: "all",
      products: props.products,
      productCategories: props.productCategories
    };
    this.setCategory = this.setCategory.bind(this);
  }
  setCategory(category) {
    this.setState({
      displayCategory: category
    });
  }
  render() {
    <></>
	//return <UI setCategory={this.setCategory} state={this.state} />;
  }
}
