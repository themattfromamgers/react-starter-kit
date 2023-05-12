import Nav from "./Others/Nav";
import Users from './Others/Users'
import User from './Others/User'
import Error404 from './Others/Error404'
import {Route, Switch, Link, useRouteMatch, NavLink} from 'react-router-dom';


function Navs(){
    const {path, url} = useRouteMatch()
    console.log(path, url)
    return(
        <>
            <h1>APP</h1>
    <Link to='/'>Home</Link>
    <Link to='/Nav'>Nav</Link>
    <NavLink to='/Users'>Users</NavLink>
    <Switch>
      <Route path='/Nav'component={Nav} />
      <Route path='/Users'component={Users} />
      <Route path='/user/id'component={User} />
      <Route path='*'component={Error404} />
      
      
    </Switch>
        </>
    )
}

export default Navs