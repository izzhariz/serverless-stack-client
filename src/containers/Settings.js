import React, {useState, useEffect } from 'react';
import { API } from "aws-amplify";
import { useHistory } from "react-router-dom";
import { onError } from "../libs/errorLib";
import config from "../config";
import { Elements, StripeProvider } from 'react-stripe-elements';
import BillingForm from "../components/BillingForm";
import { LinkContainer } from 'react-router-bootstrap';
import LoaderButton from "../components/LoaderButton";
import "./Settings.css"

export default function Settings() {
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);
    const [stripe, setStripe] = useState(null);

    useEffect(() => {
        setStripe(window.Stripe(config.STRIPE_KEY));
    }, []);

    function billUser(details) {
        return API.post("notes", "/billing", {
            body: details
        });
    }

    async function handleFormSubmit(storage, { token, error }) {
        if (error) {
            onError(error);
            return;
        }
        setIsLoading(true);

        try {
            await billUser({
                storage,
                source: token.id
            });

            alert("Your card has been charged successfully!");
            history.push("/");
        } catch(e) {
            onError(e);
            setIsLoading(false);
        }
    }

    return (
        <div className="Settings">
            <LinkContainer to="/settings/email">
                <LoaderButton
                    block
                    size="lg"
                >
                    Change Email
                </LoaderButton>
            </LinkContainer>
            <LinkContainer to="/settings/password">
                <LoaderButton
                    block
                    size="lg"
                >
                    Change Password
                </LoaderButton>
            </LinkContainer>
            <hr />
            <StripeProvider stripe={stripe}>
                <Elements
                    fonts={[
                        {
                            cssSrc:
                            "https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800",
                        },
                    ]}
                >
                    <BillingForm 
                        isLoading={isLoading} 
                        onSubmit={handleFormSubmit} 
                    />
                </Elements>
            </StripeProvider>
            <div className="warning">
                *Please use the following test credit card for payments*
                <br />
                4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
            </div>
        </div>
    );
}