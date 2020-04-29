import React from 'react';

const Home = React.lazy(() => import('./components/Home'));
const Dog = React.lazy(() => import('./components/Dog'));
const Cat = React.lazy(() => import('./components/Cat'));
const Login = React.lazy(() => import('./components/Login'));
const Logout = React.lazy(() => import('./components/Logout'));
const Calculator = React.lazy(() => import('./components/Calculator'));
const Sidebar = React.lazy(()=> import('./components/Sidebar'));
const Chatbot = React.lazy(()=> import('./components/chatbot/Chatbot'));
const G1 =React.lazy(()=>import('./components/G1'));

// ----------------------

const routes = [
  
  {exact: true,  private:false, active:true, name: 'home',       component: Home,        path: '/'},
  {exact: false, private:true,  active:true, name: 'Dog',        component: Dog,         path: '/dog' },
  {exact: false, private:false, active:true, name: 'Cat',        component: Cat,         path: '/cat' },
  {exact: false, private:false, active:true, name: 'Login',      component: Login,       path: '/login' },
  {exact: false, private:false, active:true, name: 'Logout',     component: Logout,      path: '/logout' },
  {exact: false, private:false, active:true, name: 'Calculator', component: Calculator,  path: '/calculator' },
  {exact: false, private:false, active:true, name: 'Sidebar',    component: Sidebar,     path: '/sidebar'},
  {exact: false, private:false, active:true, name: 'Chatbot',    component: Chatbot,     path: '/chatbot'},
  {exact: false, private:false, active:true, name: 'G1',    component: G1,     path: '/g1'},
  
];

export default routes;

