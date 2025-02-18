# Completion List
1. login flow of any user
2. account creation by admin
3. Personal loan application
4. Email service setup
5. DSA account creation
6. Updating table for status

# Todo
1. Forget Password


## Password structure

username first 3 letters + mobile no first 3 digits
ris123


## Generate password using salt in nodejs
"require('crypto');console.log(crypto.pbkdf2Sync('dsa123', 'a8373faa96373b324d339030deaf323a', 10, 16,'sha512').toString('hex'))"
