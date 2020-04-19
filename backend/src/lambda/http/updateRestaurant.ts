import 'source-map-support/register'
import { APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda'
import {updateRestaurant} from "../logicLayer/ucci";
import {UpdateRestaurantRequest} from "../../requests/UpdateRestaurantRequest";

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {


  const restaurantId = event.pathParameters.restaurantId
  const updatedRestaurant: UpdateRestaurantRequest = JSON.parse(event.body)

  const response = await updateRestaurant(restaurantId, updatedRestaurant)

  if (response == null)
      return {
        statusCode: 404,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
          error: 'TODO item does not exist'
        })
    }

  return {
      statusCode: 204,
      headers: {
          'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        updatedRestaurant
      })
  }
}
