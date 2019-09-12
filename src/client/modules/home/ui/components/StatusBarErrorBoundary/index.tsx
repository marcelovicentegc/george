import * as React from "react";
import { NoticeBar } from "antd-mobile";

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

export class StatusBarErrorBoundary extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);

    this.state = {
      hasError: false
    };
  }

  public componentDidCatch(error: Error | null, errorInfo: object) {
    console.log("error: ", error);
    console.log("errorInfo: ", errorInfo);
  }

  public static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="status-bar-wrapper">
          <div className="status-bar">
            <NoticeBar
              icon={null}
              marqueeProps={{
                loop: true,
                text: "Sorry, something went wrong when loading the log data"
              }}
            />
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
