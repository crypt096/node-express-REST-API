import {
  addNewContact,
  getContacts,
  getContactWithID,
  updateContact,
  deleteContact
} from '../controllers/controller'

const routes = (app) => {
  app.route('/contact')
    .get((req, res, next) => {
      // Middleware
      console.log(`Request from: ${req.originalUrl}`)
      console.log(`Request type: ${req.method}`)
      next();
    }, getContacts)

    // Post endpoiint
    .post(addNewContact)

  app.route('/contact/:contactID')
    // Get a specific contact
    .get(getContactWithID)

    // Updating a specific contact
    .put(updateContact)

    // Deleting a specific contact
    .delete(deleteContact)
}

export default routes