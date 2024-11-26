import {disconnectDatabase, databaseType} from './utils/database.js'
import * as api from './utils/api.js'

disconnectDatabase();
api.getDataFromApi();