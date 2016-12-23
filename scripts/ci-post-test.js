'use strict'

const cp = require('child_process')
const path = require('path')
const ghPages = require('gh-pages')

if (process.env.CI_BRANCH === 'master') {
  cp.execSync('npm run semantic-release || true')
  cp.execSync('npm run docs')
  ghPages.publish(path.join(__dirname, '..', 'docs'), {
    repo: 'https://' + process.env.GH_TOKEN + '@github.com/Tripwire/octagon.git',
    silent: true
  }, () => console.log('docs-published!'))
} else {
  console.warn('not on master, skipping publish cycle')
}