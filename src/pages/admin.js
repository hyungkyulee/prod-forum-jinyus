import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Title from '../components/title'
import { Auth } from 'aws-amplify'
import SignUp from '../components/formComponents/SignUp'
import ConfirmSignUp from '../components/formComponents/ConfirmSignUp'
import SignIn from '../components/formComponents/SignIn'
import ArticleList from '../components/article-list'

class Admin extends React.Component {
  state = { formState: 'signUp', isAdmin: false }
  toggleFormState = (formState) => {
    this.setState(() => ({ formState }))
  }
  async componentDidMount() {

    /*
      the user state can be persisted by checking to see if the user is signed in when the app loads. 
      */
    const user = await Auth.currentAuthenticatedUser()
    const { signInUserSession: { idToken: { payload }}} = user
    // if (payload["cognito:groups"] && payload["cognito:groups"].includes("Admin")) {
    //   this.setState({ formState: 'signedIn', isAdmin: true })
    // }
    this.setState({formState: 'signedIn'})
  }

  signUp = async (form) => {
    const { username, email, password } = form
    // step 1: Sign up a new user
    await Auth.signUp({
    username, password, attributes: { email }
    })
    this.setState({ formState: 'confirmSignUp' })
  }
  
  confirmSignUp = async (form) => {
    const { username, authcode } = form
    // step 2: Use MFA to confirm the new user
    await Auth.confirmSignUp(username, authcode)
    this.setState({ formState: 'signIn' })
  }
  
  signIn = async (form) => {
    const { username, password } = form
    // step 3: Sign in the new user
    await Auth.signIn(username, password)
    // step 4: Check to see if the user is an Admin, if so, show the Article List.
    const user = await Auth.currentAuthenticatedUser()
    const { signInUserSession: { idToken: { payload }}} = user
    // if (payload["cognito:groups"] && payload["cognito:groups"].includes("Admin")) {
    // this.setState({ formState: 'signedIn', isAdmin: true })
    // }
    this.setState({formState: 'signedIn'})
  }
    
  signOut = async() => {
    // allow users to sign out
    await Auth.signOut()
    this.setState({ formState: 'signUp' })
  }

  render() {
    const { formState, isAdmin } = this.state
    const renderForm = (formState, state) => {
      switch(formState) {
        case 'signUp':
          return <SignUp {...state} signUp={this.signUp} toggleFormState={this.toggleFormState} />
        case 'confirmSignUp':
          return <ConfirmSignUp {...state} confirmSignUp={this.confirmSignUp} />
        case 'signIn':
          return <SignIn {...state} signIn={this.signIn} toggleFormState={this.toggleFormState} />
        case 'signedIn':
          // return isAdmin ? <Inventory {...state} signOut={this.signOut} /> : <h3>Not an admin</h3>
          // return isAdmin ? <ArticleList {...state} signOut={this.signOut} /> : <h3>Not an admin</h3>
          return <ArticleList {...state} signOut={this.signOut} />
        default:
          return null
      }
    }
    
    return (
      <Layout>
        <Title text="Welcome - Signin" />
        <div>
          <Link to="/">Home</Link> | <Link to="/about">About Jinyus</Link> | <Link to="/admin">Admin</Link>
        </div>
        {
          renderForm(formState)
        }
      </Layout>
    )
  }
}

export default Admin

