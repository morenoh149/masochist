---
tags: git lion os.x
cache_breaker: 1
---

```shell
$ cd path/to/local/clone/of/git.git
$ git fetch
$ git tag -v v1.7.10
$ git checkout v1.7.10
$ NO_GETTEXT=1 make prefix=/usr/local
$ sudo env NO_GETTEXT=1 make prefix=/usr/local install quick-install-man
```

**Note:** the `quick-install-man` target requires a copy of [the git-manpages repo](http://git.kernel.org/?p=git/git-manpages.git;a=summary) to be cloned, without an explicit `.git` extension, at the same level as the checkout of `git.git`. In order to get the latest man pages I had to manually fetch and checkout the latest `HEAD` of the git-manpages repo.