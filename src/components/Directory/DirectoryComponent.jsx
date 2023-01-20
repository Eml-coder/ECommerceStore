// This imports the CategoryItem component from the #CategoryItemComponent.jsx file located in another folder called #CategoryItem.
// This is a relative path. The #CategoryItem folder and #Directory folder share the same folder called #components. (the ../ means go up one folder, while inside a relative path). 
import DirectoryItem from '../DirectoryItem/DirectoryItemComponent';
// This imports the Directorystyles file frm the same folder and uses it as classNames
import { DirectoryContainer } from './DirectoryStyles.js';

const Directory = ({ categories }) => {
	return (
		<DirectoryContainer>
		  {categories.map((category) => (
			<DirectoryItem key={category.id} category={category} />
		  ))}
		</DirectoryContainer>
	  );
};

export default Directory;
