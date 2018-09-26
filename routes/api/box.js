const router = require("express").Router();
const controller = require("../../controllers/boxController");
require("dotenv").load();

// Auth related frameworks
const jwt = require("express-jwt");
const jwtAuthz = require("express-jwt-authz");
const jwksRsa = require("jwks-rsa");


const checkJwt = jwt({
    // Dynamically provide a signing key
    // based on the kid in the header and 
    // the signing keys provided by the JWKS endpoint.
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
    }),

    // Validate the audience and the issuer.
    audience: process.env.AUTH0_AUDIENCE,
    issuer: `https://${process.env.AUTH0_DOMAIN}/`,
    algorithms: ['RS256']
});

const checkAdmin = jwtAuthz(['scope:admin']);


// matches with /api/box
router
    .route("/");

router
    .route("/:ID", checkJwt)
    .get(controller.getFolder);

router
    .route("/create/:ID")
    .get(checkJwt, checkAdmin, controller.createFolder);

router
    .route("/upload/:ID")
    .post(checkJwt, controller.uploadFile)

router
    .route("/download/:ID")
    .get(checkJwt, controller.downloadFile);

router
    .route("/link/:ID")
    .get(checkJwt, controller.getLink);


module.exports = router;