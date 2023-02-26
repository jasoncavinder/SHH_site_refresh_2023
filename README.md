# Welcome to SelfHelpHawaii.com - Site Refresh (2023) 👋

_Redesigning, modernizing, and Optimizing selfhelphawaii.com using hugo._

🏠 [Production Site - selfhelphawaii.com](http://selfhelphawaii.com)

✨ [Staging Site - jasoncavinder.github.io/SHH_site_refresh_2023/](https://jasoncavinder.github.io/SHH_site_refresh_2023)

## Todo

- [ ] ~~Create~~ Update README.md
- [ ] ~~Create~~ Update LICENSE.md
- [ ] Finish Building the new site
- [ ] Setup GitHub Pages for staging (preview) site
- [ ] Setup GitHub.dev for content updates by client
- [ ] Setup GitHub Actions for publishing to staging/production
- [ ] Relax... you're done!

## How to build

### Local builds - _Build and run locally_

Requirements:

- HUGO ([gohugo.io](https://gohugo.io/))
- GO ([go.dev](https://go.dev))
- git ([git-scm.com](https://git-scm.com))

```sh
cd /path/to/local/files
hugo server
```

### Staging builds - _Deploy to [Github Pages](https://jasoncavinder.github.io/SHH_site_refresh_2023/) for preview_

**Method 1** - from your computer

> NOTES - How I setup gh-pages branch
>
> ```sh
> git checkout --orphan gh-pages
> git reset --hard
> git commit --allow-empty -m 'Initialize GitHub Pages'
> git checkout main
> git worktree add public/staging gh-pages
> cd public/staging
> git push --set-upstream origin gh-pages
> ```
>
> This was adapted from [riivanov](https://gist.github.com/riivanov)'s [comment](<(<https://gist.github.com/cobyism/4730490?permalink_comment_id=4266141#gistcomment-4266141>)>) at [Deploying a subfolder to GitHub Pages](https://gist.github.com/cobyism/4730490)

```sh
hugo -e staging

# Workaround for '.git' deleted by --cleanDestinationDir
# See https://github.com/gohugoio/hugo/pull/6261
git worktree repair

cd public/staging
git add .
git commit -m 'v#.#.#'     # increment 3rd number
git push
```

**Method 2** - from GitHub.dev

- [ ] TODO - Setup GitHub action for HUGO build and deploy to gh-pages

### Production builds

_Deploy to [selfhelphawaii.com](http://selfhelphawaii.com)_

**Method 1** - from your computer

```sh
# Tentative. Not yet configured.
hugo -e production

# Workaround for '.git' deleted by --cleanDestinationDir
# See https://github.com/gohugoio/hugo/pull/6261
git worktree repair

cd public/production
git add .
git commit -m 'v#.#.#'     # increment 2nd/3rd num appropriately
git push
```

**Method 2** - from GitHub.dev

- [ ] TODO - Create GitHub Action for HUGO build and deploy to production site.

## Author

👤 **Jason Cavinder**

- Github: [@jasoncavinder](https://github.com/jasoncavinder)
- LinkedIn: [@jason-cavinder](https://linkedin.com/in/jason-cavinder)

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was initially generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
