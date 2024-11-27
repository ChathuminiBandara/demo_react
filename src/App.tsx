import './App.css';
import Button, { FancyButton, SmallButton } from './Button';
import Item from "./component/Item.tsx";

function App() {
    const content : string = 'Hello World !';
    const bool : boolean = true;

    return (
        <>
            {1+1}
            {content}
            {bool ? 'true' : 'false'}
            <Button />
            <FancyButton />
            <SmallButton />
            <Item title='RAD' desc='Mobile App Development' />
            <Item title='WEB' desc='Web App Development' />
            <Item title='MAD' desc='App Development' />
        </>
    );
}

export default App;
