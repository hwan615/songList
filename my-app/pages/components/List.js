import styles from '../styles/List.module.css'

function List(props) {

    return (
        <div>
            {props.songList.map((song) => {
                return (
                    <div className={styles.singleSong}>{song}</div>
                )
            })}
        </div>
    )
}

export default List;
