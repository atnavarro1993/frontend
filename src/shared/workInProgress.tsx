import travolta from '../wondering-pulp-fiction.gif';

const WorkInProgress = () => {

    const styles = {
        display: "block",
        margin: "auto"
    }

    return (
        <div style={{ textAlign: "center" }}>
            <img style={styles} src={travolta}  alt={'work in progress'}/>
        </div>
    );

}

export default WorkInProgress;