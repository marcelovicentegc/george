import * as React from "react";
import { getTriggerLog } from "../../../../../../server/schema/graphql/Queries.graphql";
import { Query } from "react-apollo";
import { NoticeBar } from "antd-mobile";
import {
  GetGroupIdFromUserIdQueryVariables,
  GetThingsWithTriggerLogQuery,
  GetThingsWithTriggerLogQueryVariables,
} from "../../../../../gql";

interface Props {
  groupId: GetGroupIdFromUserIdQueryVariables;
}

interface State {
  statusMessage: string[];
}

export class StatusBar extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);

    this.state = {
      statusMessage: [],
    };
  }

  public shouldComponentUpdate(_: Props, nextState: State) {
    if (
      this.state.statusMessage.length === nextState.statusMessage.length ||
      (this.state.statusMessage.length !== nextState.statusMessage.length &&
        nextState.statusMessage.length > 3)
    )
      return false;

    return true;
  }

  private setMarqueeText = () => {
    if (this.state.statusMessage && this.state.statusMessage.length > 0) {
      if (this.state.statusMessage.length === 3) {
        return this.state.statusMessage[0]
          .concat(" | ")
          .concat(this.state.statusMessage[1])
          .concat(" | ")
          .concat(this.state.statusMessage[2]);
      } else if (this.state.statusMessage.length === 2) {
        return this.state.statusMessage[0]
          .concat(" | ")
          .concat(this.state.statusMessage[1]);
      } else {
        return this.state.statusMessage[0];
      }
    }
  };

  public render() {
    return (
      <div className="status-bar-wrapper" data-testid="status-bar-wrapper">
        <div className="status-bar" data-testid="status-bar">
          <Query<
            GetThingsWithTriggerLogQuery,
            GetThingsWithTriggerLogQueryVariables
          >
            query={getTriggerLog}
            variables={{ id: this.props.groupId.id }}
          >
            {({ data, loading }) => {
              if (loading) this.setState({ statusMessage: ["Loading..."] });

              console.log("data: ", data);

              if (!data || !data.getThingsWithTriggerLog) {
                this.setState({
                  statusMessage: ["There is no recent activity yet."],
                });

                return null;
              }

              data.getThingsWithTriggerLog.map((thingWithLog) => {
                this.setState({
                  statusMessage: [
                    ...this.state.statusMessage,
                    `${thingWithLog.component} on the ${thingWithLog.space} turned ${thingWithLog.state} @ ${thingWithLog.date}`,
                  ],
                });
              });

              return null;
            }}
          </Query>
          <NoticeBar
            icon={null}
            marqueeProps={{
              loop: true,
              text: this.setMarqueeText(),
            }}
          />
        </div>
      </div>
    );
  }
}
