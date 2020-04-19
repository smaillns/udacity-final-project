import 'source-map-support/register'

import { APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda'
import { CreateRestaurantRequest } from '../../requests/CreateRestaurantRequest'
import {createRestaurant} from "../logicLayer/ucci";

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const newItem: CreateRestaurantRequest = JSON.parse(event.body)


    const response = await createRestaurant(newItem)


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
