import {  Route, Switch } from 'react-router-dom';
import { Main, Group, GroupFind, Login, StdSignUp, TecSignUp, StdMyPlace, TecMyPlace, PwChange, StdSchedule, TecSchedule } from '../components';

function UserRouter() {
  return (
      <Switch>
        <Route exact path="/group" component={Group}></Route>
        <Route exact path="/groupfind" component={GroupFind}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/signup" component={StdSignUp}></Route>
        <Route exact path="/tecsignup" component={TecSignUp}></Route>
        <Route exact path="/myplace" component={StdMyPlace}></Route>
        <Route exact path="/tecmyplace" component={TecMyPlace}></Route>
        <Route exact path="/pwchange" component={PwChange}></Route>
        <Route exact path="/schedule" component={StdSchedule}></Route>
        <Route exact path="/tecschedule" component={TecSchedule}></Route>
        <Route exact path="/" component={Main}></Route>
        
      </Switch>
  );
}

export default UserRouter;



