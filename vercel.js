{
    "builds": [
        {
            "src": "./server.js",
            "use": "@vercel/node"
        }
    ],
        "rewrites": [
            {
                "source": "/(.*)",
                "destination": "/"
            }
        ]
}