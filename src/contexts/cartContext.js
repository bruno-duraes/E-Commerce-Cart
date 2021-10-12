import React, { createContext, useCallback, useContext, useReducer } from 'react'

const cartContext = createContext()

const cartReducer = (state, { type, payload }) => {
    switch (type) {
        case 'ADD_PRODUCTS':
            return [...state, payload]
        case 'REMOVE_PRODUCT':
            return state.filter(({ id }) => payload.id !== id)
        default:
            return state
    }
}

export const CartProvider = ({ initialState, children }) => {
    const [cartProducts, dispatchCartProducts] = useReducer(cartReducer, initialState)

    return <cartContext.Provider value={{ cartProducts, dispatchCartProducts }}>{children}</cartContext.Provider>
}

export const useCartContext = () => {
    const { cartProducts, dispatchCartProducts } = useContext(cartContext)

    const addProducts = useCallback((products) => {
        for (const product of products) {
            dispatchCartProducts({ type: 'ADD_PRODUCTS', payload: product })
        }
    }, [dispatchCartProducts])

    const removeProduct = useCallback((product) => {
        dispatchCartProducts({ type: 'REMOVE_PRODUCT', payload: product })
    }, [dispatchCartProducts])

    return { cartProducts, addProducts, removeProduct }
}