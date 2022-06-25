import React, { useContext, useState} from 'react'
import { useParams } from 'react-router-dom'
import { ProfileCollection } from '../../../components/Private/Avatars-Links/Avatars.jsx'
import { ProfilePost } from './ProfilePost'
import { PostsContext } from '../../../contexts/PostContext'


import './profile.scss';


export const Profile = () => {

 const { users, setUsers, recipe, beauty, arts, garden }=useContext(PostsContext)
 console.log(users)
 const { profileName } =useParams()
 
 const user = users.find(item => item.profileName === profileName)
 console.log(user)


 const [ libBeauty, setLibBeauty]=useState(false)
 const [ libGarden, setLibGarden]=useState(false)
 const [ libRecipe, setLibRecipe]=useState(false)
 const [ libArt, setLibArt]=useState(false)

 const [userLibrary, setUserLibrary]=useState({
   arts:arts.filter((item,i)=> item._id === user.artsCraft[i]), 
   beauty: beauty.filter((item,i)=> item._id === user.beauty[i]), 
   recipes:recipe.filter((item, i)=> item._id === user.recipe[i]), 
   gardens:garden.filter((item, i)=>item._id === user.garden[i]),
   arts: arts.filter((item, i)=>item._id === user.artsCraft[i])
  })


  function openPost(id, category){

    const post = (userLibrary[category]).find(post => post._id === id)
    console.log(post)
    

  }





  return (

    <section className="Profile">

    <section className="Profile-inner">
      <section className="Profile-header">
      <button>...</button>

       <section className="Profile-info">
        <img src={user.avatar}></img>
          <section className="Profile-text">
          <h1>{user.profileName}</h1>
          <p>Gardner</p>
          <p>Im all about plants, and herbs</p>
          <h2>{user.userAddress.city} , {user.userAddress.country}</h2>
        </section>
      </section>

      <section className="Profile-followers">
      <button>follow</button>
      <p>100 followers</p>
      <p>10 following</p>
      </section>

      </section>

      <section className='Profile-Library'>
        <p>Library</p>
        <section>
          {user.beauty.length > 0 ? <button onClick={e =>setLibBeauty(!libBeauty)}>beauty</button> : null }
          {user.garden.length > 0 ? <button onClick={e=>setLibGarden(!libGarden)}>garden</button> : null }
          {user.recipe.length > 0 ? <button onClick={e=>setLibRecipe(!libRecipe)}>recipe</button>: null }
          {user.artsCraft.length > 0 ? <button onClick={e=>setLibArt(!libArt)}>arts & crafts</button> : null }
        </section>
        <section>

      
        { libGarden ? userLibrary.gardens.map(item => <ProfileCollection  category={item.category} image={item.image} name={item.title}></ProfileCollection>) : null }
        { libBeauty ? userLibrary.beauty.map(item => <ProfileCollection category={item.category} image={item.image} name={item.title}></ProfileCollection>) : null }
        { libRecipe ? userLibrary.recipes.map(item => <ProfileCollection category={item.category} image={item.image} name={item.title}></ProfileCollection>) : null }
        { libArt ? userLibrary.arts.map(item => <ProfileCollection category={item.category} image={item.image} name={item.title}></ProfileCollection>) : null }  

        {/* <ProfilePost data={userLibrary} id={user._id}/> */}

        </section>
      </section>
    </section>

    </section>
  )
}
