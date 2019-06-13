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
import data from '../redux/data_rus.json';

function Container(props) {
    return (
        <div className='container'>
            <Heading1 headingTexts={data.headings} />
            <Impression headingText={data.headings.headingForImpression} state={props.state.chooseImpressionRadiobutton} dispatch={props.dispatch} />
            <Present inputFullname={props.state.inputFullname} dispatch={props.dispatch} />
            <Stripe className='stripe' />
            <Heading4 className="heading-4 contact-information" heading4Text={data.headings.headingForContacts}/>
            <Stripe className='stripe' />
            <Phone state={props.state.inputPhone} dispatch={props.dispatch} />
            <Mail state={props.state.inputEmail} dispatch={props.dispatch} />
            <SightsHeading headingText={data.headings.headingForSights} /> 
            <Row4 checkboxesState={props.state.chooseSightsCheckbox} dispatch={props.dispatch} />
            <Stripe className='stripe' />
            <Heading4 className='heading-4' heading4Text={data.headings.headingForDescribeEmotions} />
            <Stripe className='stripe' />
            <Textarea dispatch={props.dispatch} state={props.state.describeEmotions} />
            <Row5 buttonText={data.buttonSendReview} textObligatory={data.obligatoryText} state={props.state} dispatch={props.dispatch} />
            <Footer texts={data.footer} />
        </div>
    )
}

export default Container;

