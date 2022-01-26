import React from "react";

const UserContext = React.createContext('Tonny Robbins');


const UserProvider = UserContext.Provider;
const USerConsumer = UserContext.Consumer;

export { UserProvider, USerConsumer }

export default UserContext;