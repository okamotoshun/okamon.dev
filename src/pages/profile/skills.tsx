import { ProgressBar } from 'react-progressbar-fancy'
import styles from '../../styles/profile/skills.module.css'

const skillsData = [
  {
    label: 'HTML/CSS',
    primaryColor: '#f16529',
    secondaryColor: '#de3e2b',
    score: 30,
  },
  {
    label: 'JavaScript',
    primaryColor: '#f7df1e',
    secondaryColor: '#eeb211',
    score: 65,
  },
  {
    label: 'TypeScript',
    primaryColor: '#007acc',
    secondaryColor: '#004b6a',
    score: 25,
  },
  {
    label: 'React',
    primaryColor: '#61dafb',
    secondaryColor: '#00b5ff',
    score: 40,
  },
  {
    label: 'Vue.js',
    primaryColor: '#41b883',
    secondaryColor: '#35495e',
    score: 65,
  },
  {
    label: 'Python',
    primaryColor: '#4b8bbe',
    secondaryColor: '#306998',
    score: 15,
  },
  {
    label: 'Sauna',
    primaryColor: '#FFDAB9',
    secondaryColor: '#FF6347',
    score: 95,
  },
  {
    label: 'Soccer',
    primaryColor: '#32CD32',
    secondaryColor: '#FFD700',
    score: 80,
  },
]

export default function Skills() {
  return (
    <div className={styles.container}>
      <div className={styles.skillsContainer}>
        {skillsData.map((skill, index) => (
          <ProgressBar
            key={index}
            className={styles.skill}
            label={skill.label}
            primaryColor={skill.primaryColor}
            secondaryColor={skill.secondaryColor}
            darkTheme
            score={skill.score}
          />
        ))}
      </div>
    </div>
  )
}
