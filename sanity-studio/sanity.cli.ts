import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '97kwgu13',
    dataset: 'production'
  },
  deployment: {
    autoUpdates: true
  }
})