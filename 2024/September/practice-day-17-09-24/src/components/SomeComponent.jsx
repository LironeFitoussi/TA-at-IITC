import React from 'react';

const SomeComponent = ({ children }) => {

    console.log(children);
    
    return (
        <div style={{
            backgroundColor: 'red',
        }}>
            My Custom TEXt
            {/* Your JSX content goes here */}
            {children}
        </div>
    );
};

export default SomeComponent;