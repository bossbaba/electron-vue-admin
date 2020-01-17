import Datastore from 'nedb'
import path from 'path'
import { remote } from 'electron'

// nedb本地数据库代替localStorage缓存机制

export default new Datastore({
  autoload: true,
  filename: path.join(remote.app.getPath('userData'), '/data.db')
})