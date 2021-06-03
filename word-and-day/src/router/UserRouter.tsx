import {  Route, Switch } from 'react-router-dom';
import { Main, Group, GroupFind, Login, StdSignUp, TecSignUp, StdMyPlace, TecMyPlace, PwChange, StdSchedule, TecSchedule, MyWord } from '../components';

function UserRouter() {
  return (
      <Switch>
        <Route exact path="/group" component={Group} />
        <Route exact path="/groupfind" component={GroupFind} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={StdSignUp} />
        <Route exact path="/tecsignup" component={TecSignUp} />
        <Route exact path="/myplace" component={StdMyPlace} />
        <Route exact path="/myword" component={MyWord} />
        <Route exact path="/tecmyplace" component={TecMyPlace} />
        <Route exact path="/pwchange" component={PwChange} />
        <Route exact path="/schedule" component={StdSchedule} />
        <Route exact path="/tecschedule" component={TecSchedule} />
        <Route exact path="/" component={Main} />
        
      </Switch>
  );
}

export default UserRouter;



