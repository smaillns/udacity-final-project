import 'source-map-support/register'

import { APIGatewayProxyEvent, APIGatewayProxyResult, APIGatewayProxyHandler } from 'aws-lambda'
import {createLogger} from '../../utils/logger'
import { getRestaurant } from '../logicLayer/ucci'
import {getUserId} from "../utils";

const logger = createLogger('ucci')

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {

  logger.info('Processing event: ', event)

  const userId = getUserId(event)


  const response = await getRestaurant(userId)


  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      response
    })
  }

}
