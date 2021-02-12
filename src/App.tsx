import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Container } from '@chakra-ui/react';
import ListEntitiesPage from './pages/ListEntitiesPage';
import EntityDetailsPage from './pages/EntityDetailsPage';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <Container maxWidth="1024px">
      <ErrorBoundary>
        <Router>
          <Switch>
            <Route path="/" exact component={ListEntitiesPage} />
            <Route path="/entity/:entityId" exact component={EntityDetailsPage} />
          </Switch>
        </Router>
      </ErrorBoundary>
    </Container>
  );
}

export default App;
