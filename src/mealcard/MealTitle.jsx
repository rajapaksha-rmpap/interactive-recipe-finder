function MealTitle({ name, altName, area, category, youtube, tags }) {
  return (
    <div className="meal-title">
      <h2>{name}</h2>
      {altName && (
        <h3>
          (<span>{altName}</span>)
        </h3>
      )}
      {category && (
        <p>
          <strong>Category : </strong>
          {category}
        </p>
      )}
      {area && (
        <p>
          <strong>Cousine : </strong>
          {area}
        </p>
      )}
      {youtube && (
        <p>
          <strong>YouTube : </strong>
          <a href={youtube} targte="_blank" rel="noopener noreferrer">
            {youtube}
          </a>
        </p>
      )}
      {tags && (
        <div className="meal-tags">
          <strong>Tags : </strong>
          {/* <MealTagLiner tags={tags} /> */}
          <div className="meal-tags-liner">
            {tags.split(",").map((tag, i) => (
              <span className="meal-tag" key={i}>
                #{tag.trim()}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default MealTitle;
