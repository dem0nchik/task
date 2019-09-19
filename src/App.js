import React from 'react';
import { connect } from 'react-redux';
import { getPosts, filterPosts } from './actions/actionsCreator';
import Grid from '@material-ui/core/Grid'
import Article from './components/Article/Article';
import Filters from './components/Filters/Filters';

class App extends React.Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const { sortedData } = this.props.posts;
    return (
      <div>
        {sortedData &&
          <Grid container style={{padding: 20}} direction="column" >
            <Filters filterPosts={this.props.filterPosts}/>
            { sortedData.map((el, i) => (
                <Grid style={{padding: 5}} key={i} item xs={12} md={6} lg={8}>
                    <Article data={el}/>
                </Grid>
                )
              )
            }
          </Grid>
        }
      </div>
    )
  }
}

export default connect(
  state => ({
    posts: state,
  }),
  { getPosts, filterPosts },
)(App);
