import { Component, ReactNode, ErrorInfo } from 'react';
import ErrorPage from '../../../components/ErrorPage/ErrorPage';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError(__: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    const { state, props } = this;

    if (state.hasError) {
      return <ErrorPage />;
    }

    return props.children;
  }
}

export default ErrorBoundary;
