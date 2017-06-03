import { Router } from 'express';
import transit from 'irishrail-realtime-node';


export default () => {
  let api = Router();
  api.get('/', (req, res) => {
		res.json({ message: "root of trains." });
	});

  api.get('/stations', (req, res) => {
    try {
      transit.getAllStations((data) => {
        let newData = []
        let stations = data.response.ArrayOfObjStation.objStation;
        for (let i = 0; i < stations.length; i++) {
          let obj = {};
          obj.name = stations[i].StationDesc.toString() || null;
          obj.alias = stations[i].StationAlias.toString() || null;
          obj.latitude = stations[i].StationLatitude.toString() || null;
          obj.longitude = stations[i].StationLongitude.toString() || null;
          obj.code = stations[i].StationCode.toString() || null;
          obj.id = stations[i].StationId.toString() || null;
          newData.push(obj)
        }

        res.send(newData);
      }, true)
    } catch (e) {
        res.status(500).send({error: true})
    }

  });

  // return Array of Type of Station
  api.get('/stations/:type', (req, res) => {
    try {
      let params = {};
      switch (req.params.type.toUpperCase()) {
        case 'D':
          params.StationType = 'D';
          break;
        case 'M':
          params.StationType = 'M';
          break;
        case 'S':
          params.StationType = 'S';
          break;
        default:
          params.StationType = 'A';
      }

  		transit.getAllStations((data) => {
        let newData = []
        let stations = data.response.ArrayOfObjStation.objStation;
        for (let i = 0; i < stations.length; i++) {
          let obj = {};
          obj.name = stations[i].StationDesc.toString() || null;
          obj.alias = stations[i].StationAlias.toString() || null;
          obj.latitude = stations[i].StationLatitude.toString() || null;
          obj.longitude = stations[i].StationLongitude.toString() || null;
          obj.code = stations[i].StationCode.toString() || null;
          obj.id = stations[i].StationId.toString() || null;
          newData.push(obj)
        }
        res.send(newData);
      }, true, params)
    } catch (e) {
        res.status(500).send({error: true})
    }

	});

  // TEST - remove later
  api.get('/test', (req, res) => {
		transit.getAllStations((data) => {
      res.send(data);
    }, true)
	});


  api.get('/stationByCode/:code/:time', (req, res) => {
    let params = { StationCode: req.params.code, NumMins: req.params.time };
    try {
      transit.getStationData((data) => {
        let trains = data.response.ArrayOfObjStationData.objStationData;
        if(!trains) return res.send({message: 'no trains found'})

        let newData = [];
        for (let i = 0; i < trains.length; i++) {
          let obj = {};
          obj.serverTime = trains[i].Servertime.toString() || null;
          obj.trainCode = trains[i].Traincode.toString() || null;
          obj.stationFullname = trains[i].Stationfullname.toString() || null;
          obj.stationCode = trains[i].Stationcode.toString() || null;
          obj.queryTime = trains[i].Querytime.toString() || null;
          obj.trainDate = trains[i].Traindate.toString() || null;
          obj.origin = trains[i].Origin.toString() || null;
          obj.destination = trains[i].Destination.toString() || null;
          obj.destinationTime = trains[i].Destinationtime.toString() || null;
          obj.status = trains[i].Status.toString() || null;
          obj.lastLocation = trains[i].Lastlocation.toString() || null;
          obj.dueIn = trains[i].Duein.toString() || null;
          obj.late = trains[i].Late.toString() || null;
          obj.expArrival = trains[i].Exparrival.toString() || null;
          obj.expDepart = trains[i].Expdepart.toString() || null;
          obj.schArrival = trains[i].Scharrival.toString() || null;
          obj.schDepart = trains[i].Schdepart.toString() || null;
          obj.direction = trains[i].Direction.toString() || null;
          obj.trainType = trains[i].Traintype.toString() || null;
          obj.locationType = trains[i].Locationtype.toString() || null;
          newData.push(obj)
        }
        res.send(newData);
      }, true, params)

    } catch (e) {
      res.send({message: e})
    }

	});

  api.get('/stationByName/:name/:time/:direction', (req, res) => {
    let params = { StationDesc: req.params.name, NumMins: req.params.time };

    try {
      transit.getStationData((data) => {
        let trains = data.response.ArrayOfObjStationData.objStationData;
        if(!trains) return res.send({message: 'no trains found'});

        let newData = [];
        for (let i = 0; i < trains.length; i++) {
          let obj = {};
          obj.serverTime = trains[i].Servertime.toString() || null;
          obj.trainCode = trains[i].Traincode.toString() || null;
          obj.stationFullname = trains[i].Stationfullname.toString() || null;
          obj.stationCode = trains[i].Stationcode.toString() || null;
          obj.queryTime = trains[i].Querytime.toString() || null;
          obj.trainDate = trains[i].Traindate.toString() || null;
          obj.origin = trains[i].Origin.toString() || null;
          obj.destination = trains[i].Destination.toString() || null;
          obj.destinationTime = trains[i].Destinationtime.toString() || null;
          obj.status = trains[i].Status.toString() || null;
          obj.lastLocation = trains[i].Lastlocation.toString() || null;
          obj.dueIn = trains[i].Duein.toString() || null;
          obj.late = trains[i].Late.toString() || null;
          obj.expArrival = trains[i].Exparrival.toString() || null;
          obj.expDepart = trains[i].Expdepart.toString() || null;
          obj.schArrival = trains[i].Scharrival.toString() || null;
          obj.schDepart = trains[i].Schdepart.toString() || null;
          obj.direction = trains[i].Direction.toString() || null;
          obj.trainType = trains[i].Traintype.toString() || null;
          obj.locationType = trains[i].Locationtype.toString() || null;

          if(req.params.direction.toUpperCase() === obj.direction.toUpperCase()) {
            newData.push(obj)
          }
        }
        res.send(newData);
      }, true, params)
    } catch (e) {
      res.status(500).send({error: true})
    }

	});

  api.get('/current', (req, res) => {
    try {
      transit.getCurrentTrains((data) => {
        let trains = data.response.ArrayOfObjTrainPositions.objTrainPositions;
        if(!trains) return res.send({message: 'no trains found'})

        let newData = []
        for (let i = 0; i < trains.length; i++) {
          let obj = {};
          obj.status = trains[i].TrainStatus.toString() || null;
          obj.latitude = trains[i].TrainLatitude.toString() || null;
          obj.longitude = trains[i].TrainLongitude.toString() || null;
          obj.code = trains[i].TrainCode.toString() || null;
          obj.date = trains[i].TrainDate.toString() || null;
          obj.publicMessage = trains[i].PublicMessage.toString() || null;
          obj.direction = trains[i].Direction.toString() || null;
          newData.push(obj)
        }
        res.send(newData);
      }, true)
    } catch (e) {
      res.status(500).send({error: true})
    }

  });

  // get current trains
  api.get('/current/:type', (req, res) => {
    try {
      let params = {};
      switch (req.params.type.toUpperCase()) {
        case 'D':
          params.TrainType = 'D';
          break;
        case 'M':
          params.TrainType = 'M';
          break;
        case 'S':
          params.TrainType = 'S';
          break;
        default:
          params.TrainType = 'A';
      }

  		transit.getCurrentTrains((data) => {
        let trains = data.response.ArrayOfObjTrainPositions.objTrainPositions;
        if(!trains) return res.send({message: 'no trains found'})

        let newData = []
        for (let i = 0; i < trains.length; i++) {
          let obj = {};
          obj.status = trains[i].TrainStatus.toString() || null;
          obj.latitude = trains[i].TrainLatitude.toString() || null;
          obj.longitude = trains[i].TrainLongitude.toString() || null;
          obj.code = trains[i].TrainCode.toString() || null;
          obj.date = trains[i].TrainDate.toString() || null;
          obj.publicMessage = trains[i].PublicMessage.toString() || null;
          obj.direction = trains[i].Direction.toString() || null;
          newData.push(obj)
        }
        res.send(newData);
      }, true, params)
    } catch (e) {
      res.status(500).send({error: true})
    }

	});

  return api;
}
