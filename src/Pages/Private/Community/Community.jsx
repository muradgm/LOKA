import React, { useContext } from 'react'
import { ProfileAvatar } from '../../../components/Private/Avatars-Links/Avatars.jsx'
import { PostsContext } from '../../../contexts/PostContext'
import user from '../../../Pages/Public/Team/teamData.js'
import  './community.scss'

export const Community = () => {


 const { users, setUsers}=useContext(PostsContext)

 console.log(users)

  return (
    <section className="Pages">
    <section className="Hero">
        <section className="hero-image community"></section>
        <section className="Hero-text">
            <h1>Community</h1>
            <p>Connect</p>
        </section>
    </section>

    <section className="Library-wrapper">
      <section className="lib-wrapper-header">
        <h2>users </h2>
        <p>{users.length} users</p>
      </section>
      <section className="Library-container">
      {users.map(item =><ProfileAvatar id={item._id} image={item.avatar} name={item.profileName}/>)}
    </section>
    </section>

    <section className="Library-wrapper">
      <section className="lib-wrapper-header">
        <h2>Gardners</h2>
        <p>{users.length} users</p>
      </section>
      <section className="Library-container">
      {users.map(item =><ProfileAvatar id={item._id} image={item.avatar} name={item.profileName}/>)}
    </section>
    </section>

    <section className="Library-wrapper">
      <section className="lib-wrapper-header">
        <h2>Farmers</h2>
        <p>{users.length} users</p>
      </section>
      <section className="Library-container">
      {users.map(item =><ProfileAvatar id={item._id} image={item.avatar} name={item.profileName}/>)}
    </section>
    </section>

    <section className="Library-wrapper">
      <section className="lib-wrapper-header">
        <h2>sellers</h2>
        <p>{users.length} users</p>
      </section>
      <section className="Library-container">
      {users.map(item =><ProfileAvatar id={item._id} image={item.avatar} name={item.profileName}/>)}
    </section>
    </section>

    <section className="Library-wrapper">
      <section className="lib-wrapper-header">
        <h2>bloggers</h2>
        <p>{users.length} users</p>
      </section>
      <section className="Library-container">
      {users.map(item =><ProfileAvatar id={item._id} image={item.avatar} name={item.profileName}/>)}
    </section>
    </section>

    <section>
    </section>
   
</section>
    
   
  )
}
