import { Sidebar } from './classes/sidebar'
import { Site } from './classes/site'
import { model } from './model'
import './styles/main.css'

const site = new Site('#site')

const updateCallblack = newBlock => {
  model.push(newBlock)

  site.render(model)
}

new Sidebar('#panel', updateCallblack)

site.render(model)



