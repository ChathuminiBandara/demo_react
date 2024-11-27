import './App.css';
// import Button, { FancyButton, SmallButton } from './Button';
import Item from "./component/Item.tsx";
// import Subject from "./component/Subject.tsx";
// import ButtonComponent from "./component/ButtonComponent.tsx";
import {useState} from "react";

function App() {
  /*  const content : string = 'Hello World !';
    const bool : boolean = true;
*/

    const itemsArray = [];
    for (const ItemsArrayElemet of itemList) {
        itemsArray.push(
            <Item title={ItemsArrayElemet.title} desc={ItemsArrayElemet.desc} />
        )
    }
    //const [content, setContent] = useState('Default Content');
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    /* function handleClick(type : string) {
         console.log("clicked");
         alert(type+'Clicked!')
         setContent(type);
     }*/
  /*  function handleClick(type : string) {
        console.log("clicked");
        alert(type+'Added 1!')
        setContent(type);
    }*/

    return (
        <>

            <h1>Current Count: {count}</h1>
            <button onClick={handleClick}>Add 1</button>

            {/*  {1+1}
            {content}
            {bool ? 'true' : 'false'}
            <Button />
            <FancyButton />
            <SmallButton />
            <Item title='RAD' desc='Mobile App Development' />
            <Item title='WEB' desc='Web App Development' />
            <Item title='MAD' desc='App Development' />

            */}
            {/*{itemsArray}*/}
            {/* <Item {...itemList[0]}  />
            <Item {...itemList[1]}  />
            <Item {...itemList[2]}  />*/}
            {/* <Item title={itemList[0].title} desc={itemList[1].desc} />
            <Item title={itemList[1].title} desc={itemList[2].desc} />
            <Item title={itemList[2].title} desc={itemList[3].desc} />*/}
i
            {/*<Subject name = 'RAD'>Lorem ipsum</Subject>
            <Subject name = 'MAD'>Lorem ipsum</Subject>
            <Subject name = 'CAD'>Lorem ipsum</Subject>*/}

            {/* ButtonComponent usage */}
            {/*<ButtonComponent
                name="Dashboard"
                onClick={() => handleClick('Dashboard')}
            />
            <ButtonComponent
                name="Add Customer"
                onClick={() => handleClick('Add Customer')}
            />
            <ButtonComponent
                name="Delete Customer"
                onClick={() => handleClick('Delete Customer')}
            />*/}

            <br/>


            {/*{content}*/}

            {/*<button onClick={()=>{handleClick('Dashboard')}}>Dashboard !</button>
            <button onClick={()=>{handleClick('Add Customer')}}>Add Customer !</button>
            <button onClick={()=>{handleClick('Delete Customer')}}>Delete Customer !</button>
*/}
            {/*<button onClick={handleClick}>Add Customer !</button>
            <button onClick={handleClick}>Delete Customer !</button>*/}
        </>
    );
}

const itemList = [
    {
        title: 'RAD',
        desc: 'Mobile App Development',
    },
    {
        title: 'WEB',
        desc: 'Web App Development',
    },
    {
        title: 'WEB',
        desc: 'Web App Development',
    }
]

export default App;
