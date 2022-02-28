import './styles.css';

function Instructions() {
  return (
    <div className='instructions-wrapper'>
      <div className='instructions-content'>
        <h3>Game Description</h3>
        <p>Play as a dinosaur in this evolution simulator! 
          You will be shown an environment and given a choice: meat-eater or plant-eater.
          Choose the dino that is best suited for the environment and consume enough food before your energy runs out!</p>
        <h3>Instructions</h3>
        <p>Use 'W', 'A', 'S', 'D' keys to move forward and backwards and turn side-to-side. 
          When near a food source, press 'E' to eat.
        </p>
      </div>
    </div>
  );
}

export default Instructions;
