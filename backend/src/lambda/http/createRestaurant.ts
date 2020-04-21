import 'source-map-support/register'

import { APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda'
import { CreateRestaurantRequest } from '../../requests/CreateRestaurantRequest'
import {createRestaurant} from "../logicLayer/ucci";
import {getUserId} from "../utils";

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const newItem: CreateRestaurantRequest = JSON.parse(event.body)
    const userId = getUserId(event)

    const response = await createRestaurant(userId, newItem)


    return {
        statusCode: 201,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true
        },
        body: JSON.stringify({
            item: response
        })
    }
}
