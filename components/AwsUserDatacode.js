//create

import { DataStore } from '@aws-amplify/datastore';
import { UserData } from './models';

await DataStore.save(
    new UserData({
		"email": "test12346789@testemailtestemail.com",
		"firstName": "Lorem ipsum dolor sit amet",
		"lastName": "Lorem ipsum dolor sit amet"
	})
);


//update
import { DataStore } from '@aws-amplify/datastore';
import { UserData } from './models';

/* Models in DataStore are immutable. To update a record you must use the copyOf function
 to apply updates to the item’s fields rather than mutating the instance directly */
 await DataStore.save(UserData.copyOf(CURRENT_ITEM, item => {
    // Update the values on {item} variable to update DataStore entry
}));

//delete

import { DataStore } from '@aws-amplify/datastore';
import { UserData } from './models';

const modelToDelete = await DataStore.query(UserData, 123456789);
DataStore.delete(modelToDelete);

//query
import { DataStore } from '@aws-amplify/datastore';
import { UserData } from './models';

const models = await DataStore.query(UserData);
console.log(models);