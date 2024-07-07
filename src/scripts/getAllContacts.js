import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

const getAllContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    console.log(contacts);
  } catch (error) {
    console.error('Error getting contacts:', error);
  }
};

getAllContacts();
