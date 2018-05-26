const getAnswers = (req, res, next) => {
    res.send("answers");
};

const handle = (app) => {
    app.get("/api/answers", getAnswers)
}

export default handle;