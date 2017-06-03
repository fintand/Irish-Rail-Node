'use strict';
const _ = require('lodash/core');
const train = require('./helpers/train-helper');
const helper = require('./helpers/functions-helper');

module.exports.stations = (event, context, callback) => {

  // Station Type
  let params = null;
  if(event.queryStringParameters) {
    if(event.queryStringParameters.hasOwnProperty('type')) {
      params = { StationType: event.queryStringParameters.type.toUpperCase()};
    }
  }

  train.getAllStations((data) => {
    let stations = data.response.ArrayOfObjStation.objStation;
    if(!stations) {
      callback(null, helper.responseHelper(200, null, 'No stations available.'));
      return;
    }

    // Transform Data
    let res = stations.map((elem) => {
      return {
        name: elem.StationDesc.toString() || "",
        alias: elem.StationAlias.toString() || "",
        latitude: elem.StationLatitude.toString() || "",
        longitude: elem.StationLongitude.toString() || "",
        code: elem.StationCode.toString() || "",
        id: elem.StationId.toString() || ""
      }
    });


    // Queries
    if(event.queryStringParameters) {
      // Searching
      /** TO-DO **/

      // Sorting
      if(event.queryStringParameters.hasOwnProperty('sort')) {
        if(event.queryStringParameters.sort.charAt(0) === '-') {
          res = _.sortBy(res, o => o[event.queryStringParameters.sort.split('-')[1]]).reverse();
        } else {
          res = _.sortBy(res, o => o[event.queryStringParameters.sort]);
        }
      }
    }

    // Send Response back
    callback(null, helper.responseHelper(200, res));

  }, true, params);

};

module.exports.current = (event, context, callback) => {

  // Station Type
  let params = null;
  if(event.queryStringParameters) {
    if(event.queryStringParameters.hasOwnProperty('type')) {
      params = { TrainType: event.queryStringParameters.type.toUpperCase()};
    }
  }

  train.getCurrentTrains((data) => {
    let trains = data.response.ArrayOfObjTrainPositions.objTrainPositions;
    if(!trains) {
      callback(null, helper.responseHelper(200, null, 'No trains available.'));
      return;
    }

    // Transform Data
    let res = trains.map((elem) => {
      return {
        status: elem.TrainStatus.toString() || "",
        latitude: elem.TrainLatitude.toString() || "",
        longitude: elem.TrainLongitude.toString() || "",
        code: elem.TrainCode.toString() || "",
        date: elem.TrainDate.toString() || "",
        publicMessage: elem.PublicMessage.toString() || "",
        direction: elem.Direction.toString() || ""
      }
    });


    // Queries
    if(event.queryStringParameters) {
      // Filtering
      if(event.queryStringParameters.hasOwnProperty('direction')) {
        res = res.filter(o => o.direction.toUpperCase() === event.queryStringParameters.direction.toUpperCase());
      }


      /** TO-DO: Sorting **/
    }

    // Send Response back
    callback(null, helper.responseHelper(200, res));

  }, true, params);

};

module.exports.stationData = (event, context, callback) => {

  // Station Type
  let params = null;
  if(event.queryStringParameters) {
    if(event.queryStringParameters.hasOwnProperty('stationCode') && !event.queryStringParameters.hasOwnProperty('stationDesc')) {
      params = { StationCode: event.queryStringParameters.stationCode.toUpperCase()};
    } else if(event.queryStringParameters.hasOwnProperty('stationDesc') && !event.queryStringParameters.hasOwnProperty('stationCode')) {
      params = { StationDesc: event.queryStringParameters.stationDesc.toUpperCase()};
    } else {
      callback(null, helper.responseHelper(400, null, 'Query Params missing. stationDesc or stationCode must be specified.'));
      return;
    }

    if(event.queryStringParameters.hasOwnProperty('numMins')) {
      params.NumMins = event.queryStringParameters.numMins;
    }

  } else {
    callback(null, helper.responseHelper(400, null, 'Query Params missing. stationDesc or stationCode must be specified.'));
    return;
  }

  train.getStationData((data) => {
    let trains = data.response.ArrayOfObjStationData.objStationData;

    // handle no trains

    // Transform Data
    let res = trains.map((elem) => {
      return {
        serverTime: elem.Servertime.toString() || "",
        trainCode: elem.Traincode.toString() || "",
        stationFullname: elem.Stationfullname.toString() || "",
        stationCode: elem.Stationcode.toString() || "",
        queryTime: elem.Querytime.toString() || "",
        trainDate: elem.Traindate.toString() || "",
        origin: elem.Origin.toString() || "",
        destination: elem.Destination.toString() || "",
        destinationTime: elem.Destinationtime.toString() || "",
        status: elem.Status.toString() || "",
        lastLocation: elem.Lastlocation.toString() || "",
        dueIn: elem.Duein.toString() || "",
        late: elem.Late.toString() || "",
        expArrival: elem.Exparrival.toString() || "",
        expDepart: elem.Expdepart.toString() || "",
        schArrival: elem.Scharrival.toString() || "",
        schDepart: elem.Schdepart.toString() || "",
        direction: elem.Direction.toString() || "",
        trainType: elem.Traintype.toString() || "",
        locationType: elem.Locationtype.toString() || ""
      }
    });


    // Queries
    if(event.queryStringParameters) {
      // Filtering
      if(event.queryStringParameters.hasOwnProperty('direction')) {
        res = res.filter(o => o.direction.toUpperCase() === event.queryStringParameters.direction.toUpperCase());
      }


      /** TO-DO: Sorting **/
    }

    callback(null, helper.responseHelper(200, res));

  }, true, params);

};

module.exports.stationSearch = (event, context, callback) => {

  let params = null;
  if(event.queryStringParameters) {
    if(event.queryStringParameters.hasOwnProperty('q')) {
      params = { StationText: event.queryStringParameters.q.toUpperCase()};
    } else {
      callback(null, helper.responseHelper(400, null, 'Query Param missing. q must be specified.'));
      return;
    }
  } else {
    callback(null, helper.responseHelper(400, null, 'Query Param missing. q must be specified.'));
    return;
  }

  train.getStationsFilter((data) => {
    let stations = data.response.ArrayOfObjStationFilter.objStationFilter;
    if(!stations) {
      callback(null, helper.responseHelper(200, null, 'No stations available.'));
      return;
    }

    // Transform Data
    let res = stations.map((elem) => {
      return {
        stationDesc_sp: elem.StationDesc_sp.toString() || "",
        stationDesc: elem.StationDesc.toString() || "",
        stationCode: elem.StationCode.toString() || ""
      }
    });

    callback(null, helper.responseHelper(200, res));

  }, true, params);

};

module.exports.trainMovements = (event, context, callback) => {

  let params = null;
  if(event.queryStringParameters) {
    if(event.queryStringParameters.hasOwnProperty('trainId') && event.queryStringParameters.hasOwnProperty('trainDate')) {
      params = {
        TrainId: event.queryStringParameters.trainId.toUpperCase(),
        TrainDate: event.queryStringParameters.trainDate.toUpperCase()
      };
    } else {
      callback(null, helper.responseHelper(400, null, 'Query Param missing. trainId and trainDate must be specified.'));
      return;
    }
  } else {
    callback(null, helper.responseHelper(400, null, 'Query Param missing. trainId and trainDate must be specified.'));
    return;
  }

  train.getTrainMovements((data) => {
    let movements = data.response.ArrayOfObjTrainMovements.objTrainMovements;
    if(!movements) {
      callback(null, helper.responseHelper(200, null, 'No movements available.'));
      return;
    }

    // Transform Data
    let res = movements.map((elem) => {
      return {
        trainCode: elem.TrainCode.toString() || "",
        trainDate: elem.TrainDate.toString() || "",
        locationFullName: elem.LocationFullName.toString() || "",
        locationOrder: elem.LocationOrder.toString() || "",
        locationType: elem.LocationType.toString() || "",
        trainOrigin: elem.TrainOrigin.toString() || "",
        trainDestination: elem.TrainDestination.toString() || "",
        scheduledArrival: elem.ScheduledArrival.toString() || "",
        scheduledDeparture: elem.ScheduledDeparture.toString() || "",
        expectedArrival: elem.ExpectedArrival.toString() || "",
        expectedDeparture: elem.ExpectedDeparture.toString() || "",
        arrival: elem.Arrival.toString() || "",
        departure: elem.Departure.toString() || "",
        autoArrival: elem.AutoArrival.toString() || "",
        autoDepart: elem.AutoDepart.toString() || "",
        stopType: elem.StopType.toString() || ""
      }
    });

    callback(null, helper.responseHelper(200, res));

  }, true, params);

};

module.exports.haconTrains = (event, context, callback) => {

  train.getHaconTrains((data) => {
    let stations = data.response.ArrayOfObjHaconPositions.objHaconPositions;
    if(!stations) {
      callback(null, helper.responseHelper(200, null, 'No stations available.'));
      return;
    }

    // Transform Data
    let res = stations.map((elem) => {
      return {
        trainStatus: elem.TrainStatus.toString() || "",
        trainLatitude: elem.TrainLatitude.toString() || "",
        trainCode: elem.TrainCode.toString() || "",
        trainDate: elem.TrainDate.toString() || "",
        lastLocationType: elem.LastLocationType.toString() || "",
        direction: elem.Direction.toString() || "",
        trainOrigin: elem.TrainOrigin.toString() || "",
        trainOriginTime: elem.TrainOriginTime.toString() || "",
        trainDestination: elem.TrainDestination.toString() || "",
        trainDestinationTime: elem.TrainDestinationTime.toString() || "",
        lastLocation: elem.LastLocation.toString() || "",
        nextLocation: elem.NextLocation.toString() || "",
        difference: elem.Difference.toString() || "",
        scheduledDeparture: elem.ScheduledDeparture.toString() || "",
        scheduledArrival: elem.ScheduledArrival.toString() || ""
      }
    });

    callback(null, helper.responseHelper(200, res));

  }, true);

};