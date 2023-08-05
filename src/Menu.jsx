const Menu = ({ items }) => {
  return (
    <div className="items-container">
      {items.map((x) => {
        const { title, category, price, img, desc } = x;
        return (
          <div className="card mb-3">
            <img className="card-img" src={img} alt={title} />
            <div className="card-body">
              <h4 className="card-title">{title}</h4>
              <h6 className="card-text">{category}</h6>
              <p className="card-text">{desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
