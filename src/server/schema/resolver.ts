import { IResolvers } from 'graphql-tools';
// import * as Five from 'johnny-five';

// const board = new Five.Board();

const resolvers: IResolvers = {
    Mutation: {
        toggleLed: async (_, { toggle }) => {
            console.log(toggle);
            // board.on('ready', () => {
            //     const led = new Five.Led(10);
            //     toggle ? led.on() : led.off();
            //   });
            
        }
    }
}

export default resolvers;