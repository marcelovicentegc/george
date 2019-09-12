import * as React from "react";
import { getThingsFromGroupId } from "../../../../../../server/schema/graphql/Queries.graphql";
import {
  GetThingsFromGroupIdQuery,
  GetThingsFromGroupIdVariables,
  GetGroupIdFromUserIdGetGroupIdFromUserId
} from "../../../../../__types__/typeDefs";
import { Query } from "react-apollo";
import { NoticeBar } from "antd-mobile";

interface Props {
  groupId: GetGroupIdFromUserIdGetGroupIdFromUserId;
}

interface State {
  statusMessage: string[];
}

export class StatusBar extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);

    this.state = {
      statusMessage: []
    };
  }

  public shouldComponentUpdate(nextProps: Props, nextState: State) {
    if (this.state.statusMessage !== nextState.statusMessage) {
      if (nextState.statusMessage.length > 3) {
        return false;
      }
      return true;
    } else {
      return false;
    }
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
          <NoticeBar
            icon={null}
            marqueeProps={{
              loop: true,
              text: this.setMarqueeText()
            }}
          />
          <Query<GetThingsFromGroupIdQuery, GetThingsFromGroupIdVariables>
            query={getThingsFromGroupId}
            variables={{
              id: this.props.groupId.id
            }}
          >
            {({ data, loading }) => {
              if (loading) return null;
              if (!data || !data.getThingsFromGroupId) {
                this.setState({
                  statusMessage: ["There is no recent activity yet."]
                });
                return null;
              }
              data.getThingsFromGroupId.map(thing => {
                thing.triggerLog &&
                  thing.triggerLog.map(log => {
                    this.setState({
                      statusMessage: [
                        ...this.state.statusMessage,
                        `${thing.component} on the ${thing.space} turned ${log.state} @ ${log.date}`
                      ]
                    });
                  });
              });
              return null;
            }}
          </Query>
        </div>
      </div>
    );
  }
}
