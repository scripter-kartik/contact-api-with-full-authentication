import express from 'express';
import { deleteContactById, getAllContact, getContactById, newContact, updateContactById } from '../Controllers/contact.js';

const router = express.Router();

// user contact
// @api description :- creating contact 
// @api method :- post
// @api endPoint :- /api/contact/new
router.post('/new', newContact);

// get all contact
router.get('/', getAllContact);

// get contact by id
router.get('/:id', getContactById);

// update contact by id
router.put('/:id', updateContactById);

// delete contact by id
router.delete('/:id', deleteContactById);

export default router;