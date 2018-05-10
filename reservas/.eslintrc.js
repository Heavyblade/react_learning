module.exports = {
  "extends": "airbnb",
  "env": {
        "browser": true,
        "node": true,
  },
  "rules": {
          "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
          "jsx-a11y/anchor-is-valid": [ "error", {
          "components": [ "Link" ],
          "specialLink": [ "hrefLeft", "hrefRight" ],
          "aspects": [ "noHref", "invalidHref", "preferButton" ]
          }]
  }
};
