import React, { useEffect, useCallback } from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'
import { fetchPosts } from '../redux/actions/postsActions'
import { SyncLoader } from 'react-spinners'


const Blog = (props) => {
  // Redux con hooks
  // Es el equivalente a mapStateToProps. El selector sera llamado con el state entero como uno argumento
  const blog = useSelector((state) => state.blog) 
  console.log(blog);
  // Redux con hooks
  // When passing a callback using dispatch to a child component, it is recommended to memorize it with useCallback, 
  // since otherwise child components may render unnecessarily due to the changed reference.
  const dispatch = useDispatch()
  
  const fetchPostsApi = useCallback(
    () => dispatch(fetchPosts()),
  [dispatch])

  const fetchPostsAlInicio = () => dispatch(fetchPosts())

  useEffect(() => {
    // props.dispatch(fetchPosts())
   fetchPostsAlInicio()
  }, [])
  
  const handlePosts = () => {
    // props.dispatch(fetchPosts())
  }

  return (
    <div>
      <h1>Nuevas entradas de blog</h1>
      <button onClick={fetchPostsApi}>
        Cargar Posts
      </button>
      { blog.isFetching 
        ? <SyncLoader />
        : (
          <ul>
            {blog.posts.map((post) => (
              <li key={post.id}>
                { post.title}
              </li>
            ))}
          </ul>
        )
      }
    </div>
  )
}

export default Blog
// export default connect((state) => {
//   return state
// })(Blog)