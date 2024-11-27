import './App.css'
import DashBoard from "./component/DashBoard.tsx";
import LoginComponent from "./component/LoginComponent.tsx";

function AppNew(){
    const isLogin : boolean=false;
    /*let content;

    if(isLogin){
        content= <DashBoard/>
    }
    else{
        content= <LoginComponent/>
    }*/

    return(
        <div>
            {isLogin ? <DashBoard/> : <LoginComponent/>}
        </div>
    )
}

export default AppNew;