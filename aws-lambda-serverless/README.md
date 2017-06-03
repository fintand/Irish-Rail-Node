# Irish Rail API Wrapper - AWS Lambda 

Irish Rail API wrapper built using [AWS Lambda] and [Serverless] framework. Returns JSON instead of XML. A list of sample API endpoints and queries can be found in the `postman/` folder. The URL environment variable will need to be set in [Postman]. Please refer to [Irish Rail API].

## How does it work?
- The Serverless framework deploys the functions to AWS using the `serverless.yml` file.
This creates the Lambda functions as well as the API Endpoints. Logs can be seen in AWS
CloudWatch or by running `serverless logs -f <name of function>`

## Why AWS Lambda?

- Gives the ability to run code without provisioning or managing servers
- Scales very well
- Zero administration

## Installation
- Make sure you run `npm install` and follow the instructions from the Serverless
framework documentation.

## Invoke the function locally

```bash
serverless invoke local --function stations
```

## Deploy

In order to deploy the endpoints simply run

```bash
serverless deploy
```

## Usage

You can now invoke the Lambda directly and even see the resulting log via

```bash
serverless invoke --function stations --log
```

or as send an HTTP request directly to the endpoint using a tool like curl

```bash
curl https://XXXXXXX.execute-api.eu-west-1.amazonaws.com/dev/stations
```
[Postman]: https://www.getpostman.com/
[Serverless]: https://serverless.com/
[AWS Lambda]: http://docs.aws.amazon.com/lambda/latest/dg/welcome.html
[Irish Rail API]: http://api.irishrail.ie/realtime/
