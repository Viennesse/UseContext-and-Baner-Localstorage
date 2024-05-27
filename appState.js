import AppContext from "./appContext";


const AppState = (Children) => {

    return (
        <AppContext.Provider value= {{message: "To jest message"}}>
            {Children}
        </AppContext.Provider>
    )
}


export default AppState;