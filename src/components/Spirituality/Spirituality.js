import React from 'react'
import './Spirituality.css'
import SpiritualityPicture from '../images/spirituality.jpg'

const Spirituality = () => {
  return (
    <div className='spirituality'>
      <img src={SpiritualityPicture} alt="spirituality" className="spirituality-picture" />
      <div className="spirituality-first-section">
        <h4>
          A Higher Chance of Happiness with Spirituality
        </h4>
        <p>
          Observing life spiritually has been observed to increase happiness.
          The belief that there is a life force or
          a higher power may be able to bolster us through rough times and
          reduce the feeling of hopelessness and isolation. Social networks
          formed through shared spiritual practices are very useful when looking
          for someone with whom to spend time or talk.
        </p>
        <h4>
          A Spiritual Perspective on Depression and Anxiety
        </h4>
        <p>
          Since spirituality is intrinsically connected to nature, nature
          therapy (such as spending time in nature, partaking in forest bathing,
          or practicing sports in nature) is a complementary treatment for many
          mental illnesses, including depression and anxiety.
        </p>
        <p>
          People can experience greater hope and companionship when they engage
          in discussions about important issues like the meaning and worth of
          life with others who have understanding and empathy.
        </p>
        <p>
          Mediation and prayer are spiritual practices that keep your mind
          grounded in the present moment, allowing you to acknowledge negative
          thoughts and emotions without allowing them to control your behavior.
          Research has found that mindfulness reduces stress hormone levels to
          a significant extent, which is why it prevents panic attacks and
          severe dips in mood and energy.
        </p>
        <h4>
          Spirituality and Mental Illnesses
        </h4>
        <p>
          People suffering from conditions such as schizophrenia and bipolar disorder
          can benefit from lifestyle
          choices such as participating in spiritual pursuits, since they can
          reduce the stress that these disorders bring.
          Thus, health experts emphasize the importance of maintaining a strict
          routine, exercising regularly, eating healthily, and managing stress.
          Many studies have suggested that these things happen when spiritual
          practices such as yoga, religious worship, or mindfulness meditation
          are practiced.
        </p>
        <p>
          Essentially, spirituality involves a belief in a guiding, higher
          force and can
          be practiced in an organized or personalized manner. 
          The power of
          spirituality to help you cope with stress and build networks that
          will be a boon during times of difficulty can benefit anyone,
          regardless of whether they are fighting a mental or emotional battle.
        </p>
        <p>
          As a subject of spirituality, you strive to establish meaningful
          connections with something bigger than yourself, inducing positive
          feelings, such as peace, awe, contentment, gratitude, and acceptance.
          In order to be emotionally healthy, you should cultivate a positive
          mindset that can allow you to recognize and incorporate a sense of
          belonging.
        </p>
        <h4 className="spirituality-quote">
          Spirituality is not adopting more beliefs and assumptions<br />but
          uncovering the best in you. -Amit Ray
        </h4>
        <h3 className="for-more-information">For more Information, check out our Blog Section.</h3>
      </div>
    </div>
  )
}

export default Spirituality
