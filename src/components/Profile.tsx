import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/65976669?s=400&u=f010266914f8585f92d3c678fd2a82724a59b57a&v=4" alt="Profile"/>
      <div>
        <strong>Profile</strong>
        <p>
          <img src="icons/level.svg" alt="level"/>
          Level 1
        </p>
      </div>
    </div>
  );
}