import { Button } from 'ant-design-vue'

import { App } from 'vue';

const compList = [ Button ]

export function registerComp (app: App ) {
  compList.forEach((comp: any) => {
    app.component(comp.name || comp.displayName, comp)
  })
}
