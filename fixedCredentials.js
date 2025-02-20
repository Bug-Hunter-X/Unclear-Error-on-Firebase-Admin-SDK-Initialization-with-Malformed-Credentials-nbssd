The problem lies in the credentials JSON file used by `initializeApp()`.  A missing or incorrectly formatted field will result in an unclear error.  Always double-check your credentials JSON for any typos or missing fields such as `project_id`, `private_key`, `client_email`, etc.  Here's how to fix it:

**Incorrect (malformedCredentials.js):**
```javascript
const admin = require('firebase-admin');

const serviceAccount = require('./path/to/malformed-service-account-key.json'); //Missing 'project_id' for example

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
```

**Corrected (fixedCredentials.js):**
```javascript
const admin = require('firebase-admin');

const serviceAccount = require('./path/to/service-account-key.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
```
Ensure that `./path/to/service-account-key.json` is correctly configured with all required fields.  Refer to the Firebase Admin SDK documentation for the correct structure.