function MealThumbnail({ img, name }) {
  return (
    <div className="meal-thumbnail">
      <img src={img} alt={name} />
    </div>
  );
}

export default MealThumbnail;
