import * as React from "react";
import { NoticeBar } from "antd-mobile";
import {
  GetGroupIdFromUserIdQueryVariables,
  useGetThingsWithTriggerLogQuery,
} from "../../../../../gql";
import { useLocalStore, observer } from "mobx-react";
import { runInAction } from "mobx";

interface Props {
  groupId: GetGroupIdFromUserIdQueryVariables;
}

export const StatusBar: React.FC<Props> = observer(({ groupId }) => {
  const store = useLocalStore(() => ({
    messages: "There is no recent activity yet.",
  }));
  const { data, loading } = useGetThingsWithTriggerLogQuery({
    variables: {
      id: groupId.id,
    },
  });

  if (loading) runInAction(() => (store.messages = "Loading..."));

  if (data) {
    const messages: string[] = [];
    data.getThingsWithTriggerLog.map((thingWithLog) => {
      messages.push(
        `${thingWithLog.component} on the ${thingWithLog.space} turned ${thingWithLog.state} @ ${thingWithLog.date}`
      );
    });

    runInAction(() => {
      if (messages.length > 0) {
        if (messages.length > 3) {
          store.messages = messages[0]
            .concat(" | ")
            .concat(messages[1])
            .concat(" | ")
            .concat(messages[2])
            .concat(" | ")
            .concat(messages[3])
            .concat(" | ")
            .concat(messages[4]);
        } else {
          messages.map((_, i) => {
            store.messages = messages[i].concat(" | ");
          });
        }
      }
    });
  }

  return (
    <div className="status-bar-wrapper" data-testid="status-bar-wrapper">
      <div className="status-bar" data-testid="status-bar">
        <NoticeBar
          icon={null}
          marqueeProps={{
            loop: true,
            text: store.messages,
          }}
        />
      </div>
    </div>
  );
});
