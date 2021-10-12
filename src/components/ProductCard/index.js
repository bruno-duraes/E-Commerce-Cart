import { Card, Typography } from 'antd'
import React from 'react'
import './styles.css'

const ProductCard = ({ product, handleChange }) => {
    const {category, price, description } = product
    return <Card className="Card" title={description}>
        <div className="CardContent">
        <Typography>category: {category}</Typography>
        <Typography> price: {price}</Typography>
         <input
          type='checkbox'
          onChange={(ev) => handleChange(product,ev)}
          />
        </ div>
    </Card>
}

export { ProductCard }