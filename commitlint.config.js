module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2, "always",
      [
        "release",   // custom major type
        "feat",      // minor
        "fix",       // patch
        "style",     // patch
        "refactor",  // patch
        "chore",     // no release
        "docs",      // no release
        "test"       // no release
      ]
    ]
  }
};
