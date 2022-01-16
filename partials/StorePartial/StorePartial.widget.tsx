import { IStorePartial } from './StorePartial';

export const StorePartial: React.FC<IStorePartial> = ({ categories, tags }) => {
  return (
    <div>
      <h1>This is Shopping page</h1>
      <div>
        {categories.map((category, key) => {
          return (
            <div key={key}>
              {category.value}
              {tags.map((tag, innerKey) => {
                if (tag.category.name === category.name) {
                  return <div key={innerKey}>{tag.value}</div>;
                }
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
