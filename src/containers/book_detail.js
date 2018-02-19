import React , { Component} from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    render() {
        if (!this.props.book) {
            return <div>Select a book to get started.</div>;
        }

        return (
          <div>
              <h3>Detail for:</h3>
              <div>Title: {this.props.book.title}</div>
              <div>Pages: {this.props.book.pages}</div>
          </div>
        );
    }
}

// The glue between React and Redux
function mapStateToProps(state) {
    // Whatever is returned will show up asa props inside of bookList.
    return {
        book: state.activeBook
    };
}

// Promote BookList from a component to a container - it needs to know about this new
// dispatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps)(BookDetail);