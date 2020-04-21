import 'source-map-support/register'

import { APIGatewayProxyEvent, APIGatewayProxyResult, APIGatewayProxyHandler } from 'aws-lambda'
import {deleteRestaurant} from "../logicLayer/ucci";
import {getUserId} from "../utils";

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const restaurantId = event.pathParameters.restaurantId


  const userId = getUserId(event)

  await deleteRestaurant(userId, restaurantId)

  return {
      statusCode: 204,
      headers: {
          'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
          info: 'item deleted succesfully'
      })
  }

}
