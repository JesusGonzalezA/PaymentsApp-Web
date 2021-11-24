import { HOST } from "./host"

export const addPayment = async ( username, password, payment ) => {
    const buffer = new Buffer.from(username + ':' + password)
    const base64 = buffer.toString('base64')
    const response = await fetch(`${HOST}/payment`, {
        method: 'POST',
        headers: {
            'Authorization': `Basic ${base64}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payment)
    })

    const data = await response.json()

    if (response.status === 201)
        return { ok: true, payment: data }
    else 
        return { ok: false, error: data }
}

export const deletePayment = async ( username, password, id ) => {
    const buffer = new Buffer.from(username + ':' + password)
    const base64 = buffer.toString('base64')
    const response = await fetch(`${HOST}/payment/${id}`, {
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

export const updatePayment = async ( username, password, id, newPayment ) => {
    const buffer = new Buffer.from(username + ':' + password)
    const base64 = buffer.toString('base64')
    const response = await fetch(`${HOST}/payment/${id}`, {
        method: 'PUT',
        headers: {
            'Authorization': `Basic ${base64}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPayment)
    })
    
    if (response.status === 200)
        return { ok: true }
    
    const text = await response.text()
    return { ok: false, error: text }
}

export const getOnePayment = async ( username, password, id ) => {
    const buffer = new Buffer.from(username + ':' + password)
    const base64 = buffer.toString('base64')
    const response = await fetch(`${HOST}/payment/${id}`, {
        method: 'GET',
        headers: {
            'Authorization': `Basic ${base64}`
        }
    })
    
    const text = await response.json()

    if (response.status === 200)
        return { ok: true, payment: text }
    else
        return { ok: false, error: text }
}

export const getAllPayments = async ( username, password ) => {
    const buffer = new Buffer.from(username + ':' + password)
    const base64 = buffer.toString('base64')
    const response = await fetch(`${HOST}/payment`, {
        method: 'GET',
        headers: {
            'Authorization': `Basic ${base64}`
        }
    })
    
    const text = await response.json()

    if (response.status === 200)
        return { ok: true, payments: text }
    else
        return { ok: false, error: text }
}