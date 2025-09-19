/**
 * This configuration file lets you run `$ sanity [command]` in this folder
 * Go to https://www.sanity.io/docs/cli to learn more.
 **/

import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: "woyj1v91",
    dataset: "production"
  },
  studioHost: 'sbmtraders',
  deployment: {
    appId: 'j7jw8kno7g10vcub2elmvfue',
    autoUpdates: true
  }
})
