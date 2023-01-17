import styles from './ContentLeft.module.scss'

const ContentLeft = ({children}) => {
   return <section className={styles.contentLeft} data-testid="contentLeft">{children}</section>
}

export default ContentLeft