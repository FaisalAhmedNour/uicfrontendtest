import ApiService from './ApiService'

export async function apiSignIn(data) {
    return ApiService.fetchData({
        url: '/sign-in',
        method: 'post',
        data,
    })
}

export async function apiSignUp(data) {
    return ApiService.fetchData({
        url: '/sign-up',
        method: 'post',
        data,
    })
}

export async function apiSignOut(data) {
    return ApiService.fetchData({
        url: '/sign-out',
        method: 'post',
        data,
    })
}

export async function apiForgotPassword(data) {
    return ApiService.fetchData({
        url: '/forgot-password',
        method: 'post',
        data,
    })
}

export async function apiResetPassword(data) {
    return ApiService.fetchData({
        url: '/reset-password',
        method: 'post',
        data,
    })
}

// get requests 
export async function getServices(data) {
    return ApiService.fetchData({
        url: '/services',
        method: 'get',
        data,
    })
}

export async function getBuyers(data) {
    return ApiService.fetchData({
        url: '/buyers',
        method: 'get',
        data,
    })
}

export async function getProcesses(data) {
    return ApiService.fetchData({
        url: '/processes',
        method: 'get',
        data,
    })
}

// Post requests
export async function createService(data) {
    return ApiService.fetchData({
        url: '/create_service',
        method: 'post',
        data,
    })
}

export async function createBuyers(data) {
    return ApiService.fetchData({
        url: '/create_buyer',
        method: 'post',
        data,
    })
}

export async function createProcess(data) {
    return ApiService.fetchData({
        url: '/process_create',
        method: 'post',
        data,
    })
}



// export async function addClient(data) {
//     return ApiService.fetchData({
//         url: '/client',
//         method: 'post',
//         data,
//     })
// }
// export async function clientList(data) {
//     return ApiService.fetchData({
//         url: '/client',
//         method: 'get',
//         data,
//     })
// }
// export async function addUserApi(data) {
//     return ApiService.fetchData({
//         url: '/user/register',
//         method: 'post',
//         data,
//     })
// }

// export async function getUserApi(data) {
//     return ApiService.fetchData({
//         url: '/user/list',
//         method: 'get',
//         data,
//     })
// }
// export async function createTaskApi(data) {
//     return ApiService.fetchData({
//         url: '/task',
//         method: 'post',
//         data,
//     })
// }

// export async function getTaskApi(data) {
//     return ApiService.fetchData({
//         url: '/task',
//         method: 'get',
//         data,
//     })
// }

// export async function getMyActiveTaskListApi(data) {
//     return ApiService.fetchData({
//         url: '/mytasks/active',
//         method: 'get',
//         data,
//     })
// }
// export async function getMyCompletedTaskListApi(data) {
//     return ApiService.fetchData({
//         url: '/mytasks/completed',
//         method: 'get',
//         data,
//     })
// }
// export async function getAvilableTaskListApi(data) {
//     return ApiService.fetchData({
//         url: '/task',
//         method: 'get',
//         params: data,
//     })
// }
// export async function updateUser(id,data) {
//     return ApiService.fetchData({
//         url: '/user/'+id,
//         method: 'PUT',
//         data,
//     })
// }
// export async function updateClient(id,data) {
//     return ApiService.fetchData({
//         url: '/client/'+id,
//         method: 'PUT',
//         data,
//     })
// }
// export async function deleteClientAPI(id) {
//     return ApiService.fetchData({
//         url: '/client/'+id,
//         method: 'DELETE',
//     })
// }

// export async function deleteTaskAPI(id) {
//     return ApiService.fetchData({
//         url: '/task/'+id,
//         method: 'DELETE',
//     })
// }

// export async function deleteUserAPI(id) {
//     return ApiService.fetchData({
//         url: '/user/'+id,
//         method: 'DELETE',
//     })
// }
