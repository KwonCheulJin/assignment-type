import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import './reset.css'
import './scss/style.scss'
import Header from './components/Header';
import Main from './components/Main';
import ViewContents from './components/ViewContents';
import Modal from './components/Modal'
import LodingIndicator from './components/contents/LodingIndicator';



const App = ({ open, page }) => {

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          {open && <Modal />}
          <Header />
          <Main />
        </Route>
        <Route>
          <Header />
          <ViewContents page={page} />
        </Route>
      </Switch>
    </div>
  );
}


const mapStateToProps = ({ modal, fetchPage }) => {
  return {
    open: modal.open,
    page: fetchPage.page
  }
}

export default connect(mapStateToProps)(App);
