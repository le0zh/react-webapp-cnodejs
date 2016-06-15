/**
 * 路由配置文件
 */
import React from 'react'
import { Route, Link, IndexRoute, hashHistory } from 'react-router'
import Root from './components/Root'
import NewsList from './components/NewsList'
import Detail from './components/Detail'

export default (
  <Route path ='/'>
    <IndexRoute component={Root}></IndexRoute>
    <Route path ='/list/:tag' component={Root}></Route>
    <Route path ='/detail/:id' component={Detail}></Route>
  </Route>
)
