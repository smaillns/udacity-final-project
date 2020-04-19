
import 'source-map-support/register'

import { Data } from '../dataLayer/data'
import { Restaurant } from "../../models/Restaurant";
import {CreateRestaurantRequest} from "../../requests/CreateRestaurantRequest";
import * as uuid from 'uuid'
import {UpdateRestaurantRequest} from "../../requests/UpdateRestaurantRequest";
import {RestaurantUpdate} from "../../models/RestaurantUpdate";

const data = new Data()

export async  function getRestaurant(): Promise<Restaurant>{
    return await data.getRestaurant()
}


export async  function createRestaurant(newRestaurant: CreateRestaurantRequest): Promise<Restaurant>{
    const timestamp = new Date().toISOString()
    const restaurantId = uuid.v4()

    const newItem : Restaurant =  {
        userId: 'user',
        restaurantId: restaurantId,
        createdAt: timestamp,
        name: newRestaurant.name,
        address: null
    }

    return await data.createRestaurant(newItem)
}


export async function updateRestaurant(restaurantId: string, updateRestaurantRequest: UpdateRestaurantRequest ): Promise<RestaurantUpdate>{
    const updatedRestaurant: RestaurantUpdate = {
        name: updateRestaurantRequest.name,
    }
    return await data.updateRestaurant(restaurantId, updatedRestaurant)
}

export async function deleteRestaurant(restaurantId: string): Promise<String> {
    return data.deleteRestaurant(restaurantId)
}
