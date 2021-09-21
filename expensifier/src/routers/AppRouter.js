import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ExpenseDashboardPage from './ExpenseDashboardPage'
import AddExpensePage from './AddExpensePage'
import EditExpensePage from './EditExpensePage'
import HelpPage from './HelpPage'
import NotFound from './NotFound'
import Header from './Header'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact={true} path='/' component={ExpenseDashboardPage} />
        <Route path='/create/:id' component={AddExpensePage} />
        <Route path='/edit' component={EditExpensePage} />
        <Route path='/help' component={HelpPage} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default AppRouter
