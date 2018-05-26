const getAnswers = (req, res, next) => {
    res.send({
        "status" : "success",
        "data": "er"
    });
};

const handle = (app) => {
    app.get("/api/answers", getAnswers)
}

export default handle;