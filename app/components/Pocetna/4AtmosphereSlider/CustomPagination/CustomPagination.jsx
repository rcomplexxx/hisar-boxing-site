
import styles from './custompagination.module.css'


export default function CustomPagination({ total, activeIndex, onClick }) {
  return (
    <div className={styles.paginationWrapper}>
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          className={`${styles.dot} ${i === activeIndex && styles.active}`}
          onClick={() => onClick(i)}
        />
      ))}
    </div>
  );
}