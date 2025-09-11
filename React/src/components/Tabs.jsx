import React from 'react';

export default function Tabs({ children, buttons, ButtonsContainer = 'div' }) {
    const Container = ButtonsContainer;
    return (
        <>
            <Container>
                {buttons}
            </Container>
            {children}
        </>
    );
}

