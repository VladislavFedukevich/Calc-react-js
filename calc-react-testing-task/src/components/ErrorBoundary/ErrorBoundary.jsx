import React, { useState } from "react";
const ErrorBoundary = ({ children }) => {
    const [hasError, setHasError] = useState(false);

    const handleOnError = (error, errorInfo) => {
        console.log("An error has occurred:", error, errorInfo);
        setHasError(true);
    };

    if (hasError) {
        return <h1>Something went wrong.</h1>;
    }

    return (
        <>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    onError: handleOnError,
                });
            })}
        </>
    );
};

export default ErrorBoundary;
