import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./Data" // NB: Remember to use the name as you use in your codebase (no capital letters!)
import "./App.css"

function App() {
  const cards = data.map(item => { // map will look over each of those 3 experiences (items)
    return (
      <Card //  and for each item in that array it will return the following:
        key={item.id}  
        item={item} // passes entire item and its properties down
        // img={item.coverImg} // data property name must be the same it is in the data file (from data.js)
        // rating={item.stats.rating}
        // reviewCount={item.stats.reviewCount}
        // location={item.location}
        // title={item.title}
        // price={item.price}
        // openSpots={item.openSpots}
      />
    )
  })
  return (
      <div>
        <Navbar />
        <Hero />
        <section className="cards-list">
          {cards} {/* To access the variable, use '{}' to enter into javascript here. The array of JSX elements (img, rating ...) is still considered JS */} 
        </section>
      </div>
  )
}

export default App


// lesson 21