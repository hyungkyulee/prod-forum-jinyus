import React from 'react'

const initialState = {
  title: '', author: '', date: '', categories: [], image: '', contents: '', comments: ''
}

class CreateArticle extends React.Component {
  state = initialState
  clearForm = () => {
    this.setState(() => (initialState))
  }
  onChange = (e) => {
    this.setState({ [e.target.title]: e.target.value})
  }
  onImageChange = async (e) => {
    const file = e.target.files[0];
    this.setState({ image: file })
    // const storageUrl = await Storage.put('example.png', file, {
    //     contentType: 'image/png'
    // })
    // this.setState({ image: storageUrl  })
  }
  addItem = async () => {
    const { title, author, date, categories, image, contents, comments } = this.state
    if (!title || !author || !date || !categories.length || !contents || !comments || !image) return
    // add to database
    this.clearForm()
  }
  render() {
    const {
      title, author, date, categories, image, contents, comments
    } = this.state
    return (
      <div>
        <h3>New Article</h3>
        <div className="flex flex-1 justify-center">
          <div className="w-full max-w-144">
            <form className="bg-white shadow-xs rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                  Article title
                </label>
                <input
                onChange={this.onChange}
                value={title} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Article title" name="title" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
                  Article date
                </label>
                <input
                onChange={this.onChange}
                value={date} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="date" type="text" placeholder="Article date" name="date" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contents">
                  Article contents
                </label>
                <input
                onChange={this.onChange}
                value={contents} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="contents" placeholder="Article contents" name="contents" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Article image">
                  Article image
                </label>
                <input
                  type="file"
                  onChange={(e) => this.onImageChange(e)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="comments">
                  Comments
                </label>
                <input
                onChange={this.onChange}
                value={comments} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="comments" placeholder="Comments" name="comments" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="categories">
                  Article categories
                </label>
                <input
                onChange={this.onChange}
                value={categories} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="categories" placeholder="Comma separated list of Article categories" name="categories" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="author">
                  Article author
                </label>
                <input
                onChange={this.onChange}
                value={author} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="author" placeholder="Article author" name="author" />
              </div>
              <div className="flex items-center justify-between mt-4">
                <button onClick={this.addItem} className="bg-secondary hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Submit
                </button>
                <a onClick={this.clearForm} className="inline-block align-baseline font-bold text-sm" href="#">
                  Clear Form
                </a>
              </div>
            </form>
            <p className="text-center text-gray-500 text-xs">
              &copy;2020 Dintent Creative. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default CreateArticle