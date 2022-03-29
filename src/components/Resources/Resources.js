import React from 'react'
import './Resources.css'
import ResourcesPicture from '../images/resources.jpg';
import SpiritualityPic from '../images/spirituality-pic.jpg'

const Resources = () => {
  return (
    <div className="resources-page">
      <img src={ResourcesPicture} alt="Resources" className="resources" />

      <div className="education">
        <h1>Education</h1>
        <p>
          The World Health Organization defines mental health as being "a state
          of well-being in which one is aware of and confident about one's own
          abilities, has the capacity to cope with normal life stresses, is
          productive and productive in his or her work, and has the ability to
          contribute to his or her community". In addition to subjective
          well-being and self-efficacy, mental health includes autonomy,
          competence, intergenerational dependency, and actualizing one's
          emotional and intellectual potential.
        </p>
        <p>
          According to positive psychology
          or holistic philosophy, mental health means an individual's capacity
          to relish life and to achieve a balance between life activities and
          the pursuit of psychological resilience. Different cultures,
          subjective assessments, and competing professional theories all
          influence how mental health is defined. In relation to health
          problems, sleep irritation, lack of energy, and thoughts of harming
          yourself or others are early indicators.
        </p>
        <div className="education-content">
          <div className="educate odd">
            <p className="fade-box">
              Take time to learn about mental illnesses. To begin, I recommend the
              National Alliance on Mental Illness.
            </p>
          </div>
          <div className="educate even">
            <p className="fade-box">
              It is imperative to observe one's own attitudes and behavior, and to
              view everyone as an individual, not as a label.
            </p>
          </div>
          <div className="educate odd">
            <p className="fade-box">
              It is important to choose your words carefully so you do not offend 
              someone with a mental illness.
            </p>
          </div>
          <div className="educate even">
            <p className="fade-box">
              Provide support for people who require mental health services.
            </p>
          </div>
          <div className="educate odd">
            <p className="fade-box">
              Be aware of mental illness stigmas and avoid contributing to them.
            </p>
          </div>
          <div className="educate even">
            <p className="fade-box">
              Don't treat those suffering from mental illness like an outsider;
              support them and/or let yourself be supported.
            </p>
          </div>
        </div>
        
      </div>
      <div className="yoga">
        <h1>Yoga</h1>
        <p>
          When you lift weights, your muscles get stronger and broader. Through
          yoga, your brain cells make new connections, resulting in improvements
          in brain structure and function, thus improving cognitive skills such
          as focus, learning and memory. In addition to strengthening memory and
          attention, yoga strengthens parts of the brain responsible for
          awareness, thinking, and language. Think of it as brain
          weight-lifting.
        </p>
        <p>
          The videos below are good learning spots.
          Thank you to "
          <a href="https://www.youtube.com/c/yogawithadriene" target="_blank" rel="noreferrer">Yoga With Adriene</a>
          " for supplying the videos.
        </p>
        <div className="videos">
          <iframe width="400" height="224" src="https://www.youtube.com/embed/x0nZ1ZLephQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <iframe width="400" height="224" src="https://www.youtube.com/embed/AjhvRX57XkE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <iframe width="400" height="224" src="https://www.youtube.com/embed/8YDd8Wgjj28" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <iframe width="400" height="224" src="https://www.youtube.com/embed/KWBfQjuwp4E" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <p>
          "<a href="https://www.breatheandflow.org/" target="_blank" rel="noreferrer">Breathe And Flow</a>
          " are a full-time traveling yoga instructor couple. They teach online classes, and in-person workshops and retreats.
        </p>
        <div className="videos">
          <iframe width="400" height="224" src="https://www.youtube.com/embed/NQzDFgnyYAo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <iframe width="400" height="224" src="https://www.youtube.com/embed/n1zSgUQqtW8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <iframe width="400" height="224" src="https://www.youtube.com/embed/OPhaINgaL9I" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <iframe width="400" height="224" src="https://www.youtube.com/embed/ol-13RZR5wQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>
      <div className="yoga">
        <h1>Spirituality</h1>
        <p>
          Scientists are finally beginning to recognize the importance of 
          spirituality in the way philosophers have for centuries.
          We can reap powerful benefits from making spirituality and
          self-awareness a part of daily life when we break down walls, from
          stress and anxiety reduction to improved moods and mental clarity.
        </p>
        <figure className="spirituality-figure">
          <img src={SpiritualityPic} alt="Resources" className="spirituality-pic" />
          <figcaption>
            <strong>
              We all have a beautiful light within... Sometimes, we just forget it is there.
            </strong>
          </figcaption>
        </figure>
        <p>
          As a concept, spirituality encompasses a wide range of views.
          Typically a sense of belonging involves a search for meaning in life,
          as well as a sense of connection to something bigger than ourselves.
          Hence, it is a universal human experience-something we all share. It
          is possible to describe a spiritual experience as sacred or
          transcendent, or simply as the feeling of being alive and
          interconnected.
        </p>
        <p>
          It is not necessary to know exactly what is happening or where
          everything is headed. The goal is to embrace the possibilities and
          challenges offered by this present moment with courage, faith, and
          hope.
        </p>
        <p>
          A person's spiritual journey begins with asking: where do I
          personally find meaning, connection, and value? When it comes to
          religion, it refers to what is right and true?
        </p>
      </div>
      <div className="nami">
        <h1>NAMI</h1>
        <p>
          "<a href="https://www.nami.org/Home" target="_blank" rel="noreferrer">NAMI</a>
          " is the National Alliance on Mental Illness, the nation’s largest
          grassroots mental health organization dedicated to building better
          lives for the millions of Americans affected by mental illness. They
          envision a world where all people affected by mental illness live
          healthy, fulfilling lives supported by a community that cares. What
          started as a small group of families gathered around a kitchen table
          in 1979 has blossomed into the nation's leading voice on mental
          health. Today, they are an alliance of more than 600 local Affiliates
          and 48 State Organizations who work in your community to raise
          awareness and provide support and education that was not previously
          available to those in need.
        </p>
        <h3>NAMI values:</h3>
        <ul className="nami-values">
          <li>
            <strong>HOPE:</strong>
            They believe in the possibility of recovery, wellness and the
            potential in all of us
          </li>
          <li>
            <strong>INCLUSION:</strong>
            They embrace diverse backgrounds, cultures and perspectives.
          </li>
          <li>
            <strong>EMPOWERMENT:</strong>
            They promote confidence, self-efficacy and service to our mission.
          </li>
          <li>
            <strong>COMPASSION:</strong>
            They practice respect, kindness and empathy.
          </li>
          <li>
            <strong>FAIRNESS:</strong>
            They fight for equity and justice.
          </li>
        </ul>
        <p>
          At NAMI, they believe a diverse, inclusive and equitable organization
          (or Alliance) is one where all employees, volunteers and members —
          regardless of gender, race, gender identity, ethnicity, national
          origin, age, sexual orientation, education, disability, veteran
          status or other dimension of diversity — feel valued and respected.
        </p>
      </div>
    </div>
  )
}

export default Resources
