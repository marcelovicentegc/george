import { IResolvers } from "graphql-tools";
// import * as Five from 'johnny-five';

// const board = new Five.Board();

const resolvers: IResolvers = {
  Mutation: {
    toggleLed: async (_, { toggle }) => {
      toggle === "true" ? console.log("Led is on") : console.log("Led is off");
      // board.on('ready', () => {
      //   Five.Led() receives a pin number
      // const led = new Five.Led(10);
      //     toggle ? led.on() : led.off();
      //   });
    },
    toggleAbajur: async (_, { toggle }) => {
      toggle === "true"
        ? console.log("Abajur is on")
        : console.log("Abajur is off");
    },
    toggleAC: async (_, { toggle }) => {
      toggle === "true" ? console.log("AC is on") : console.log("AC is off");
    }
  }
};

export default resolvers;
