import { Component, type ReactNode } from "react";
import { AlertTriangle } from "lucide-react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  message: string;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, message: "" };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, message: error.message };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    if (import.meta.env.DEV) {
      console.error("[ErrorBoundary]", error, info);
    }
  }

  handleReset = () => {
    this.setState({ hasError: false, message: "" });
    window.location.href = "/";
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;

      return (
        <div className="min-h-screen bg-background flex items-center justify-center px-4">
          <div className="flex flex-col items-center text-center gap-5 max-w-sm">
            <div className="w-14 h-14 rounded-2xl bg-destructive/10 border border-destructive/30 flex items-center justify-center">
              <AlertTriangle size={24} className="text-destructive" />
            </div>
            <div>
              <h2 className="text-white font-bold text-xl mb-2">
                Something went wrong
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                An unexpected error occurred. Try going back to the home page.
              </p>
            </div>
            <button
              onClick={this.handleReset}
              className="px-6 py-2.5 rounded-xl bg-primary hover:bg-cta-hover text-white font-semibold text-sm transition-colors cursor-pointer">
              Back to Home
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
