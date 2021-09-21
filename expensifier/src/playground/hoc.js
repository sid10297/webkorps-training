// HOC
const Info = ({ info }) => (
  <div>
    <h1>Info</h1>
    <p>This is info : {info}</p>
  </div>
)

// const withAdminWarning = WrappedComponent => {
//   return props => (
//     <div>
//       {props.isAdmin ? 'private' : 'enjoy'}
//       <WrappedComponent {...props} />
//     </div>
//   )
// }

// const AdminInfo = withAdminWarning(Info)

const requireAuth = WrapperComponent => {
  return props => (
    <div>
      {props.isAuth ? 'Hi' : 'NOthing'}
      <p>Hello</p>
      <WrapperComponent {...props} />
    </div>
  )
}

const AuthInfo = requireAuth(Info)

// ReactDOM.render(
//   <AdminInfo isAdmin={true} info='be serious' />,
//   document.getElementById('root')
// )
