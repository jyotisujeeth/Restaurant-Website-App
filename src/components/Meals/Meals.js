import React from 'react'
import MealItems from './MealItems'
import classes from './Meals.module.css'
import Card from '../UI/Card/Card'

const Meals = () => {
const arr=[{name:'Sushi',details:'Finest fishes and veggies',price:60,quantity:0},
{name:'Dosa',details:'Breakfast',price:50,quantity:0},
{name:'Idli',details:'two piece per plate',price:20,quantity:0 },
{name:'Roti',details:'South Indian',price:30,quantity:0},]


return (
    <Card>
        <div className={classes.meals}>       
            <ul>
        {
           arr.map(item=>{
                return <MealItems name={item.name}
                details={item.details}
                price={item.price}
                key={Math.random().toString()}
                id={item.name}
                item={item}/>
            })
        }
        </ul>
        </div>
        </Card>
)
}

export default Meals;