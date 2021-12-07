import React from 'react'
import Banner from './Banner'
import Promotions from './Promotions'


const paragraph="In the ancient times, on Paradise Island, an ancient hero named the Sea Born imprisoned an evil sea ghost called Ragnar in an underwater coral prison along with many other sea ghosts. Ragnar swore revenge against the Sea Born.The sea ghosts are at the core of the story, and appear in almost every episode. They can be from any country, or period of history, but are the ghosts of people that have died at sea (or near to it, such as an aviator whose plane crashed on the island). They can be invisible, appear as human, or be in their true sea ghost form with grey skin covered in black blotches, wearing black and white ragged versions of their human clothes. If seen through water their sea ghost form is revealed. This usually happens when they are seen from behind the fish tank in the Paradise Cafe. Any item, such as money or clothes, given away by a sea ghost will turn into sand after a short time away from the ghost.";
function AboutCafe() {
  return (
    <div>
      <div className="about-paradise">
        <h1>About Paradise</h1>
      </div>

      <div className="brief-about-paradise">
        <p>{paragraph}</p>
      </div>
    </div>
  )
}

export default AboutCafe
