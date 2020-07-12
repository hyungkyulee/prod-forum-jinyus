import React from 'react'
import CreateArticle from './formComponents/CreateArticle'
import ArticleList from '../templates/ArticleList'

class ArticleSelector extends React.Component {
  state = {
    viewState: 'view'
  }
  toggleViewState(viewState) {
    this.setState(() => ({ viewState }))
  }
  render() {
     return (
       <div>
          <h3>Article 1</h3>
          <div className="flex">
            <p role="button" className="mr-4 cursor-pointer hover:text-secondary" onClick={() => this.toggleViewState('view')}>View</p>
            <p role="button" className="cursor-pointer hover:text-secondary" onClick={() => this.toggleViewState('add')}>Add</p>
          </div>
          {
            this.state.viewState === 'view' ? (
              <ArticleList />
            ) : (<CreateArticle />)
          }
          <button onClick={this.props.signOut} className="bg-secondary hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Sign Out
          </button>
       </div>
     )
  }
}

export default ArticleSelector