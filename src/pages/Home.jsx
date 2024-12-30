import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div>Home

        <br/><br/><br/>
        <Link to={`/btech`} style={{ textDecoration: "none" }}>B.Tech</Link><br/><br/>
        <Link to={`/chanakya`} style={{ textDecoration: "none" }}>Chanakya</Link><br/><br/>
        {/* {data.map((item) => (
            <>
                <Link key={item.id} to={`/details/${item.id}`} style={{ textDecoration: "none" }}>{item.name}</Link><br/>
            </>
        ))} */}
    </div>
  )
}

export default Home