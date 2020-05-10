import { getThingsFromGroupId } from "../../gql/Queries.graphql";
import { format } from "date-fns";

export const mockedGetThingsFromGroupId = [
  {
    request: {
      query: getThingsFromGroupId,
      variables: {
        id: "1",
      },
    },
    result: {
      data: {
        getThingsFromGroupId: [
          {
            id: "1",
            space: "Living room",
            component: "Balcony lamp",
            topic: "living-room/balcony-lamp",
            triggerLog: [
              {
                date: format(new Date(2020, 1, 1), "mm-dd-yyyy hh:mm:ss"),
                state: "Off",
                thingId: "1",
              },
            ],
          },
          {
            id: "2",
            space: "Ashley's room",
            component: "TV",
            topic: "ashleys-room/tv",
            triggerLog: [
              {
                date: format(new Date(2020, 1, 1), "mm-dd-yyyy hh:mm:ss"),
                state: "On",
                thingId: "2",
              },
            ],
          },
          {
            id: "3",
            space: "John's room",
            component: "Aquarium's filter",
            topic: "johns-room/aquariums-filter",
            triggerLog: [
              {
                date: format(new Date(2020, 1, 1), "mm-dd-yyyy hh:mm:ss"),
                state: "Off",
                thingId: "3",
              },
            ],
          },
        ],
      },
    },
  },
];
