import axios from "axios"
import getConfigToken from "../utils/getConfigToken"
import { useState } from "react"
import { getCartThunk } from "../store/slices/cart.slice"
import { useDispatch } from "react-redux"


const usePurchases = () => {

    const [purchases, setPurchases]= useState()

    const dispatch = useDispatch()

    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases'
    //post
    const makeAPurchase = () => {
        axios.post(url, {}, getConfigToken())
            .then(res => {
                console.log(res.data)
                dispatch(getCartThunk())
            })
            .catch(err => console.log(err))
    }

    //get
    const getAllPurchases = () => {
        axios.get(url, getConfigToken())
            .then(res => setPurchases(res.data))
            .catch(err => console.log(err))
    }
    return { makeAPurchase, getAllPurchases, purchases }
}

export default usePurchases
