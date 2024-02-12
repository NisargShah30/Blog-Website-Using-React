import React, { useState } from 'react'
import Header from '../../Compotants/Home/Header/Header'
import Searchbar from '../../Compotants/Home/SearchBar/Searchbar'
import BlogList from '../../Compotants/Home/BlogList/BlogList'
import { blogList } from '../../Configs/Data'
import EmptyList from '../../Compotants/comman/EmptyList/EmptyList'
const Home = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [Searchkey, setSearchkey] = useState('')//intializeState hal purtu Empty che // 

  // searchSubmit  // 
  const handleSearchSubmit = event => {
    event.preventDefault(); // Submit thta aa aene stop  krse aa preventDefault //  
    handleSearchResults()
  }
  // search for blogs by  category // 
  const handleSearchResults = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog)=> blog.category.toLocaleLowerCase().includes(Searchkey.toLocaleLowerCase().trim()));
    // filterBlogs ae new variable create kairo // 
    // spaces ne Trim krisu // 

    setBlogs(filteredBlogs)
  }

  const handleClearSearch = () =>{
    setBlogs(blogList) // badha blog display krisu je apda config file ma che // 
    setSearchkey('') // pachi user ae je char hse ae aapde empty krisu // 
  }
  return (
    <div>
      <Header />
      <Searchbar value={Searchkey} clrarSearch={handleClearSearch} formSubmit={handleSearchSubmit} handleSearchKey={(e)=> setSearchkey(e.target.value)}/>
      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
      {/* blogs.length apda state ma che ke nai jo nai hoy to aa EmptyList Show thse and hse to Blogs oprn thse //  */}
      {/*  blogs ne BlogList sathe intilization kairu che aetle blogs ma blogs mekyu che  */}
    </div>
  )
}

export default Home
