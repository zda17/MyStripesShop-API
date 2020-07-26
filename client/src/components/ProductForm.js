import React from 'react';
import { useForm } from "react-hook-form";

//style
import '../stylesheets/ProductForm.scss';

//components
import Header from '../components/Header';

const ProductForm = (props) => {

    const { products } = props;

    const product = products[0];

    const colors = [];
    products.map(product => colors.includes(product.color) ? null : colors.push(product.color));

    const sizes = [];
    products.map(product => sizes.includes(product.size) ? null : sizes.push(product.size));

    const {handleSubmit, register, errors } = useForm();
    const onSubmit = (values) =>  {console.log(values)};

    const { darkBlue, blue, green, peach, gold, red, yellow, orange, purple, pink,
            xs, s, m, l, xl, xxl, xxxl } = props;



    //add to cart button
    const onSubmit = (values) =>  {
        const lineItem = {name: product.name, price: price_USD, color: values.color, size: values.size, photo_url: product.photo_url};
        setCart(currentState => [...currentState, lineItem]);
    };

    return(
        <form method="post" className="ProductForm" onSubmit={handleSubmit(onSubmit)}>
            <div className="ProductOptions">
                <div className="ProductSelect">
                 <Header 
                    title="COLOR" 
                    headerClass="Other-Header"
                    divClass="Container-Header"
                    hClass="Product-Header Padding"
                    subHClass="No-Sub"
                 /> {/*Needs different hClass to make text smaller*/}
                  <div className="Colors">
                    <ul>
                    {errors.color && (<p>COLOR IS REQUIRED.</p>)}{/*Need to make better with scss*/}
                        {colors.map(color => (
                        <li className={color}>{/*<-- prop used to display the colors or not*/}
                            <input type="radio" name="color" id={color} value={color} ref={register({ required: true })}/>
                            <label className={color} htmlFor={color}><span className={color}></span><span className={color+"__selector"}/></label>
                        </li>
                    </ul>
                    {errors.color && (<p>Color is required.</p>)}
                 </div>
                 <Header 
                    title="SIZES" 
                    headerClass="Other-Header"
                    divClass="Container-Header"
                    hClass="Product-Header Padding"
                    subHClass="No-Sub"
                 /> {/*Needs different hClass to make text smaller*/}
                 <div className="Sizes">
                    <ul>
                    {errors.size && (<p>SIZE IS REQUIRED.</p>)}{/*Need to make better with scss*/}
                        {sizes.map(size => (
                        <li className={size}> {/*<--prop used for showing out of order (not made yet)*/}
                            <input type="radio" name="size" id={size} value={size} ref={register({ required: true })}/>
                            <label htmlFor={size}><span className={size}>{size}</span></label>
                        </li>
                       ))  }
                    </ul>
                    {errors.size && (<p>Size is required.</p>)}
                 </div>
                 <input type="submit" value="ADD TO CART"/>
                </div>
            </div>
        </form>
    );
};

export default ProductForm;