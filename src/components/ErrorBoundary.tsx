import React from 'react';
import { Center, Text } from '@chakra-ui/react';

interface IProps {
  children: any;
}

interface IState {
  error: null | string
}

class ErrorBoundary extends React.Component<IProps, IState> {
  state = {
    error: null,
  };

  componentDidCatch(error: Error) {
    this.setState({ error: error.message });
  }

  render() {
    if (this.state.error) {
      return (
        <Center w="100vw" h="100vh">
          <Text fontSize="4xl">{this.state.error}</Text>
        </Center>
      );
    }
    return this.props.children;

  }
}

export default ErrorBoundary;
