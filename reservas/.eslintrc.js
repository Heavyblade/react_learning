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
                                                  "specialLink": [ "hrefLeft", "hrefRight", "to" ],
                                                  "aspects": [ "noHref", "invalidHref", "preferButton" ]
          }],
          "jsx-a11y/label-has-for": [ 2, {
            "components": [ "Label" ],
            "required": {
                "every": [ "id" ]
            },
            "allowChildren": false
        }],
  }
};
