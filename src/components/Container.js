import React from 'react';
import Heading1 from './Heading1.js';
import Impression from './Impression';
import Present from './Present';
import Stripe from './Stripe';
import Heading4 from './Heading4';
import Phone from './Phone';
import Mail from './Mail';
import SightsHeading from './SightsHeading';
import Row4 from './Row4';
import Textarea from './Textarea';
import Row5 from './Row5';
import Footer from './Footer';

function Container(props) {
    return (
        <div className='container'>
            <Heading1 />
            <Impression state={props.state.radiobutton} dispatch={props.dispatch} />
            <Present inputFullname={props.state.inputFullname} dispatch={props.dispatch} />
            <Stripe className='stripe' />
            <Heading4 className="heading-4 contact-information" heading4Text='контактная информация'/>
            <Stripe className='stripe' />
            <Phone state={props.state.inputPhone} dispatch={props.dispatch} />
            <Mail state={props.state.inputEmail} dispatch={props.dispatch} />
            <SightsHeading /> 
            <Row4 checkboxesState={props.state.checkbox} dispatch={props.dispatch} />
            <Stripe className='stripe' />
            <Heading4 className='heading-4' heading4Text='опишите свои эмоции' />
            <Stripe className='stripe' />
            <Textarea dispatch={props.dispatch} state={props.state.describeEmotions} />
            <Row5 state={props.state} dispatch={props.dispatch} />
            <Footer />
        </div>
    )
}

export default Container;

