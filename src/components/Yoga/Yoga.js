import React from 'react'
import './Yoga.css'
import YogaPicture from '../images/yoga.jpg'

const Yoga = () => {
  return (
    <div className='yoga-section'>
      <img src={YogaPicture} alt="yoga" className="yoga-header" />
      <div className="yoga-first-section">
        <p>
          Yoga practice has always been about balance and harmony (and
          physical development for many of us in the latter part of this
          century), aiming at expanded consciousness and enlightenment. The
          purpose of yoga, as described by the ancient sage Patanjali in the
          first line of the Yoga Sutras, is to calm the mind's turmoil.
        </p>
        <p>
          It's not surprising that researchers are investigating yoga's actual
          value in promoting psychological well-being, given the rising
          popularity of yoga in the U.S. and the ongoing international mental
          health crisis.
        </p>
        <h1>Mental Health and Yoga</h1>
        <p>
          There have been more studies on the effects of yoga on individuals
          with mental health conditions than on any other aspect of yoga. There
          is a great deal of evidence that yoga can improve mental health issues
          such as anxiety, depression, and post-traumatic stress disorder in all ages.
        </p>
        <p>
          Further evidence supports the possibility that yoga practice affects
          the structure and function of the brain. This "neuroplastic" change
          that is so exciting and gratifying is also an indication of how and
          why yoga can help people who are suffering from emotional difficulties.
        </p>
        <h1>What Yoga Does to the Brain</h1>
        <p>
          The relationship between yoga and the brain has been studied since the
          1960s, but a landmark study carried out by Chris Streeter and his team
          in 2007 made yogic meditation a focus of study. In their research,
          they found that even one hour of yoga asana practice by experienced
          yoga practitioners resulted in statistically significant increases in
          GABA, a chemical that functions as your brain's principal inhibitory
          neurotransmitter. Streeter compared metabolically matched walking with
          yoga in 2010 and found that a session of yoga significantly increased
          GABA levels in comparison to walking. (It should be noted that these
          results may not have been observed in a new practitioner of yoga
          practicing for one hour.)
        </p>
        <p>
          Interestingly, this chemical reduces signals in the brain rather than
          enhancing them. As a result, it prevents your brain from becoming too
          "busy," inhibiting anxiety and depression-causing fear circuits. Low
          levels of GABA are found in people with chronic pain, anxiety,
          post-traumatic stress, and depression, which manifests as an inability
          to shift perception and physiological reactions. Yoga may benefit all
          of these conditions, according to Streeter's findings, while other
          types of physical activity may not.
        </p>
      </div>
      <div className="yoga-videos-section">
        <h2>Yoga With Adrienne</h2>
        <div className="adriene">
          <p>
            Adriene Mishler is an actress, writer, international yoga teacher
            and entrepreneur from Austin, Texas. On a mission to get the tools
            of yoga into schools and homes, Adriene hosts the YouTube
            channel <a href="https://www.youtube.com/user/yogawithadriene/featured">Yoga with Adriene</a>,
            an online community of over 8 million subscribers.
          </p>
          <p>
            <a href="https://www.youtube.com/user/yogawithadriene/featured">Yoga with Adriene</a> was
            recognized by Google as the most searched workout of 2015, was
            recognized by The Wall Street Journal, and was awarded a Streamy in
            Health and Wellness in 2016.
          </p>
          <p>
            Yoga with Adriene provides high quality practices on yoga and
            mindfulness at no cost to inspire people of all ages, shapes and
            sizes across the globe.
          </p>
          <h3>For more Information, check out our Blog Section.</h3>
        </div>
      </div>
    </div>
  )
}

export default Yoga