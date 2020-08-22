import { IResolvers } from "graphql-tools";
import { Group } from "../../database/entities/Group.model";
import { Thing } from "../../database/entities/Thing.model";
import { TriggerLog } from "../../database/entities/TriggerLog.model";
import { QueryResolvers } from "../../gql";

const queries: QueryResolvers = {
  getTriggerLog: async (_, { groupId }) => {
    const group = await Group.findOne(groupId);

    if (!group) {
      throw new Error("This group doesn't exist");
    }

    const things = await Thing.find({
      where: { groupId },
      relations: ["triggerLogs"],
    });

    const triggerLog: TriggerLog[] = [];

    things.map((thing) => thing.triggerLog.map((log) => triggerLog.push(log)));

    return triggerLog;
  },
};

export const logs: IResolvers = {
  Query: { ...queries },
};
