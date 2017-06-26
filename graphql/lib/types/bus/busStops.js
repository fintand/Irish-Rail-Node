import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} from 'graphql';

const Routes = new GraphQLObjectType({
  name: 'Routes',
  description: '...',
  fields: {

  }
});

const Operator = new GraphQLObjectType({
  name: 'Operator',
  description: '...',
  fields: {
    name: {
      type: GraphQLString,
      description: '...',
      resolve: operator => operator.name
    },
    routes: {
      type: new GraphQLList(GraphQLString),
      description: '...',
      resolve: operator => operator.routes
    }
  }
});



const BusStopResult = new GraphQLObjectType({
  name: 'BusStopResult',
  description: '...',
  fields: {
    stopid: {
      type: GraphQLString,
      description: '...',
      resolve: result => result.stopid
    },
    displaystopid: {
      type: GraphQLString,
      description: '...',
      resolve: result => result.displaystopid
    },
    shortname: {
      type: GraphQLString,
      description: '...',
      resolve: result => result.shortname
    },
    shortnamelocalized: {
      type: GraphQLString,
      description: '...',
      resolve: result => result.shortnamelocalized
    },
    fullname: {
      type: GraphQLString,
      description: '...',
      resolve: result => result.fullname
    },
    fullnamelocalized: {
      type: GraphQLString,
      description: '...',
      resolve: result => result.fullnamelocalized
    },
    latitude: {
      type: GraphQLString,
      description: '...',
      resolve: result => result.latitude
    },
    longitude: {
      type: GraphQLString,
      description: '...',
      resolve: result => result.longitude
    },
    lastupdated: {
      type: GraphQLString,
      description: '...',
      resolve: result => result.lastupdated
    },
    operators: {
      type: new GraphQLList(Operator),
      description: '...',
      resolve: result => result.operators
    }
  }
});


exports.BusStops = new GraphQLObjectType({
  name: 'BusStops',
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
    timestamp: {
      type: GraphQLString,
      description: '',
      resolve: stop => stop.timestamp || ""
    },
    results: {
      type: new GraphQLList(BusStopResult),
      description: '...',
      resolve: stop => stop.results || []
    }
  }
});