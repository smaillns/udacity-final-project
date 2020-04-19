import { APIGatewayProxyEvent, APIGatewayProxyResult, APIGatewayProxyHandler } from 'aws-lambda'
import 'source-map-support/register'
import * as AWS from 'aws-sdk'
import * as uuid from 'uuid'


const docClient = new AWS.DynamoDB.DocumentClient()
const s3 = new  AWS.S3({
    signatureVersion: 'v4'
})


const restaurantTable = process.env.RES_TABLE
const bucketName =  process.env.IMAGES_S3_BUCKET

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const restaurantId = event.pathParameters.restaurantId


  const itemToUpdate = await docClient.get({
    TableName: restaurantTable,
    Key: {
        userId: 'user',
        restaurantId: restaurantId
    }
    }).promise()

    if (!itemToUpdate.Item){
    return {
        statusCode: 404,
        body: JSON.stringify({
            error: 'TODO item with the given id does not exist'
        })
    }
    }

    const imageId = uuid.v4()

    //storing new item
    const newItem = {
        restaurantId,
        ...itemToUpdate.Item,
        imageUrl: `https://${bucketName}.s3.amazonaws.com/${imageId}`
      }

      await docClient.put({
          TableName: restaurantTable,
          Item: newItem
        }).promise()
    //-----------------------------

    const url = s3.getSignedUrl('putObject', {
        Bucket: bucketName,
        Key: imageId,
        Expires: 300
    })

    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin' : '*'
        },
        body: JSON.stringify({
            uploadUrl: url
        })
    }
}



