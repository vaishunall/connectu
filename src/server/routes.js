const express = require("express")
const router = express.Router()
const User = require("./models/User")
const Event = require("./models/Event")

module.exports = router

// Get all users
router.get("/users", async (req, res) => {
	const users = await User.find()
	res.send(users)
})

//GET user by ID
router.get("/users/:id", async (req, res) => {
	const users = await User.find({id: req.params.id})
	res.send(users)
})


//Post user 
router.post("/users", async (req, res) => {
	const user = new User({
		id: req.body.id,
		account_type: req.body.account_type,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        bio: req.body.bio,
        institution_name: req.body.institution_name,
        photoURL: req.body.photoURL,
        website: req.body.website
	})
	await user.save()
	res.send(user)
})

//Post an event
router.post("/events", async (req, res) => {
	const event = new Event({
		eventName: req.body.eventName,
		tags: req.body.tags,
        description: req.body.description,
        location: req.body.location,
        volunteers_interested: req.body.volunteers_interested
	})
	await event.save()
	res.send(event)
})

//get ALL events
router.get("/events", async (req, res) => {
	try {
		const events = await Event.find()
		res.send(events)
	} catch {
		res.status(404)
		res.send({ error: "Cannot load events" })
	}
})

//get events by tag
router.get("/events/:tag", async (req, res) => {
	try {
		const events = await Event.find({tags: req.params.tag})
		res.send(events)
	} catch {
		res.status(404)
		res.send({ error: "Event doesn't exist under this tag!" })
	}
})

//get event by coordinate
router.get("/events/:coordX/:coordY", async (req, res) => {
    console.log(req.params.coordX + " " + req.params.coordY);
	try {
		const events = await Event.find({'location.coordX': req.params.coordX, 'location.coordY': req.params.coordY})
		res.send(events)
	} catch {
		res.status(404)
		res.send({ error: "Cannot load events" })
	}
})

//put event - edit
router.put("/editevent/:name", async (req, res) => {
	try {
		const events = await Event.findOneAndUpdate(
            {"eventName": req.params.name},
            {$set: {
                eventName: req.body.eventName,
		        tags: req.body.tags,
                description: req.body.description,
                volunteers_interested: req.body.volunteers_interested
            }},
        
        )
		res.send(events)
	} catch {
		res.status(404)
		res.send({ error: "Cannot load events" })
	}
})



module.exports = router