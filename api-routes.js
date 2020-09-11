// Initialize express router
let router = require('express').Router();
let contactController = require('./app/controller/contactController');
let employeeController = require('./app/controller/employeeController')

// Set default API response
router.get('/', (req, res) => {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!'
    });
});

// Contact routes
router.route('/contacts')
    .get(contactController.index)
    .post(contactController.new);
router.route('/contacts/:contact_id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete);

router.route('/employee')
    .get(employeeController.getAll)
    .post(employeeController.search)
    .post(employeeController.create);
router.route('/employee/:id')
    .patch(employeeController.update)
    .delete(employeeController.deleteOne)
    .get(employeeController.findOne);

// Export API routes
module.exports = router;