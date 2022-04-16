import { User } from '../types'
import { fetchApi } from './fetchApi'

const CreateUser = async (createUserDTO: User.CreateUser) => {
    let userData = {
        'data': createUserDTO
    }

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    }

    const result = fetchApi<User.User>(`/users`, requestOptions)
    return result;
}


// todo: check this and above   
const DeleteUser = async (userId: Number) => {
    const requestOptions = {
        method: 'DELETE',
    }

    return fetchApi(`/users/${userId}`, requestOptions)
}


const UserService = {
    CreateUser,
    DeleteUser
}

export { UserService }