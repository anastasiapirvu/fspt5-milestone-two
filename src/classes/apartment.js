/*------------------
NOTE: Do not work on this class until
after you have completed the Building class!

You will be equally evaluated on the
quality of tests you write for this!

1. Create a file named `__apartment.js` and
add it to the `test` folder.
2. Create a class named Apartment. Export it,
and then import it into the test file.
3. Add the proper code so that your new class
extends the Building class. Test it!
4. Add one additional property (your choice) and test it.
5. Add one additional method (your choice) and test it.
------------------*/

const Building = require('./building');

class Apartment extends Building {}

module.exports = Apartment;
