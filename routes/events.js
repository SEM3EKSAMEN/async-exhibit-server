const express = require("express");
const router = express.Router();
const eventsController = require("../controllers/eventsController");

router.get("/", eventsController.getEvents);
router.post("/", eventsController.createEvent);
router.post("/seed", eventsController.seedEvents);
router.get("/:id", eventsController.getEventById);
router.patch("/:id", eventsController.updateEvent);
router.delete("/:id", eventsController.deleteEvent);
router.put("/:id/book", eventsController.bookTickets);
router.post("/reset", eventsController.resetEvents);

module.exports = router;
