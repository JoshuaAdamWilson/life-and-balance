import React from 'react'
import './Education.css'
import EducationPicture from '../images/education.jpg'

const mentalIllnesses = [ 
  {
    index: 0,
    name: "Anxiety Disorders",
    website: "https://www.mentalhealth.gov/what-to-look-for/anxiety-disorders"
  },
  {
    index: 1,
    name: "Attention Deficit Hyperactivity Disorder (ADHD)",
    website: "https://www.mentalhealth.gov/what-to-look-for/behavioral-disorders/adhd"
  },
  {
    index: 2,
    name: "Bipolar Disorder",
    website: "https://www.mentalhealth.gov/what-to-look-for/mood-disorders/bipolar-disorder"
  },
  {
    index: 3,
    name: "Borderline Personality Disorder (BPD)",
    website: "https://www.mentalhealth.gov/what-to-look-for/personality-disorders/borderline-personality-disorder"
  },
  {
    index: 4,
    name: "Depression",
    website: "https://www.mentalhealth.gov/what-to-look-for/mood-disorders/depression"
  },
  {
    index: 6,
    name: "Dual Diagnosis/Co-Occurring Disorders (Substance Abuse and Mental Illness)",
    website: "https://www.mentalhealth.gov/what-to-look-for/mental-health-substance-use-disorders"
  },
  {
    index: 8,
    name: "Eating Disorders",
    website: "https://www.mentalhealth.gov/what-to-look-for/eating-disorders"
  },
  {
    index: 9,
    name: "Obsessive-Compulsive Disorder (OCD)",
    website: "https://www.mentalhealth.gov/what-to-look-for/anxiety-disorders/obsessive-compulsive-disorder"
  },
  {
    index: 10,
    name: "Panic Disorder",
    website: "https://www.mentalhealth.gov/what-to-look-for/anxiety-disorders/panic-disorder"
  },
  {
    index: 11,
    name: "Posttraumatic Stress Disorder (PTSD)",
    website: "https://www.mentalhealth.gov/what-to-look-for/post-traumatic-stress-disorder"
  },
  {
    index: 13,
    name: "Schizophrenia",
    website: "https://www.mentalhealth.gov/what-to-look-for/psychotic-disorders/schizophrenia"
  },
  {
    index: 14,
    name: "Seasonal Affective Disorder (SAD)",
    website: "https://www.mentalhealth.gov/what-to-look-for/mood-disorders/sad"
  }
]

const Education = () => {
  return (
    <div className="education-section">
      <img src={EducationPicture} alt="education" className="education-picture" />
      <div className="education-information">
        <p>
          Balance involves not just growing, but learning to live a full and
          satisfying life. By broadening your knowledge, social, and emotional
          horizons, education can support your journey. As a result of
          completing tasks or graduating from courses, you can feel proud of your
          achievements. In addition to helping you further your academic and
          career goals, education can also help you understand things about your
          life such as finances or health that might otherwise be difficult to
          understand.
        </p>

        <h2>How can mental health be defined?</h2>
        <p>
          Mental illness and poor mental health are not the same, although they
          are often used interchangeably. It is possible to experience poor mental
          health without having a mental illness. In the same way, someone with a
          mental illness may experience periods of emotional, physical, and social
          well-being.
        </p>
        <p>
          We define mental health as the state of being emotionally,
          psychologically, and socially healthy. Mood, thinking, feelings, and
          actions are all influenced by mental health. Mental health also
          determines how we cope with stress, relate to others, and make healthy
          choices. Mental well-being is necessary at every age.
        </p>

        <h2>What is the importance of mental health to overall health?</h2>
        <p>
          Health on both a physical and an emotional level is equally critical.
          Mental illnesses, such as depression, can increase the risk of many types
          of physical illnesses and addictions. Mental health impacts long-term conditions like diabetes,
          heart disease, or stroke. Similarly, the presence of chronic conditions
          can increase the risk of mental illness.
        </p>

        <h2>What effect does time have on your mental health?</h2>
        <p>
          There are many factors that can affect a person's mental health over
          time, so it is imperative to remember that. Stress can affect a person's
          mental health when their resources and ability to cope are exceeded. If
          someone works long hours, takes care of family members, or is facing
          economic hardships, their mental health may become compromised.
        </p>

        <h2>Is mental illness common?</h2>
        <p>The United States has one of the highest rates of mental illnesses.</p>
        <ul>
          <li>
            Approximately half of all adults may suffer from a mental illness
            at some point in their lives.
          </li>
          <li>
            Mental illness affects one out of five Americans each year.
          </li>
          <li>
            Mental illness is one of the leading causes of disability among
            children.
          </li>
          <li>
            A quarter of all Americans suffer from a serious mental illness,
            such as schizophrenia or bipolar disorder.
          </li>
        </ul>

        <h2>Why do mental illnesses occur?</h2>
        <p>
          Mental illness is caused by many factors. Risk factors for mental
          illness include:
        </p>
        <ul>
          <li>
            Experiences that resulted from trauma or abuse during the early years
            of life (for example, child abuse, sexual abuse, witnessing violence, natural disasters,
            etc.)
          </li>
          <li>
            Any experience relating to other ongoing (chronic) medical conditions,
            such as diabetes or cancer.
          </li>
          <li>
            Chemical imbalances of the brain caused by biological factors.
          </li>
          <li>Isolation and feeling lonely.</li>
          <li>Poor nutrition.</li>
          <li>Substance abuse.</li>
        </ul>

        <h3>GET MORE INFORMATION:</h3>
        <ul>
          {mentalIllnesses.map(illness => {
            return <li key={illness.index}><a href={illness.website} target="_blank" rel="noreferrer">{illness.name}</a></li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default Education
