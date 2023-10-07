/* React */
/* Note: mostly code from reactjs.org/docs/error-boundaries.html */
import { Component } from 'react';

export class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error) {
		return { hasError: true };
	}

	componentDidCatch(error, info) {
		console.error('ErrorBoundary caught an error', error, info);
	}

	render() {
		if (this.state.hasError) {
			return <div className="error-boundary spacing-reset">{this.props.message}</div>;
		}

		return this.props.children;
	}
}
