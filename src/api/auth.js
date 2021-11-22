import { HOST } from "./host"

export const login = async ( username, password ) => {
    const response = await fetch(`${HOST}/user/login?username=${username}&password=${password}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if (response.status === 200)
        return { ok: true }
    
    const text = await response.text()
    return { ok: false, error: text }
}

export const register = async ( username, password ) => {
    const response = await fetch(`${HOST}/user`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password
        })
    })

    if (response.status === 201)
        return { ok: true }
    
    const text = await response.text()
    return { ok: false, error: text }
}

export const deleteUser = async ( username, password ) => {
    const buffer = new Buffer.from(username + ':' + password)
    const base64 = buffer.toString('base64')
    const response = await fetch(`${HOST}/user`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Basic ${base64}`
        }
    })

    if (response.status === 200)
        return { ok: true }
    
    const text = await response.text()
    return { ok: false, error: text }
}

export const changePassword = async ( username, password, newPassword ) => {
    const buffer = new Buffer.from(username + ':' + password)
    const base64 = buffer.toString('base64')
    const response = await fetch(`${HOST}/user`, {
        method: 'PUT',
        headers: {
            'Authorization': `Basic ${base64}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password: newPassword
        })
    })
    
    if (response.status === 200)
        return { ok: true }
    
    const text = await response.text()
    return { ok: false, error: text }
}