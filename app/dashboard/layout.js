import Provider from "../components/provider"

export default function Layout({ children }){
    return (<Provider>
        {children}
    </Provider>)
}