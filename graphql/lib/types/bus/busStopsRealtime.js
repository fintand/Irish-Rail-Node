import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} from 'graphql';

const BusStopsRealtimeResult = new GraphQLObjectType({
  name: 'BusStopsRealtimeResult',
  description: '...',
  fields: {
    arrivaldatetime: {
      type: GraphQLString,
      description: '...',
      resolve: result => result.arrivaldatetime
    },
    duetime: {
      type: GraphQLString,
      description: '...',
      resolve: result => result.duetime
    },
    departuredatetime: {
      type: GraphQLString,
      description: '...',
      resolve: result => result.departuredatetime
    },
    departureduetime: {
      type: GraphQLString,
      description: '...',
      resolve: result => result.departureduetime
    },
    scheduledarrivaldatetime: {
      type: GraphQLString,
      description: '...',
      resolve: result => result.scheduledarrivaldatetime
    },
    scheduleddeparturedatetime: {
      type: GraphQLString,
      description: '...',
      resolve: result => result.scheduleddeparturedatetime
    },
    destination: {
      type: GraphQLString,
      description: '...',
      resolve: result => result.destination
    },
    destinationlocalized: {
      type: GraphQLString,
      description: '...',
      resolve: result => result.destinationlocalized
    },
    origin: {
      type: GraphQLString,
      description: '...',
      resolve: result => result.origin
    },
    originlocalized: {
      type: GraphQLString,
      description: '...',
      resolve: result => result.originlocalized
    },
    direction: {
      type: GraphQLString,
      description: '...',
      resolve: result => result.direction
    },
    operator: {
      type: GraphQLString,
      description: '...',
      resolve: result => result.operator
    },
    additionalinformation: {
      type: GraphQLString,
      description: '...',
      resolve: result => result.additionalinformation
    },
    lowfloorstatus: {
      type: GraphQLString,
      description: '...',
      resolve: result => result.lowfloorstatus
    },
    route: {
      type: GraphQLString,
      description: '...',
      resolve: result => result.route
    },
    sourcetimestamp: {
      type: GraphQLString,
      description: '...',
      resolve: result => result.monitored
    },
    monitored: {
      type: GraphQLString,
      description: '...',
      resolve: result => result.monitored
    }
  }
});


exports.BusStopsRealtime = new GraphQLObjectType({
  name: 'BusStopsRealtime',
  description: '...',
  fields: {
    errorcode: {
      type: GraphQLString,
      description: '',
      resolve: stop => stop.errorcode || ""
    },
    errormessage: {
      type: GraphQLString,
      description: '',
      resolve: stop => stop.errormessage || ""
    },
    numberofresults: {
      type: GraphQLInt,
      description: '',
      resolve: stop => stop.numberofresults || ""
    },
    stopid: {
      type: GraphQLString,
      description: '',
      resolve: stop => stop.stopid || ""
    },
    timestamp: {
      type: GraphQLString,
      description: '',
      resolve: stop => stop.timestamp || ""
    },
    results: {
      type: new GraphQLList(BusStopsRealtimeResult),
      description: '...',
      resolve: stop => stop.results || []
    }
  }
});