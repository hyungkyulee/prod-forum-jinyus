import React from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { listPosts, listProducts, listBlogs, listComments } from '../graphql/queries'

import Image from '../components/Image'
import { Link } from 'gatsby'
import { slugify } from '../../utils/helpers'
// import { FaTimes } from 'react-icons/fa'



class ArticleList extends React.Component {
  state = {
    articleList: [],
    currentEntry: {},
    editingIndex: []
  }
  componentDidMount() {
    this.fetchArticleList()
  }
  fetchArticleList = async() => {
    const articleData = await API.graphql(graphqlOperation(listPosts))
    const entries = articleData.data.listPosts.items
    console.log(" Article entries: ", entries)
    this.setState({ articleList: entries })
  }
  editArticle = (entry, index) => {
    const editingIndex = index
    this.setState({ editingIndex, currentEntry: entry })    
  }
  saveArticle = async index => {
    const articleList = [...this.state.articleList]
    articleList[index] = this.state.currentEntry
    // update entry in database
    this.setState({ editingIndex: null, articleList })
  }
  deleteArticle = async index => {
    const articleList = [...this.state.articleList.slice(0, index), ...this.state.articleList.slice(index + 1)]
    this.setState({ articleList })
  }
  onChange = event => {
    const currentEntry = {
      ...this.state.currentEntry,
      [event.target.name]: event.target.value
    }
    
    this.setState({ currentEntry })
  }
  render() {
    const { articleList, currentEntry, editingIndex } = this.state
    console.log('currentEntry: ', currentEntry)
    return (
      <div>
        <h2>articleList</h2>
        {
          articleList.map((entry, index) => {
            const isEditing = editingIndex === index
            if (isEditing) {
              return (
                <div className="border-b py-10" key={entry.id}>
                  <div className="flex entrys-center">
                    <Link to={slugify(entry.title)}>
                      <Image className="w-32 m-0" src={entry.image} alt={entry.title} />
                    </Link>
                    <input
                      onChange={(e) => this.onChange(e, index)}
                      className="ml-8 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value={currentEntry.title}
                      placeholder="entry title"
                      name="title"
                    />
                    <div className="flex flex-1 justify-end entrys-center">
                      <p className="m-0 text-sm mr-2">Contents</p>
                      <input
                        onChange={this.onChange}
                        className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={currentEntry.contents}
                        name="contents"
                        placeholder="entry contents"
                      />
                      <input
                        onChange={this.onChange}
                        className="ml-16 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={currentEntry.date}
                        name="date"
                        placeholder="entry date"
                      />
                    </div>
                    <div role="button" onClick={() => this.saveArticle(index)} className="m-0 ml-10 text-gray-900 text-s cursor-pointer">
                      <p className="text-sm ml-10 m-0">Save</p>
                    </div>
                  </div>
                </div>
              )
            }
            return (
              <div className="border-b py-10" key={entry.id}>
                <div className="flex entrys-center">
                  <Link to={slugify(entry.title)}>
                    <Image className="w-32 m-0" src={entry.image} alt={entry.title} />
                  </Link>
                  <Link to={slugify(entry.title)}>
                    <p className="m-0 pl-10 text-gray-600 text-sm">
                      {entry.title}
                    </p>
                  </Link>
                  <div className="flex flex-1 justify-end">
                    <p className="m-0 pl-10 text-gray-900 tracking-tighter text-sm">Author: {entry.author}</p>
                    <p className="m-0 pl-20 text-gray-900 tracking-tighter font-semibold">
                      {entry.author}
                    </p>
                  </div>
                  <div className="flex entrys-center m-0 ml-10 text-gray-900 text-s cursor-pointer">
                    <button onClick={() => this.deleteArticle(index)}>Delete</button>
                    <p role="button" onClick={() => this.editArticle(entry, index)} className="text-sm ml-10 m-0">Edit</p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default ArticleList