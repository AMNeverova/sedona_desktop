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
import ButtonSwitchToEnglish from './ButtonSwitchToEnglish'

function Container(props) {
    return (
        <div className='container'>
            <ButtonSwitchToEnglish textContent={props.textContent.buttonSwitchToEnglish} dispatch={props.dispatch} />
            <Heading1 textContent={props.textContent.headings} />
            <Impression state={props.state.chooseImpressionRadiobutton} dispatch={props.dispatch} headingText={props.textContent.headings.headingForImpression} textContent={props.textContent.impression} />
            <Present state={props.state.inputFullname} headingText={props.textContent.headings.headingForPresent} dispatch={props.dispatch} textContent={props.textContent.present} />
            <Stripe className='stripe' />
            <Heading4 className="heading-4 contact-information" textContent={props.textContent.headings.headingForContacts} />
            <Stripe className='stripe' />
            <Phone state={props.state.inputPhone} dispatch={props.dispatch} textContent={props.textContent.inputPhone} />
            <Mail state={props.state.inputEmail} dispatch={props.dispatch} textContent={props.textContent.inputEmail} />
            <SightsHeading textContent={props.textContent.headings.headingForSights} /> 
            <Row4 state={props.state.chooseSightsCheckbox} dispatch={props.dispatch} textContent={props.textContent.checkboxes} />
            <Stripe className='stripe' />
            <Heading4 className='heading-4' textContent={props.textContent.headings.headingForDescribeEmotions} />
            <Stripe className='stripe' />
            <Textarea dispatch={props.dispatch} state={props.state.describeEmotions} textContent={props.textContent.describeEmotions.placeholder} />
            <Row5 state={props.state} dispatch={props.dispatch} textContent={props.textContent.row5} />
            <Footer textContent={props.textContent.footer} />
        </div>
    )
}

export default Container;

