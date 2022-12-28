import CategoryItem from '../category-item/category-item.component';
import './directory.styles.scss';

const Directory = ({ categories }) => {

  return (
    <div className="directory-container">
        {categories.map(({ title, id, imageURL }) => (
            <CategoryItem title={title} key={id} imageURL={imageURL} />
        ))}
    </div>
  )
}

export default Directory