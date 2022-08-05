import './WorkoutItem.css'

function WorkoutItem() {
  return (
    <div className='workout-item'>
      <div>Дата</div>
      <div className='workout-item__description'>
        <h2>Бег</h2>
        <div className='workout-item__distance'>10км</div>
      </div>
    </div>
  );
}

export default WorkoutItem;
