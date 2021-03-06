import React, { Component } from 'react';
import Navbar from './Navbar';
import {Switch, Route, Link} from 'react-router-dom';
import MdAddCircleOutline from 'react-icons/lib/md/add-circle-outline';
import Home from '../Home/Home';
import Posts from '../Posts/Posts';
import Categories from '../Categories';
import SpecificPost from '../SpecificPost';
import NewPost from '../NewPost';
import NewComment from '../NewComment';
import EditPost from '../EditPost';
import EditComment from '../EditComment';
import '../../style/App.css';

class App extends Component {
  render() {
    return (
      <div className='container-fluid app-settings'>
        <div className='full-view'>
          <Navbar />
          <div>
            <Switch>
              <Route
                exact path='/'
                component={Home}
              />
              <Route
                exact path='/all'
                component={Posts}
              />
              <Route
                exact path='/categories'
                component={Categories}
              />
              <Route
                exact path='/create-post'
                component={NewPost}
              />
              <Route
                exact path='/:category/:id'
                component={SpecificPost}
              />
              <Route
                exact path='/:category/:id/create-comment'
                component={NewComment}
              />
              <Route
                exact path='/:category/:id/edit-post'
                component={EditPost}
              />
              <Route
                exact path='/:category/:postid/comment=:commentid/edit-comment'
                component={EditComment}
              />
              <Route
                path='/:category'
                component={Posts}
              />
            </Switch>
          </div>
          <div className='text-right fixed-bottom pr-1 pb-1'>
            <Link
              to='/create-post'
                title='Create a post'
            ><MdAddCircleOutline
                size={50}
                className='text-dark'
              />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
