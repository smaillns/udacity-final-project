import 'source-map-support/register'
import * as AWS from 'aws-sdk'
const AWSXRay = require('aws-xray-sdk');
const XAWS = AWSXRay.captureAWS(AWS)

import { DocumentClient } from 'aws-sdk/clients/dynamodb'
import {Restaurant} from "../../models/Restaurant";
import {RestaurantUpdate} from "../../models/RestaurantUpdate";



export class Data {

    constructor(
        private readonly docClient: DocumentClient = new XAWS.DynamoDB.DocumentClient(),
        private readonly restaurantTable = process.env.RES_TABLE) {
    }

    async getRestaurant(): Promise<any>{
        const response = await this.docClient.scan({
            TableName: this.restaurantTable
        }).promise()

        return response.Items
    }


    async createRestaurant(newItem: Restaurant): Promise<Restaurant>{

        await this.docClient.put({
            TableName: this.restaurantTable,
            Item: newItem
        }).promise()

        return newItem

    }



    async updateRestaurant(restaurantId: string, resUpdate: RestaurantUpdate):Promise<RestaurantUpdate> {

        const itemToUpdate = await this.docClient.get({
                TableName: this.restaurantTable,
                Key: {
                    userId: 'user',
                    restaurantId: restaurantId
                }
            }).promise()

            if (!itemToUpdate.Item)
                return null

            await this.docClient.update({
                TableName: this.restaurantTable,
                Key: {
                    userId: 'user',
                    restaurantId: restaurantId
                },
                UpdateExpression: "set #n = :r",
                ExpressionAttributeValues: {
                    ":r": resUpdate.name
                },
                ExpressionAttributeNames: {
                    "#n": "name"
                },
                ReturnValues: "UPDATED_NEW"
            }).promise()

            return resUpdate
    }

    async deleteRestaurant(restaurantId: string){
        await this.docClient.delete({
            TableName: this.restaurantTable,
            Key: {
                userId: 'user',
                restaurantId: restaurantId
            }
        }).promise()

        return ''
    }

}