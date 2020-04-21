
import 'source-map-support/register'

import { Data } from '../dataLayer/data'
import { Restaurant } from "../../models/Restaurant";
import {CreateRestaurantRequest} from "../../requests/CreateRestaurantRequest";
import * as uuid from 'uuid'
import {UpdateRestaurantRequest} from "../../requests/UpdateRestaurantRequest";
import {RestaurantUpdate} from "../../models/RestaurantUpdate";

const data = new Data()

export async  function getRestaurant(userId: string): Promise<Restaurant>{
    return await data.getRestaurant(userId)
}


export async  function createRestaurant(userId: string, newRestaurant: CreateRestaurantRequest): Promise<Restaurant>{
    const timestamp = new Date().toISOString()
    const restaurantId = uuid.v4()

    const newItem : Restaurant =  {
        userId: userId,
        restaurantId: restaurantId,
        createdAt: timestamp,
        name: newRestaurant.name,
        phone: newRestaurant.phone
    }

    return await data.createRestaurant(newItem)
}


export async function updateRestaurant(userId: string, restaurantId: string, updateRestaurantRequest: UpdateRestaurantRequest ): Promise<RestaurantUpdate>{
    const updatedRestaurant: RestaurantUpdate = {
        name: updateRestaurantRequest.name,
        phone: updateRestaurantRequest.phone
    }
    return await data.updateRestaurant(userId, restaurantId, updatedRestaurant)
}

export async function deleteRestaurant(userId, restaurantId: string): Promise<String> {
    return data.deleteRestaurant(userId, restaurantId)
}
