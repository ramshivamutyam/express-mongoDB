const register = async (req, res) => {
    try {
        let { username, email, password } = await req.body;
        if (!(email && password && username)) {
            res.status(403).send({ message: "All fields are required" });
        } else {
            const isExist = await User.findOne({ email: email });
            if (isExist) {
                res.status(409).send({ message: "User already exists" });
            } else {
                bcrypt.hash(password, 6, async (err, hash) => {
                    if (err) res.status(500).send({ message: err.message });
                    else {
                        const newUser = new User({
                            username: username,
                            email: email,
                            password: hash,
                        });
                        await newUser.save();
                        res.status(200).send({
                            message: "succfully created new user",
                        });
                    }
                });
            }
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = await req.body;
        if (!(email && password)) {
            res.status(403).send({ message: "All fields are required" });
        } else {
            const user = await User.findOne({ email: email });
            if (!user) {
                res.status(403).send({ message: "User does not exist" });
            } else {
                bcrypt.compare(password, user.password, (err, result) => {
                    if (err) res.status(500).send({ message: err.message });
                    if (result == true) {
                        res.status(200).send({
                            message: "loged in successfully",
                        });
                    } else
                        res.status(401).send({ message: "Invalid password" });
                });
            }
        }
    } catch (error) {
        res.status(404).send({ message: error.message });
    }
};

export default { register, login };
