import React from 'react';
import './Inventory.css';

const Inventory = (props) => {
    const inventory = props.inventory;
    const convert= num=>{
        const newNum = num.toFixed(2);
        return Number(newNum);
    }
    const totalPrice=convert( inventory.reduce((total, crs) => total + crs.price, 0));
    const vat =convert( totalPrice/20);
    const total =convert( totalPrice+vat );
    

    return (
        <div className='right'>
            <p style={{color:'#333333', fontSize:'18px', fontWeight: 'bolder', textAlign: 'center'}}>Purchage <br/> Summery</p>
                    <p>Total Course:  {inventory.length}<br/>Course Price: {totalPrice}<br/>
                    Vat: {vat}
                    </p>
                    <h2>Total Amount: <br/>{total}</h2>
                    <button>View Details</button>
        </div>
    );
};

export default Inventory;