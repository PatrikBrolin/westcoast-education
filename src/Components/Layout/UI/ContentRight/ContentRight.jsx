import styles from './ContentRight.module.scss'

const ContentRight = ({children}) => {
   return <section className={styles.contentRight} data-testid="contentRight">{children}</section>
}

export default ContentRight