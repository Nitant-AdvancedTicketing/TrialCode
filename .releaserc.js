module.exports = {
  branches: ["master"],
  plugins: [
    ["@semantic-release/commit-analyzer", {
      preset: "conventionalcommits",
      releaseRules: [
        // 🔹 Major release rules
        { type: "release", release: "major" },      // custom type "release"
        { breaking: true, release: "major" },       // any commit with BREAKING CHANGE or !
        
        // 🔹 Minor release rules
        { type: "feat", release: "minor" },
        
        // 🔹 Patch release rules
        { type: "fix", release: "patch" },
        { type: "style", release: "patch" },
        { type: "refactor", release: "patch" },
        
        // 🔹 No release rules
        { type: "chore", release: false },
        { type: "docs", release: false },
        { type: "test", release: false }
      ]
    }],
    "@semantic-release/release-notes-generator",
    ["@semantic-release/changelog", { changelogFile: "CHANGELOG.md" }],
    ["@semantic-release/git", {
      assets: ["CHANGELOG.md"],
      message: "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
    }],
    "@semantic-release/github"
  ]
}
