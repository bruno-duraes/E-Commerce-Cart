import { Card, Typography } from 'antd'
import React from 'react'
import './styles.css'

const ProductCard = ({ description, category, price }) => {
    return <Card className="Card" title={description}>
        <div className="CardContent">
            <Typography>category: {category}</Typography>
            <Typography> price: {price}</Typography>
        </ div>
    </Card>
}

export { ProductCard }