
exports.getPost = (req, res) => {
    res.json(
        {
            posts:
                [
                    { 'title': "first post" },
                    { "title": "second post" },
                    { "title": "third post" },
                ],
            description: [
                { 'description': "first post description" },
                { 'description': "second post description" },
                { 'description': "third post description" }
            ]

        }
    );
}

// module.exports={getPost};